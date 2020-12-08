# Arquitetura
## Histórico de Versão
| Data | Versão | Modificação | Autor |
| --- | :---: | :---: | :---: |
| 19/11/2020 | 0.1 | Criação da versão inicial do documento | Irwin |
| 27/11/2020 | 0.2 | Atualização de todos os tópicos do documento | Yan |
| 03/12/2020 | 0.3 | Inserção do Diagrama de Classes | Yan |
## Introdução 
### Objetivo
Este documento oferece uma visão geral arquitetural do sistema que será implementado, permitindo assim que os envolvidos no projeto conheçam como a aplicação será subdivida e quais serão as funções de cada componente.
Outro objetivo desse documento é elucidar quais foram as motivações que levaram a equipe a tomar decisões a respeito dessa arquitetura.
### Escopo
Esse documento aplica-se ao projeto Minha Matrícula, um sistema que auxilia a consulta de disciplina nos períodos de matrícula da Universidade de Brasília. Esse projeto será desenvolvido pelos alunos da disciplina Métodos de Desenvolvimento de Software, da Universidade de Brasília - Campus Gama.
## Representação Arquitetural
### Firebase
O Firebase é uma plataforma móvel desenvolvida pela Google para a criação de apps em alta qualidade. Por não ser pago e ser intuitivo de utilizar escolhemos para ser o nosso banco de dados, uma função importante que utilizamos é a: Realtime Database: que armazena e sincroniza base de dados em tempo real.
### Flask
O Flask é um é um micro-framework multiplataforma que provê um modelo simples para o desenvolvimento web. Por ser um micro-framework, ele possui uma estrutura muito mais simples quando comparado a um Framework convencional. As principais vantagens do Flask são a simplicidade, rapidez e altamente personalizável.
### Vue.js
O Vue.js é um framework para a criação de interfaces para o usuário. O Vue.js, desde a sua concepção, busca ser simples e objetivo, o que o deixa com uma baixa curva de aprendizagem, ou seja, demora-se menos tempo para uma equipe aprender o Vue.js do que outros frameworks.
## Metas e Restrições arquiteturais
### Suportabilidadde
O sistema web poderá ser utilizada sem grandes problemas pelos principais navegadores modernos da atualidade, no entanto o enfoque será para o Google Chrome, tanto sua versão desktop quanto sua versão mobile.
### Usabilidade
O sistema deverá ser intuitivo e de simples uso, de forma que seja rápido e prático realizar a consulta das disciplinas da UnB e elaborar grades horárias.
### Ferramentas de Desenvolvimento
O projeto será desenvolvido em Python (versão 3.7), utilizando o framework Flask (versão 1.1.2), em conjunto com o framework Vue, um framework JavaScript para criação de interfaces. Também será utilizado o Firebase (versão 4.4.0 para Python).
### Confiabilidade
O sistema terá uma cobertura mínima de testes de 90%, buscando garantir que suas funcionalidades foram suficientemente testadas.
## Visão de implementação
### Diagrama de Classes
O diagrama de classe é uma representação estática para descrever a arquitetura de um projeto. Tal documento tem como objetivo principal documentar, de formar visual, as fases de desenvolvimento do software. Ao analisar o diagrama abaixo é possível mapear, de forma clara e objetiva, a estrutura do projeto Acácia em nível macro e auxiliar no entendimento do escopo. Durante o processo de desenvolvimento do documento a Linguagem de Modelagem Unificada (UML) foi utilizada.
![Alt text](/Diagrama.png)
