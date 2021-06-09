const express = require('express');
const path = require('path')

const EnderecoController = require('./app/controllers/EnderecoController');
const PacienteController = require('./app/controllers/PacienteController');
const ProfissaoController = require('./app/controllers/ProfissaoController');

const routes = express.Router();

routes.use(express.static(path.join(__dirname,'./public/')));         //utilizado para o express carregar toda a pasta public

routes.get('/', (req, res) => {               
  res.sendFile(path.join(__dirname,'./public/','index.html'))         //pagina inicial da API 

})

// rotas de endereços
routes.get('/enderecos', EnderecoController.index);
routes.get('/enderecos/:id', EnderecoController.show);
routes.post('/enderecos', EnderecoController.store);
routes.put('/enderecos/:id', EnderecoController.update);
routes.delete('/enderecos/:id', EnderecoController.destroy);

// rotas de pacientes
routes.get('/pacientes', PacienteController.index);          //todo paciente tem um endereco associado
routes.get('/pacientes/:id', PacienteController.show);
routes.post('/pacientes', PacienteController.store);         //quando cria um paciente associa ela a um endereço
routes.put('/pacientes/:id', PacienteController.update);     //quando atualiza o pac, atualiza o end
routes.delete('/pacientes/:id', PacienteController.destroy); //quando deleta o pac, NÂO deleta o end


// rotas da profissoes
routes.get('/profissoes', ProfissaoController.index);
routes.get('/profissoes/:id', ProfissaoController.show);
routes.post('/profissoes', ProfissaoController.store);
routes.put('/profissoes/:id', ProfissaoController.update);
routes.delete('/profissoes/:id', ProfissaoController.destroy);

module.exports = routes;