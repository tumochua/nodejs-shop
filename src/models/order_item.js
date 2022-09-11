"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orderitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orderitem.init(
    {
      productId: DataTypes.BIGINT,
      orderId: DataTypes.BIGINT,
      sku: DataTypes.STRING,
      price: DataTypes.FLOAT,
      discount: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Orderitem",
    }
  );
  return Orderitem;
};
