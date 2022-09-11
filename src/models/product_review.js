"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductReview.init(
    {
      productId: DataTypes.BIGINT,
      parentId: DataTypes.BIGINT,
      title: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      published: DataTypes.INTEGER,
      publishedAt: DataTypes.DATE,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ProductReview",
    }
  );
  return ProductReview;
};
