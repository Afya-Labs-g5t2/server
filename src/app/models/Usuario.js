const { Model, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      login: Sequelize.STRING(16),
      nome: Sequelize.STRING(150),
      senha: Sequelize.VIRTUAL,
      senha_hash: Sequelize.STRING
    }, {
      sequelize
    })

    this.addHook('beforeSave', async user => {
      if (user.senha) {
        user.senha_hash = await bcrypt.hash(user.senha, 15);
      }
    })
  }
}

module.exports = Usuario;