const { Model, Sequelize } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cep: Sequelize.STRING,
      logradouro: Sequelize.STRING,
      numero: Sequelize.INTEGER,
      bairro: Sequelize.STRING,
      cidade: Sequelize.STRING,
      uf: Sequelize.CHAR(2),
    }, {
      sequelize,
      tableName: 'enderecos'
    })

    return this;
  };

  static associate(models) {
    this.hasMany(models.Paciente, { foreignKey: 'id_endereco', as: 'moradores'});
    this.hasMany(models.Especialista, { foreignKey: 'id_endereco', as: 'doutores'});
  };
}

module.exports = Endereco;