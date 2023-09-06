'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group_participants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group_participants.belongsTo(models.Groups, {
        onDelete: "CASCADE",
        foreignKey: 'group_id',
        targetKey: 'id',
        as: 'groups'
      });

      Group_participants.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: 'user_id',
        targetKey: 'id',
        as: 'user'
      });

    }
  }
  Group_participants.init({
    group_id : {
      type: DataTypes.INTEGER.UNSIGNED ,
      allowNull: false,
      references :{
        model:"groups",
        key: "id"
      }
    },

    user_id : {
      type: DataTypes.INTEGER.UNSIGNED ,
      allowNull: false,
      references :{
        model:"user",
        key: "id"
      }
    },

  }, {
    sequelize,
    modelName: 'Group_participants',
  });
  return Group_participants;
};