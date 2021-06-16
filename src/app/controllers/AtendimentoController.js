const Atendimento = require('../models/Atendimento');

class AtendimentoController {
  async index(req, res) {
    try {

      let temp

      if(req.params.data) {
      temp = await Atendimento.findAll({where : {'data_atendimento': req.params.data}});
      }else{
      temp = await Atendimento.findAll();
      }

      
      
      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const temp = await Atendimento.findByPk(req.params.id,{
        include: [{ association:'paciente'},{ association:'especialista'}]
      });

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const temp = await Atendimento.create(req.body);

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
  
  async status(req, res) {
    try {

      const {status} = req.body;
      const temp = await Atendimento.findByPk(req.params.id);
      const { 
        data_atendimento,
        hora_atendimento,
	      valor,
	      id_especialista,
 	      id_paciente,
      } = temp;

      await temp.update({
        status,
        data_atendimento,
        hora_atendimento,
	      valor,
	      id_especialista,
 	      id_paciente,
      });

      return res.json({ temp });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
 
}

module.exports = new AtendimentoController();