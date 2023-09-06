'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Messages, {
        onDelete: "CASCADE",
        foreignKey: 'sender_id',
        targetKey: 'id', 
        as:'messages'
      });

      User.hasMany(models.Groups, {
        onDelete: "CASCADE",
        foreignKey: 'creator_id',
        targetKey: 'id', 
        as:'groups'
      });

      User.hasMany(models.Attachments, {
        onDelete: "CASCADE",
        foreignKey: 'creator_id',
        targetKey: 'id', 
        as:'attachments'
      });
    }
  }
  User.init({
    userName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },
   {
    sequelize,
    modelName: 'User',
  });
  return User;
};