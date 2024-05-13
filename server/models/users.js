"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helper/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {}
  }
  Users.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Username already exists",
        },
        validate: {
          notEmpty: {
            msg: "Username cannot be empty",
          },
          notNull: {
            msg: "Username cannot be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email already exists",
        },
        validate: {
          isEmail: {
            msg: "Invalid email format",
          },
          notEmpty: {
            msg: "Email cannot be empty",
          },
          notNull: {
            msg: "Email cannot be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password cannot be empty",
          },
          notNull: {
            msg: "Password cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  Users.beforeCreate((user) => {
    user.password = hashPassword(user.password);
  });
  return Users;
};
