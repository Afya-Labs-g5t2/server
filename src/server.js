const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const UserController = require('./app/controllers/UserController');

app.get('/', (req, res) => {                         //sendfile('./pasta/index.html') foi descontinuado, 
  res.sendFile(path.join(__dirname, 'index.html'))   //deve-se utilizar sendFile() com o path                                                    
})

app.get('/users', UserController.index);
app.post('/users', UserController.store);


app.get('/clients',(req,res) => {
    res.send({'message':'Clientes'});
})

app.get('/addresses',(req,res) => {
    res.send({'message':'Endereços'});
})

app.get('/specialists',(req,res) => {
    res.send({'message':'Especialistas'});
})

app.get('/schedules',(req,res) => {
    res.send({'message':'Atendimentos ou agendamentos'});
})

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})