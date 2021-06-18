const Atendimento = require('../models/Atendimento');

class AtendimentoController {
  async index(req, res) {
    try {

      let temp

      if(req.params.data) {
      temp = await Atendimento.findAll({where : {'data_atendimento': req.params.data}});
      }else{
      temp = await Atendimento.findAll({
        include: [{ association:'paciente', attributes:['nome']},{ association:'especialista', attributes:['nome']}]
      });
      }

      
      
      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      
      if (req.params.id<=0) return res.status(418).json({ error: "São aceitos somente valores de Id maiores do que zero" });

      const temp = await Atendimento.findByPk(req.params.id,{
        include: [{ association:'paciente'},{ association:'especialista'}]
      });

      if (!temp) return res.status(404).json({ error: "Não existe nenhum Atendimento com esse id" });

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