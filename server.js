const express = require('express');
const routes = require('./routes');

require('./database');

//const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //adcionado antes das rotas

app.use(routes);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})