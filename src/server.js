const express = require('express');
const cors = require("cors");


const app = require('./app');
app.use(cors());

require('./database');

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})