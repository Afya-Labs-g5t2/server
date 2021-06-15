const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const authConfig = require("../../config/auth");

module.exports = async (req, res, next) => {

  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    return res.status(401).json({
      message: "Ocorreu um problema na autenticação"
    });
  }

  const [token] = authHeaders.split(" ");

  try {    
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    next();

  } catch(e) {
    return res.status(401).json({
      message: "Token inválido"
    })
  }
}
