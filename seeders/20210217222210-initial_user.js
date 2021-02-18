'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Agrega un usuario por defecto
     */
    return await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('1234', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
