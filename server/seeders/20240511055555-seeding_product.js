"use strict";
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
    data.map((el) => {
      el.updatedAt = new Date();
      el.createdAt = new Date();
    });
    await queryInterface.bulkInsert("Products", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
