const app = require('./app');

require('./database');

//const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})