const database = require('../config/database');
const User = database.users;


exports.findAll = (req, res) => {

    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener los usuarios."
            });
        })

};

exports.findById = (req, res) => {

    const id = req.params.id;

    User.findByPk(id).
        then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al obtener el usuario con el id ${id}.`
            });
        });

};
