"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.BIGINT,
      },
      sessionId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        defaultValue: 0,
      },
      subTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      itemDiscount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      tax: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      shipping: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      promo: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      grandTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      middleName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      mobile: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      line1: {
        type: Sequelize.STRING,
      },
      line2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("order");
  },
};
