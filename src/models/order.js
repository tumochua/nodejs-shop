"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      userId: DataTypes.BIGINT,
      sessionId: DataTypes.STRING,
      token: DataTypes.STRING,
      status: DataTypes.INTEGER,
      subTotal: DataTypes.FLOAT,
      itemDiscount: DataTypes.FLOAT,
      tax: DataTypes.FLOAT,
      shipping: DataTypes.FLOAT,
      total: DataTypes.FLOAT,
      promo: DataTypes.STRING,
      discount: DataTypes.FLOAT,
      grandTotal: DataTypes.FLOAT,
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      email: DataTypes.STRING,
      line1: DataTypes.STRING,
      line2: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      country: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
