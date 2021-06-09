# Desafio Afya labs

Esse projeto faz parte do treinamento do [Gama Academy](https://www.gama.academy/) e [Afya](https://afya.com.br/).

O objetivo é criar um sistema para um consultório controlar o cadastro de seus clientes, atendimentos e prontuário dos pacientes.

Nosso time decidiu dividir o projeto em duas partes, um **client-side** e um **server-side**. Esse repositório é a parte Server do projeto. O **client-side** pode ser encontrado [aqui](https://github.com/Afya-Labs-g5t2/client).


### Preview

---

## Resumo

- [Desafio Afya labs](#desafio-afya-labs)
    - [Preview](#preview)
  - [Resumo](#resumo)
  - [Projeto](#projeto)
    - [Install](#install)
    - [Estruturação das páginas](#estruturação-das-páginas)
    - [Trabalhando no projeto](#trabalhando-no-projeto)
    - [Boas práticas](#boas-práticas)

## Projeto

O projeto foi feito utilizando [Node.js](https://nodejs.org/) e base de dados [PostgreSQL](https://www.postgresql.org/), junto com ORM [Sequelize](https://sequelize.org/). As principais bibliotecas utilizadas foram:

- [express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)


### Install

- para iniciar a instalação, clone o repositório em sua pasta local ou faça o download 
```bash
git clone https://github.com/Afya-Labs-g5t2/server.git
cd client
```
- instale as dependências do projeto

  - npm
  ```bash
  npm install
  ```
  - yarn
  ```bash
  yarn add
  ```
- Execute o aplicativo localmente
  - npm
  ```bash
  npm start
  ```
  - yarn
  ```bash
  yarn start
  ```
  
### Estruturação das páginas
  
### Trabalhando no projeto

### Boas práticas




#passo a passo de como fiz a api

npm init

npm i esxpress

npm i nodemom -D

 - criei os scripts para start e dev

 - primeiro eu criei um versãominima de um servidor express

 - substitui o send da requsição get por sendFile e inclui o path no require.

 - criei um index.html para ser a pagina inicial da api

npm i sequelize pg pg-hstore

npm i sequelize-cli -D 

npx sequelize init

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

npx sequeize db:migrate
