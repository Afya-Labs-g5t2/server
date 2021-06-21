const express = require('express');
const path = require('path');
const cors = require('cors');
const authMiddleware = require('./app/middlewares/auth');

//const options = require('./config/options');
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require('../swagger.json');
//const swaggerJsDoc = require("swagger-jsdoc")
//const specs = swaggerJsDoc(options);

const EnderecoController      = require('./app/controllers/EnderecoController');
const PacienteController      = require('./app/controllers/PacienteController');
const ProntuarioController      = require('./app/controllers/ProntuarioController');
const ProfissaoController     = require('./app/controllers/ProfissaoController');
const EspecialistaController  = require('./app/controllers/EspecialistaController');
const AtendimentoController   = require('./app/controllers/AtendimentoController');
const UsuarioController 	  = require('./app/controllers/UsuarioController');
const SessionController 	  = require('./app/controllers/SessionController');

const routes = express.Router();

routes.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))      	  //ativar o swagger
routes.use(cors())                                                    //para liberar a comunicação entre domínios diferentes
routes.use(express.static(path.join(__dirname,'./public/')));         //utilizado para o express carregar toda a pasta public

routes.get('/', (req, res) => {               
  res.sendFile(path.join(__dirname,'./public/','index.html'))         
}) //pagina inicial da API 

// Cadastrar usuário
routes.post('/cadastrar', UsuarioController.store);

// Logar
routes.post('/session', SessionController.store);

routes.use(authMiddleware);		// Sem autenticação, todas as rotas abaixo são bloqueadas

// rotas de usuários
routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.destroy);

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

//rotas de historicos de prontuarios
routes.get('/pacientes/:id/prontuario', ProntuarioController.history);

routes.post('/especialistas/:id/prontuario',);
routes.put('/especialistas/:id/prontuario',);
routes.delete('/especialistas/:id/prontuario',);

// rotas de prontuario
routes.get('/prontuarios', ProntuarioController.index);        
routes.get('/prontuarios/:id', ProntuarioController.show);
routes.post('/prontuarios', ProntuarioController.store);        
routes.put('/prontuarios/:id', ProntuarioController.update);  
routes.delete('/prontuarios/:id', ProntuarioController.destroy);

// rotas da profissoes
routes.get('/profissoes', ProfissaoController.index);
routes.get('/profissoes/:id', ProfissaoController.show);
routes.post('/profissoes', ProfissaoController.store);
routes.put('/profissoes/:id', ProfissaoController.update);
routes.delete('/profissoes/:id', ProfissaoController.destroy);

// rotas de especialistas
routes.get('/especialistas', EspecialistaController.index);
routes.get('/especialistas/:id', EspecialistaController.show);
routes.post('/especialistas', EspecialistaController.store);
routes.put('/especialistas/:id', EspecialistaController.update);
routes.delete('/especialistas/:id', EspecialistaController.destroy);

// rotas de Atendimentos
routes.get('/atendimentos', AtendimentoController.index);
routes.get('/atendimentos/:id', AtendimentoController.show);
routes.get('/atendimentos/data/:data', AtendimentoController.index); //consulta por data
routes.post('/atendimentos', AtendimentoController.store);
routes.put('/atendimentos/:id', AtendimentoController.update);
routes.patch('/atendimentos/:id', AtendimentoController.status); //modificar o status
//routes.delete atendimentos não possuem delete, deve se mudar o status para cancelado


routes.get('*',(req,res)=>{	
	res.status(404)
	res.sendFile(path.join(__dirname,'./public/','404-not-found.html'))	
});


module.exports = routes;