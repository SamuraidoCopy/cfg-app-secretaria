# Story: Cadastro avancado de funcionarios

Status: Ready for Review

## Acceptance Criteria

- [x] O cadastro de colaboradores permite foto de perfil, data de inicio e flag de almoco no colegio.
- [x] Professores podem ter materias possiveis e grade atual com dia da semana, horario, materia e carga horaria.
- [x] A folha sugere dias trabalhados e horas aulista com base na grade, mantendo override manual.
- [x] O VT usa dias previstos menos faltas de VT e nunca gera valor negativo.
- [x] Reajustes salariais atualizam o salario atual e criam historico com data, valor anterior, novo valor e diferenca.
- [x] O historico de reajustes aparece com grafico simples e tabela.
- [x] Folhas ja criadas preservam o salario gravado em `Payroll`.
- [x] O DSR de professor aulista e calculado como 16,67% do valor do salario das aulas.
- [x] CPF duplicado no cadastro ou edicao de colaborador mostra erro amigavel sem quebrar a tela.

## Tasks

- [x] Atualizar schema Prisma e migration.
- [x] Criar helpers de agenda semanal.
- [x] Atualizar server actions de colaboradores para foto, materias, grade e reajustes.
- [x] Atualizar telas de cadastro/listagem/edicao de colaboradores.
- [x] Atualizar lancamento/edicao de folha para sugestoes baseadas na agenda.
- [x] Cobrir calculos de agenda com testes automatizados.
- [x] Ajustar helper central, memoria de calculo e conferencia CLT para DSR aulista de 16,67%.
- [x] Tratar CPF duplicado em `addEmployee` e `updateEmployee` com mensagem no modal.
- [x] Rodar quality gates locais e registrar resultado.

## File List

- `prisma/schema.prisma`
- `prisma/migrations/20260516000000_employee_advanced_profile/migration.sql`
- `lib/work-schedule.ts`
- `lib/subjects.ts`
- `app/colaboradores/SubjectCatalogManager.tsx`
- `prisma/migrations/20260516010000_teaching_assignment_class_lessons/migration.sql`
- `app/colaboradores/actions.ts`
- `app/colaboradores/AddEmployeeModal.tsx`
- `app/colaboradores/EditEmployeeModal.tsx`
- `app/colaboradores/page.tsx`
- `app/folha/page.tsx`
- `app/folha/GeneratePayrollModal.tsx`
- `app/folha/actions.ts`
- `app/folha/[id]/calculo/page.tsx`
- `app/dashboard/payroll/clt-check/CLTCheckForm.tsx`
- `lib/payroll-calc.ts`
- `tests/payroll-calc.test.mjs`
- `tests/work-schedule.test.mjs`
- `docs/stories/2026-05-16-cadastro-avancado-funcionarios.md`

## Quality Gates

- `npx prisma generate`: passou.
- `npx prisma migrate deploy`: falhou com `P3005` porque o banco Supabase existente nao tem historico de migrations Prisma.
- `npx prisma db push`: passou e sincronizou o banco com o schema.
- `npm test`: passou, 12 testes.
- `npm run typecheck`: passou.
- `npx eslint app/colaboradores/actions.ts app/colaboradores/AddEmployeeModal.tsx app/colaboradores/EditEmployeeModal.tsx app/colaboradores/page.tsx app/folha/actions.ts app/folha/page.tsx app/folha/GeneratePayrollModal.tsx lib/work-schedule.ts tests/work-schedule.test.mjs`: passou com 2 warnings de `<img>` em fotos de perfil.
- `npx eslint app/colaboradores/actions.ts app/colaboradores/AddEmployeeModal.tsx app/colaboradores/EditEmployeeModal.tsx lib/subjects.ts`: passou com 1 warning de `<img>` preexistente na foto de perfil.
- `npx prisma generate`: passou apos adicionar serie e numeros de aula nas atribuicoes.
- `npx prisma db push`: passou apos adicionar serie e numeros de aula nas atribuicoes.
- `npm test`: passou, 12 testes.
- `npm run typecheck`: passou.
- `npx eslint app/colaboradores/actions.ts app/colaboradores/AddEmployeeModal.tsx app/colaboradores/EditEmployeeModal.tsx app/colaboradores/page.tsx app/colaboradores/SubjectCatalogManager.tsx app/folha/page.tsx lib/subjects.ts`: passou com 2 warnings de `<img>` em fotos de perfil.
- `npm run lint`: falhou por debitos preexistentes fora do escopo e por varrer artefatos gerados em `lib/generated/client`; resultado final reportado: 1070 problemas (478 erros, 592 warnings).
- `npx eslint app/colaboradores/EditEmployeeModal.tsx`: passou com 1 warning preexistente de `<img>` na foto de perfil.
- `npm run typecheck`: passou apos ajuste visual de salario inicial/atual no reajuste.
- `npm test`: passou, 12 testes.
- `npm run lint`: interrompido apos ficar preso sem relatorio final; lint direcionado do arquivo alterado passou.
- `node --test tests/payroll-calc.test.mjs`: passou, 8 testes, apos DSR aulista de 16,67%.
- `npm run typecheck`: passou apos DSR aulista de 16,67%.
- `npx eslint lib/payroll-calc.ts tests/payroll-calc.test.mjs app/folha/GeneratePayrollModal.tsx app/folha/[id]/calculo/page.tsx app/dashboard/payroll/clt-check/CLTCheckForm.tsx`: passou.
- `npm test`: passou, 16 testes.
- `npm run typecheck`: passou apos tratamento de CPF duplicado.
- `npx eslint app/colaboradores/actions.ts app/colaboradores/AddEmployeeModal.tsx app/colaboradores/EditEmployeeModal.tsx`: passou com 1 warning preexistente de `<img>` em `EditEmployeeModal.tsx`.
- `npm test`: passou, 16 testes, apos tratamento de CPF duplicado.

## Follow-up

- Materias que o professor pode lecionar trocaram de campo livre para lista fixa de multipla escolha.
- A grade atual agora seleciona materia pela mesma lista oficial.
- O catalogo de materias passou a ser editavel em `Colaboradores`; o cadastro mostra apenas materias cadastradas no banco.
- Atribuicoes agora registram serie/turma e numero de aula inicial/final; Infantil fica como dia todo.
