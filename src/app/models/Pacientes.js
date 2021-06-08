const { Model, DataTypes } = require('sequelize');

class Pacientes extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.STRING,
      nome: DataTypes.STRING(150),
      data_nascimento: DataTypes.DATEONLY,
      telefone: DataTypes.STRING,
      celular: DataTypes.STRING,      
      email: DataTypes.STRING,
      tipo_sangue: DataTypes.STRING(3),
    }, {
      sequelize
    })
  }
  
  static associate(models) {
      this.belongsTo(models.Enderecos, { foreignKey: 'id_endereco', as: 'endereco'});
  }
}

module.exports = Pacientes;