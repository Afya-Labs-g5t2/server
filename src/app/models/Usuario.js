const { Model, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      login: {
        type: Sequelize.STRING(16),
        validate: {
          is: /^\D\S{1,15}$/
        }
      },
      nome: {
        type: Sequelize.STRING(150),
        validate: {
          is: /^\D[^@_]{1,150}$/
        }
      },
      senha: Sequelize.VIRTUAL,
      senha_hash: Sequelize.STRING
    }, {
      sequelize,
      tableName: 'usuarios'
    })

    this.addHook('beforeSave', async user => {
      if (user.senha) {
        user.senha_hash = await bcrypt.hash(user.senha, 15);
      }
    })

    return this;
  }

  checkPassword(senha) {
    return bcrypt.compare(senha, this.senha_hash);
  }
}

module.exports = Usuario;