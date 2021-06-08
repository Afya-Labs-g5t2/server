const Profissao = require('../models/Profissao');

class ProfissaoController {

  async testGet(req, res) {
    const profissoes = await Profissao.findAll();
    return res.json(profissoes);
  }

  async testPost(req, res) {
    const {
      profissao
    } = await Profissao.create(req.body)

    return res.json({ profissao });
  }
}

module.exports = new ProfissaoController();