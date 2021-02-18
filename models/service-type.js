module.exports = (sequelize, Sequelize) => {
    const ServiceType = sequelize.define("service_type", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
    });

    return ServiceType;
}