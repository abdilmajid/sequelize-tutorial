'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    //one to many relationship between a post and comments, So post has many comment. ["as: comments" is the alias]
    post.hasMany(models.comment, {as: 'comments', foreignKey: 'postId'})
  };
  return post;
};