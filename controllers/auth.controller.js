const database = require("../config/database");
const config = require("../config/auth");
const User = database.users;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * Registra un usuario
 */
exports.createUser = (req, res) => {
  
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
        res.send(user);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

/**
 * Metodo que permite hacer el login y a la vez genera un token
 */
exports.login = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 604800
        });
      
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
