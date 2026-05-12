# Story: Atualizar calculo do IRRF 2026

Status: Ready for Review

Fonte: `G:\Meu Drive\Obsidian\Vitor Samurai 2 cerebro advance\Projetos\Profissional\Colegio Frei Galvao\desconto do IR na folha 0526.md`

## Acceptance Criteria

- [x] A tabela mensal do IRRF usa os valores vigentes a partir de 05/2025.
- [x] O desconto simplificado mensal passa a ser R$ 607,20.
- [x] Rendimentos tributaveis ate R$ 5.000,00 ficam isentos de IRRF.
- [x] Rendimentos tributaveis de R$ 5.000,01 ate R$ 7.350,00 aplicam a reducao `978,62 - (0,133145 * rendimento tributavel)` sobre o IRRF progressivo.
- [x] Rendimentos tributaveis acima de R$ 7.350,00 seguem apenas a tabela progressiva.
- [x] Os exemplos anexos retornam R$ 91,68 e R$ 1.011,99.

## Tasks

- [x] Atualizar constantes e regra central de IRRF.
- [x] Condicionar a reducao de 2026 a competencia da folha.
- [x] Reutilizar a mesma base de IRRF no double-check CLT.
- [x] Cobrir a regra e fronteiras principais com testes automatizados.
- [x] Rodar quality gates locais e registrar resultado.

## File List

- `lib/payroll-calc.ts`
- `app/folha/actions.ts`
- `app/dashboard/payroll/clt-check/page.tsx`
- `app/dashboard/payroll/clt-check/CLTCheckForm.tsx`
- `tests/payroll-calc.test.mjs`
- `package.json`
- `docs/stories/2026-05-12-atualizacao-irrf-2026.md`

## Quality Gates

- `npm test`: passou.
- `npm run typecheck`: passou.
- `npm run build`: passou.
- `npx eslint lib/payroll-calc.ts app/folha/actions.ts app/dashboard/payroll/clt-check/page.tsx app/dashboard/payroll/clt-check/CLTCheckForm.tsx tests/payroll-calc.test.mjs`: passou.
- `npm run lint`: falhou por problemas preexistentes fora do escopo desta story; resultado final reportado: 979 problemas (420 erros, 559 warnings).

## QA Results

Review date: 2026-05-12

Gate: CONCERNS

Findings:

- P2: A regra de IRRF 2026 foi aplicada sem parametro de competencia. A story e a instrucao dizem "a partir de 01/2026", mas `calculateIRRF` nao recebe mes/ano e as chamadas em `app/folha/actions.ts` usam a regra para qualquer folha gerada no sistema.
- P3: A cobertura automatizada valida os exemplos anexos, mas ainda nao cobre fronteiras `5000.00`, `5000.01`, `7350.00`, `7350.01`, dependentes e escolha entre deducao legal e simplificada.
- P3: `npm run lint` completo continua bloqueado por debito preexistente fora do escopo, apesar dos arquivos alterados passarem no eslint direcionado.

Evidence:

- `npm test`: passou.
- `npm run typecheck`: passou.
- `npm run build`: passou.
- `npx eslint lib/payroll-calc.ts app/dashboard/payroll/clt-check/CLTCheckForm.tsx tests/payroll-calc.test.mjs`: passou.

## Dev Follow-up After QA

- P2 tratado: `calculateIRRF` agora aceita competencia e so aplica a reducao de 2026 para `01/2026+`; a geracao de folha passa `month/year` explicitamente.
- P3 tratado parcialmente: testes cobrem `5000.00`, `5000.01`, `7350.00`, `7350.01`, competencia pre-2026, dependentes e escolha de base legal vs simplificada.
- Evidencia apos follow-up: `npm test`, `npm run typecheck`, `npm run build` e eslint direcionado nos arquivos alterados passaram.
