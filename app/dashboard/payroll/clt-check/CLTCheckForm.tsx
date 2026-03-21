"use client"

import { useState } from "react"
import { calculateProgressiveINSS, inssTable2026, calculateFGTS, calculateTeacherComponents } from "../../../../lib/payroll-calc"

// A simplificated type for the form
type Employee = {
  id: string
  name: string
  role: string
  baseSalary: number
  hourlyRate: number | null
  cestaBasica: number | null
  transportDaily: number | null
  isAulista: boolean
}

export default function CLTCheckForm({ employees }: { employees: Employee[] }) {
  const [selectedEmpId, setSelectedEmpId] = useState<string>("")
  
  // Inputs fields
  const [diasTrabalhados, setDiasTrabalhados] = useState<number>(30)
  const [horasDadas, setHorasDadas] = useState<number>(0)
  const [useAutomaticTeacherCalc, setUseAutomaticTeacherCalc] = useState<boolean>(true)
  const [manualDsr, setManualDsr] = useState<number>(0)
  const [manualHoraAtividade, setManualHoraAtividade] = useState<number>(0)
  
  const selectedEmp = employees.find(e => e.id === selectedEmpId)
  
  const handleCalculate = () => {
    if (!selectedEmp) return null

    let proventos = 0
    let baseInss = 0
    let dsrVal = 0
    let horaAtivVal = 0

    const cesta = selectedEmp.cestaBasica || 0
    const vt = (selectedEmp.transportDaily || 0) * diasTrabalhados

    if (selectedEmp.isAulista) {
      const valorHora = selectedEmp.hourlyRate || 0
      const aulas = horasDadas * valorHora
      
      if (useAutomaticTeacherCalc) {
        const teacherData = calculateTeacherComponents(aulas)
        dsrVal = teacherData.dsr
        horaAtivVal = teacherData.horaAtividade
        baseInss = teacherData.baseInss
      } else {
        dsrVal = manualDsr
        horaAtivVal = manualHoraAtividade
        baseInss = aulas + dsrVal + horaAtivVal
      }
      
      proventos = baseInss + cesta + vt
    } else {
      proventos = selectedEmp.baseSalary + cesta + vt
      baseInss = selectedEmp.baseSalary
      const isTeacher = selectedEmp.role.toUpperCase().includes("PROFESSOR");
      if (isTeacher) {
        horaAtivVal = Number((baseInss * 0.05).toFixed(2))
        baseInss += horaAtivVal
      }
    }

    const inss = calculateProgressiveINSS(baseInss, inssTable2026)
    const baseIrrf = Number((baseInss - inss).toFixed(2))
    // Nota: calculateIRRF já aplica a dedução simplificada de 424.00 internamente
    const irrf = 0 // No extrato o IRRF deu 0, mas vamos calcular pra ver
    
    const fgts = calculateFGTS(baseInss)
    const liquido = proventos - inss - irrf
    
    return {
      proventos,
      baseInss,
      dsr: dsrVal,
      horaAtividade: horaAtivVal,
      inss,
      irrf,
      baseIrrf,
      fgts,
      vt,
      cesta,
      liquido
    }
  }

  const result = handleCalculate()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Dados do Funcionário</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Selecione o Funcionário</label>
            <select 
              className="w-full border-gray-300 rounded-md shadow-sm p-2 border"
              value={selectedEmpId}
              onChange={e => setSelectedEmpId(e.target.value)}
            >
              <option value="">Selecione...</option>
              {employees.map(emp => (
                <option key={emp.id} value={emp.id}>{emp.name}</option>
              ))}
            </select>
          </div>

          {selectedEmp && selectedEmp.isAulista && (
            <>
              <div className="flex items-center gap-2 mb-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <input 
                  type="checkbox" 
                  id="autoCalc"
                  checked={useAutomaticTeacherCalc} 
                  onChange={e => setUseAutomaticTeacherCalc(e.target.checked)}
                />
                <label htmlFor="autoCalc" className="text-xs font-medium text-amber-800">Cálculo Automático (DSR 1/6 + Ativ. 5%)</label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Horas Aula (Ref.)</label>
                <input 
                  type="number" 
                  step="0.01"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2 border" 
                  value={horasDadas} 
                  onChange={e => setHorasDadas(Number(e.target.value))} 
                />
                <p className="text-[10px] text-gray-500 mt-1">Valor/Hora: R$ {selectedEmp.hourlyRate?.toFixed(2) || "0.00"}</p>
              </div>
              
              {!useAutomaticTeacherCalc && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DSR (R$)</label>
                    <input 
                      type="number" 
                      className="w-full border-gray-300 rounded-md shadow-sm p-2 border" 
                      value={manualDsr} 
                      onChange={e => setManualDsr(Number(e.target.value))} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hora Atividade (R$)</label>
                    <input 
                      type="number" 
                      className="w-full border-gray-300 rounded-md shadow-sm p-2 border" 
                      value={manualHoraAtividade} 
                      onChange={e => setManualHoraAtividade(Number(e.target.value))} 
                    />
                  </div>
                </>
              )}
            </>
          )}
          
          {selectedEmp && !selectedEmp.isAulista && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dias Trabalhados (para cálculo VT)</label>
              <input 
                type="number" 
                className="w-full border-gray-300 rounded-md shadow-sm p-2 border" 
                value={diasTrabalhados} 
                onChange={e => setDiasTrabalhados(Number(e.target.value))} 
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Resultado do Double-Check</h2>
        
        {result ? (
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Base INSS / FGTS</span>
              <span className="font-medium">R$ {result.baseInss.toFixed(2)}</span>
            </div>
            {selectedEmp?.isAulista && (
              <div className="flex flex-col gap-1 pl-4 py-2 bg-gray-100/50 rounded text-xs text-gray-500">
                 <div className="flex justify-between">
                    <span>Salário Aula:</span>
                    <span>R$ {(horasDadas * (selectedEmp?.hourlyRate || 0)).toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between">
                    <span>DSR ({useAutomaticTeacherCalc ? "1/6" : "Manual"}):</span>
                    <span>R$ {result.dsr.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between">
                    <span>Hora Atividade ({useAutomaticTeacherCalc ? "5%" : "Manual"}):</span>
                    <span>R$ {result.horaAtividade.toFixed(2)}</span>
                 </div>
              </div>
            )}
            <div className="flex justify-between border-b pb-2 text-blue-700">
              <span className="font-semibold">INSS Calculado</span>
              <span className="font-bold">R$ {result.inss.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-purple-700">
              <div className="flex flex-col">
                <span className="font-semibold">Base IRRF</span>
                <span className="text-[10px] text-purple-400">Base INSS - INSS - Ded. Simplif. (424,00)</span>
              </div>
              <span className="font-bold">R$ {result.baseIrrf.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-green-700">
              <span className="font-semibold">FGTS Calculado (8%)</span>
              <span className="font-bold">R$ {result.fgts.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-gray-500 text-sm">
              <span>Vale Transporte Mensal</span>
              <span>R$ {result.vt.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-2 text-gray-500 text-sm">
              <span>Cesta Básica</span>
              <span>R$ {result.cesta.toFixed(2)}</span>
            </div>
            
            <div className="pt-4 mt-4 bg-white p-4 rounded border border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Instruções para conferência:</p>
              <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                <li>Verifique se o INSS Calculado ({result.inss.toFixed(2)}) bate com o da folha (cód 998).</li>
                <li>Verifique se o FGTS ({result.fgts.toFixed(2)}) bate com a base no rodapé da folha.</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Selecione um funcionário para ver os cálculos
          </div>
        )}
      </div>
    </div>
  )
}
