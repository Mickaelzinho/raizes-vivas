# RAÍZES VIVAS — Quilombos Contemporâneos e Sustentabilidade

**Projeto escolar:** Consciência Negra e Tecnologia  
**Disciplina:** Desenvolvimento Web (HTML5, CSS3 e JavaScript)  
**Tema sorteado:** 12 — Quilombos Contemporâneos e Sustentabilidade  
**Formato:** Landing Page (página única)  
**Ano:** 2026

## Objetivo

Divulgar informações sobre a história e o presente das comunidades quilombolas no Brasil, a importância de seus territórios, suas contribuições à sustentabilidade e desafios ligados à garantia de direitos.

## Como abrir o projeto

1. Extraia o ZIP, preservando a estrutura de pastas.
2. Abra o arquivo `index.html` no navegador.
3. Explore as seções, clique nos botões de informações adicionais, alterne o tema e responda ao quiz.

## Estrutura dos arquivos

```text
raizes-vivas/
├── index.html
├── style.css
├── script.js
└── README.md
```

O site usa três fotos reais externas da Wikimedia Commons, que precisam de conexão com a internet. Os ícones dos cards estão incorporados diretamente no HTML, sem arquivos de imagem separados. **Aviso:** o enunciado escolar solicita três imagens salvas dentro de `img/` e com caminhos relativos. Esta versão simplificada facilita o GitHub, mas **não atende integralmente esse requisito**. Para cumprir toda a rubrica, use a versão anterior com pasta `img/`.

## Funcionalidades em JavaScript

- **Modo claro/escuro:** botão com `onclick="alternarTema()"`, preserva preferência no navegador quando permitido.
- **Mostrar/esconder informações:** botões `onclick="alternarDetalhes(...)"` em diferentes seções.
- **Quiz:** botões `onclick="responder(...)"` mostram feedback e destacam a resposta correta; opção de tentar novamente.
- **Menu mobile:** botão `onclick="alternarMenu()"` abre e fecha a navegação em telas menores.

## Acessibilidade e HTML semântico

O site usa `header`, `nav`, `main`, `section`, `article`, `figure` e `footer`, descrições `alt` nas três imagens, link para pular a navegação, controle `aria-expanded`, mensagem de quiz `aria-live`, navegação por teclado e layout adaptável a telas pequenas.

## Fontes da pesquisa

1. IBGE. **O Brasil Quilombola — Censo Demográfico 2022**. https://www.ibge.gov.br/brasil-quilombola/
2. Ministério da Igualdade Racial. **Política Nacional de Gestão Territorial e Ambiental Quilombola (PNGTAQ)**. https://www.gov.br/igualdaderacial/pt-br/assuntos/programas-e-projetos/politica-nacional-de-gestao-territorial-e-ambiental-quilombola-pngtaq
3. Fundação Cultural Palmares. **Certificação Quilombola**. https://www.gov.br/palmares/pt-br/departamentos/protecao-preservacao-e-articulacao/certificacao-quilombola
4. Brasil. **Constituição Federal de 1988, ADCT, art. 68**. https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm
5. Wikimedia Commons. **Kalunga quilombo (12702195824).jpg**. https://commons.wikimedia.org/wiki/File:Kalunga_quilombo_(12702195824).jpg
6. Wikimedia Commons. **Dona Gertrudes e neta no Quilombo (4246582200).jpg**. https://commons.wikimedia.org/wiki/File:Dona_Gertrudes_e_neta_no_Quilombo_(4246582200).jpg
7. Wikimedia Commons / Ministério do Desenvolvimento Social. **Quilombo em Goiás (16077290079).jpg**. https://commons.wikimedia.org/wiki/File:Quilombo_em_Goi%C3%A1s_(16077290079).jpg

## Relatório obrigatório de uso de Inteligência Artificial

**1. Qual(is) ferramenta(s) de IA foram utilizadas pelo grupo?**

Foi utilizado o ChatGPT (OpenAI), como ferramenta de apoio na pesquisa, na estruturação do site e no desenvolvimento dos arquivos HTML, CSS e JavaScript.

**2. Para que foram utilizadas?**

O ChatGPT auxiliou no planejamento da página, na organização do conteúdo em seções, na elaboração inicial de textos educativos com links para fontes públicas, na seleção do tema, na estilização responsiva e na programação dos botões e do quiz.

**3. No que a IA foi realmente útil e onde ela falhou ou exigiu intervenção humana?**

A IA foi especialmente útil para estruturar os arquivos e acelerar a criação do layout e da interatividade. Entretanto, o conteúdo histórico e os dados precisam ser conferidos nas fontes originais, pois respostas de IA podem conter erros ou informações desatualizadas. A avaliação crítica, a revisão, os testes no navegador e a decisão sobre o que publicar cabem aos integrantes. **Antes da entrega, completem esta resposta com os testes e alterações que vocês realmente fizeram**; não afirmem ter realizado verificações que não aconteceram.

## Como publicar no GitHub Pages

1. Faça login em https://github.com/ e crie um repositório **público**, por exemplo, `raizes-vivas`.
2. Clique em **Add file > Upload files** e envie `index.html`, `style.css`, `script.js`, `README.md` (não é necessário enviar pasta de imagens nesta versão).
3. Faça o commit dos arquivos.
4. Abra **Settings > Pages** no repositório.
5. Em **Build and deployment**, selecione **Deploy from a branch**, escolha **main** e **/(root)** e salve.
6. Quando o Pages terminar de publicar, abra `https://SEU-USUARIO.github.io/raizes-vivas/` (substitua pelo seu usuário e nome de repositório).
7. Teste imagens, navegação e botões na URL publicada.

**Atenção:** este ZIP **não foi publicado automaticamente**. O upload e a ativação do GitHub Pages precisam ser feitos na conta do aluno.

## Dados da equipe (preencher antes de entregar)

- Integrante(s): __________________________
- Turma: ________________________________
- Repositório GitHub: _____________________
- Link público GitHub Pages: ______________

*O trabalho trata das comunidades quilombolas com respeito, sem generalizar experiências distintas e sem confundir ilustrações simbólicas com registros fotográficos.*