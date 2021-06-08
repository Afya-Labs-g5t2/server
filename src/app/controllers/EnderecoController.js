const Endereco = require('../models/Endereco');

class EnderecoController {

  async testGet(req, res) {
    const enderecos = await Endereco.findAll()
    return res.json(enderecos);
  }

  async testPost(req, res) {
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