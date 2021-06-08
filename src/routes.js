const express = require('express');
const path = require('path')

const EnderecoController = require('./app/controllers/EnderecoController');
const PacienteController = require('./app/controllers/PacienteController');
const ProfissaoController = require('./app/controllers/ProfissaoController');

const routes = express.Router();

routes.get('/enderecos', EnderecoController.testGet);

routes.post('/enderecos', EnderecoController.testPost);

routes.get('/pacientes', PacienteController.testGet);

routes.post('/pacientes', PacienteController.testPost);

routes.get('/profissoes', ProfissaoController.testGet);

routes.post('/profissoes', ProfissaoController.testPost);


module.exports = routes;