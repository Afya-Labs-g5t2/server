const express = require('express');
const path = require('path')

// const UserController = require('./app/controllers/UserController'); // descontinuado

const routes = express.Router();

  routes.get('/', (req, res) => {                         //sendfile('./pasta/index.html') foi descontinuado, 
    res.sendFile(path.join(__dirname, 'index.html'))        //deve-se utilizar sendFile() com o path                                                    
  })
  
  // routes.get('/users', UserController.index);
  // routes.post('/users', UserController.store);
  
  
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