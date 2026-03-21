# yt-seeker (@yt-seeker) 
---
description: Buscador de Vídeos do YouTube (Pesquisa + Transcrição + Análise)
---

1. **Elicitação de Parâmetros (Obrigatório):**
   - Perguntar ao usuário: "Qual o **tema/assunto** da pesquisa e qual o **período** (ex: últimos 6 meses, 2024, etc)?"
   - Aguardar a resposta com os critérios.

2. **Busca e Identificação:**
   - Usar `search_web` para encontrar os 20 vídeos mais relevantes sobre o tema no período especificado.
   - **FILTRO OBRIGATÓRIO:** Selecionar apenas vídeos que possuam no mínimo **50 comentários**.
   - **EXTRAÇÃO DE LINKS:** Você deve extrair o **Link Direto** do vídeo (Ex: `https://www.youtube.com/watch?v=VIDEO_ID`).
   - **PROIBIÇÃO:** Nunca use links de busca (Ex: `youtube.com/results?search_query=...`) nos relatórios.
   - Extrair URLs, títulos e (se disponível) contagem exata de comentários.

3. **Processamento de Transcrições:**
   - Para cada vídeo identificado:
     - Usar NotebookLM para extrair a transcrição completa.
     - Formatar os dados no padrão:
       ```markdown
       ---
       criado: [DATA_ATUAL]
       tema: [TEMA]
       ---
       ### [TITULO_DO_VIDEO]
       [URL_DO_VIDEO]

       [TRANSCRICAO_COM_TIMESTAMPS_SE_POSSIVEL]
       ```
     - Salvar em: `g:\Meu Drive\Obsidian\Vitor Samurai 2 cerebro advance\Projetos\Profissional\Samurai do Copy\Agentes Imobiliários\Pesquisa Agentes\Analise de comentários de video do YT\[NOME_DO_VIDEO].md`

4. **Ativação da Análise:**
   - Após salvar os arquivos, carregar o agente `/yt` (Analista Psicográfico Digital).
   - Comandar o agente: "Analise os comentários (ou transcrição caso comentários não estejam disponíveis em texto puro) dos vídeos recém-salvos para extrair Dores, Desejos, Medos e Sentimentos seguindo o framework FW-ANALISE-20251112-001."

5. **Finalização:**
   - Apresentar o relatório consolidado ao usuário.
