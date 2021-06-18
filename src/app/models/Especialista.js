const { Model, Sequelize } = require('sequelize');

class Especialista extends Model {
  static init(sequelize) {
    super.init({
      registro: {
        type: Sequelize.STRING,
        validate: {
          is: /^\d+(-P)?[-][A-Z]{2}$/
          // só aceita valores que começam com número, e terminem com - e duas letras maíusculas. Para registros provisórios, também aceita valores que tenham -P depois dos números, exemplos: 222-RJ ou 12345-P-AM.
        }
      },
      nome: {
        type: Sequelize.STRING(150),
        validate: {
          is: /^\D[^@_]{0,149}$/
          // só aceita valores com letras e espaços até 150 caracteres
        }
      },
      telefone: {
        type: Sequelize.STRING,
        validate: {
          is: /^[(]?\d{2}[)]?\d{4}-?\d{4}$/
          // aceita valores nos formatos (XX)XXXX-XXXX, (XX)XXXXXXXX, XXXXXX-XXXX ou XXXXXXXXXX
        }
      },
      celular: {
        type: Sequelize.STRING,
        validate: {
          is: /^[(]?\d{2}[)]?[9]\d{4}-?\d{4}$/
          // aceita valores nos formatos (XX)9XXXX-XXXX, (XX)9XXXXXXXX, XX9XXXX-XXXX ou XX9XXXXXXXX
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
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