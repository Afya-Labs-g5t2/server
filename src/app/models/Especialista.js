const { Model, Sequelize } = require('sequelize');

class Especialista extends Model {
  static init(sequelize) {
    super.init({
      registro: Sequelize.STRING,
      nome: Sequelize.STRING(150),
      telefone: Sequelize.STRING,
      celular: Sequelize.STRING,
      email: Sequelize.STRING,
      id_profissao: Sequelize.INTEGER,
      id_endereco: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: 'especialistas'
    })

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Endereco, { foreignKey: 'id_endereco', as: 'endereco'});
    this.belongsTo(models.Profissao, { foreignKey: 'id_profissao', as: 'profissao'});    
    this.hasMany(models.Atendimento, { foreignKey: 'id_especialista', as: 'agenda'});
  };
}

module.exports = Especialista;