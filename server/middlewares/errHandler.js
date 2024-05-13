const errHandler = (err, req, res, next) => {
    switch (err.name) {
      case "SequelizeValidationError":
        res.status(400).json({ message: err.errors[0].message });
        break;
      case "SequelizeUniqueConstraintError":
        res.status(400).json({ message: "Email / Username Already Registered" });
        break;
      case "EmailRequired":
        res.status(400).json({ message: "Email is required" });
        break;
      case "PassRequired":
        res.status(400).json({ message: "Password is required" });
        break;
      case "InvalidLogin":
        res.status(401).json({ message: "Invalid Email / Password" });
        break;
      case "NotFound":
        res.status(404).json({ message: "Error! Product Not Found" });
        break;
      case "InvalidToken":
      case "JsonWebTokenError":
        res.status(401).json({ message: "Invalid Token" });
        break;
      default:
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
        break;
    }
  };
  
  module.exports = { errHandler };
  