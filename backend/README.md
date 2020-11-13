#   backend - imersao-nodejs-reactjs-reactnative-3


###  Creating the API with NodeJS. The site with NextJS. And the app with React Native.


####  SEQUÊNCIA PARA CRIAR O PROJETO


***


***Para criar o arquivo `package.json` na raiz do projeto***

* ***_Yarn_***
    `yarn init` ou `yarn init -y`


* ***_Npm_***
    `npm init` ou `npm init -y`

***

***Instalando framework `Express` para gerenciamento de `rotas, requisições, URLs` entre outras funcionalidades do lado do servidor.***

* ***Usando yarn***
    `yarn add express`

* ***Usando npm***
    `npm i express --save` ou `npm install express --save`

***

***Instalando modulo `Nodemon` para reiniciar o `server` sempre que houver alteração no código fonte.***

* ***Usando yarn***
    Na pasta do projeto como dependência de desenvolvimento: `yarn add nodemon -D`
    Globalmente na sua máquina: `yarn global add nodemon`

* ***Usando npm***
    Na pasta do projeto: `npm i nodemon --save-dev` ou `npm install nodemon --save-dev`
    Globalmente na sua máquina: `npm i -g nodemon` ou `npm install -g nodemon`


***

***Instalando banco de dados `MongoDB`***

* ***Usando yarn***
    `yarn add mongodb`

* ***Usando npm***
    `npm i mongodb --save` ou `npm install mongodb --save`

***


***Instalando `Mongoose` framework traduz os dados para objetos `JavaScript` para ser ultilizado pelo aplicação.***

* ***Usando yarn***
    `yarn add mongoose`

* ***Usando npm***
    `npm i mongoose --save` ou `npm install mongoose --save`

***

***Instalando `CORS` para restringir acesso indesejado na API, permitindo somente requisições previamente estabelecidas.***

* ***Usando yarn***
    `yarn add cors`

* ***Usando npm***
    `npm i cors --save` ou `npm install cors --save`


***

#### Rodando o projeto
***Entrar na raiz da pasta `/backend`***
* ***Rodar...***

    ***Usando yarn*** `yarn install`

    ***Usando npm*** `npm install`
    
    ***Obs: nodemon precisa estar instalado globalmente na máquina ou local, na pasta do projeto.***
    
    
***


***Ainda na pasta***
* ***Rodar***    
    `yarn backend` ou `npm run backend`