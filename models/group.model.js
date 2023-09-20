'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Groups.hasMany(models.Message, {
        foreignKey: 'group_id',
        as: 'messages',
      });

      Groups.belongsTo(models.User, {
        foreignKey: 'creator_id',
        as: 'user'
      });
    }
  }
  Groups.init({
    group_Name: DataTypes.STRING,

  
    creator_id : {
      type: DataTypes.INTEGER ,
      allowNull: false,
      references :{
        model:"user",
        key: "id"
      }
    }
  
  
  }, 

  {
    sequelize,
    modelName: 'Groups',
  });
  return Groups;
};