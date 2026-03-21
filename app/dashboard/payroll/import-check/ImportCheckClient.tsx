"use client"

import { useState } from "react"
import Image from "next/image"
import { FileUp, CheckCircle2, FileText, AlertCircle, UserCheck, AlertTriangle, UserX, FileSearch, Search, ArrowRight, Download, Loader2 } from "lucide-react"

type Employee = {
  id: string
  name: string
  baseSalary: number
  hourlyRate: number | null
  cestaBasica: number | null
  transportDaily: number | null
  isAulista: boolean
}

type PdfData = {
  id: string
  name: string
  grossEarnings: number
  netTotal: number
  inssDeduction: number
  baseInss: number
  fgtsValue: number
  valeTransporte: number
  cestaBasica: number
  advanceDeduction: number
}

type Payroll = {
  id: string
  employeeId: string
  month: number
  year: number
  grossEarnings: number
  netTotal: number
  inssDeduction: number
  irrfDeduction: number
  fgtsValue: number
  transportTotal: number | null
  salaryAdvance: number | null
  hoursAulista: number | null
}

export default function ImportCheckClient({ 
  employees,
  payrolls 
}: { 
  employees: Employee[],
  payrolls: Payroll[]
}) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [generatingPdf, setGeneratingPdf] = useState(false)
  const [pdfData, setPdfData] = useState<{
    data: PdfData[],
    month: number,
    year: number
  } | null>(null)
  
  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    
    const formData = new FormData()
    formData.append("file", file)
    
    try {
      const res = await fetch("/api/upload-payroll-pdf", {
        method: "POST",
        body: formData
      })
      
      const json = await res.json()
      if (json.success) {
        setPdfData({
          data: json.data,
          month: json.month,
          year: json.year
        })
      } else {
        alert("Erro ao ler PDF: " + json.error)
      }
    } catch (e: any) {
      alert("Erro na requisição.")
    } finally {
      setLoading(false)
    }
  }

  const handleGeneratePDF = async () => {
    if (!pdfData || !report) return
    setGeneratingPdf(true)
    try {
      const payload = {
        report,
        month: pdfData.month,
        year: pdfData.year,
        approved,
        inconsistent,
        notFound,
      }
      const res = await fetch("/api/generate-payroll-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: "Erro desconhecido no servidor" }))
        throw new Error(errorData.error || "Falha na geração do PDF")
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `audit-folha-${pdfData.month}-${pdfData.year}.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (e: any) {
      alert("Erro ao gerar PDF: " + e.message)
    } finally {
      setGeneratingPdf(false)
    }
  }

  // Cross-reference data
  const report = (pdfData?.data || []).map(pdfItem => {
    const emp = employees.find(e => 
      e.name.toUpperCase().includes(pdfItem.name) || 
      pdfItem.name.includes(e.name.toUpperCase())
    )
    
    if (!emp) {
      return { pdfItem, emp: null, payroll: null, status: 'NOT_FOUND' as const, diffInss: 0, diffGross: 0, diffFgts: 0, diffVT: 0, diffCesta: 0, diffAdvance: 0 }
    }
    
    const payroll = payrolls.find(p => 
      p.employeeId === emp.id && 
      p.month === pdfData?.month && 
      p.year === pdfData?.year
    )

    if (!payroll) {
      return { pdfItem, emp, payroll: null, status: 'NO_PAYROLL_RECORD' as const, diffInss: 0, diffGross: 0, diffFgts: 0, diffVT: 0, diffCesta: 0, diffAdvance: 0 }
    }
    
    const diffGross = Math.abs(payroll.grossEarnings - pdfItem.baseInss)
    const diffInss = Math.abs(payroll.inssDeduction - pdfItem.inssDeduction)
    const diffFgts = Math.abs(payroll.fgtsValue - pdfItem.fgtsValue)
    const diffVT = Math.abs((payroll.transportTotal || 0) - pdfItem.valeTransporte)
    const diffCesta = Math.abs((emp.cestaBasica || 0) - pdfItem.cestaBasica)
    const diffAdvance = Math.abs((payroll.salaryAdvance || 0) - pdfItem.advanceDeduction)
    
    // Usar margem de erro de 1 real conforme solicitado
    const isApproved = diffGross <= 1 && diffInss <= 1 && diffFgts <= 1 && diffVT <= 1 && diffCesta <= 1 && diffAdvance <= 1
    
    return {
      pdfItem,
      emp,
      payroll,
      status: isApproved ? 'APPROVED' : 'INCONSISTENT' as const,
      diffInss,
      diffGross,
      diffFgts,
      diffVT,
      diffCesta,
      diffAdvance
    }
  })

  const approved = report.filter(r => r.status === 'APPROVED')
  const inconsistent = report.filter(r => r.status === 'INCONSISTENT')
  const notFound = report.filter(r => r.status === 'NOT_FOUND' || r.status === 'NO_PAYROLL_RECORD')

  const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-6xl mx-auto pb-20">
      
      {/* Header Corporativo (Somente Impressão) */}
      <div className="hidden print:flex flex-row items-center justify-between border-b-4 border-wine-900 pb-8 mb-12 w-full">
        <div className="flex items-center gap-6">
          <div className="w-32 h-32 bg-white rounded-3xl p-4 border border-wine-100 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="Logo Colégio"
              width={120}
              height={120}
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-4xl font-display font-black text-wine-950 uppercase tracking-tighter italic">Relatório de Audit de Folha</h1>
            <p className="text-xl font-bold text-wine-600">Colégio Frei Galvão · Unidade Administrativa</p>
            <div className="flex gap-4 pt-2">
              <span className="bg-wine-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{monthNames[pdfData?.month || 0]} / {pdfData?.year}</span>
              <span className="text-wine-400 text-xs font-bold uppercase border border-wine-100 px-4 py-1 rounded-full">Gerado em {new Date().toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Header - Hidden on Print */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 print:hidden">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-wine-900 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-wine-900/20 ring-4 ring-wine-50">
            <FileSearch className="w-7 h-7" />
          </div>
          <div className="space-y-0.5">
            <h1 className="text-3xl font-display font-black text-wine-950 tracking-tighter italic">
              Conferência CLT
            </h1>
            <p className="text-sm text-wine-600/60 font-medium"> Cruzamento automático de dados contábeis </p>
          </div>
        </div>
      </div>

      {/* Main Container - Hidden on Print */}
      <div className="bg-white p-1 md:p-10 rounded-[3rem] shadow-premium border border-wine-100 flex flex-col lg:flex-row items-stretch gap-10 print:hidden transition-all">
        <div className="flex-1 space-y-8 p-6 md:p-0">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-wine-50 px-4 py-1.5 rounded-full border border-wine-100/50">
              <span className="w-1.5 h-1.5 bg-wine-600 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-wine-800 uppercase tracking-widest italic">Ação Necessária</span>
            </div>
            <h2 className="text-4xl font-display font-black text-wine-950 leading-[0.9] tracking-tight">
              Sincronize o Extrato Mensal.
            </h2>
            <p className="text-wine-600/80 text-lg font-medium leading-relaxed max-w-md">
              Arraste o arquivo PDF gerado pela contabilidade para validar as rubricas de todos os colaboradores.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={handleUpload}
              disabled={!file || loading}
              className={`group relative overflow-hidden py-5 px-10 rounded-[1.5rem] font-display font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl ${
                file && !loading
                ? "bg-wine-900 text-white hover:bg-wine-950 hover:-translate-y-1 hover:shadow-wine-900/30 active:scale-[0.98]"
                : "bg-wine-50 text-wine-200 cursor-not-allowed border border-wine-100/50 shadow-none"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Extraindo Dados...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Validar Folha</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="lg:w-[45%] group flex flex-col h-full relative p-6 md:p-0">
          <label className={`relative flex flex-col items-center justify-center w-full h-[320px] rounded-[3rem] transition-all cursor-pointer duration-500 group overflow-hidden ${
            file 
            ? "bg-emerald-50 border-2 border-emerald-500 ring-4 ring-emerald-50/50" 
            : "bg-wine-50/30 border-2 border-dashed border-wine-200 hover:border-wine-500 hover:bg-wine-50"
          }`}>
            <div className="flex flex-col items-center justify-center text-center px-10 relative z-10">
              {file ? (
                <div className="space-y-4 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-xl border border-emerald-100 mx-auto">
                    <FileText className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-display font-black text-emerald-950 truncate max-w-[240px]">
                      {file.name}
                    </p>
                    <div className="bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
                      Arquivo Validado
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-wine-200 shadow-lg border border-wine-50 mb-4 transition-all duration-500 group-hover:text-wine-600 group-hover:rotate-6 group-hover:scale-110">
                    <FileUp className="w-8 h-8" />
                  </div>
                  <p className="text-lg font-display font-black text-wine-900 leading-tight">Arraste o PDF aqui</p>
                </>
              )}
            </div>
            <input 
              id="pdf-upload"
              type="file" 
              accept="application/pdf"
              className="hidden" 
              onChange={e => setFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>
      </div>

      {pdfData && (
        <div className="space-y-12 animate-in slide-in-from-bottom-10 fade-in duration-700 print:space-y-8">
          
          <div className="bg-wine-900 p-1 rounded-[2.5rem] flex items-center shadow-2xl relative">
            <div className="flex-1 bg-white/5 backdrop-blur-md rounded-[2.2rem] p-6 flex flex-col md:flex-row items-center justify-between text-white">
              <div className="flex items-center gap-6 pl-4">
                <div className="w-14 h-14 bg-wine-800 rounded-2xl flex items-center justify-center text-wine-200 border border-wine-700 italic font-black text-xl">
                  {pdfData.month}
                </div>
                <div>
                  <h3 className="text-xl font-display font-black tracking-tight uppercase italic pb-1 border-b border-white/10 mb-1">
                    {monthNames[pdfData.month]} / {pdfData.year}
                  </h3>
                  <p className="text-[10px] font-bold text-wine-400 uppercase tracking-widest leading-none">
                    {pdfData.data.length} Colaboradores Extraídos
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <div className="flex gap-10">
                  {[
                    { label: 'Aprovados', val: approved.length, color: 'text-emerald-400' },
                    { label: 'Erros', val: inconsistent.length, color: 'text-rose-400' }
                  ].map((stat, sidx) => (
                    <div key={sidx} className="text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-0.5">{stat.label}</p>
                      <p className={`text-3xl font-display font-black ${stat.color}`}>{stat.val}</p>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={handleGeneratePDF}
                  disabled={generatingPdf}
                  className="bg-white text-wine-950 hover:bg-wine-50 disabled:opacity-60 disabled:cursor-wait px-6 py-4 rounded-2xl transition-all flex items-center justify-center gap-2.5 group shadow-lg font-bold text-sm"
                >
                  {generatingPdf ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="hidden sm:inline uppercase tracking-widest">Gerando PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="hidden sm:inline uppercase tracking-widest">Baixar Relatório PDF</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Audit Results Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* DIVERGENCES SECTION */}
            <div className="lg:col-span-8 space-y-6">
              <div className="px-5 py-3 bg-wine-50 rounded-2xl inline-flex items-center gap-4">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <h2 className="text-xl font-display font-black text-wine-950 uppercase tracking-wider italic">
                  Divergências Prioritárias
                </h2>
                <div className="bg-white text-rose-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm border border-rose-100">
                  Ação Necessária: {inconsistent.length}
                </div>
              </div>

              {inconsistent.length === 0 && (
                <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <p className="font-display font-black text-emerald-950 text-xl">Integridade 100% Confirmada</p>
                  <p className="text-emerald-700/60 max-w-sm">Não foram encontradas divergências entre o PDF e o banco de dados.</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-20 print:grid-cols-1 print:gap-10 print:pb-10">
                {inconsistent.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-premium border border-wine-50 transition-all hover:scale-[1.01] overflow-hidden relative group print:p-8 print:rounded-3xl print:border-wine-900 print:border-4 print:shadow-none print:break-inside-avoid print:bg-white print:visible">
                    <div className="space-y-1 pb-6 border-b border-wine-50 relative z-10 print:border-wine-800">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-display font-black text-wine-950 leading-tight print:text-3xl">{item.pdfItem.name}</h3>
                        <span className="hidden print:inline-block font-black text-sm uppercase bg-wine-950 text-white px-4 py-2 rounded-lg">CONFERIR DADOS</span>
                      </div>
                      <div className="flex items-center gap-2 text-rose-600 print:text-wine-900">
                        <AlertTriangle className="w-4 h-4 print:hidden" />
                        <p className="text-xs font-black uppercase tracking-[0.1em] print:text-sm">
                          {item.diffGross > 1 ? "⚠️ BASE INSS DIVERGENTE" : "⚠️ DIFERENÇA EM BENEFÍCIOS"}
                        </p>
                      </div>
                    </div>

                    <div className="py-8 grid grid-cols-2 gap-8 relative z-10 print:py-6">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <p className="text-[10px] text-wine-400 font-bold uppercase tracking-widest print:text-wine-600 print:font-black">Sistema CFG (App)</p>
                          <div className="space-y-4 pt-1">
                            <div className="space-y-0.5">
                              <p className="text-xs text-wine-300 font-bold uppercase tracking-widest">Base INSS</p>
                              <p className="text-2xl font-display font-black text-wine-950">R$ {item.payroll?.grossEarnings.toFixed(2)}</p>
                            </div>
                            <div className="space-y-0.5">
                              <p className="text-xs text-wine-300 font-bold uppercase tracking-widest">Desc. INSS</p>
                              <p className="text-2xl font-display font-black text-wine-950">R$ {item.payroll?.inssDeduction.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 text-right">
                        <div className="space-y-1">
                          <p className="text-[10px] text-rose-400 font-bold uppercase tracking-widest print:text-rose-800 print:font-black">Extrato Contábil (PDF)</p>
                          <div className="space-y-4 pt-1">
                            <div className="space-y-0.5">
                              <p className="text-xs text-rose-300 font-bold uppercase tracking-widest">Base INSS</p>
                              <p className="text-2xl font-display font-black text-rose-600 underline decoration-rose-200 decoration-4 underline-offset-4">R$ {item.pdfItem.baseInss.toFixed(2)}</p>
                            </div>
                            <div className="space-y-0.5">
                              <p className="text-xs text-rose-300 font-bold uppercase tracking-widest">Desc. INSS</p>
                              <p className="text-2xl font-display font-black text-rose-600 underline decoration-rose-200 decoration-4 underline-offset-4">R$ {item.pdfItem.inssDeduction.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefícios Detail - Dark high contrast print layout */}
                    <div className="bg-wine-50 p-6 rounded-[2rem] space-y-4 relative z-10 print:bg-white print:border-2 print:border-wine-800 print:rounded-2xl">
                      {[
                        { l: 'Vale Transporte', a: item.payroll?.transportTotal ?? 0, d: item.pdfItem.valeTransporte },
                        { l: 'Cesta Básica', a: item.emp?.cestaBasica ?? 0, d: item.pdfItem.cestaBasica },
                        { l: 'Adiantamento', a: item.payroll?.salaryAdvance ?? 0, d: item.pdfItem.advanceDeduction }
                      ].map((b, i) => (
                        <div key={i} className="flex flex-col gap-2 print:border-b print:border-wine-100 last:border-0 pb-2">
                          <div className="flex justify-between items-center text-[10px] font-black text-wine-700 uppercase tracking-widest print:text-wine-900 print:text-xs">
                            {b.l}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                              <span className="text-[9px] text-wine-400 font-bold uppercase print:text-wine-600">No Sistema</span>
                              <span className="text-sm font-display font-black text-wine-950">R$ {b.a.toFixed(2)}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-wine-200 print:text-wine-400" />
                            <div className="flex flex-col text-right">
                              <span className="text-[9px] text-wine-400 font-bold uppercase print:text-wine-600">No PDF</span>
                              <span className={`text-sm font-display font-black italic ${Math.abs(b.a - b.d) > 1 ? 'text-rose-600 ring-2 ring-rose-50 px-2 rounded-md' : 'text-emerald-600 opacity-60'} print:ring-0 print:underline`}>
                                R$ {b.d.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approved / Success Sidebar */}
            <div className="lg:col-span-4 space-y-10 print:w-full">
              
              <div className="space-y-6 print:break-before-page">
                <div className="px-5 py-3 bg-emerald-50 rounded-2xl inline-flex items-center gap-4 print:bg-transparent print:p-0 print:mb-4 print:border-b-2 print:border-black print:w-full print:rounded-none">
                  <UserCheck className="w-5 h-5 text-emerald-600 print:hidden" />
                  <h2 className="text-xl font-display font-black text-wine-950 uppercase tracking-wider print:text-2xl">Aprovados (OK)</h2>
                </div>
                
                <div className="bg-white p-6 rounded-[2.5rem] shadow-premium border border-emerald-100 max-h-[600px] overflow-y-auto custom-scrollbar space-y-3 print:max-h-none print:grid print:grid-cols-2 print:gap-4 print:p-0 print:border-none print:shadow-none">
                   {approved.map((item, idx) => (
                     <div key={idx} className="p-4 bg-emerald-50/20 rounded-2xl flex items-center justify-between border border-emerald-50 group hover:bg-white hover:shadow-lg transition-all print:border-wine-100 print:bg-white print:p-3">
                       <span className="text-sm font-bold text-wine-950 truncate pr-4 print:text-xs">{item.pdfItem.name}</span>
                       <div className="w-7 h-7 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 print:hidden">
                         <CheckCircle2 className="w-4 h-4" />
                       </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Alerts / Not Found Section */}
              {notFound.length > 0 && (
                <div className="space-y-6">
                  <div className="px-5 py-3 bg-wine-50 rounded-2xl inline-flex items-center gap-4 print:bg-transparent print:p-0 print:mb-4 print:border-b-2 print:border-black print:w-full print:rounded-none">
                    <UserX className="w-5 h-5 text-wine-300 print:hidden" />
                    <h2 className="text-xl font-display font-black text-wine-950 uppercase tracking-wider print:text-2xl">Alertas de Cadastro</h2>
                  </div>
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-premium border border-wine-50 space-y-3 print:p-0 print:border-none print:shadow-none">
                     {notFound.map((item, idx) => (
                       <div key={idx} className="p-5 bg-wine-50/20 rounded-2xl border border-wine-50/50 flex justify-between items-center transition-all hover:bg-white hover:shadow-lg print:border-wine-50 print:bg-white print:p-3">
                         <div className="flex flex-col">
                           <span className="text-sm font-black text-wine-950 print:text-xs">{item.pdfItem.name}</span>
                           <span className="text-[9px] font-black text-wine-400 uppercase tracking-widest mt-1">{item.status === 'NOT_FOUND' ? "Sem Cadastro no App" : "Sem Folha neste Mês"}</span>
                         </div>
                         <div className="w-8 h-8 rounded-full border border-wine-100 flex items-center justify-center text-wine-200 print:hidden">
                           <AlertCircle className="w-4 h-4" />
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      )}
    </div>
  )
}
