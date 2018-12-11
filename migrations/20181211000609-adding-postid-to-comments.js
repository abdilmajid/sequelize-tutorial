'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'comments', 
      'postId',  // column being created
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id' // //primary key
        }
      }
    )

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn(
      'comments',
      'postId'
    )

  }
};
