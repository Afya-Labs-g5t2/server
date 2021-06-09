const { Model, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      login: Sequelize.STRING(16),
      nome: Sequelize.STRING(150),
      senha_raw: Sequelize.VIRTUAL,
      senha: Sequelize.STRING
    }, {
      sequelize,
      tableName: 'usuarios'
    })

    this.addHook('beforeSave', async user => {
      if (user.senha) {
        user.senha = await bcrypt.hash(user.senha_raw, 15);
      }
    })

    return this;
  }

  checkPassword(senhaRaw) {
    return bcrypt.compare(senhaRaw, this.senha);
  }
}

module.exports = Usuario;