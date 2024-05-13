const { verifyToken } = require("../helper/jwt");
const { Users } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw { name: "InvalidToken" };

    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") throw { name: "InvalidToken" };

    const { id } = verifyToken(token);

    const user = await Users.findByPk(id);
    if (!user) throw { name: "InvalidToken" };

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentication };
