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
        foreignKey: 'group_id',
        as: 'groups'
      });

      Group_participants.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

    }
  }
  Group_participants.init({
    group_id : {
      type: DataTypes.INTEGER ,
      allowNull: false,
      references :{
        model:"groups",
        key: "id"
      }
    },

    user_id : {
      type: DataTypes.INTEGER ,
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