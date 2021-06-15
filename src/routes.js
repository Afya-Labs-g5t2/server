const express = require('express');
const path = require('path');
const cors = require('cors');

const options = require('./config/options');
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const specs = swaggerJsDoc(options);

const EnderecoController      = require('./app/controllers/EnderecoController');
const PacienteController      = require('./app/controllers/PacienteController');
const ProfissaoController     = require('./app/controllers/ProfissaoController');
const EspecialistaController  = require('./app/controllers/EspecialistaController');
const AtendimentoController   = require('./app/controllers/AtendimentoController');
const UsuarioController 	  = require('./app/controllers/UsuarioController');

const SessionController 	  = require('./app/controllers/SessionController');
const authMiddleware 		  = require('./app/middlewares/auth');


const routes = express.Router();

routes.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))      //ativar o swagger
routes.use(cors())                                                    //para liberar a comunicação entre domínios diferentes
routes.use(express.static(path.join(__dirname,'./public/')));         //utilizado para o express carregar toda a pasta public

routes.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
  });//retorna 404 para as rotas que não existem


routes.get('/', (req, res) => {               
  res.sendFile(path.join(__dirname,'./public/','index.html'))         
}) //pagina inicial da API 

/**
 * @swagger
 * components:
 * 	schemas:
 * 		Pacientes:
 * 			tupe: objeect
 * 			required:
 * 				- obritagtor
 * 				- sdfadsf
 * 			properties:
 * 				id:
 * 					type: string
 * 					description: id de pacientes
 * 				nome:
 * 					type: string
 * 					description: o nome do paciente
 * 			example:
 * 				id: 1
 * 				nome: Renato	
 */

// Criar usuário
routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);

// Logar
routes.post('/session', SessionController.store);

// Autenticação
routes.use(authMiddleware);

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

/**
 * @swagger
 * /especialistas
 * 	get:
 * 		description: retorna os especilaistas
 * 		responses:
 * 			'200':
 * 				description: A Suscessful response
 * 	
 * 
 */

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
routes.patch('/atendimentos/:id', AtendimentoController.status); //modificar o status
//routes.delete atendimentos não possuem delete, deve se mudar o status para cancelado

module.exports = routes;