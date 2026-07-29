# Relatórios detalhados de pagamento CLT e PJ

Data: 29 de julho de 2026
Status: aprovado para planejamento

## 1. Para que serve

Esta mudança transforma os relatórios de pagamento em memórias de cálculo consultáveis. O usuário continuará vendo um resumo compacto de cada pagamento, mas poderá abrir os detalhes que explicam como o valor líquido foi formado. Na impressão, todas as memórias serão exibidas integralmente.

## 2. Contexto atual

- A rota `app/folha/[id]/calculo` já apresenta uma memória detalhada com dados do colaborador, proventos, descontos, valor líquido e, quando aplicável, FGTS.
- O Relatório Mensal e o relatório Por Colaborador exibem somente valores resumidos em tabelas.
- A página de cálculo contém regras de apresentação distintas para CLT, PJ e professor aulista.
- A mesma memória de cálculo não deve ser reimplementada de forma independente nos relatórios, pois isso criaria risco de divergência futura.

## 3. Escopo

### Incluído

- Relatório Mensal em `app/relatorios`.
- Relatório Por Colaborador em `app/relatorios`.
- Página existente de cálculo individual em `app/folha/[id]/calculo`, apenas na medida necessária para compartilhar a mesma lógica e apresentação.
- Visualização em tela e impressão.
- Folhas CLT e PJ.

### Fora do escopo

- Relatório Cadastral de Funcionários.
- Alteração de fórmulas, percentuais ou regras salariais.
- Alteração do banco de dados ou migração Prisma.
- Rescisões detalhadas no mesmo formato da folha mensal.
- Criação de novas rubricas ou novos dados cadastrais.
- Mudanças nos PDFs de conferência e importação já existentes.

## 4. Requisitos funcionais

- **FR-1 — Detalhamento no Relatório Mensal:** cada pagamento regular deve oferecer a ação `Ver detalhes` e revelar sua memória de cálculo dentro do próprio relatório.
- **FR-2 — Detalhamento Por Colaborador:** cada competência de pagamento regular deve oferecer a ação `Ver detalhes` e revelar sua memória de cálculo dentro do próprio relatório.
- **FR-3 — Expansão independente:** abrir ou fechar um pagamento não deve alterar o estado dos demais pagamentos exibidos.
- **FR-4 — Impressão integral:** ao imprimir qualquer um dos dois relatórios, todas as memórias de pagamentos regulares devem aparecer abertas, independentemente do estado de expansão na tela.
- **FR-5 — Fonte única:** a página de cálculo individual e os relatórios devem usar a mesma função de composição de rubricas e o mesmo componente visual de detalhamento.
- **FR-6 — CLT fiel ao cálculo:** uma folha CLT deve mostrar somente os itens que a página de cálculo individual mostra para aquela folha, incluindo encargos aplicáveis.
- **FR-7 — PJ fiel ao cálculo:** uma folha PJ deve mostrar somente os itens que a página de cálculo individual mostra para aquela folha; itens exclusivos de CLT não devem ser adicionados com valor zero ou com a indicação de não aplicável.
- **FR-8 — Aulista fiel ao cálculo:** quando o colaborador for professor aulista CLT, a memória deve preservar aulas do mês, DSR e hora atividade conforme as regras já existentes.
- **FR-9 — Totais explicados:** cada memória deve apresentar total de proventos, total de descontos, valor líquido e FGTS quando aplicável.
- **FR-10 — Resumo preservado:** nome, cargo/contrato ou competência, proventos, descontos e líquido devem continuar disponíveis no estado recolhido, conforme o contexto do relatório.
- **FR-11 — Rescisões preservadas:** linhas de rescisão devem continuar identificadas e resumidas como hoje; não receberão uma memória de folha regular nesta entrega.
- **FR-12 — Estados atuais preservados:** carregamento, lista vazia, status de pagamento e falha de consulta devem manter o comportamento atual, sem bloquear outras abas do relatório.

## 5. Requisitos não funcionais e restrições

- **NFR-1 — Consistência:** não pode haver duas implementações independentes das regras de visibilidade e descrição das rubricas.
- **NFR-2 — Acessibilidade:** a ação de expansão deve ser um botão operável por teclado, com `aria-expanded` e associação ao painel controlado.
- **NFR-3 — Responsividade:** em telas menores, os blocos de proventos e descontos devem empilhar sem rolagem horizontal obrigatória para leitura da memória.
- **NFR-4 — Impressão:** o conteúdo deve ser legível em A4 e não pode depender de interação ou JavaScript durante a impressão.
- **NFR-5 — Segurança:** as server actions devem continuar exigindo sessão autenticada e retornar apenas os campos necessários ao relatório.
- **NFR-6 — Compatibilidade:** a implementação deve funcionar com Next.js 16, React 19 e o conjunto atual de dependências, sem adicionar biblioteca de interface.
- **CON-1 — Sem mudança de cálculo:** os valores persistidos na folha continuam sendo a fonte dos totais; a extração não pode recalcular impostos ou alterar valores gravados.
- **CON-2 — Sem migração:** o schema Prisma não será modificado.
- **CON-3 — Worktree existente:** alterações não relacionadas já presentes em `app/api/generate-payroll-pdf`, `app/api/upload-payroll-pdf` e `app/dashboard/payroll/import-check` devem permanecer intactas.

## 6. Design de interação

### Relatório Mensal

Cada linha mantém o resumo atual e recebe um botão `Ver detalhes`. Quando aberto, um painel imediatamente abaixo mostra:

1. dados-base do colaborador e do contrato;
2. proventos com título, explicação e valor;
3. total de proventos;
4. descontos com título, explicação e valor;
5. total de descontos;
6. valor líquido;
7. FGTS, somente quando aplicável ao cálculo.

O botão alterna para `Ocultar detalhes` no estado aberto. Várias linhas podem permanecer abertas ao mesmo tempo.

### Por Colaborador

O cabeçalho do colaborador permanece único. Cada competência da tabela recebe a mesma expansão e exibe a memória correspondente ao mês selecionado.

### Impressão

- Botões e controles interativos ficam ocultos.
- Todos os painéis de pagamentos regulares ficam visíveis por CSS de impressão, mesmo quando recolhidos na tela.
- Cada memória deve evitar que seu cabeçalho se separe do primeiro bloco; quebras entre blocos completos são permitidas quando necessárias para não cortar conteúdo.

## 7. Arquitetura

### 7.1 Modelo puro de memória de cálculo

Criar um módulo compartilhado, candidato a `lib/payroll-breakdown.ts`, sem dependência de React, Prisma ou APIs do servidor. Ele receberá somente dados serializáveis do pagamento e do colaborador e retornará um view model:

- identidade e dados-base;
- competência e status;
- lista de proventos;
- lista de descontos;
- totais persistidos;
- encargos complementares aplicáveis;
- rótulos e descrições necessárias à apresentação.

Cada item terá identificador estável, título, descrição opcional e valor. A função deve reproduzir as condições hoje existentes em `app/folha/[id]/calculo/page.tsx`.

### 7.2 Componente visual compartilhado

Criar um componente candidato a `app/components/PayrollCalculationDetails.tsx`. Ele receberá exclusivamente o view model e opções de variante:

- `standalone`: página individual, com cartões e destaque equivalentes à tela atual;
- `embedded`: painel compacto usado dentro dos relatórios.

O componente não consulta banco, não contém regra salarial e não controla qual linha do relatório está aberta.

### 7.3 Controle de expansão

`ReportClient` manterá um conjunto de IDs expandidos. O painel continuará montado no DOM com classe de visibilidade que permita `print:block`; na tela, somente IDs presentes no conjunto serão exibidos. A ação atualizará apenas o ID selecionado.

### 7.4 Dados dos relatórios

As ações de Relatórios devem selecionar explicitamente os campos já disponíveis e necessários ao view model, incluindo:

- pagamento: salário-base, dias trabalhados, transporte, faltas, descontos, bônus, proventos brutos, INSS, IRRF, FGTS, adiantamento, horas de aulista, líquido, status, mês e ano;
- colaborador: nome, cargo, tipo de contrato, salário-base cadastral, valor hora-aula e indicador de aulista.

Não será introduzida uma nova consulta por expansão; todos os dados necessários chegam junto ao relatório, evitando o padrão N+1.

## 8. Regras de composição preservadas

- Professor aulista CLT: aulas do mês, DSR e hora atividade conforme `calculateTeacherComponents`.
- Professor CLT não aulista: salário do mês e hora atividade quando a regra atual a exibe.
- PJ: itens efetivamente exibidos na página de cálculo do PJ; não mostrar INSS, IRRF ou FGTS quando não fizerem parte do cálculo.
- Transporte, bônus, faltas, desconto de VT, adiantamento e outros descontos: mostrar conforme as condições já aplicadas na memória atual.
- Totais de proventos, descontos e líquido devem usar os campos persistidos que já sustentam a página individual.

## 9. Tratamento de erros e casos especiais

- Pagamentos regulares sem dados opcionais devem produzir listas válidas, sem `NaN`, `undefined` ou valores formatados incorretamente.
- Valor zero segue a regra atual de visibilidade de cada rubrica; a extração não altera essa política.
- Uma rescisão não será enviada ao construtor de memória de folha regular.
- Falha de autorização continua lançando `Não autorizado`.
- Falha de consulta continua retornando a estrutura vazia esperada pela interface atual e deve ser registrada no servidor.

## 10. Estratégia de testes

O desenvolvimento seguirá TDD.

1. Teste unitário vermelho para uma folha CLT aulista, verificando rubricas, descrições, totais e FGTS.
2. Implementação mínima do construtor até o teste ficar verde.
3. Teste unitário vermelho para uma folha PJ, verificando itens reais e ausência de rubricas exclusivas de CLT.
4. Implementação mínima e refatoração da composição compartilhada.
5. Testes para valores opcionais e rubricas condicionais relevantes.
6. Verificação da expansão independente e dos atributos de acessibilidade na camada de interface, pela estratégia suportada pelo projeto.
7. Verificação visual da impressão com linhas recolhidas na tela e abertas no preview de impressão.

Gates obrigatórios:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

## 11. Critérios de aceite

- **AC-1:** no Relatório Mensal, clicar em `Ver detalhes` abre a memória do colaborador selecionado sem abrir as demais.
- **AC-2:** em Por Colaborador, clicar em `Ver detalhes` abre a memória da competência selecionada.
- **AC-3:** a memória CLT apresenta as mesmas rubricas e valores da página individual para a mesma folha.
- **AC-4:** a memória PJ apresenta as mesmas rubricas e valores da página individual e não apresenta rubricas exclusivas de CLT.
- **AC-5:** o preview de impressão exibe todas as memórias regulares, mesmo que estejam fechadas na tela.
- **AC-6:** a página individual continua visualmente equivalente e passa a consumir a composição compartilhada.
- **AC-7:** nenhuma consulta adicional é feita ao expandir uma linha.
- **AC-8:** rescisões e o Relatório Cadastral permanecem funcionais e sem mudança de escopo.
- **AC-9:** os quatro gates de qualidade são concluídos com sucesso.

## 12. Arquivos candidatos

- `lib/payroll-breakdown.ts` — composição pura da memória.
- `app/components/PayrollCalculationDetails.tsx` — apresentação compartilhada.
- `app/folha/[id]/calculo/page.tsx` — adoção do componente compartilhado.
- `app/relatorios/actions.ts` — seleção e serialização dos dados necessários.
- `app/relatorios/ReportClient.tsx` — expansão, painel embutido e impressão.
- `tests/payroll-breakdown.test.mjs` — cobertura CLT/PJ e casos condicionais.

Os nomes finais podem ser ajustados no plano de implementação, sem alterar as responsabilidades definidas aqui.
