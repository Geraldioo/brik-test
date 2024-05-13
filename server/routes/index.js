const express = require('express');
const { errHandler } = require('../middlewares/errHandler');
const Controller = require('../controllers/controller');
const { authentication } = require('../middlewares/authentication');
const route = express.Router();

route.post("/register", Controller.register);
route.post("/login", Controller.login);
route.get("/products", Controller.getAllProducts);
route.get("/products/:id", Controller.getDetailProduct);

route.use(authentication);

route.post("/products", Controller.createProduct);
route.put("/products/:id", Controller.updateProduct);
route.delete("/products/:id", Controller.deleteProduct);

route.use(errHandler);

module.exports = route;