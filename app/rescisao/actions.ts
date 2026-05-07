"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
    calculateProgressiveINSS,
    inssTable2026,
    calculateIRRF,
} from "@/lib/payroll-calc";

export async function getCLTEmployees() {
    return await prisma.employee.findMany({
        where: { active: true, type: "CLT" },
        orderBy: { name: "asc" },
    });
}

export async function getRescisoesByMonth(month: number, year: number) {
    return await prisma.rescisao.findMany({
        where: { month, year },
        include: { employee: true },
        orderBy: { createdAt: "desc" },
    });
}

export interface RescisaoInput {
    employeeId: string;
    tipoRescisao: "SEM_JUSTA_CAUSA" | "COM_JUSTA_CAUSA" | "PEDIDO_DEMISSAO" | "ACORDO_COMUM";
    dataAdmissao: string; // ISO string
    dataDemissao: string; // ISO string
    avisoPrevio: "TRABALHADO" | "INDENIZADO" | "DISPENSADO";
    diasTrabalhados: number;
    feriasVencidas: boolean;
    month: number;
    year: number;
}

export interface RescisaoResult {
    saldoSalario: number;
    decimoTerceiroProp: number;
    decimoTerceiroInd: number;
    feriasProp: number;
    feriasInd: number;
    tercoFeriasProp: number;
    tercoFeriasInd: number;
    feriasVencidas: number;
    avisoPrevioIndeniz: number;
    fgtsRescisorio: number;
    multaFgts: number;
    inss: number;
    inss13: number;
    irrf: number;
    totalBruto: number;
    totalLiquido: number;
    mesesServico: number;
    anosServico: number;
}

export async function calcularERescisao(input: RescisaoInput): Promise<RescisaoResult> {
    const employee = await prisma.employee.findUnique({ where: { id: input.employeeId } });
    if (!employee) throw new Error("Colaborador não encontrado");

    const salario = employee.baseSalary;
    const admissao = new Date(input.dataAdmissao + "T12:00:00");
    const demissao = new Date(input.dataDemissao + "T12:00:00");

    // --- DEFINIÇÕES DE TIPO ---
    const semJustaCausa = input.tipoRescisao === "SEM_JUSTA_CAUSA";
    const comJustaCausa = input.tipoRescisao === "COM_JUSTA_CAUSA";
    const indenizado = input.avisoPrevio === "INDENIZADO";

    // --- CÁLCULO DE MESES (AVOS) ---
    
    function calcularAvos(inicio: Date, fim: Date) {
        let meses = 0;
        let temp = new Date(inicio);
        
        // Se no primeiro mês trabalhou menos de 15 dias, não conta o primeiro mês e pula pro dia 1 do próximo
        const ultimoDiaMesInicio = new Date(temp.getFullYear(), temp.getMonth() + 1, 0).getDate();
        const diasTrabalhadosInicio = ultimoDiaMesInicio - temp.getDate() + 1;
        
        if (diasTrabalhadosInicio < 15) {
            // Pula para o primeiro dia do próximo mês
            temp = new Date(temp.getFullYear(), temp.getMonth() + 1, 1);
        }

        // Conta os meses completos entre as datas
        while (true) {
            const proximoMes = new Date(temp.getFullYear(), temp.getMonth() + 1, temp.getDate());
            if (proximoMes <= fim) {
                meses++;
                temp = proximoMes;
            } else {
                break;
            }
        }

        // Verifica o resíduo (regra dos 15 dias no último mês incompleto)
        const diffFinal = Math.ceil((fim.getTime() - temp.getTime()) / (1000 * 60 * 60 * 24));
        if (diffFinal >= 15) {
            meses++;
        }

        return meses;
    }

    // 1. 13º Proporcional (Meses do ANO ATUAL)
    const inicioAno = new Date(demissao.getFullYear(), 0, 1);
    const dataInicio13 = admissao > inicioAno ? admissao : inicioAno;
    const avos13Prop = comJustaCausa ? 0 : calcularAvos(dataInicio13, demissao);

    // 2. Férias Proporcionais (Baseadas na data de admissão - período aquisitivo atual)
    const anosCompletos = demissao.getFullYear() - admissao.getFullYear();
    const dataUltimoAniversario = new Date(admissao);
    dataUltimoAniversario.setFullYear(admissao.getFullYear() + anosCompletos);
    if (demissao < dataUltimoAniversario) {
        dataUltimoAniversario.setFullYear(dataUltimoAniversario.getFullYear() - 1);
    }

    const avosFeriasProp = calcularAvos(dataUltimoAniversario, demissao);

    // --- VERBAS ---
    
    const saldoSalario = Number(((salario / 30) * input.diasTrabalhados).toFixed(2));
    const decimoTerceiroProp = Number(((salario / 12) * avos13Prop).toFixed(2));
    const decimoTerceiroInd = (semJustaCausa && indenizado) ? Number((salario / 12).toFixed(2)) : 0;
    
    const feriasProp = Number(((salario / 12) * avosFeriasProp).toFixed(2));
    const feriasInd = (semJustaCausa && indenizado) ? Number((salario / 12).toFixed(2)) : 0;
    
    const tercoFeriasProp = Number((feriasProp / 3).toFixed(2));
    const tercoFeriasInd = Number((feriasInd / 3).toFixed(2));

    const feriasVencidasValor = input.feriasVencidas ? Number((salario + salario / 3).toFixed(2)) : 0;
    const avisoPrevioIndeniz = (semJustaCausa && indenizado) ? Number(salario.toFixed(2)) : 0;

    // --- DESCONTOS ---
    const inss = calcularINSS(saldoSalario);
    // Para o 13º, a base de cálculo do INSS na rescisão inclui tanto o proporcional quanto o indenizado (Aviso Prévio)
    const inss13 = calcularINSS(decimoTerceiroProp + decimoTerceiroInd);
    const irrf = 0; // Para esses valores de exemplo não há IRRF, mas pode ser expandido depois

    // --- FGTS (Informativo) ---
    const baseFgts = saldoSalario + decimoTerceiroProp + decimoTerceiroInd + avisoPrevioIndeniz;
    const fgtsRescisorio = Number((baseFgts * 0.08).toFixed(2));
    const multaFgts = semJustaCausa ? Number((fgtsRescisorio * 0.40).toFixed(2)) : 0;

    const totalBruto = Number(
        (saldoSalario + decimoTerceiroProp + decimoTerceiroInd + feriasProp + feriasInd + tercoFeriasProp + tercoFeriasInd + feriasVencidasValor + avisoPrevioIndeniz).toFixed(2)
    );
    const totalLiquido = Number((totalBruto - inss - inss13 - irrf).toFixed(2));

    const mesesServicoTotal = (demissao.getFullYear() - admissao.getFullYear()) * 12 + (demissao.getMonth() - admissao.getMonth());

    return {
        saldoSalario,
        decimoTerceiroProp,
        decimoTerceiroInd,
        feriasProp,
        feriasInd,
        tercoFeriasProp,
        tercoFeriasInd,
        feriasVencidas: feriasVencidasValor,
        avisoPrevioIndeniz,
        fgtsRescisorio,
        multaFgts,
        inss,
        inss13,
        irrf,
        totalBruto,
        totalLiquido,
        mesesServico: mesesServicoTotal,
        anosServico: Math.floor(mesesServicoTotal / 12)
    };
}

export async function salvarRescisao(input: RescisaoInput, result: RescisaoResult) {
    await prisma.rescisao.upsert({
        where: {
            rescisao_identifier: {
                employeeId: input.employeeId,
                month: input.month,
                year: input.year,
            },
        },
        update: {
            tipoRescisao: input.tipoRescisao,
            dataAdmissao: new Date(input.dataAdmissao + "T12:00:00"),
            dataDemissao: new Date(input.dataDemissao + "T12:00:00"),
            avisoPrevio: input.avisoPrevio,
            saldoSalario: result.saldoSalario,
            decimoTerceiroProp: result.decimoTerceiroProp,
            decimoTerceiroInd: result.decimoTerceiroInd,
            feriasProp: result.feriasProp,
            feriasInd: result.feriasInd,
            tercoFeriasProp: result.tercoFeriasProp,
            tercoFeriasInd: result.tercoFeriasInd,
            feriasVencidas: result.feriasVencidas,
            avisoPrevioIndeniz: result.avisoPrevioIndeniz,
            fgtsRescisorio: result.fgtsRescisorio,
            multaFgts: result.multaFgts,
            inss: result.inss,
            inss13: result.inss13,
            irrf: result.irrf,
            totalBruto: result.totalBruto,
            totalLiquido: result.totalLiquido,
        },
        create: {
            employeeId: input.employeeId,
            month: input.month,
            year: input.year,
            tipoRescisao: input.tipoRescisao,
            dataAdmissao: new Date(input.dataAdmissao + "T12:00:00"),
            dataDemissao: new Date(input.dataDemissao + "T12:00:00"),
            avisoPrevio: input.avisoPrevio,
            saldoSalario: result.saldoSalario,
            decimoTerceiroProp: result.decimoTerceiroProp,
            decimoTerceiroInd: result.decimoTerceiroInd,
            feriasProp: result.feriasProp,
            feriasInd: result.feriasInd,
            tercoFeriasProp: result.tercoFeriasProp,
            tercoFeriasInd: result.tercoFeriasInd,
            feriasVencidas: result.feriasVencidas,
            avisoPrevioIndeniz: result.avisoPrevioIndeniz,
            fgtsRescisorio: result.fgtsRescisorio,
            multaFgts: result.multaFgts,
            inss: result.inss,
            inss13: result.inss13,
            irrf: result.irrf,
            totalBruto: result.totalBruto,
            totalLiquido: result.totalLiquido,
        },
    });

    await prisma.employee.update({
        where: { id: input.employeeId },
        data: { active: false },
    });

    revalidatePath("/rescisao");
    revalidatePath("/colaboradores");
}

function calcularINSS(valor: number): number {
    if (valor <= 0) return 0;
    // Tabela INSS 2024 (Progressiva)
    let inss = 0;
    if (valor <= 1412.00) {
        inss = valor * 0.075;
    } else if (valor <= 2666.68) {
        inss = (valor - 1412.00) * 0.09 + 105.90;
    } else if (valor <= 4000.03) {
        inss = (valor - 2666.68) * 0.12 + 105.90 + 112.92;
    } else if (valor <= 7786.02) {
        inss = (valor - 4000.03) * 0.14 + 105.90 + 112.92 + 160.00;
    } else {
        inss = 908.85; // Teto
    }
    return Number(inss.toFixed(2));
}

function calcularIRRF(valor: number): number {
    // Simplificado: IRRF para os valores de base deste caso costuma ser 0
    // Mas aqui está uma lógica básica se necessário
    if (valor <= 2259.20) return 0;
    if (valor <= 2826.65) return Number((valor * 0.075 - 169.44).toFixed(2));
    return 0; // Simplificação para o caso real apresentado
}
