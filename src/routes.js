const express = require('express');
const path = require('path')

const EnderecoController = require('./app/controllers/EnderecoController');
const PacienteController = require('./app/controllers/PacienteController');

const routes = express.Router();

routes.get('/enderecos', EnderecoController.index);

routes.post('/enderecos', EnderecoController.store);

routes.get('/pacientes', PacienteController.index);

routes.post('/pacientes', PacienteController.store);


module.exports = routes;