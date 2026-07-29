# Story: Relatorios detalhados CLT e PJ

Status: In Progress

## Objetivo

Como usuario autorizado da folha, quero consultar e imprimir a memoria detalhada
dos calculos no Relatorio Mensal e no Relatorio por Colaborador, para conferir a
composicao da folha por pessoa e competencia sem perder as regras distintas de
vinculos CLT e PJ.

## Acceptance Criteria

- [ ] AC-1 — No Relatorio Mensal, cada colaborador possui uma expansao individual
  que apresenta a memoria detalhada do calculo daquela competencia.
- [ ] AC-2 — No Relatorio por Colaborador, cada competencia disponivel possui uma
  expansao individual com a memoria detalhada do calculo correspondente.
- [ ] AC-3 — Para colaboradores CLT, a memoria detalhada apresenta fielmente as
  verbas, bases, descontos, encargos e totais efetivamente calculados na folha.
- [ ] AC-4 — Para colaboradores PJ, a memoria detalhada apresenta apenas os itens
  aplicaveis ao contrato PJ e nao exibe rubricas, bases ou descontos exclusivos de CLT.
- [ ] AC-5 — A impressao do Relatorio Mensal e do Relatorio por Colaborador inclui
  integralmente as expansoes abertas, sem cortar ou ocultar a memoria detalhada.
- [ ] AC-6 — A pagina individual do colaborador reutiliza a mesma apresentacao de
  memoria detalhada usada nos relatorios, mantendo dados, regras e textos consistentes.
- [ ] AC-7 — Depois que os dados do relatorio forem carregados, abrir ou imprimir a
  memoria detalhada nao dispara consulta adicional ao banco nem requisicao de calculo.
- [ ] AC-8 — A mudanca preserva os comportamentos atuais de rescisao e de relatorio
  cadastral, inclusive seus dados, rotas e acoes de impressao.
- [ ] AC-9 — Antes de encerrar a implementacao, os quality gates definidos para os
  arquivos alterados passam e os cenarios CLT, PJ, rescisao, cadastral e impressao
  sao verificados e registrados nesta story.

## Restrições

- Nao alterar formulas de calculo, schema do banco ou a geracao de PDF nesta story.
- A implementacao deve partir de testes (TDD) para qualquer logica nova ou alterada.
- Esta story documenta o comportamento esperado; nao contem implementacao de codigo.

## Checklist de implementação

- [ ] Mapear os dados de memoria ja presentes no carregamento dos relatorios e os
  campos necessarios para CLT e PJ.
- [ ] Criar testes de caracterizacao para a memoria CLT, a memoria PJ e a ausencia
  de nova consulta ao expandir ou imprimir.
- [ ] Extrair ou criar o componente compartilhado da memoria detalhada.
- [ ] Adicionar a expansao individual no Relatorio Mensal.
- [ ] Adicionar a expansao por competencia no Relatorio por Colaborador.
- [ ] Reutilizar o componente na pagina individual do colaborador.
- [ ] Ajustar estilos de impressao para manter a memoria aberta e integral.
- [ ] Verificar manualmente CLT, PJ, rescisao, relatorio cadastral e impressao.
- [ ] Executar e registrar testes, typecheck, lint e demais quality gates aplicaveis.

## Dev Agent Record

### Debug Log

- 2026-07-29 — Story criada; ainda nao ha investigacao ou falha de implementacao a registrar.

### Completion Notes

- Em andamento. A implementacao deve respeitar os criterios AC-1 a AC-9 e as
  restricoes desta story.
- TDD nao se aplica a criacao deste documento; passa a ser obrigatorio ao iniciar
  alteracoes de logica ou interface.

### File List

- `docs/stories/2026-07-29-relatorios-detalhados-clt-pj.md`

## Quality Gates

- Pendente: executar apos a implementacao de codigo.
