'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};