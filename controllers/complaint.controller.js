const database = require('../config/database');
const Complaint = database.complaints;

exports.create = (req, res) => {
    
    let complaint = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        complaint: req.body.complaint,
        serviceTypeId: req.body.serviceTypeId,
        serviceStatusId: req.body.serviceStatusId,
    };

    Complaint.create(complaint)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al crear la queja."
            });
        });

};

exports.findAll = (req, res) => {

    Complaint.findAll({ include: ["serviceType"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener las quejas."
            });
        })

};

exports.findById = (req, res) => {

    const id = req.params.id;

    Complaint.findByPk(id, { include: ["serviceType", "serviceStatus"] }).
        then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al obtener la queja con el id ${id}.`
            });
        });

};

exports.update = (req, res) => {

    const id = req.params.id;

    let complaint = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        complaint: req.body.complaint,
        serviceTypeId: req.body.serviceTypeId,
        serviceStatusId: req.body.serviceStatusId,
    };

    Complaint.update(complaint, {
        where: { id: id }
    })
    .then(n => {

        if (n == 1) {
            res.send({
                status: 200,
                message: `La queja fue actualizada con exito.`
            })
        } else {
            res.send({
                message: `Error al actualizar.`
            })
        }

    })
    .catch(err => {
        res.status(500).send({
            message: `Error al actualizar la queja con el id ${id}.`
        });
    });

};

exports.delete = (req, res) => {

    const id = req.params.id;

    Complaint.destroy({
        where: {id: id}
    })
    .then(n => {

        if (n == 1) {
            res.send({
                status: 200,
                message: `La queja fue eliminada con exito.`
            })
        } else {
            res.send({
                message: `Error al eliminar.`
            })
        }

    })
    .catch(err => {
        res.status(500).send({
            message: `Error al eliminar la queja con el id ${id}.`
        });
    });

};
