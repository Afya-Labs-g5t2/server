const Endereco = require('../models/Endereco');
const Especialista = require('../models/Especialista');
const Paciente = require('../models/Paciente');


class EnderecoController {
  async index(req, res) {
    try {
      const temp = await Endereco.findAll();

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
 
  
  async show(req, res) {
    try {
      
      if (req.params.id<=0) return res.status(418).json({ error: "São aceitos somente valores de Id maiores do que zero" });

      const temp = await Endereco.findByPk(req.params.id,{
        include: [{ association:'moradores'},{ association:'doutores'}]
      });

      if (!temp) return res.status(404).json({ error: "Não existe nenhum Endereço com esse id" });

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }//  */

  async store(req, res) {
    try {

      const { cep, numero } = req.body;
      let [temp, Created ] = await Endereco.findOrCreate({
        where: { cep, numero }, 
        defaults: req.body
      });

      //let temp = await Endereco.create(req.body);
      const {id} = temp;
      const id_endereco = id;

      if(req.body.registro) {   
        let {registro, nome, telefone, celular, email, id_profissao} = req.body; 
        temp = await Especialista.create({registro, nome, telefone, celular, email, id_profissao, id_endereco});

      }
      else if (req.body.cpf) {
        let {cpf, nome, data_nascimento, telefone, celular, email, tipo_sangue} = req.body;
        temp = await Paciente.create({cpf, nome, data_nascimento, telefone, celular, email, tipo_sangue, id_endereco});
      }

      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }// */

  async find_or_create(req, res) {
    try {
      const { cep, numero } = req.body;
      let [temp, Created ] = await Endereco.findOrCreate({
        where: { cep, numero }, 
        defaults: req.body
      });      
      
      return res.json(temp);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }// */

  async update(req, res) {
    try {
      const temp = await Endereco.findByPk(req.params.id);

      await temp.update(req.body);

      return res.json({ temp });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const temp = await Endereco.findByPk(req.params.id);

      await temp.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new EnderecoController();