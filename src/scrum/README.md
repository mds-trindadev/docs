# Scrum

## Sprint 1
### Repositório
Criação da organização e do repositório Minha Matrícula no GitHub.
### ZenHub
Foi implementada a ferramenta de gerenciamento de projetos ágeis ZenHub. Com ela é possível controlar, através de um quadro Kanban, todas as atividades do processo de desenvolvimento, como datas, responsáveis, área, requisito, progresso etc. Também são gerados relatórios de desempenho da equipe, disponível no link, com a utilização da extensão para navegador.
### Protótipo
Foi feito um protótipo do projeto na plataforma Figma, levando em consideração os requisitos levantados. O protótipo está em constante aprimoramento.
// imagem //
### Capacitação da equipe
A equipe se reuniu para a capacitação e nivelamento no Git — sistema de controle de versões utilizado, e no Firebase — banco de dados utilizado no projeto.
### Backend
O diretório e a branch relacionado ao backend foram submetidos ao repositório, assim como a instalação do Flask e de outras dependências. O crawler responsável por extrair os dados das disciplinas começou a ser testado.

O banco de dados foi configurado.
## Sprint 2
### Documentação
O documento Trabalho em Equipe 1 foi formatado revisado e complementado com as disciplinas de software que estavam faltando.
### Backend
Nessa sprint foi definida a lógica da recomendação de grade horária baseada no histórico de cada estudante. As disciplinas serão escolhidas de acordo com uma ordem de prioridade definida na ordem:

1. Obrigatoriedade da disciplina;

2. Grau de trancamento: quantos semestres uma disciplina tranca numa cadeia de pré-requisitos;

3. Semestre da disciplina no fluxo.

Foi criado um diagrama de classes em UML para orientação do Backend.
// imagem //
O diretório relacionado ao Backend no repositório foi organizado de acordo com boas práticas de submissão de arquivos.

O backend foi encapsulado em um ambiente virtual com a utilização do pacote Virtualenv para maior estabilidade do ambiente de desenvolvimento.
### Frontend
Foi feita a instalação do Vue.js, Vuetify e a submissão no repositório, incluindo orientações para a execução do ambiente.

O repositório foi organizado nos diretórios frontend e backend a fim de facilitar a organização e integração entre o Flask e o Vue.js.

Foi iniciado o desenvolvimento da tela de buscas durante um pair programming com outros membros com o objetivo de capacitar os desenvolvedores.
## Sprint 3
### Backend
Foram definidas quais requisições REST precisam ser feitas.
Foi criado as classes e implementações dos métodos básicos.
### Crawler
Conseguimos configurar o crawler para extrair os dados de cada curso. Com o crawler devidamente configurado, pegar os dados das disciplinas de cada curso se torna uma atividade mais simples e fácil.
Alteramos o repositório onde o crawler se encontrava.
### Insomnia
Conseguimos configurar o Insomnia
### Frontend
Capacitação em Vue.js para toda a equipe.
Foi criado as páginas e as rotas no Vue.js.
Axios foi implementado junto com as rotas no Flask (Tanto no Backend quanto no Frontend).
## Sprint 4