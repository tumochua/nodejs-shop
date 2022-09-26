require("dotenv").config();
import { HANDLE_CHECK_EMAIL } from "../const/index";
const jwt = require("jsonwebtoken");
const handleSiginTokens = async (req, res, next) => {
  try {
    const userData = await HANDLE_CHECK_EMAIL(req.body.email);
    if (userData) {
      const token = jwt.sign(
        { tokenId: userData.id },
        process.env.JSON_WEB_TOKEN
      );
      req.token = token;
      next();
    } else {
      res.status(403).json({
        message: "User does not exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handleSiginTokens,
};
