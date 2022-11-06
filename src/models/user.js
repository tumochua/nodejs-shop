"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.AllCode, {
        foreignKey: "genderId",
        targetKey: "KeyMap",
        as: "genderData",
      });
      User.belongsTo(models.AllCode, {
        foreignKey: "positionId",
        targetKey: "KeyMap",
        as: "positionData",
      });
    }
  }
  User.init(
    {
      lastName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      password: DataTypes.STRING,
      genderId: DataTypes.STRING,
      positionId: DataTypes.STRING,
      vendor: DataTypes.INTEGER,
      registeredAt: DataTypes.DATE,
      lastLogin: DataTypes.DATE,
      intro: DataTypes.STRING,
      profile: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
