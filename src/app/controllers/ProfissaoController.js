const Profissao = require('../models/Profissao');

class ProfissaoController {
  async index(req, res) {
    try {
      const temp = await Profissao.findAll();

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const temp = await Profissao.findByPk(req.params.id,{
        include: { association: 'profissionais'}
      });

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const temp = await Profissao.create(req.body);

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const temp = await Profissao.findByPk(req.params.id);

      await temp.update(req.body);

      return res.json({ temp });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const temp = await Profissao.findByPk(req.params.id);

      await temp.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProfissaoController();