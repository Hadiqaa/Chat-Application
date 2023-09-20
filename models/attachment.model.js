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
        foreignKey: 'creator_id',
        as: 'user'
      });

      Attachments.belongsTo(models.Message, {
        foreignKey: 'message_id',
        as: 'message'
      });
    }
  }
  Attachments.init({
    file_Url: DataTypes.STRING,
    file_Name: DataTypes.STRING,

    message_id: {
      type: DataTypes.INTEGER ,
      allowNull: false,
      references :{
        model:"messages",
        key: "id"
      }
    },


    creator_id: {
      type: DataTypes.INTEGER ,
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