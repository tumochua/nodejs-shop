"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      userId: DataTypes.BIGINT,
      shop: DataTypes.STRING,
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.STRING,
      discount: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      order: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
