const database = require('../config/database');
const ServiceType = database.serviceTypes;

exports.create = (req, res) => {
    
    let serviceType = {
        name: req.body.name,
        description: req.body.description,
    };

    ServiceType.create(serviceType)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al crear el tipo de servicio."
            });
        });

};

exports.findAll = (req, res) => {

    ServiceType.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener los tipos de serivicio."
            });
        })

};

exports.findById = (req, res) => {

    const id = req.params.id;

    ServiceType.findByPk(id).
        then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al obtener el servicio con el id ${id}.`
            });
        });

};

exports.update = (req, res) => {

    const id = req.params.id;

    let serviceType = {
        name: req.body.name,
        description: req.body.description,
    };

    ServiceType.update(serviceType, {
        where: { id: id }
    })
    .then(n => {

        if (n == 1) {
            res.send({
                status: 200,
                message: `El tipo de servicio fue actualizado con exito.`
            })
        } else {
            res.send({
                message: `Error al actualizar.`
            })
        }

    })
    .catch(err => {
        res.status(500).send({
            message: `Error al actualizar el tipo de servicio con el id ${id}.`
        });
    });

};

exports.delete = (req, res) => {

    const id = req.params.id;

    ServiceType.destroy({
        where: {id: id}
    })
    .then(n => {

        if (n == 1) {
            res.send({
                status: 200,
                message: `El tipo de servicio fue eliminado con exito.`
            })
        } else {
            res.send({
                message: `Error al eliminar.`
            })
        }

    })
    .catch(err => {
        res.status(500).send({
            message: `Error al eliminar el tipo de servicio con el id ${id}.`
        });
    });

};
