# Desenho de relatórios e painéis de controle de dados gerenciais - Grupo Kombi

## Introdução
Atualmente, a Volkswagen enfrenta o desafio de gerenciar informações sobre a saúde e desempenho dos colaboradores, nas quais estão dispersas em várias fontes e sistemas. Isso resulta em ineficiências operacionais, dificuldades na tomada de decisões e riscos associados à falta de integração de dados. Com isso, eles buscam acelerar o processo de acesso a dados críticos para que possam tomar decisões informadas e estratégicas de maneira eficiente.

A criação de um dashboard é um dos objetivos específicos deste projeto, onde será possível visualizar um conjunto de insights e dados analíticos. Esse painel fornecerá uma interface simples e intuitiva para que os usuários visualizem e explorem as informações de maneira eficaz. O Front-end será desenvolvido desenvolvido com Angular e TypeScript. Abaixo será fornecida instruções para inicializar, desenvolver e executar um front-end Angular 17 com Node 20.11.1 em Docker. 

## Pré-requisitos
- Node.js e npm instalados: O Angular requer que o Node.js e o Node Package Manager (npm) estejam instalados em seu sistema.
- Angular CLI: É necessário ter o Angular CLI para gerar o projeto Angular e para executar as várias tarefas de desenvolvimento, como servir a aplicação localmente, gerar componentes, entre outras.
- IDE: Um ambiente de desenvolvimento para o código, como Visual Studio Code, é necessário para escrever e editar o código-fonte.

## Inicialização do projeto
### Obtendo o código

- Clone o repositório do projeto:

```bash
git clone https://github.com/Inteli-College/2024-T0004-SI09-G04-DASHBOARD
```

- Ou faça o download do código-fonte e descompacte-o.

## Instalação das dependências

- Navegue até a pasta do projeto clonado ou descompactado e execute o seguinte comando para instalar as dependências necessárias:
```bash
cd nome-do-projeto
npm install
```

## Execução da aplicação
Após a instalação das dependências, inicie o servidor de desenvolvimento com o comando:

```bash
ng serve
```
Por padrão, a aplicação Angular estará acessível em http://localhost:4200. Você pode abrir esse endereço em um navegador para visualizar a aplicação.


## Estrutura de pastas
```markdown
├── node_modules
├── src
│   ├── app
│   │   ├── components
│   │   │   └── ...
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── ...
│   ├── assets
│   │   ├── .gitkeep
│   │   ├── button-doubt.png
│   │   ├── favicon.ico
│   │   └── ...
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── styles.scss
│   └── ...
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── server.ts
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Integrantes do projeto

- [João Tourinho](https://www.linkedin.com/in/jo%C3%A3o-tourinho-marques-1b64b2232/)
- [Kathlyn Diwan](https://www.linkedin.com/in/kathlyndiwan/)
- [Lucas Britto](https://www.linkedin.com/in/lucas-britto-376665208/)
- [Rafael Moritz](https://www.linkedin.com/in/rafael-moritz/)
- [Sophia Dias](https://www.linkedin.com/in/sophia-dias/)
- [Thainá Lima](https://www.linkedin.com/in/thainadedeus/)

## Demais itens

### Tecnologias utilizadas

- Node.js: Ambiente de execução para JavaScript no lado do servidor, utilizado para rodar a aplicação Angular e outras ferramentas de linha de comando durante o desenvolvimento.
- TypeScript: Superset de JavaScript que adiciona tipagem estática e recursos de linguagem adicionais, utilizado juntamente com Angular para melhorar a qualidade do código e a produtividade do desenvolvimento.

### Bibliotecas e Frameworks

- Angular: Framework front-end estruturado para o desenvolvimento de aplicações web dinâmicas.
- NG2-Charts: Biblioteca de gráficos para Angular baseada em Chart.js, que permite a incorporação de gráficos interativos no dashboard.
- Angular Material: Coleção de componentes de Material Design para Angular que oferece elementos de UI.

### Deploy

- Onde está feito o deploy da aplicação

### Links úteis

- Instalação do Visual Studio Code: https://visualstudio.microsoft.com/pt-br/downloads/
- Instalação do Node: https://nodejs.org/en/download
- Instalação do Angular: https://kinsta.com/pt/base-de-conhecimento/instalar-angular/

## Apêndice

```bash
Apêndice
```
