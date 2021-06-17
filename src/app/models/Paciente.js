const { Model, Sequelize } = require('sequelize');

class Paciente extends Model {
  static init(sequelize) {
    super.init({
      cpf: {
        type: Sequelize.STRING,
        validate: {
          is: /^\d{3}[.]?\d{3}[.]?\d{3}-?\d{2}$/
        }
      },
      nome: {
        type: Sequelize.STRING(150),
        validate: {
          is: /^\D[^@_]{0,149}$/
        }
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        validate: {
          isDate: true
        }
      },
      telefone: {
        type: Sequelize.STRING,
        validate: {
          is: /^[(]\d{2}[)]\d{4}-?\d{4}$/
        }
      },
      celular: {
        type: Sequelize.STRING,
        validate: {
          is: /^[(]\d{2}[)][9]\d{4}-?\d{4}$/
        }
      },      
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      tipo_sangue: {
        type: Sequelize.STRING(3),
        validate: {
          is: /^(A|B|O|AB)(\+|\-)$/
        }
      },
      id_endereco: {
        type: Sequelize.INTEGER
      }
    }, {
      sequelize,
      tableName: 'pacientes'
    })
    
    return this;
  }
  
  static associate(models) {
      this.belongsTo(models.Endereco, { foreignKey: 'id_endereco', as: 'endereco'});
      this.hasMany(models.Atendimento, { foreignKey: 'id_paciente', as: 'consulta'});
  }
}

module.exports = Paciente;