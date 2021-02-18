const authenticationJwt = require("./authentication");
const signUpVerification = require("./sign-up");

/**
 * Se agregan todos los middlewares en un solo archivo
 */
module.exports = {
  authenticationJwt,
  signUpVerification
};
