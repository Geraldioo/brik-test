"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name cannot be empty",
          },
          notNull: {
            msg: "Name cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Description cannot be empty",
          },
          notNull: {
            msg: "Description cannot be empty",
          },
        },
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "SKU cannot be empty",
          },
          notNull: {
            msg: "SKU cannot be empty",
          },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Weight cannot be empty",
          },
          notNull: {
            msg: "Weight cannot be empty",
          },
        },
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Width cannot be empty",
          },
          notNull: {
            msg: "Width cannot be empty",
          },
        },
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Length cannot be empty",
          },
          notNull: {
            msg: "Length cannot be empty",
          },
        },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Height cannot be empty",
          },
          notNull: {
            msg: "Height cannot be empty",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Image cannot be empty",
          },
          notNull: {
            msg: "Image cannot be empty",
          },
          isUrl: {
            msg: "Image must be an URL",
          },
        },
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Harga cannot be empty",
          },
          notNull: {
            msg: "Harga cannot be empty",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Category cannot be empty",
          },
          notNull: {
            msg: "Category cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );

  return Products;
};
