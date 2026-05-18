# Story: Relatorio cadastral de funcionarios

Status: Ready for Review

## Acceptance Criteria

- [x] A pagina de relatorios tem uma aba para relatorio cadastral de funcionarios.
- [x] O relatorio lista apenas funcionarios ativos por padrao.
- [x] Cada funcionario mostra as informacoes atuais registradas no cadastro.
- [x] O relatorio inclui identificacao, remuneracao, beneficios, pagamento, area pedagogica e historico de reajustes.
- [x] Campos vazios aparecem como `Nao informado`, sem valores inventados.
- [x] O relatorio pode ser impresso em formato A4 pelo navegador.
- [x] A lista de colaboradores tem um botao de imprimir cadastro por funcionario.
- [x] O botao abre um documento individual pronto para imprimir/salvar em PDF.
- [x] O documento individual abre na mesma aba autenticada e aciona a impressao automaticamente.
- [x] O botao de cadastro gera um PDF nativo do app, nao uma impressao da tela HTML.
- [x] Rodar quality gates locais e registrar resultado apos o ajuste do fluxo individual.

## Tasks

- [x] Criar server action para carregar dados cadastrais ativos.
- [x] Adicionar aba de cadastro em `Relatorios`.
- [x] Renderizar secoes cadastrais por funcionario.
- [x] Reutilizar labels de dias da semana do helper de agenda.
- [x] Criar rota individual de relatorio cadastral para cada colaborador.
- [x] Adicionar botao de impressao na linha de acoes do colaborador.
- [x] Remover abertura em nova guia e ativar impressao automatica ao carregar o documento.
- [x] Criar endpoint PDF nativo para cadastro individual do colaborador.
- [x] Apontar o botao de impressao para o PDF gerado pelo endpoint.
- [x] Rodar quality gates locais apos o ajuste do fluxo individual.

## File List

- `app/relatorios/actions.ts`
- `app/relatorios/ReportClient.tsx`
- `app/colaboradores/page.tsx`
- `app/api/generate-employee-registration-pdf/route.tsx`
- `app/colaboradores/[id]/relatorio/page.tsx`
- `app/colaboradores/[id]/relatorio/PrintButton.tsx`
- `docs/stories/2026-05-17-relatorio-cadastral-funcionarios.md`

## Quality Gates

- `npm test`: passou, 16 testes.
- `npm run typecheck`: passou.
- `npx eslint app/relatorios/actions.ts app/relatorios/ReportClient.tsx`: passou com 4 warnings de `<img>` no `ReportClient.tsx`.
- `npm test`: passou, 16 testes, apos adicionar rota individual.
- `npm run typecheck`: passou apos adicionar rota individual.
- `npx eslint app/colaboradores/page.tsx app/colaboradores/[id]/relatorio/page.tsx app/colaboradores/[id]/relatorio/PrintButton.tsx app/relatorios/actions.ts app/relatorios/ReportClient.tsx`: passou com 7 warnings de `<img>`.
- `npm run typecheck`: passou apos corrigir abertura em nova guia.
- `npx eslint app/colaboradores/page.tsx app/colaboradores/[id]/relatorio/page.tsx app/colaboradores/[id]/relatorio/PrintButton.tsx`: passou com 3 warnings de `<img>`.
- `npm run typecheck`: passou apos criar endpoint PDF nativo.
- `npx eslint app/api/generate-employee-registration-pdf/route.tsx app/colaboradores/page.tsx`: passou com 1 warning de `<img>` preexistente na lista de colaboradores.
