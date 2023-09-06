'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Messages.belongsTo(models.Users, {
        onDelete: "CASCADE",
        foreignKey: 'sender_id',
        targetKey: 'id',
        as: 'user'
      });

      Messages.belongsTo(models.Groups, {
        onDelete: "CASCADE",
        foreignKey: 'group_id',
        targetKey: 'id',
        as: 'groups'
      });

      Messages.hasMany(models.Attachments, {
        onDelete: "CASCADE",
        foreignKey: 'message_id',
        targetKey: 'id', 
        as:'attachments'
      });
    }
  }
  Messages.init({
    text: DataTypes.STRING ,

    sender_id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      allowNull: false,
      references :{
        model:"user",
        key: "id"
      }
    },


    group_id : {
      type: DataTypes.INTEGER.UNSIGNED ,
      allowNull: false,
      references :{
        model:"groups",
        key: "id"
      }
    }
     

  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};