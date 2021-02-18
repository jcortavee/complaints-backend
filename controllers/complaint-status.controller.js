const database = require('../config/database');
const ComplaintStatus = database.complaintStatus;

/**
 * Obtiene todos los estados para las quejas
 */
exports.findAll = (req, res) => {

    ComplaintStatus.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener los estados."
            });
        })

};

/**
 * Obtiene el estado ssegun el id enviado
 */
exports.findById = (req, res) => {

    const id = req.params.id;

    ComplaintStatus.findByPk(id).
        then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al obtener el estado con el id ${id}.`
            });
        });

};
