'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'comments', // table refrencing
      'username', // column being created
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts', //model being used(ie.schema)
          key: 'id' //primary key
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn(
      'comments',
      'username'
    )
  }
};

