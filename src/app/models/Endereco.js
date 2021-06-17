const { Model, Sequelize } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cep: {
        type: Sequelize.STRING,
        validate: {
          is: /\d{5}-?\d{3}/
        }
      },
      logradouro: {
        type: Sequelize.STRING,
        validate: {
          is: /\D+\s*\d*/
        }
      },
      numero: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true
        }
      },
      bairro: {
        type: Sequelize.STRING,
        validate: {
          is: /^\D+\s*\d*/
        }
      },
      cidade: {
        type: Sequelize.STRING,
        validate: {
          is: /^\D+\s*/
        }
      },
      uf: {
        type: Sequelize.CHAR(2),
        validate: {
          isIn: [[
            'ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mg', 'ms', 'mt', 'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs', 'sc', 'se', 'sp', 'to',
            'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'
          ]]
        }
      },
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