const { Op } = require("sequelize");
const { comparePassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const { Users, Products, Category } = require("../models");

class Controller {
  static async register(req, res, next) {
    try {
      const newUser = await Users.create(req.body);
      res.status(201).json({ message: "User created", newUser });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
        const { email, password } = req.body;
        if (!email) throw { name: "EmailRequired" };
        if (!password) throw { name: "PassRequired" };
  
        const user = await Users.findOne({ where: { email: email } });
        if (!user) throw { name: "InvalidLogin" };
  
        const checkPass = comparePassword(password, user.password);
        if (!checkPass) throw { name: "InvalidLogin" };
  
        const payload = { id: user.id };
        const token = signToken(payload);
        res.status(200).json({ message: "Success Login", token, user });
      } catch (error) {
        console.log(error);
        next(error)
      }
  }
  static async getAllProducts(req, res, next) {
    try {
      let { search, page } = req.query;
      let option = { order: [["id", "ASC"]] };

      if (search) {
        option.where = {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }

      let limit = 10;
      let pageNumber = 1;
      if (page) {
        if (page.size) {
          limit = +page.size;
          option.limit = limit;
        }

        if (page.number) {
          pageNumber = + page.number;
          option.offset = limit * (pageNumber - 1);
          option.limit = limit;
        }
      } else {
        option.limit = limit;
        option.offset = limit * (pageNumber - 1);
      }

      const { count, rows } = await Products.findAndCountAll(option);
      res.status(200).json({
        page: pageNumber,
        data: rows,
        totalData: count,
        totalPage: Math.ceil(count / limit),
        dataPerPage: limit,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getDetailProduct (req, res, next) {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id, { include: Category });
      if (!product) throw { name: "NotFound" };
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async createProduct (req, res, next) {
    try {
      const newProduct = await Products.create(req.body);
      res.status(201).json({ message: "Product created", newProduct });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async updateProduct (req, res, next) {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);
      if (!product) throw { name: "NotFound" };
      await product.update(req.body);
      res.status(200).json({ message: "Product updated", product });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async deleteProduct (req, res, next) {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);
      if (!product) throw { name: "NotFound" };
      await product.destroy();
      res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
