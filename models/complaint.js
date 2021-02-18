module.exports = (sequelize, Sequelize) => {
    const Complaint = sequelize.define("complaint", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'last_name'
        },
        email: {
            type: Sequelize.STRING
        },
        complaint: {
            type: Sequelize.STRING
        },
        serviceTypeId: {
            type: Sequelize.INTEGER,
            field: 'service_type_id'
        },
        serviceStatusId: {
            type: Sequelize.INTEGER,
            field: 'service_status_id'
        },
    });

    return Complaint;
}