const Usuario = require('../models/Usuario');

class UsuarioController {
  async index(req, res) {
    try {
      const temp = await Usuario.findAll();

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const temp = await Usuario.create(req.body);

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();