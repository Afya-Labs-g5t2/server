const { Model, DataTypes } = require('sequelize');

class Enderecos extends Model {
  static init(sequelize) {
    super.init({
      cep: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.CHAR(2),
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Pacientes, { foreignKey: 'id_endereco', as: 'moradores'});
}
}

module.exports = Enderecos;