module.exports = (sequelize, Sequelize) => {
    const ComplaintStatus = sequelize.define("complaint_status", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        internalName: {
            type: Sequelize.STRING,
            field: 'internal_name'
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'complaint_status'
    });

    return ComplaintStatus;
}