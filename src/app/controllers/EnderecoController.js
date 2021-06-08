const Endereco = require('../models/Endereco');

class EnderecoController {

  async index(req, res) {
    return res.json(Endereco.findAll());
  }

  async store(req, res) {
    const {
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      uf
    } = await Endereco.create(req.body);

    return res.json({ cep, logradouro, numero, bairro, cidade, uf });
  }
}

module.exports = new EnderecoController();