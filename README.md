![imagem link ](https://img.shields.io/badge/g5t2-server-green)

# Desafio Afya labs

### Preview 

---
[![Logo API](./src/public/assets/api-logo.png)](https://g5t2-api.herokuapp.com/)

Esse projeto faz parte do treinamento do [Gama Academy](https://www.gama.academy/) e [Afya](https://afya.com.br/).

O objetivo é criar um sistema para um consultório controlar o cadastro de seus clientes, atendimentos e prontuário dos pacientes.

Nosso time decidiu dividir o projeto em duas partes, um **client-side** e um **server-side**. Esse repositório é a parte **Server** do projeto. 

O **client-side** pode ser encontrado [aqui](https://github.com/Afya-Labs-g5t2/client).

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


O projeto foi feito utilizando as tecnologias:

- [Node.js](https://nodejs.org/) 
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)


### Install

- para iniciar a instalação, clone o repositório em sua pasta local ou faça o download 
```bash
git clone https://github.com/Afya-Labs-g5t2/server.git
cd server
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
- Execute as migrations e as seeds das tabelas com o script
  - npm  
  ```bash
  npm run populate
  ``` 
  - yarn  
  ```bash
  yarn populate
  ``` 
- Caso queira reverter de desvazer as migrations
  
  - npm  
  ```bash
  npm run remove
  ``` 
  - yarn 
  ```bash
  yarn remove
  ``` 


- Para acessar a API diretamente no seu browser, acesse https://g5t2-api.herokuapp.com/

### Estruturação das páginas
  
### Trabalhando no projeto

- [Thais Hoshii](https://github.com/Thais-Hoshii)
- [Renato Lobo](https://github.com/renatolobojr)
- [Renata Kanezaki](https://github.com/RenataMie)
- [Marcos Alves](https://github.com/mlamarques)
- [Michele Coelho](https://github.com/micheleset7)
- [Vinicius Carvalho](https://github.com/vinicius-carvalho)


### Boas práticas
