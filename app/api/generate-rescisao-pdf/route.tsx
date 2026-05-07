import { NextRequest, NextResponse } from "next/server"
import { renderToBuffer, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"
import path from "path"
import fs from "fs"

export const dynamic = 'force-dynamic'

const logoBuffer = fs.readFileSync(path.join(process.cwd(), "public", "logo.jpg"))

const WINE = "#4a0e1a"
const WINE_LIGHT = "#7a1e30"
const EMERALD = "#059669"
const GRAY = "#374151"
const GRAY_LIGHT = "#9ca3af"
const GRAY_BG = "#f9fafb"
const BORDER = "#e5e7eb"
const ROSE = "#be123c"

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", backgroundColor: "#ffffff", padding: 0 },
  header: { backgroundColor: WINE, padding: 15, flexDirection: "row", alignItems: "center", gap: 12 },
  headerLogoBox: { width: 50, height: 50, backgroundColor: "#ffffff", borderRadius: 8, padding: 4, alignItems: "center", justifyContent: "center" },
  headerContent: { flex: 1 },
  headerTitle: { fontSize: 18, fontWeight: 900, color: "#ffffff", letterSpacing: -0.5 },
  headerSubtitle: { fontSize: 8, color: "#d9a0b0", marginTop: 2, letterSpacing: 1, textTransform: "uppercase" },
  headerBadge: { backgroundColor: WINE_LIGHT, borderRadius: 15, paddingHorizontal: 10, paddingVertical: 4, marginTop: 6, alignSelf: "flex-start" },
  headerBadgeText: { fontSize: 8, fontWeight: 700, color: "#fde8ef", letterSpacing: 0.5 },
  body: { padding: 15, gap: 10 },
  section: { marginBottom: 0 },
  sectionTitle: { fontSize: 8, fontWeight: 900, color: WINE, letterSpacing: 1, textTransform: "uppercase", borderBottomWidth: 1, borderBottomColor: WINE, paddingBottom: 2, marginBottom: 4 },
  infoGrid: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginBottom: 0 },
  infoItem: { backgroundColor: GRAY_BG, borderWidth: 1, borderColor: BORDER, borderRadius: 6, padding: 6, flex: 1, minWidth: "30%" },
  infoLabel: { fontSize: 6, fontWeight: 700, color: GRAY_LIGHT, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 },
  infoValue: { fontSize: 9, fontWeight: 700, color: GRAY },
  verbasTable: { borderWidth: 1, borderColor: BORDER, borderRadius: 8, overflow: "hidden" },
  verbasRow: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: BORDER },
  verbasLabel: { fontSize: 8, color: GRAY },
  verbasValue: { fontSize: 8, fontWeight: 700, color: GRAY },
  descontosRow: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: BORDER, backgroundColor: "#fff1f2" },
  descontosLabel: { fontSize: 8, color: ROSE },
  descontosValue: { fontSize: 8, fontWeight: 700, color: ROSE },
  totalRow: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 10, backgroundColor: WINE },
  totalLabel: { fontSize: 9, fontWeight: 900, color: "#ffffff" },
  totalValue: { fontSize: 12, fontWeight: 900, color: "#34d399" },
  brutoRow: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#f3f0f1" },
  brutoLabel: { fontSize: 7, fontWeight: 700, color: GRAY_LIGHT },
  brutoValue: { fontSize: 8, fontWeight: 700, color: GRAY },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: GRAY_BG, borderTopWidth: 1, borderTopColor: BORDER, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 6 },
  footerText: { fontSize: 5, color: GRAY_LIGHT },
  footerBold: { fontWeight: 700, color: GRAY },
  signatureRow: { flexDirection: "row", gap: 30, marginTop: 10 },
  signatureLine: { flex: 1, borderTopWidth: 1, borderTopColor: BORDER, paddingTop: 4 },
  signatureLabel: { fontSize: 6, color: GRAY_LIGHT, textAlign: "center" },
})

const BRL = (v: number) => `R$ ${v.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
const DATE = (s: string | Date) => {
  if (!s) return "-"
  try {
    const d = typeof s === "string" ? new Date(s.includes("T") ? s : s + "T12:00:00") : s
    const day = String(d.getDate()).padStart(2, "0")
    const month = String(d.getMonth() + 1).padStart(2, "0")
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  } catch (e) {
    return "-"
  }
}
const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const tipoLabel: Record<string, string> = {
  SEM_JUSTA_CAUSA: "Demissão Sem Justa Causa",
  COM_JUSTA_CAUSA: "Demissão Com Justa Causa",
  PEDIDO_DEMISSAO: "Pedido de Demissão",
  ACORDO_COMUM: "Acordo Comum (Art. 484-A CLT)",
}

const avisoLabel: Record<string, string> = {
  TRABALHADO: "Aviso Prévio Trabalhado",
  INDENIZADO: "Aviso Prévio Indenizado",
  DISPENSADO: "Aviso Prévio Dispensado",
}

function RescisaoPDF({ data }: { data: any }) {
  const { employee, form, result, month, year } = data

  const verbas = [
    { label: "Saldo de Salário", value: result.saldoSalario },
    { label: "13º Salário Proporcional", value: result.decimoTerceiroProp },
    { label: "13º s/ Aviso Indenizado", value: result.decimoTerceiroInd },
    { label: "Férias Proporcionais", value: result.feriasProp },
    { label: "Férias s/ Aviso Indenizado", value: result.feriasInd },
    { label: "1/3 sobre Férias Prop.", value: result.tercoFeriasProp },
    { label: "1/3 sobre Férias Inden.", value: result.tercoFeriasInd },
    { label: "Férias Vencidas (+ 1/3)", value: result.feriasVencidas },
    { label: "Aviso Prévio Indenizado", value: result.avisoPrevioIndeniz },
    { label: "FGTS — Base Rescisória (8%)", value: result.fgtsRescisorio },
    { label: "Multa FGTS (40%) — Depósito Vinculado", value: result.multaFgts },
  ].filter(v => v.value > 0)

  const descontos = [
    { label: "INSS Rescisão", value: result.inss },
    { label: "INSS 13º Rescisão", value: result.inss13 },
    { label: "IRRF", value: result.irrf },
  ].filter(d => d.value > 0)

  return (
    <Document title={`Rescisão — ${employee.name}`} author="Colégio Frei Galvão">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLogoBox}>
            <Image src={logoBuffer} style={{ width: 42, height: 42 }} />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Termo de Rescisão de Contrato</Text>
            <Text style={styles.headerSubtitle}>Colégio Frei Galvão · Departamento de RH</Text>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>
                {tipoLabel[form.tipoRescisao]} · {monthNames[month]} {year} · Emitido em {new Date().toLocaleDateString("pt-BR")}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {/* Dados do Colaborador */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dados do Colaborador</Text>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Nome</Text>
                <Text style={styles.infoValue}>{employee.name}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>CPF</Text>
                <Text style={styles.infoValue}>{employee.cpf}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Salário Base</Text>
                <Text style={styles.infoValue}>{BRL(employee.baseSalary)}</Text>
              </View>
            </View>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Data de Admissão</Text>
                <Text style={styles.infoValue}>{DATE(form.dataAdmissao)}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Data de Demissão</Text>
                <Text style={styles.infoValue}>{DATE(form.dataDemissao)}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Tempo de Serviço</Text>
                <Text style={styles.infoValue}>{result.anosServico}a {result.mesesServico % 12}m</Text>
              </View>
            </View>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Tipo de Rescisão</Text>
                <Text style={styles.infoValue}>{tipoLabel[form.tipoRescisao]}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Aviso Prévio</Text>
                <Text style={styles.infoValue}>{avisoLabel[form.avisoPrevio]}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Dias Trabalhados</Text>
                <Text style={styles.infoValue}>{form.diasTrabalhados} dias</Text>
              </View>
            </View>
          </View>

          {/* Verbas Rescisórias */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Verbas Rescisórias</Text>
            <View style={styles.verbasTable}>
              {verbas.map((v, i) => (
                <View key={i} style={styles.verbasRow}>
                  <Text style={styles.verbasLabel}>{v.label}</Text>
                  <Text style={styles.verbasValue}>{BRL(v.value)}</Text>
                </View>
              ))}
              {descontos.map((d, i) => (
                <View key={i} style={styles.descontosRow}>
                  <Text style={styles.descontosLabel}>(-) {d.label}</Text>
                  <Text style={styles.descontosValue}>- {BRL(d.value)}</Text>
                </View>
              ))}
              <View style={styles.brutoRow}>
                <Text style={styles.brutoLabel}>Total Bruto</Text>
                <Text style={styles.brutoValue}>{BRL(result.totalBruto)}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total Líquido a Receber</Text>
                <Text style={styles.totalValue}>{BRL(result.totalLiquido)}</Text>
              </View>
            </View>
          </View>

          {/* Assinaturas */}
          <View style={styles.signatureRow} wrap={false}>
            <View style={styles.signatureLine}>
              <Text style={styles.signatureLabel}>Empregado · {employee.name}</Text>
            </View>
            <View style={styles.signatureLine}>
              <Text style={styles.signatureLabel}>Responsável · Colégio Frei Galvão</Text>
            </View>
            <View style={styles.signatureLine}>
              <Text style={styles.signatureLabel}>Testemunha</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            <Text style={styles.footerBold}>Colégio Frei Galvão</Text> · Documento Confidencial
          </Text>
          <Text style={styles.footerText}>
            Rescisão · {monthNames[month]} {year} · CFG © {new Date().getFullYear()}
          </Text>
        </View>
      </Page>
    </Document>
  )
}

import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 })

    const rescisao = await prisma.rescisao.findUnique({
      where: { id },
      include: { employee: true },
    })

    if (!rescisao) return NextResponse.json({ error: "Rescisão não encontrada" }, { status: 404 })

    const data = {
      employee: rescisao.employee,
      form: {
        tipoRescisao: rescisao.tipoRescisao,
        dataAdmissao: rescisao.dataAdmissao,
        dataDemissao: rescisao.dataDemissao,
        avisoPrevio: rescisao.avisoPrevio,
        diasTrabalhados: 30, // Fallback se não salvo
      },
      result: {
        ...rescisao,
        anosServico: Math.floor(((new Date(rescisao.dataDemissao).getTime() - new Date(rescisao.dataAdmissao).getTime()) / (1000 * 60 * 60 * 24 * 365.25))),
        mesesServico: Math.floor(((new Date(rescisao.dataDemissao).getTime() - new Date(rescisao.dataAdmissao).getTime()) / (1000 * 60 * 60 * 24 * 30.44))),
      },
      month: rescisao.month,
      year: rescisao.year,
    }

    const pdfBuffer = await renderToBuffer(<RescisaoPDF data={data} />)
    return new NextResponse(pdfBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="rescisao-${rescisao.employee.name.replace(/\s+/g, "-").toLowerCase()}.pdf"`,
      },
    })
  } catch (err: any) {
    console.error("PDF rescisão error:", err)
    return NextResponse.json({ error: err.message || "Erro na geração do PDF" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const pdfBuffer = await renderToBuffer(<RescisaoPDF data={data} />)
    return new NextResponse(pdfBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="rescisao-${data.employee.name.replace(/\s+/g, "-").toLowerCase()}.pdf"`,
      },
    })
  } catch (err: any) {
    console.error("PDF rescisão error:", err)
    return NextResponse.json({ error: err.message || "Erro na geração do PDF" }, { status: 500 })
  }
}
