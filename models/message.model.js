'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    
  static associate(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'sender_id',
      as: 'user'
    });

    Message.hasMany(models.Attachments, {
      foreignKey: 'message_id',
      as:'attachments'
    });

    Message.belongsTo(models.Groups, {
      foreignKey: 'group_id',
      as: 'groups'
    });
    }
  }
  Message.init({
    text: DataTypes.STRING ,

    sender_id: {
      type: DataTypes.INTEGER ,
      allowNull: false,
      references :{
        model:"user",
        key: "id"
      }
    },


    reciever_id: {
      type: DataTypes.INTEGER ,
      allowNull: false
    },


    group_id : {
      type: DataTypes.INTEGER ,
      allowNull: false,
      references :{
        model:"groups",
        key: "id"
      }
    }
     

  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};