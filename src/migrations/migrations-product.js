"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      metaTitle: {
        type: Sequelize.INTEGER,
      },
      slug: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      summary: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      shop: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      publishedAt: {
        type: Sequelize.DATE,
      },
      startsAt: {
        type: Sequelize.DATE,
      },
      endsAt: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("products");
  },
};
