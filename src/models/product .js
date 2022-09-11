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
      title: DataTypes.STRING,
      metaTitle: DataTypes.STRING,
      slug: DataTypes.STRING,
      summary: DataTypes.TEXT,
      type: DataTypes.INTEGER,
      sku: DataTypes.STRING,
      price: DataTypes.FLOAT,
      discount: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      shop: DataTypes.INTEGER,
      publishedAt: DataTypes.DATE,
      startsAt: DataTypes.DATE,
      endsAt: DataTypes.DATE,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
