# Correção dos Relatórios Detalhados CLT e PJ — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir a memória de cálculo dos relatórios para que os valores exibidos sejam reconciliáveis, o popup caiba no viewport de trabalho sem rolagem horizontal, e cada memória impressa ocupe exatamente uma página A4.

**Architecture:** Manter as fórmulas e os valores persistidos intactos e corrigir somente o view model produzido por `buildPayrollBreakdown`. Usar o elemento nativo `dialog` para colocar o popup na top layer e obter foco, Escape e bloqueio do fundo; criar uma variante compacta de impressão com CSS isolado e validar o resultado com testes unitários e Playwright/PDF.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4, Node.js `node:test`, Playwright, `pdfjs-dist`.

---

## Decisões e limites

- Não alterar `app/folha/actions.ts`, fórmulas salariais, schema Prisma ou valores gravados.
- `transportTotal` já contém apenas os dias de VT pagáveis. `transportDeduction` é memória informativa das faltas e não deve ser novamente somado aos descontos financeiros.
- O total de créditos da memória será a soma exata dos itens visíveis em `earnings`.
- O total de descontos será a soma exata dos itens visíveis em `deductions`.
- Para qualquer folha regular suportada, a memória deve satisfazer `créditos - descontos = líquido`, tolerando no máximo R$ 0,01 de arredondamento.
- Em desktop com viewport de `1227 × 600`, o popup completo deve caber sem rolagem horizontal e sem exigir rolagem vertical. Em viewports menores, uma rolagem vertical interna será o fallback; nunca haverá rolagem horizontal.
- Na impressão, o resumo continua primeiro. Cada pagamento regular começa em uma nova folha e sua memória inteira permanece na mesma página A4. Rescisões continuam apenas no resumo.
- Preservar as alterações não relacionadas atualmente existentes em `app/api/generate-payroll-pdf/route.tsx`, `app/api/upload-payroll-pdf/route.ts` e `app/dashboard/payroll/import-check/ImportCheckClient.tsx`.

## Estrutura de arquivos

- Modify: `docs/superpowers/specs/2026-07-29-relatorios-detalhados-clt-pj-design.md` — registrar popup, reconciliação e regra de uma página.
- Modify: `docs/stories/2026-07-29-relatorios-detalhados-clt-pj.md` — atualizar critérios, checklist, resultados e File List.
- Modify: `lib/payroll-breakdown.ts` — corrigir semântica de VT e totais visíveis.
- Modify: `tests/payroll-breakdown.test.mjs` — provar reconciliação de CLT aulista, CLT mensalista e PJ.
- Modify: `app/components/PayrollCalculationDetails.tsx` — variantes `standalone`, `dialog` e `print`, rótulos reconciliáveis e layout compacto.
- Modify: `tests/payroll-calculation-details.test.mjs` — remover variante obsoleta e cobrir as três variantes válidas.
- Modify: `app/relatorios/ReportClient.tsx` — usar `dialog`, remover CSS global de impressão e renderizar páginas de impressão.
- Create: `app/relatorios/PayrollPrintPage.tsx` — uma página de memória por pagamento regular.
- Create: `app/relatorios/PayrollPrintPage.module.css` — estilos A4 isolados, sem reset universal.
- Modify: `tests/payroll-reports-integration.test.mjs` — manter apenas contratos estruturais úteis, sem chamar regex de teste de acessibilidade.
- Create: `playwright.config.ts` — configuração E2E local autenticada.
- Create: `tests/e2e/auth.setup.ts` — login com credenciais fornecidas por ambiente.
- Create: `tests/e2e/payroll-reports.spec.ts` — popup, teclado, viewport e PDF real.
- Modify: `package.json` e `package-lock.json` — Playwright e scripts de teste E2E.
- Delete: `lib/payroll-report-expansion.ts` — código órfão da solução antiga.

### Task 1: Atualizar o contrato de aceite antes do código

**Files:**
- Modify: `docs/superpowers/specs/2026-07-29-relatorios-detalhados-clt-pj-design.md`
- Modify: `docs/stories/2026-07-29-relatorios-detalhados-clt-pj.md`

- [ ] **Step 1: Trocar os critérios antigos de expansão pelos critérios atuais do popup**

Na especificação e na story, substituir expansão embutida por estes critérios:

```markdown
- O botão `Ver detalhes` abre somente a memória selecionada em uma janela modal acima da navegação lateral.
- Em 1227 × 600, a memória completa é legível sem rolagem horizontal ou vertical.
- Abaixo desse viewport, a janela pode usar rolagem vertical interna, mas nunca rolagem horizontal.
- O popup fecha pelo botão, pela tecla Escape e devolve o foco ao botão que o abriu.
```

- [ ] **Step 2: Registrar a reconciliação financeira obrigatória**

Adicionar aos critérios de aceite:

```markdown
- Cada valor listado participa de exatamente um subtotal.
- Total de créditos = soma dos itens de crédito exibidos.
- Total de descontos = soma dos descontos efetivamente aplicados ao líquido.
- Total de créditos − total de descontos = valor líquido persistido, com tolerância máxima de R$ 0,01.
- Faltas de VT aparecem na descrição do VT líquido recebido e não são descontadas uma segunda vez.
```

- [ ] **Step 3: Registrar a regra verificável de impressão**

```markdown
- O resumo pode ocupar quantas páginas forem necessárias.
- Cada memória regular começa em uma nova página A4.
- Uma memória regular não pode gerar página em branco nem ocupar mais de uma página.
- Cada página de memória contém nome, competência, créditos, descontos, líquido e FGTS somente quando aplicável.
```

- [ ] **Step 4: Confirmar que os critérios aparecem nos dois documentos**

Run:

```powershell
rg -n "1227|reconcil|uma página|Escape|faltas de VT" docs/superpowers/specs/2026-07-29-relatorios-detalhados-clt-pj-design.md docs/stories/2026-07-29-relatorios-detalhados-clt-pj.md
```

Expected: os cinco conceitos aparecem na spec e na story.

- [ ] **Step 5: Commit da atualização contratual**

```powershell
git add docs/superpowers/specs/2026-07-29-relatorios-detalhados-clt-pj-design.md docs/stories/2026-07-29-relatorios-detalhados-clt-pj.md
git commit -m "docs: definir aceite das correcoes dos relatorios"
```

### Task 2: Corrigir a reconciliação financeira por TDD

**Files:**
- Modify: `tests/payroll-breakdown.test.mjs:42-222`
- Modify: `lib/payroll-breakdown.ts:92-229`

- [ ] **Step 1: Tornar vermelho o teste da CLT aulista**

Substituir as expectativas do primeiro teste por:

```javascript
assert.equal(item(breakdown.earnings, "transport").value, 127.20);
assert.equal(
  item(breakdown.earnings, "transport").description,
  "14 dias previstos - 2 faltas VT = 12 dias pagos × R$ 10,60",
);
assert.equal(breakdown.deductions.some(({ id }) => id === "transport-absence"), false);
assert.equal(breakdown.totals.gross, 3195.29);
assert.equal(breakdown.totals.deductions, 257.91);
assert.equal(breakdown.totals.net, 2937.38);
assert.equal(
  Number((breakdown.totals.gross - breakdown.totals.deductions).toFixed(2)),
  breakdown.totals.net,
);
```

- [ ] **Step 2: Adicionar testes vermelhos de reconciliação para CLT mensalista e PJ**

Ao fim do arquivo, adicionar:

```javascript
function assertReconciled(breakdown) {
  const credits = breakdown.earnings.reduce((sum, entry) => sum + entry.value, 0);
  const deductions = breakdown.deductions.reduce((sum, entry) => sum + entry.value, 0);
  assert.equal(breakdown.totals.gross, Number(credits.toFixed(2)));
  assert.equal(breakdown.totals.deductions, Number(deductions.toFixed(2)));
  assert.ok(
    Math.abs(breakdown.totals.gross - breakdown.totals.deductions - breakdown.totals.net) <= 0.01,
    `breakdown ${breakdown.payrollId} is not reconciled`,
  );
}

test("reconciles a monthly CLT absence exactly once", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      id: "employee-clt-monthly", name: "Joana", type: "CLT", role: "Coordenadora",
      baseSalary: 2500, hourlyRate: null, cestaBasica: 0, isAulista: false, transportDaily: 10.60,
    },
    payroll: {
      id: "payroll-clt-monthly", month: 7, year: 2026, status: "PAID",
      baseSalary: 2500, workingDays: 22, transportTotal: 212,
      absences: 1, absenceDeduction: 100, absencesVT: 2, transportDeduction: 21.20,
      otherDeductions: 50, bonuses: 0, grossEarnings: 2400,
      inssDeduction: 200, irrfDeduction: 0, fgtsValue: 192,
      salaryAdvance: 0, hoursAulista: null, netTotal: 2362,
    },
  });

  assert.equal(breakdown.deductions.some(({ id }) => id === "transport-absence"), false);
  assertReconciled(breakdown);
});

test("reconciles PJ without CLT-only deductions", () => {
  const breakdown = buildPayrollBreakdown({
    employee: {
      id: "employee-pj-reconciled", name: "Empresa Teste", type: "PJ", role: "Consultoria",
      baseSalary: 3000, hourlyRate: null, cestaBasica: 0, isAulista: false, transportDaily: 10,
    },
    payroll: {
      id: "payroll-pj-reconciled", month: 7, year: 2026, status: "PENDING",
      baseSalary: 3000, workingDays: 20, transportTotal: 190,
      absences: 1, absenceDeduction: 100, absencesVT: 1, transportDeduction: 10,
      otherDeductions: 25, bonuses: 0, grossEarnings: 2900,
      inssDeduction: 257.91, irrfDeduction: 80.42, fgtsValue: 240,
      salaryAdvance: 300, hoursAulista: null, netTotal: 2765,
    },
  });

  assert.equal(breakdown.deductions.some(({ id }) => ["inss", "irrf", "transport-absence"].includes(id)), false);
  assert.equal(breakdown.fgtsValue, null);
  assertReconciled(breakdown);
});
```

- [ ] **Step 3: Executar e confirmar o vermelho pelo motivo esperado**

```powershell
node --test tests/payroll-breakdown.test.mjs
```

Expected: FAIL porque o VT ainda é contado em `earnings` e novamente em `deductions`, enquanto `totals.gross` ainda usa `grossEarnings` persistido.

- [ ] **Step 4: Implementar a composição mínima reconciliável**

Em `buildPayrollBreakdown`, substituir a descrição do transporte e remover o bloco que cria `transport-absence`:

```typescript
const scheduledTransportDays = positive(payroll.workingDays);
const absentTransportDays = positive(payroll.absencesVT);
const paidTransportDays = Math.max(0, scheduledTransportDays - absentTransportDays);

if (positive(payroll.transportTotal) > 0) {
  earnings.push({
    id: "transport",
    label: "Vale Transporte (Recebimento)",
    value: payroll.transportTotal ?? 0,
    description: `${scheduledTransportDays} dias previstos - ${absentTransportDays} faltas VT = ${paidTransportDays} dias pagos × ${formatCurrency(positive(employee.transportDaily))}`,
  });
}
```

Substituir os totais por somas dos itens visíveis:

```typescript
const totalCredits = earnings.reduce((total, earning) => total + earning.value, 0);
const totalDeductions = deductions.reduce((total, deduction) => total + deduction.value, 0);

totals: {
  gross: roundCurrency(totalCredits),
  deductions: roundCurrency(totalDeductions),
  net: payroll.netTotal,
},
```

Não alterar `payroll.netTotal`, INSS, IRRF, FGTS ou qualquer código de persistência.

- [ ] **Step 5: Executar testes e tipos**

```powershell
node --test tests/payroll-breakdown.test.mjs
npm run typecheck
```

Expected: todos os testes de breakdown passam e TypeScript termina com exit code `0`.

- [ ] **Step 6: Commit da reconciliação**

```powershell
git add lib/payroll-breakdown.ts tests/payroll-breakdown.test.mjs
git commit -m "fix: reconciliar totais da memoria de calculo"
```

### Task 3: Corrigir o componente e remover o teste obsoleto

**Files:**
- Modify: `app/components/PayrollCalculationDetails.tsx:3-143`
- Modify: `tests/payroll-calculation-details.test.mjs:80-104`

- [ ] **Step 1: Tornar o contrato de variantes explícito**

```typescript
export type PayrollCalculationDetailsVariant = "standalone" | "dialog" | "print";

export interface PayrollCalculationDetailsProps {
  breakdown: PayrollBreakdown;
  variant?: PayrollCalculationDetailsVariant;
  panelId?: string;
}
```

- [ ] **Step 2: Corrigir o teste PJ que ainda usa `embedded`**

Em `tests/payroll-calculation-details.test.mjs`, trocar:

```javascript
variant: "embedded",
```

por:

```javascript
variant: "dialog",
```

Adicionar o teste da variante de impressão:

```javascript
test("renders a compact print variant with reconciled labels", () => {
  const PayrollCalculationDetails = loadComponent();
  const html = renderToStaticMarkup(createElement(PayrollCalculationDetails, {
    breakdown: cltBreakdown,
    variant: "print",
    panelId: "print-payroll-1",
  }));

  assert.match(html, /data-variant="print"/);
  assert.match(html, /Total de Créditos/);
  assert.match(html, /Total de Descontos/);
  assert.match(html, /Valor Líquido a Receber/);
});
```

- [ ] **Step 3: Executar o teste e confirmar o vermelho**

```powershell
node --test tests/payroll-calculation-details.test.mjs
```

Expected: FAIL porque `print` e `data-variant` ainda não existem e o rótulo ainda diz “Total de Vencimentos Acumulado”.

- [ ] **Step 4: Implementar as três variantes sem duplicar regras**

No componente, derivar apenas densidade e layout:

```typescript
const isDialog = variant === "dialog";
const isPrint = variant === "print";
const compact = isDialog || isPrint;
const shellClasses = isPrint
  ? "grid min-w-0 grid-cols-[28%_minmax(0,1fr)] gap-3"
  : isDialog
    ? "grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[28%_minmax(0,1fr)]"
    : "grid grid-cols-1 gap-6 lg:grid-cols-3";
const detailClasses = compact ? "min-w-0" : "lg:col-span-2";
```

No elemento raiz, adicionar:

```tsx
data-variant={variant}
```

Trocar os rótulos dos subtotais por:

```tsx
<TotalLine compact={compact} label="Total de Créditos" value={formatCurrency(breakdown.totals.gross)} tone="earning" />
<TotalLine compact={compact} label="Total de Descontos" value={`-${formatCurrency(breakdown.totals.deductions)}`} tone="deduction" />
```

Quando não houver descontos, renderizar dentro do painel:

```tsx
{breakdown.deductions.length === 0 ? (
  <p className="rounded-lg bg-white p-2 text-xs text-wine-500">Nenhum desconto aplicado nesta competência.</p>
) : breakdown.deductions.map((item) => (
  <DetailItem compact={compact} key={item.id} item={item} tone="deduction" />
))}
```

- [ ] **Step 5: Rodar componente, breakdown e typecheck**

```powershell
node --test tests/payroll-breakdown.test.mjs tests/payroll-calculation-details.test.mjs
npm run typecheck
```

Expected: testes PASS e TypeScript com exit code `0`.

- [ ] **Step 6: Commit do componente**

```powershell
git add app/components/PayrollCalculationDetails.tsx tests/payroll-calculation-details.test.mjs
git commit -m "fix: tornar detalhes compactos e reconciliaveis"
```

### Task 4: Substituir o overlay pelo `dialog` nativo

**Files:**
- Modify: `app/relatorios/ReportClient.tsx:1-190,759-789`
- Modify: `tests/payroll-reports-integration.test.mjs:8-20`

- [ ] **Step 1: Ajustar o teste estrutural para exigir `dialog` nativo**

Substituir o primeiro teste de integração por:

```javascript
test("uses the native dialog top layer for payroll details", () => {
  assert.match(source, /<dialog/);
  assert.match(source, /showModal\(\)/);
  assert.match(source, /onCancel=/);
  assert.match(source, /overflow-y-auto/);
  assert.match(source, /overflow-x-hidden/);
  assert.doesNotMatch(source, /role="dialog"/);
  assert.doesNotMatch(source, /fixed inset-0 z-\[999\]/);
});
```

- [ ] **Step 2: Executar e confirmar o vermelho**

```powershell
node --test tests/payroll-reports-integration.test.mjs
```

Expected: FAIL porque a implementação ainda usa um `div` fixo com `role="dialog"`.

- [ ] **Step 3: Implementar abertura e fechamento nativos**

Alterar o import:

```tsx
import { useEffect, useRef, useState } from "react";
```

Adicionar estado e efeito junto aos demais hooks:

```tsx
const payrollDialogRef = useRef<HTMLDialogElement>(null);

useEffect(() => {
  const dialog = payrollDialogRef.current;
  if (!dialog) return;
  if (selectedPayrollDetails && !dialog.open) dialog.showModal();
  if (!selectedPayrollDetails && dialog.open) dialog.close();
}, [selectedPayrollDetails]);

const closePayrollDetails = () => setSelectedPayrollDetails(null);
```

Renderizar sempre o elemento nativo e condicionar apenas o conteúdo:

```tsx
<dialog
  ref={payrollDialogRef}
  data-testid="payroll-details-dialog"
  aria-labelledby="payroll-details-dialog-title"
  onCancel={closePayrollDetails}
  onClose={closePayrollDetails}
  className="m-auto max-h-[calc(100dvh-1rem)] w-[min(96vw,72rem)] overflow-hidden rounded-[28px] bg-cream-50 p-0 shadow-2xl backdrop:bg-wine-950/45 backdrop:backdrop-blur-sm"
>
  {selectedPayrollDetails ? (
    <div className="flex max-h-[calc(100dvh-1rem)] min-w-0 flex-col">
      <header className="flex shrink-0 items-center justify-between border-b border-wine-100 bg-white px-5 py-2">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-wine-500">Memória de cálculo</p>
          <h2 id="payroll-details-dialog-title" className="truncate text-lg font-black text-wine-950">
            {selectedPayrollDetails.employee.name}
          </h2>
        </div>
        <button type="button" onClick={closePayrollDetails} className="rounded-xl border border-wine-200 px-4 py-2 text-sm font-bold text-wine-800">
          Fechar detalhes
        </button>
      </header>
      <div data-testid="payroll-dialog-body" className="min-h-0 min-w-0 overflow-x-hidden overflow-y-auto p-3">
        <PayrollCalculationDetails breakdown={selectedPayrollDetails} variant="dialog" />
      </div>
    </div>
  ) : null}
</dialog>
```

O `showModal()` coloca o elemento acima da sidebar, torna o fundo inerte, trata Escape, mantém o foco no modal e restaura o foco ao fechar.

- [ ] **Step 4: Executar testes e tipos**

```powershell
node --test tests/payroll-reports-integration.test.mjs
npm run typecheck
```

Expected: teste PASS e TypeScript sem erros.

- [ ] **Step 5: Commit do popup**

```powershell
git add app/relatorios/ReportClient.tsx tests/payroll-reports-integration.test.mjs
git commit -m "fix: usar dialog nativo nos detalhes da folha"
```

### Task 5: Criar uma página A4 isolada por memória

**Files:**
- Create: `app/relatorios/PayrollPrintPage.tsx`
- Create: `app/relatorios/PayrollPrintPage.module.css`
- Modify: `app/relatorios/ReportClient.tsx:364-378,520-534,791-870`
- Modify: `tests/payroll-reports-integration.test.mjs:22-30`

- [ ] **Step 1: Tornar vermelho o contrato estrutural de impressão**

Substituir o teste atual de impressão por:

```javascript
test("prints regular payrolls through one scoped A4 page component", () => {
  assert.match(source, /<PayrollPrintPage/);
  assert.match(source, /filter\(\(p\) => !p\.isRescisao\)/);
  assert.doesNotMatch(source, /Scorched Earth Reset/);
  assert.doesNotMatch(source, /html, body, main, div, section, article/);
  assert.doesNotMatch(source, /dangerouslySetInnerHTML/);
});
```

- [ ] **Step 2: Executar e confirmar o vermelho**

```powershell
node --test tests/payroll-reports-integration.test.mjs
```

Expected: FAIL porque o componente ainda não existe e o reset universal ainda está no `ReportClient`.

- [ ] **Step 3: Criar o componente de página impressa**

Criar `app/relatorios/PayrollPrintPage.tsx`:

```tsx
import PayrollCalculationDetails from "@/app/components/PayrollCalculationDetails";
import type { PayrollBreakdown } from "@/lib/payroll-breakdown";
import styles from "./PayrollPrintPage.module.css";

export default function PayrollPrintPage({ breakdown }: { breakdown: PayrollBreakdown }) {
  return (
    <section className={styles.page} data-testid="payroll-print-page" data-payroll-id={breakdown.payrollId}>
      <header className={styles.header}>
        <p>Memória de cálculo</p>
        <h2>{breakdown.employee.name} · {breakdown.competency}</h2>
      </header>
      <PayrollCalculationDetails
        breakdown={breakdown}
        variant="print"
        panelId={`print-payroll-${breakdown.payrollId}`}
      />
      <p className={styles.endMarker}>Fim da memória</p>
    </section>
  );
}
```

- [ ] **Step 4: Criar CSS de impressão restrito ao componente**

Criar `app/relatorios/PayrollPrintPage.module.css`:

```css
.page { display: none; }

@media print {
  @page { size: A4 portrait; margin: 8mm; }

  .page {
    display: block;
    box-sizing: border-box;
    width: 100%;
    break-before: page;
    page-break-before: always;
    break-inside: avoid-page;
    page-break-inside: avoid;
    color: #111;
  }

  .page:last-child {
    break-after: auto;
    page-break-after: auto;
  }

  .header {
    margin: 0 0 3mm;
    padding: 0 0 2mm;
    border-bottom: 1px solid #111;
  }

  .header p {
    margin: 0;
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
  }

  .header h2 {
    margin: 1mm 0 0;
    font-size: 11pt;
    line-height: 1.15;
  }

  .endMarker {
    margin: 2mm 0 0;
    text-align: right;
    font-size: 6pt;
    color: #555;
  }

  .page :global([data-variant="print"]) {
    font-size: 7.5pt;
    line-height: 1.15;
  }

  .page :global([data-variant="print"] .shadow-premium),
  .page :global([data-variant="print"] [class*="shadow-"]) {
    box-shadow: none !important;
  }
}
```

- [ ] **Step 5: Usar o componente nos dois relatórios**

Importar:

```tsx
import PayrollPrintPage from "./PayrollPrintPage";
```

No Relatório Mensal:

```tsx
<div className="print-payroll-calculations hidden print:block">
  {monthlyData?.payrolls.filter((p) => !p.isRescisao).map((p) => (
    <PayrollPrintPage
      key={`print-monthly-${p.id}`}
      breakdown={buildPayrollBreakdown({ employee: p.employee, payroll: p })}
    />
  ))}
</div>
```

Repetir em Por Colaborador, usando a lista daquele relatório. Remover todo o `<style dangerouslySetInnerHTML>` de `ReportClient`; preservar as classes `print:*` já usadas no resumo.

- [ ] **Step 6: Executar testes, tipos e build**

```powershell
node --test tests/payroll-calculation-details.test.mjs tests/payroll-reports-integration.test.mjs
npm run typecheck
npm run build
```

Expected: testes PASS, typecheck e build com exit code `0`.

- [ ] **Step 7: Commit da impressão isolada**

```powershell
git add app/relatorios/PayrollPrintPage.tsx app/relatorios/PayrollPrintPage.module.css app/relatorios/ReportClient.tsx tests/payroll-reports-integration.test.mjs
git commit -m "fix: imprimir uma memoria por pagina A4"
```

### Task 6: Adicionar regressão E2E do popup e do PDF

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `playwright.config.ts`
- Create: `tests/e2e/auth.setup.ts`
- Create: `tests/e2e/payroll-reports.spec.ts`
- Modify: `app/relatorios/ReportClient.tsx`

- [ ] **Step 1: Instalar Playwright como dependência de desenvolvimento**

```powershell
npm install --save-dev @playwright/test
npx playwright install chromium
```

Expected: `package.json` e `package-lock.json` atualizados; Chromium instalado no cache local.

- [ ] **Step 2: Adicionar scripts reproduzíveis**

Em `package.json`:

```json
"test:e2e": "playwright test",
"test:e2e:headed": "playwright test --headed"
```

- [ ] **Step 3: Criar configuração com login por ambiente**

Criar `playwright.config.ts`:

```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  fullyParallel: false,
  reporter: "list",
  use: {
    baseURL: process.env.E2E_BASE_URL ?? "http://127.0.0.1:3001",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "setup", testMatch: /auth\.setup\.ts/ },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], storageState: "tests/e2e/.auth/user.json" },
      dependencies: ["setup"],
    },
  ],
});
```

Criar `tests/e2e/auth.setup.ts`:

```typescript
import { expect, test as setup } from "@playwright/test";

setup("authenticate", async ({ page }) => {
  const email = process.env.E2E_EMAIL;
  const password = process.env.E2E_PASSWORD;
  if (!email || !password) throw new Error("E2E_EMAIL and E2E_PASSWORD are required");

  await page.goto("/login");
  await page.getByPlaceholder("coordenacao@freigalvao.com.br").fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole("button", { name: "Entrar no Sistema" }).click();
  await expect(page).toHaveURL(/\/$/);
  await page.context().storageState({ path: "tests/e2e/.auth/user.json" });
});
```

Adicionar `tests/e2e/.auth/` ao `.gitignore`.

- [ ] **Step 4: Adicionar seletores estáveis à interface**

No botão `Ver detalhes`, adicionar:

```tsx
data-testid="open-payroll-details"
```

No `dialog`, manter `data-testid="payroll-details-dialog"`; no corpo, manter `data-testid="payroll-dialog-body"`; em cada página impressa, manter `data-testid="payroll-print-page"` e `data-payroll-id`.

- [ ] **Step 5: Criar o teste do popup em 1227 × 600**

Criar `tests/e2e/payroll-reports.spec.ts` com:

```typescript
import { expect, test } from "@playwright/test";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

test.use({ viewport: { width: 1227, height: 600 } });

test("dialog fits the target viewport and closes with Escape", async ({ page }) => {
  await page.goto("/relatorios");
  const openButton = page.getByTestId("open-payroll-details").first();
  await expect(openButton).toBeVisible();
  await openButton.click();

  const dialog = page.getByTestId("payroll-details-dialog");
  const body = page.getByTestId("payroll-dialog-body");
  await expect(dialog).toBeVisible();
  await expect(body).toContainText("Total de Créditos");
  await expect(body).toContainText("Valor Líquido a Receber");

  const overflow = await body.evaluate((element) => ({
    horizontal: element.scrollWidth > element.clientWidth,
    vertical: element.scrollHeight > element.clientHeight,
  }));
  expect(overflow).toEqual({ horizontal: false, vertical: false });

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(openButton).toBeFocused();
});
```

- [ ] **Step 6: Adicionar a prova de uma página por memória no PDF**

No mesmo arquivo:

```typescript
test("each regular calculation occupies one PDF page", async ({ page }) => {
  await page.goto("/relatorios");
  await expect(page.getByTestId("open-payroll-details").first()).toBeVisible();

  const expectedPayrollIds = await page.getByTestId("payroll-print-page").evaluateAll((pages) =>
    pages.map((element) => element.getAttribute("data-payroll-id")).filter(Boolean),
  );

  const pdf = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true });
  const document = await getDocument({ data: new Uint8Array(pdf) }).promise;
  const memoryPages = [];

  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const pdfPage = await document.getPage(pageNumber);
    const content = await pdfPage.getTextContent();
    const text = content.items.map((item) => "str" in item ? item.str : "").join(" ");
    if (text.includes("Memória de cálculo")) memoryPages.push(text);
  }

  expect(memoryPages).toHaveLength(expectedPayrollIds.length);
  for (const text of memoryPages) {
    expect(text).toContain("Total de Créditos");
    expect(text).toContain("Total de Descontos");
    expect(text).toContain("Valor Líquido a Receber");
    expect(text).toContain("Fim da memória");
  }
});
```

- [ ] **Step 7: Executar E2E no app local autenticado**

Com o app rodando em `http://127.0.0.1:3001`:

```powershell
$env:E2E_BASE_URL='http://127.0.0.1:3001'
if (-not $env:E2E_EMAIL -or -not $env:E2E_PASSWORD) {
  throw 'Defina E2E_EMAIL e E2E_PASSWORD apenas no ambiente antes de executar.'
}
npm run test:e2e
```

Expected: setup, popup e PDF PASS. As credenciais permanecem apenas no ambiente e não entram em arquivos ou logs versionados.

- [ ] **Step 8: Commit da regressão E2E**

```powershell
git add .gitignore package.json package-lock.json playwright.config.ts tests/e2e app/relatorios/ReportClient.tsx
git commit -m "test: cobrir popup e impressao dos relatorios"
```

### Task 7: Limpar código órfão e fechar a rastreabilidade

**Files:**
- Delete: `lib/payroll-report-expansion.ts`
- Modify: `docs/stories/2026-07-29-relatorios-detalhados-clt-pj.md`

- [ ] **Step 1: Confirmar que o helper antigo não tem consumidores**

```powershell
rg -n "toggleExpandedPayrollId|payroll-report-expansion" . --glob "!node_modules/**" --glob "!.next/**"
```

Expected: apenas o próprio arquivo órfão e eventual asserção negativa do teste aparecem.

- [ ] **Step 2: Remover o arquivo órfão e a asserção negativa correspondente**

```diff
*** Begin Patch
*** Delete File: lib/payroll-report-expansion.ts
*** End Patch
```

Remover de `tests/payroll-reports-integration.test.mjs` qualquer asserção que apenas procure `toggleExpandedPayrollId`.

- [ ] **Step 3: Atualizar story somente com evidência concluída**

Marcar como concluídos apenas os ACs comprovados por testes ou verificação manual. Registrar:

```markdown
### Quality Gates

- `npm test`: PASS
- `npm run typecheck`: PASS
- `npm run lint`: PASS
- `npm run build`: PASS
- `npm run test:e2e`: PASS — popup 1227 × 600 e PDF A4

### Completion Notes

- Totais visíveis reconciliados sem alterar fórmulas ou valores persistidos.
- Popup migrado para `dialog` nativo e validado por teclado.
- Cada memória regular validada em uma única página A4.
- PJ permanece sem INSS, IRRF ou FGTS exclusivos de CLT.
```

Atualizar a File List com todos os arquivos realmente modificados e definir `Status: Ready for Review`.

- [ ] **Step 4: Commit da limpeza e documentação**

```powershell
git add lib/payroll-report-expansion.ts tests/payroll-reports-integration.test.mjs docs/stories/2026-07-29-relatorios-detalhados-clt-pj.md
git commit -m "docs: concluir correcoes dos relatorios detalhados"
```

### Task 8: Gates finais e revisão antes de qualquer publicação

**Files:**
- Verify only; do not modify unrelated files.

- [ ] **Step 1: Executar todos os gates em sequência**

```powershell
npm test
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

Expected: todos os cinco comandos terminam com exit code `0`.

- [ ] **Step 2: Verificar reconciliação manual de uma CLT e uma PJ**

Para cada memória escolhida:

1. somar os créditos visíveis;
2. comparar com `Total de Créditos`;
3. somar os descontos visíveis;
4. comparar com `Total de Descontos`;
5. confirmar `créditos - descontos = líquido`;
6. confirmar FGTS somente na CLT aplicável.

Expected: diferença absoluta máxima de R$ 0,01 em cada memória.

- [ ] **Step 3: Verificar os três tamanhos de tela**

```text
1227 × 600: popup inteiro sem rolagem horizontal ou vertical.
1024 × 600: sem rolagem horizontal; conteúdo principal completo.
390 × 844: sem rolagem horizontal; rolagem vertical interna permitida.
```

- [ ] **Step 4: Inspecionar somente o diff desta atualização**

```powershell
git diff --check
git status --short
git diff --stat
git diff -- lib/payroll-breakdown.ts app/components/PayrollCalculationDetails.tsx app/relatorios/ReportClient.tsx app/relatorios/PayrollPrintPage.tsx app/relatorios/PayrollPrintPage.module.css tests docs/superpowers/specs/2026-07-29-relatorios-detalhados-clt-pj-design.md
```

Expected: nenhum whitespace error; alterações não relacionadas permanecem intocadas.

- [ ] **Step 5: Solicitar revisão antes de merge ou publicação**

Usar `superpowers:requesting-code-review`, corrigir achados acionáveis e repetir os cinco gates. Não executar push, merge ou deploy sem autorização explícita do usuário.

## Matriz de cobertura

| Problema de QA | Tarefa que resolve | Evidência obrigatória |
|---|---:|---|
| Totais não fecham | 2 | testes CLT aulista, CLT mensalista e PJ reconciliados |
| Popup escondido pela sidebar | 4 | `dialog.showModal()` e E2E |
| Popup exige rolagem em 1227 × 600 | 3, 4 e 6 | medição `scrollWidth/scrollHeight` no Playwright |
| Popup sem Escape/foco | 4 e 6 | E2E fecha com Escape e restaura foco |
| Memória ocupa três folhas | 5 e 6 | PDF real, uma página contendo cada memória |
| Reset de impressão frágil | 5 | CSS Module limitado à página impressa |
| Testes regex dão falso positivo | 6 | interação real e PDF real no Chromium |
| Variante `embedded` obsoleta | 3 | teste usa somente variantes tipadas |
| Story desatualizada | 1 e 7 | ACs e gates registrados com evidência |
| Helper antigo órfão | 7 | `rg` sem consumidores e arquivo removido |
