"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartItem.init(
    {
      productId: DataTypes.BIGINT,
      cartId: DataTypes.BIGINT,
      sku: DataTypes.STRING,
      price: DataTypes.FLOAT,
      discount: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );
  return CartItem;
};
