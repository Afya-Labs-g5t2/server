const Paciente = require('../models/Paciente');
const Endereco = require('../models/Endereco');

class PacienteController {
  async index(req, res) {
    try {
      let page = req.query.page;
      let offset = 0 + ((page - 1) * 7);
      
      const total = await Paciente.count();
      const pages = Math.ceil(total / 7);

      const temp = await Paciente.findAll({ limit: 7, offset: offset});

      return res.json({pages, temp});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const temp = await Paciente.findByPk(req.params.id,{
        include: [{ association: 'endereco'},{association: 'consulta'}]
      });

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {                      //quando cria um paciente associa ela a um endereço
      try {
      const temp = await Paciente.create(req.body);

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const temp = await Paciente.findByPk(req.params.id);

      await temp.update(req.body);

      return res.json({ temp });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const temp = await Paciente.findByPk(req.params.id);

      await temp.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PacienteController();