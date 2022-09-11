"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_item", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      cartId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      quantity: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        defaultValue: 0,
      },
      content: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("order_item");
  },
};
