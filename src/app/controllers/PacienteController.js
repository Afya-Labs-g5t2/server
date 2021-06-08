const Paciente = require('../models/Paciente');

class PacienteController {
  
  async testGet(req, res) {
    const pacientes = await Paciente.findAll();
    return res.json(pacientes);
  }

  async testPost(req, res) {
    const {
      cpf,
      nome,
      data_nascimento,
      telefone,
      celular,
      email,
      tipo_sangue,
      id_endereco
    } = await Paciente.create(req.body);

    return res.json({ cpf, nome, data_nascimento, telefone, celular, email, tipo_sangue, id_endereco });
  }
}

module.exports = new PacienteController();