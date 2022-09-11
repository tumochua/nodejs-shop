"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transaction", {
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
      orderId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        defaultValue: 0,
      },
      mode: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        defaultValue: 0,
      },
      status: {
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
    await queryInterface.dropTable("transaction");
  },
};
