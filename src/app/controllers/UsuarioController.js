const Usuario = require('../models/Usuario');

class UsuarioController {

  async index(req, res) {
<<<<<<< HEAD
    // try {
      const temp = await Usuario.findAll({attributes:['id','nome', 'createdAt', "updatedAt"]});
=======
    try {
      const temp = await Usuario.findAll();
>>>>>>> 7229e4e82f63db28f3f1288758c1afab3a0fbac3

      return res.json(temp);
    // } catch (err) {
    //   return res.status(400).json({ error: err.message });
    // }
  
}

  async store(req, res) {
    try {
      const temp = await Usuario.create(req.body);
      let {login, nome, senha, createdAt, updatedAt } = temp;
      senha = "****************"
      return res.json({login, nome, senha, createdAt, updatedAt });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();