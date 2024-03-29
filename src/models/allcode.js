"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AllCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AllCode.hasMany(models.User, {
        foreignKey: "genderId",
        as: "genderData",
      });
      AllCode.hasMany(models.User, {
        foreignKey: "positionId",
        as: "positionData",
      });
    }
  }
  AllCode.init(
    {
      KeyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AllCode",
    }
  );
  return AllCode;
};
