"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product_review", {
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
      parentId: {
        type: Sequelize.BIGINT,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      published: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      publishedAt: {
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
    await queryInterface.dropTable("product_review");
  },
};
