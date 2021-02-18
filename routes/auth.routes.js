const signUpVerification = require("../middlewares/sign-up");
const authenticationJwt = require("../middlewares/authentication");
const AuthController = require("../controllers/auth.controller");

const express = require("express");
const router = express.Router();

// Auth Routes
router.post( '/signup',[signUpVerification.verifyUser, authenticationJwt.verifyToken], AuthController.createUser);
router.post("/login", AuthController.login);

module.exports = router;