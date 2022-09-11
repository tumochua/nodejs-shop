"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      userId: DataTypes.BIGINT,
      orderId: DataTypes.BIGINT,
      code: DataTypes.STRING,
      type: DataTypes.INTEGER,
      mode: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
