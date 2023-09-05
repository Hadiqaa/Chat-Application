'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attachments.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: 'creator_id',
        targetKey: 'id',
        as: 'user'
      });

      Attachments.belongsTo(models.Messages, {
        onDelete: "CASCADE",
        foreignKey: 'message_id',
        targetKey: 'id',
        as: 'messages'
      });
    }
  }
  Attachments.init({
    file_Url: DataTypes.STRING,
    file_Name: DataTypes.STRING,

    message_id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      allowNull: false,
      references :{
        model:"messages",
        key: "id"
      }
    },


    creator_id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      allowNull: false,
      references :{
        model:"user",
        key: "id"
      }
    },

  }, {
    sequelize,
    modelName: 'Attachments',
  });
  return Attachments;
};