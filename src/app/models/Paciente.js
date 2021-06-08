const { Model, Sequelize } = require('sequelize');

class Pacientes extends Model {
  static init(sequelize) {
    super.init({
      cpf: Sequelize.STRING,
      nome: Sequelize.STRING(150),
      data_nascimento: Sequelize.DATEONLY,
      telefone: Sequelize.STRING,
      celular: Sequelize.STRING,      
      email: Sequelize.STRING,
      tipo_sangue: Sequelize.STRING(3),
      id_endereco: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: 'pacientes'
    })
    
    return this;
  }
  
  static associate(models) {
      this.belongsTo(models.Enderecos, { foreignKey: 'id_endereco', as: 'endereco'});
  }
}

module.exports = Pacientes;