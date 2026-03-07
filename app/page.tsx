import { Activity, ArrowDownRight, ArrowUpRight, DollarSign, Users, AlertCircle, Cake } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const startDate = new Date(currentYear, currentMonth - 1, 1);
  const endDate = new Date(currentYear, currentMonth, 0, 23, 59, 59);

  const transactions = await prisma.financialTransaction.findMany({
    where: { date: { gte: startDate, lte: endDate } }
  });

  const incomes = transactions.filter(t => t.type === "INCOME").reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions.filter(t => t.type === "EXPENSE").reduce((sum, t) => sum + t.amount, 0);

  const payrolls = await prisma.payroll.findMany({
    where: { month: currentMonth, year: currentYear }
  });
  const payrollsTotal = payrolls.reduce((sum, p) => sum + p.netTotal, 0);

  const employeesCount = await prisma.employee.count({ where: { active: true } });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  return (
    <div className="w-full h-full pb-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-wine-950">Dashboard</h1>
          <p className="text-wine-800/70 mt-1">Visão geral financeira de {now.toLocaleString('pt-BR', { month: 'long' })} / {currentYear}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-wine-900">Administrador</p>
            <p className="text-xs text-wine-700">Painel de Controle</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-wine-200 border-2 border-white shadow-md flex items-center justify-center text-wine-800 font-bold">
            AD
          </div>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50 hover:shadow-premium-hover transition-all duration-300 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-wine-500">Receitas (Mês)</h3>
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-wine-950 tracking-tight font-display">{formatCurrency(incomes)}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50 hover:shadow-premium-hover transition-all duration-300 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-wine-500">Despesas (Mês)</h3>
            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-wine-950 tracking-tight font-display">{formatCurrency(expenses)}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50 hover:shadow-premium-hover transition-all duration-300 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-wine-500">Folha de Pgto</h3>
            <div className="w-8 h-8 rounded-full bg-wine-100 text-wine-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-wine-950 tracking-tight font-display">{formatCurrency(payrollsTotal)}</span>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-wine-400 mt-2">{payrolls.length} folhas calculadas</p>
        </div>

        <div className="bg-white p-6 rounded-[24px] shadow-premium border border-wine-100/50 hover:shadow-premium-hover transition-all duration-300 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-wine-500">Colaboradores</h3>
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-wine-950 tracking-tight font-display">{employeesCount}</span>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-wine-400 mt-2">Contratos ativos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts Section */}
        <div className="lg:col-span-2 bg-white rounded-[24px] shadow-premium border border-wine-100/50 p-6 flex flex-col">
          <h2 className="text-lg font-bold text-wine-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-wine-500" />
            Atividades Pendentes e Alertas
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-wine-100 shadow-sm">
              <div className="mt-1">
                <AlertCircle className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-wine-950">Folha PJ não fechada</h4>
                <p className="text-sm text-wine-800 mt-1">Faltam 5 professores enviarem as horas do mês para fechamento da folha PJ.</p>
              </div>
              <button className="px-4 py-2 bg-wine-800 text-white text-sm font-medium rounded-lg hover:bg-wine-900 transition-colors shadow-md">
                Acessar
              </button>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-wine-100 shadow-sm">
              <div className="mt-1">
                <AlertCircle className="w-5 h-5 text-wine-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-wine-950">Contratos a Vencer</h4>
                <p className="text-sm text-wine-800 mt-1">Existem 3 contratos de fornecedores que vencem na próxima semana.</p>
              </div>
              <button className="px-4 py-2 bg-white text-wine-800 text-sm font-medium rounded-lg hover:bg-cream-100 border border-wine-200 transition-colors shadow-sm">
                Ver Contratos
              </button>
            </div>
          </div>
        </div>

        {/* Birthdays Section */}
        <div className="bg-white rounded-[24px] shadow-premium border border-wine-100/50 p-6 flex flex-col">
          <h2 className="text-lg font-bold text-wine-900 mb-4 flex items-center gap-2">
            <Cake className="w-5 h-5 text-wine-500" />
            Aniversariantes do Mês
          </h2>
          <div className="space-y-4">
            {[
              { name: "Mariana Costa", role: "Professora - Ensino Médio", date: "12 Março", avatar: "MC" },
              { name: "Roberto Almeida", role: "Auxiliar Administrativo", date: "15 Março", avatar: "RA" },
              { name: "Juliana Mendes", role: "Diretora Pedagógica", date: "28 Março", avatar: "JM" },
            ].map((person, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-300 text-wine-800 font-bold flex items-center justify-center text-xs">
                  {person.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-wine-950 truncate">{person.name}</p>
                  <p className="text-xs text-wine-700 truncate">{person.role}</p>
                </div>
                <div className="text-xs font-semibold px-2 py-1 bg-wine-100 text-wine-800 rounded-md">
                  {person.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
