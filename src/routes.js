const express = require('express');
const path = require('path')

// const UserController = require('./app/controllers/UserController'); // descontinuado
const PacientesController = require('./app/controllers/PacientesController');
const EnderecosController= require('./app/controllers/EnderecosController');
const ProfissoesController= require('./app/controllers/ProfissoesController');
  

const routes = express.Router();

  routes.get('/', (req, res) => {                         //sendfile('./pasta/index.html') foi descontinuado, 
    res.sendFile(path.join(__dirname, 'index.html'))        //deve-se utilizar sendFile() com o path                                                    
  })
  
  // routes.get('/users', UserController.index);
  // routes.post('/users', UserController.store);

  // rotas da tabela Endereços
  routes.get('/enderecos', EnderecosController.index);
  routes.get('/enderecos/:id', EnderecosController.show);
  routes.post('/enderecos', EnderecosController.store);
  routes.put('/enderecos/:id', EnderecosController.update);
  routes.delete('/enderecos/:id', EnderecosController.destroy);

  // rotas da tabela pacientes
  routes.get('/pacientes', PacientesController.index);          //todo paciente tem um endereco associado
  routes.get('/pacientes/:id', PacientesController.show);       
  routes.post('/pacientes', PacientesController.store);         //quando cria um paciente associa ela a um endereço
  routes.put('/pacientes/:id', PacientesController.update);     //quando atualiza o pac, atualiza o end
  routes.delete('/pacientes/:id', PacientesController.destroy); //quando deleta o pac, NÂO deleta o end

  // rotas da tabela profissoes
  routes.get('/profissoes', ProfissoesController.index);
  routes.get('/profissoes/:id', ProfissoesController.show);
  routes.post('/profissoes', ProfissoesController.store);
  routes.put('/profissoes/:id', ProfissoesController.update);
  routes.delete('/profissoes/:id', ProfissoesController.destroy);

  //rotas testes
  routes.get('/clients',(req,res) => {
      res.send({'message':'clientes'});
  })
  
  routes.get('/addresses',(req,res) => {
      res.send({'message':'Endereços'});
  })
  
  routes.get('/specialists',(req,res) => {
      res.send({'message':'Especialistas'});
  })
  
  routes.get('/schedules',(req,res) => {
      res.send({'message':'Atendimentos ou agendamentos'});
  })

  module.exports = routes;