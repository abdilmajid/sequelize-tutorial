'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'comments', // table refrencing
      'userName', // column being created
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts', //model being used(ie.schema)
          key: 'id'
        }
      }
    )

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn(
      'comments',
      'userName'
    )

  }
};
