const { DATABASE } = require('./env.js');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    DATABASE.DATABASE_NAME,
    DATABASE.USER,
    DATABASE.PASSWORD, {
        host: DATABASE.HOST,
        dialect: DATABASE.DIALECT,
        operatorsAliases: 0,
        pool: {
            max: DATABASE.MAX_CONNECTIONS,
            min: DATABASE.MIN_CONNECTIONS,
            acquire: DATABASE.ACQUIRE,
            idle: DATABASE.IDLE,
        },
        port: DATABASE.PORT
    }
);

const database = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

// Agrega todos los modelos
database.complaints = require('../models/complaint')(sequelize, Sequelize);
database.complaintStatus = require('../models/complaint-status')(sequelize, Sequelize);
database.serviceTypes = require('../models/service-type')(sequelize, Sequelize);
database.users = require('../models/user')(sequelize, Sequelize);

// Relaciones entre los modelos
database.serviceTypes.hasMany(database.complaints, {as: 'complaint'})
database.complaints.belongsTo(database.serviceTypes, {
    foreignKey: 'serviceTypeId',
    as: 'serviceType'
});
database.complaints.belongsTo(database.complaintStatus, {
    foreignKey: 'serviceStatusId',
    as: 'serviceStatus'
});

module.exports = database;