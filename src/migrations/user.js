"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        isEmail: true,
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin: {
        allowNull: false,
        type: Sequelize.INTEGER(5),
        defaultValue: 0,
      },
      vendor: {
        allowNull: false,
        type: Sequelize.INTEGER(5),
        defaultValue: 0,
      },
      registeredAt: {
        type: Sequelize.DATE,
      },
      lastLogin: {
        type: Sequelize.DATE,
      },
      intro: {
        type: Sequelize.TEXT,
      },
      profile: {
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
    await queryInterface.dropTable("Users");
  },
};
