const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

/**
 * Verifica que el token enviado sea valido
 */
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "El token no ha sido mandado"
    });
  }

  jwt.verify(token, auth.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "No estas autorizado!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};


const authenticationJwt = {
  verifyToken: verifyToken
};

module.exports = authenticationJwt;
