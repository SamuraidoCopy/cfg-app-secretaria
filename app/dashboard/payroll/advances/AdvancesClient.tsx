"use client"

import { useState, useEffect } from "react"
import { Banknote, CheckCircle2, Clock, Plus, RefreshCw, AlertCircle, QrCode, Trash2 } from "lucide-react"
import PixModal from "../../../folha/PixModal"
import MonthPicker from "../../../components/MonthPicker"

type Advance = {
  id: string
  amount: number
  status: "PENDING" | "PAID"
  paidAt: string | null
  employee: any // Including full employee object for PixModal
}

export default function AdvancesClient({ initialAdvances, month, year }: {
  initialAdvances: Advance[]
  month: number
  year: number
}) {
  const [advances, setAdvances] = useState<Advance[]>(initialAdvances)
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  
  // Modal state
  const [selectedAdvance, setSelectedAdvance] = useState<Advance | null>(null)

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 4000)
  }

  const fetchAdvances = async (m: number, y: number) => {
    const res = await fetch(`/api/payroll-advances/generate?month=${m}&year=${y}`)
    const json = await res.json()
    setAdvances(json.advances || [])
  }

  const handleGenerate = async () => {
    setGenerating(true)
    try {
      const res = await fetch('/api/payroll-advances/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ month, year })
      })
      const json = await res.json()
      if (json.success) {
        showMessage("success", `${json.created} adiantamento(s) gerado(s) para ${month}/${year}.`)
        await fetchAdvances(month, year)
      } else {
        showMessage("error", json.error || json.message || "Erro ao gerar adiantamentos.")
      }
    } catch {
      showMessage("error", "Erro na requisição.")
    } finally {
      setGenerating(false)
    }
  }

  const handleMarkPaid = async (id: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/payroll-advances/${id}`, { method: 'PATCH' })
      const json = await res.json()
      if (json.success) {
        showMessage("success", "Adiantamento marcado como pago!")
        setAdvances(prev => prev.map(a => a.id === id ? { ...a, status: "PAID", paidAt: new Date().toISOString() } : a))
        setSelectedAdvance(null)
      } else {
        showMessage("error", json.error)
      }
    } catch {
      showMessage("error", "Erro ao atualizar.")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este adiantamento?")) return
    setLoading(true)
    try {
      const res = await fetch(`/api/payroll-advances/${id}`, { method: 'DELETE' })
      const json = await res.json()
      if (json.success) {
        showMessage("success", "Adiantamento excluído com sucesso.")
        setAdvances(prev => prev.filter(a => a.id !== id))
      } else {
        showMessage("error", json.error)
      }
    } catch {
      showMessage("error", "Erro ao excluir.")
    } finally {
      setLoading(false)
    }
  }

  const currency = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
  const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  const pending = advances.filter(a => a.status === "PENDING")
  const paid = advances.filter(a => a.status === "PAID")
  const totalPending = pending.reduce((acc, a) => acc + a.amount, 0)
  const totalPaid = paid.reduce((acc, a) => acc + a.amount, 0)

  return (
    <div className="space-y-8">
      {/* Pix Modal Integration */}
      {selectedAdvance && (
        <PixModal
          isOpen={!!selectedAdvance}
          onClose={() => setSelectedAdvance(null)}
          employee={selectedAdvance.employee}
          amount={selectedAdvance.amount}
          onConfirmPayment={() => handleMarkPaid(selectedAdvance.id)}
        />
      )}

      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-wine-950">Adiantamentos Salariais</h1>
            <p className="text-wine-600/70 mt-1 text-sm">Pagamento previsto todo dia <strong>20</strong></p>
          </div>
          <MonthPicker currentMonth={month} currentYear={year} />
        </div>
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="flex items-center gap-2.5 bg-gradient-to-r from-wine-800 to-wine-700 text-white px-5 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider shadow-xl shadow-wine-900/20 hover:translate-y-[-2px] hover:shadow-2xl transition-all active:translate-y-0 disabled:opacity-50"
        >
          {generating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
          {generating ? "Gerando..." : "Gerar Adiantamentos do Mês"}
        </button>
      </div>

      {/* Notification */}
      {message && (
        <div className={`flex items-center gap-3 p-4 rounded-2xl text-sm font-medium border animate-in slide-in-from-top-2 duration-300 ${
          message.type === "success"
          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
          : "bg-red-50 text-red-700 border-red-200"
        }`}>
          {message.type === "success" ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
          {message.text}
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-amber-50 border border-amber-200/60 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-amber-800 font-bold text-sm uppercase tracking-wider">Pendentes</p>
          </div>
          <p className="text-3xl font-black text-amber-900">{currency(totalPending)}</p>
          <p className="text-amber-600/60 text-xs mt-1">{pending.length} colaborador(es)</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200/60 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-emerald-800 font-bold text-sm uppercase tracking-wider">Pagos</p>
          </div>
          <p className="text-3xl font-black text-emerald-900">{currency(totalPaid)}</p>
          <p className="text-emerald-600/60 text-xs mt-1">{paid.length} colaborador(es)</p>
        </div>
      </div>

      {advances.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-wine-100/30 shadow-sm">
          <Banknote className="w-16 h-16 text-wine-200 mb-4" />
          <p className="text-wine-800 font-bold text-lg">Nenhum adiantamento gerado</p>
          <p className="text-wine-500/60 text-sm mt-1 max-w-xs">Clique em "Gerar Adiantamentos do Mês" para criar os registros automaticamente.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {pending.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-wine-950 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" /> Pendentes ({pending.length})
              </h2>
              <div className="space-y-3">
                {pending.map(adv => (
                  <div key={adv.id} className="bg-white border border-amber-100 rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <p className="font-bold text-wine-950">{adv.employee.name}</p>
                      <p className="text-2xl font-black text-amber-600 mt-0.5">{currency(adv.amount)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDelete(adv.id)}
                        disabled={loading}
                        className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                        title="Excluir (Erro de geração)"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setSelectedAdvance(adv)}
                        className="p-2.5 bg-amber-100 text-amber-700 rounded-xl hover:bg-amber-200 transition-colors shadow-sm"
                        title="Pagar via Pix / Ver Dados"
                      >
                        <QrCode className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleMarkPaid(adv.id)}
                        disabled={loading}
                        className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-200 hover:translate-y-[-1px] hover:shadow-xl transition-all active:translate-y-0 disabled:opacity-50"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Marcar como Pago
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {paid.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-wine-950 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Pagos ({paid.length})
              </h2>
              <div className="space-y-3">
                {paid.map(adv => (
                  <div key={adv.id} className="bg-emerald-50/50 border border-emerald-100 rounded-2xl px-5 py-4 flex items-center justify-between opacity-75">
                    <div>
                      <p className="font-bold text-wine-950">{adv.employee.name}</p>
                      <p className="text-2xl font-black text-emerald-700 mt-0.5">{currency(adv.amount)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => handleDelete(adv.id)}
                        disabled={loading}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors opacity-40 hover:opacity-100"
                        title="Excluir (Erro de pagamento)"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" /> Pago
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
