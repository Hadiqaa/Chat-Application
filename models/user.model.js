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
      User.hasMany(models.Message, {
        foreignKey: 'sender_id',
        as: 'messages',
      });

      User.hasMany(models.Groups, {
        foreignKey: 'creator_id',
        as:'groups'
      });

      User.hasMany(models.Attachments, {
        foreignKey: 'creator_id',
        as:'attachments'
      });

      User.hasMany(models.Group_participants, {
        foreignKey: 'user_id',
        as:'group_participants'
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