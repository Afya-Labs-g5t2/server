const { Model, Sequelize } = require('sequelize');

class Paciente extends Model {
  static init(sequelize) {
    super.init({
      cpf: {
        type: Sequelize.STRING,
        validate: {
          is: /^\d{3}[.]?\d{3}[.]?\d{3}-?\d{2}$/
          // aceita valores com ou sem símbolos, exemplos: 123.123.123-11 ou 12345678901.
        }
      },
      nome: {
        type: Sequelize.STRING(150),
        validate: {
          is: /^\D[^@_]{0,149}$/
          // só aceita valores com letras e espaços até 150 caracteres
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
      tipo_sangue: {
        type: Sequelize.STRING(3),
        validate: {
          is: /^(A|B|O|AB)(\+|\-)$/
          // só aceita valores A, B, O e AB seguidos de sinal - ou +
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
      this.hasMany(models.Atendimento, { foreignKey: 'id_paciente', as: 'consultas'});
      this.hasOne(models.Prontuario, { foreignKey: 'id_paciente', as: 'prontuario'});
  }
}

module.exports = Paciente;