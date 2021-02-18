'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    /**
     * Agrega tres estados para quejas
     */
    return await queryInterface.bulkInsert('complaint_status', [
        {
          internal_name: 'open',
          name: 'Abierta',
          description: 'La queja fue creada por el usuario y aún no ha sido revisada.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          internal_name: 'progress',
          name: 'Progreso',
          description: 'La queja esta siendo revisada y está en proceso.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          internal_name: 'close',
          name: 'Cerrada',
          description: 'La queja finalizada ya sea porque fue resuelto o no se tenian todos los requisitos.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('complaint_status', null, {});
  }
};
