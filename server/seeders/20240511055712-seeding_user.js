"use strict";
const fs = require("fs");
const { hashPassword } = require("../helper/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/user.json", "utf-8"));
    data.map((el) => {
      (el.password = hashPassword(el.password)), (el.updatedAt = new Date());
      el.createdAt = new Date();
    });
    await queryInterface.bulkInsert("Users", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
