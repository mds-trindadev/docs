# Visão
## Histórico de Versão
| Data | Versão | Modificação | Autor |
| --- | :---: | :---: | :---: |
| 19/11/2020 | 0.1 | Criação da versão inicial do documento | Irwin |
| 27/11/2020 | 0.2 | Atualização de todos os tópicos do documento | Yan |
## Introdução
Este documento estará repleto de dados que sustentarão o propósito, o contexto e a visão geral do produto, permitindo assim o entendimento do escopo do projeto.Assim, será explicado o problema evidenciado, a oportunidade encontrada, a descrição dos principais envolvidos, uma possível solução, suas principais funcionalidades e seus requisitos, para assim obter uma melhor compreensão do escopo e diminuir os riscos envolvidos.
### Escopo
Esse projeto tem como objetivo desenvolver uma aplicação web responsiva com a finalidade de auxiliar os estudantes da Universidade de Brasília no que tange a pesquisa de matérias no período de matrícula.
## Descrição do problema
| O problema é | que afeta | cujo impacto é | uma boa solução seria |
| --- | --- | --- | --- |
| A realização da consulta de disciplinas no período de matrícula. | Os estudantes em geral. | Os servidores do SIGAA ficarem sobrecarregados com a quantidade de acessos. | Criação de uma plataforma para realizar a pesquisa de disciplinas. Dessa forma, as pessoas não sobrecarregariam os servidores da Unb. |
## Descrição dos Envolvidos e dos Usuários 
### Resumo dos envolvidos
| Nome | Descrição | Responsabilidade |
| --- | --- | --- |
| Avaliador | Professor da disciplina de MDS. | Avaliar a qualidade do projeto desenvolvido pelo grupo de estudantes ao longo da disciplina. |
| Desenvolvedores | Estudantes da disciplina de MDS. | Criação da documentação e realização do desenvolvimento e testes do projeto. |
### Resumo dos usuários
| Nome | Descrição |
| --- | --- |
|  Estudantes da Universidade de Brasília  | Pessoas que estudam na Universidade de Brasília | 
### Principais Necessidades dos usuários e dos Envolvidos
| Usuário | Necessidade | Solução atual | Solução Proposta |
| --- | --- | --- | --- |
| Estudante da Universidade de Brasília | Realizar a matrícula nas disciplinas | Utilizar o sistema de buscas do SIGAA | Website para fazer as pesquisas das disciplinas |
### Ambiente dos usuários 
Os usuários poderão utilizar a aplicação por meio de navegadores desktop e mobile.
### Perfis dos Envolvidos
#### Equipe de Desenvolvimento de Software
| Representantes | Tipo | Responsabilidade | Critério de Sucesso | Envolvimento |
| --- | --- | --- | --- | --- |
| Irwin Schmitt, Lucas Sales Ribeiro, Nathan Fernandes Sales de Serra, Nilo Mendonça de Brito Júnior e Yan Andrade de Sena | Estudantes de MDS da Unb FGA | Criação da documentação e realização do desenvolvimento e testes do projeto | Completar o projeto proposto dentro do período estipulado e atendendo à todos os requisitos | Alto |
#### Avaliadores
| Representantes | Tipo | Responsabilidade | Critério de Sucesso | Envolvimento |
| --- | --- | --- | --- | --- |
| George Marsicano | Professor de MDS da Unb FGA | Avaliar a qualidade do projeto criado | Transmitir conhecimento sobre projetos de software | Baixo |
### Perfis dos Usuários
## Estudantes
| Representantes | Tipo | Responsabilidade | Critério de Sucesso | Envolvimento |
| --- | --- | --- | --- | --- |
| Estudantes da Unb | Estudantes de todos os cursos da Unb  | Realizar disciplinas matriculadas no período de matrículas | Aprender os conhecimentos nas ementas das disciplinas | Baixo |
## Visão geral do produto
### Perspectiva do produto
O site Minha Matrícula oferece um jeito fácil e prático de montar a grade horária dos alunos de graduação da UnB, através do histórico é recomendado matérias que são mais relevantes para a formação de cada aluno. A automatização do processo de escolha de disciplina do aluno fará com que esse processo seja mais assertivo e rápido, evitando que o aluno faça uma escolha errada que acarrete em um adiamento de disciplinas obrigatórias para a conclusão do curso.
### Resumo das capacidades
| Benefícios para o Cliente | Recursos de Suporte |
| --- | --- |
| Facilita o acesso às disciplinas que o aluno pode fazer. | É feito o uso de dados presentes no SIGAA para obter informações de cada curso, criando uma lista com as disciplinas que os alunos podem fazer |
| Rapidez e agilidade na hora de tomar decisão em qual disciplina escolher. | O site calcula disciplinas que serão melhores para o aluno cursar levando em conta a quantidade de disciplinas que uma determinada disciplina tranca, a quantidade de créditos e departamento da disciplina. |
| Busca disciplinas. | Filtrando através de quantidade de crédito, departamento e horários. É realizado uma consulta a  disciplinas. |
| Acesso às informações das disciplinas | Informações como quantidade de créditos, horário da disciplina, departamento e ementa serão disponíveis. |
### Suposições e dependências
O usuário deverá possuir um celular ou um computador com acesso à internet para acessar a aplicação.
## Recursos do Produto
### Buscar disciplinas
O buscador será uma ferramenta utilizada para os usuários encontrarem disciplinas, podendo ser utilizados múltiplos filtros:
Palavras-chave que estejam no nome da disciplina;
Seleção de um, vários ou todos os departamentos;
Seleção de um, vários ou todos os campi da UnB;
Seleção de horários disponíveis para a disciplina;
Seleção da quantidade de créditos da disciplina.
Cada disciplina encontrada deverá conter as informações: código, nome, pré-requisitos, equivalências, docente, horários, turmas, quantidade de vagas ofertadas e ocupadas, local e ementa.
### Montar grade Horária
As disciplinas listadas no buscador poderão ser selecionadas e agrupadas para que ao final da consulta o aluno possa visualizar essas disciplinas salvas.
#### Sugerir grade horária
O usuário poderá receber uma grade horária sugerida pelo sistema baseada no histórico escolar. O histórico será obtido através da seleção de matérias já cursadas ou através do envio de um arquivo PDF emitido pelo SIGAA.

A sugestão de disciplinas será feita através de uma ordem de prioridade de acordo com o fluxo de cada curso e com a maior cadeia de que cada matéria é pré-requisito.
## Restrições
Listagem de restrições externas e outras dependências:
Ter um aparelho celular ou um computador.
Conexão com a internet.
### Restrições de implementação
O sistema será implementado utilizando 2 principais frameworks, sendo eles o Flask para o back-end e o Vue JS para o front-end.
### Restrições externas
Dentre as restrições externas as que mais irão influenciar são a inexperiência com os frameworks Flask e Vue JS, além de possíveis transtornos da equipe de desenvolvimento.
## Requisitos do Produto
Lista de Requisitos
| Código | Descrição | Prioridade |
| --- | --- | :---: |
| RF01 | O usuário poderá realizar consultas de disciplinas filtrando por palavras-chave, departamentos, camp, horários e quantidade de créditos. | Alta |
| RF02 | O sistema deve ser capaz de exibir informações das matérias ofertadas no semestre. | Alta |
| RF03 | O sistema deve ser capaz de agrupar as disciplinas selecionadas. | Alta |
| RF04 | O sistema deve ser capaz de exibir as disciplinas obrigatórias que podem e as que ainda não podem ser cursadas a partir da seleção das matérias já cursadas. | Alta |
| RF05 | O sistema deve ser capaz de receber um arquivo em PDF do histórico do estudante. | Baixa |
| RF06 | O sistema deve ser capaz de exibir as disciplinas obrigatórias já cursadas, as que podem ser cursadas e as que ainda não podem ser cursadas a partir do envio do histórico em  PDF. | Baixa |
| RF07 | O sistema deve ser capaz de sugerir uma grade horária baseada no histórico escolar do estudante. | Baixa |
| RNF01 | O sistema deverá ser implementado em uma plataforma web para acesso através de navegador. | Alta |
| RNF02 | O sistema não vai possuir um sistema de login. | Alta |
| RNF03 | O sistema não será capaz de realizar a matrícula nas disciplinas. | Alta |