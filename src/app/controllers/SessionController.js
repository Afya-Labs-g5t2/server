const jwt = require("jsonwebtoken");

const Usuario = require("../models/Usuario");
const authConfig = require("../../config/auth");

class SessionController {
  async store (req, res) {
    const { login, senha } = req.body;

    const usuario = await Usuario.findOne({ where: { login }});

    if(!usuario) {
      return res.status(401).json({ error: "Usuário não cadastrado" });
    }

    if(!(await usuario.checkPassword(senha))) {
      return res.status(401).json({ error: "Senha não confere" });
    }

    const { id, nome } = usuario;

    return res.status(200).json({
      usuario: {
        id,
        nome,
        login
      },
      token: jwt.sign({ id, nome }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

module.exports = new SessionController();