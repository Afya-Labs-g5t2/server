const Usuario = require('../models/Usuario');

class UsuarioController {

  async index(req, res) {
    // try {
      const temp = await Usuario.findAll({attributes:['id','nome', 'createdAt', "updatedAt"]});

      return res.json(temp);
    // } catch (err) {
    //   return res.status(400).json({ error: err.message });
    // }
  
}

  async show(req, res) {
    try {
      
      if (req.params.id<=0) return res.status(418).json({ error: "São aceitos somente valores de Id maiores do que zero" });

      const temp = await Usuario.findByPk(req.params.id,{attributes:['id','login','nome', 'createdAt', "updatedAt"]});

      if (!temp) return res.status(404).json({ error: "Não existe nenhum Usuario com esse id" });      

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }//  */

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

  async update(req, res) {
    try {
      const temp = await Usuario.findByPk(req.params.id);

      await temp.update(req.body);

      return res.json({ temp });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const temp = await Usuario.findByPk(req.params.id);

      await temp.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();