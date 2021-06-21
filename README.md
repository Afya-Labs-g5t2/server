![imagem link ](https://img.shields.io/badge/g5t2-server-green)
![imagem link ](https://img.shields.io/github/repo-size/Afya-Labs-g5t2/server)
![imagem link ]("https://img.shields.io/github/deployments/Afya-Labs-g5t2/server/production)

# Desafio Afya labs

### Preview 

---
[![Logo API](https://user-images.githubusercontent.com/43910483/122138140-8161ab80-ce1c-11eb-8017-e23437faecb2.png)](https://g5t2-api.herokuapp.com/)

Esse projeto faz parte do treinamento do [Gama Academy](https://www.gama.academy/) e [Afya](https://afya.com.br/).

O objetivo é criar um sistema para um consultório controlar o cadastro de seus clientes, atendimentos e prontuário dos pacientes.

Nosso time decidiu dividir o projeto em duas partes, um **client-side** e um **server-side**. Esse repositório é a parte **Server** do projeto. 

O **client-side** pode ser encontrado [aqui](https://github.com/Afya-Labs-g5t2/client).

## Resumo

- [Desafio Afya labs](#desafio-afya-labs)
    - [Preview](#preview)
  - [Resumo](#resumo)
  - [Projeto](#projeto)
    - [🚀 Install](#-install)
    - [📂 Estruturação das páginas](#-estruturação-das-páginas)
    - [🖥️ Trabalhando no projeto](#️-trabalhando-no-projeto)
    - [🤓 Boas práticas](#-boas-práticas)
    - [👩‍💻👨‍💻 Equipe](#-equipe)

## Projeto


O projeto foi feito utilizando as tecnologias:

- [Node.js](https://nodejs.org/) 
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [SQLite](https://www.sqlite.org/index.html)


### 🚀 Install

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
- Caso queira reverter as migrations
  
  - npm  
  ```bash
  npm run remove
  ``` 
  - yarn 
  ```bash
  yarn remove
  ``` 
- Caso queira rodar os testes
  
  - npm  
  ```bash
  npm test
  ``` 
  - yarn 
  ```bash
  yarn test
  ``` 


- Para acessar a API diretamente no seu browser, acesse https://g5t2-api.herokuapp.com/

### 📂 Estruturação das páginas
O repositório tem estas pastas:
```
server
.
├── __tests
|   └── integration
│   └── models
├── src
│   ├── app
│   │   ├── controllers
│   │   ├── middlewares
│   │   └── models
│   ├── config
│   │   ├── auth.js
│   │   └── database.js
│   ├── database
│   │   ├── migrations
│   │   └── seeds
│   ├── public
│   │   ├── assets
│   │   ├── css
│   │   ├── js
│   │   ├── 404-not-found.html
│   │   └── index.html
│   ├── app.js
│   ├── routes.js
│   └── server.js
├── .env.sample
├── .env.test
├── .gitignore
├── .sequelizerc
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
└── swagger.json

```

### 🖥️ Trabalhando no projeto

- Crie uma branch do projeto na máquina local e no repositório remoto antes de trabalhar em uma feature, para evitar que códigos sem revisão cheguem à branch principal (main).
- Se houver alterações significativas nas migrations (que criam as tabelas), será necessário remover e rodar as migrations novamente no banco de dados da API. Pergunte antes à equipe se pode fazer essa operação, pois pode afetar o trabalho dos outros!
- Leia o código para entender toda a estrutura do banco de dados e as rotas da API, especialmente as migrations, os models e os controllers.

### 🤓 Boas práticas

- Nomeie suas branchs de acordo com a funcionalidade e/ou a ação. Ex:
```
Feature/create-migrations
Feature/controller-tests
```
- Antes de fazer um pull request (PR) para a branch main, certifique-se de fazer o pull da main na sua branch e corrigir conflitos de merge, se necessário.
- Quando fizer um PR, peça para um colega revisar o código antes de aprovar o merge.


### 👩‍💻👨‍💻 Equipe

Nossa equipe de desenvolvedores que construiu a aplicação.

<table>
  <tr>
    <td align="center"><a href="https://github.com/mlamarques"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFvVEnCp_JluQ/profile-displayphoto-shrink_200_200/0/1542309353353?e=1629331200&v=beta&t=5L0m9gSLY6Ki1i2bcigKRxXdqcAj86uEMZOmKk2tZDE" width="100px;" alt=""/><br /><sub><b>Marcos Lamarques</b></sub></a><br/>
    <a href="https://www.linkedin.com/in/mlamarques/"><img src="https://img.shields.io/badge/-Marcos-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/micheleset7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60739164?v=4" width="100px;" alt=""/><br /><sub><b>Michele Coelho</b></sub></a><br/>
    <a href="https://www.linkedin.com/in/michele-coelho-5017aa79/"><img src="https://img.shields.io/badge/-Michele-blue?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <td align="center"><a href="https://github.com/vinicius-carvalho"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/8262141?v=4" width="100px;" alt=""/><br /><sub><b>Vinicius Carvalho</b></sub></a><br />
    <a href="https://www.linkedin.com/in/viniciuscostacarvalho/"><img src="https://img.shields.io/badge/-Vinicius-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/RenataMie"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/73265234?v=4" width="100px;" alt=""/><br /><sub><b>Renata Mie</b></sub></a><br />
    <a href="https://www.linkedin.com/in/renatakanezaki/"><img src="https://img.shields.io/badge/-Renata-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/renatolobojr"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGo0qmjjwu9XA/profile-displayphoto-shrink_200_200/0/1587556028562?e=1629331200&v=beta&t=O7lp30Z5I8O8s49cXIOX5x6brGxnKzZeGmBIv_TmdRM" width="100px;" alt=""/><br /><sub><b>Renato Lobo</b></sub></a><br />
    <a href="https://www.linkedin.com/in/renatolobo-engenheiro/"><img src="https://img.shields.io/badge/-Renato-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
    </td>
    <td align="center"><a href="https://github.com/Thais-Hoshii"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFxBPEY563hCQ/profile-displayphoto-shrink_200_200/0/1600110281835?e=1629331200&v=beta&t=5sKUElvEMdcVaeowULMiDo7ikWVeM0Ls64dq9clFTwU" width="100px;" alt=""/><br /><sub><b>Thaís Hoshii</b></sub></a><br />
    <a href="https://www.linkedin.com/in/thais-hoshii/"><img src="https://img.shields.io/badge/-Thais-blue?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <tr>
 </table>
 
Nosso email de contato: 

[![Gmail Badge](https://img.shields.io/badge/-g5t2.desafioafyalabs@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:g5t2.desafioafyalabs@gmail.com)](mailto:g5t2.desafioafyalabs@gmail.com)