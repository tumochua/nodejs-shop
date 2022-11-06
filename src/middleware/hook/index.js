require("dotenv").config();
import db from "../../models/index.js";

const JWT = require("jsonwebtoken");

const hanleCheckLogin = async (req, res, next) => {
  try {
    const tokens = req.cookies.token;
    // console.log("check cooki", tokens);
    if (tokens) {
      const token = JWT.verify(tokens, process.env.JSON_WEB_TOKEN);
      // console.log("check token", token);
      if (token) {
        const userData = await db.User.findOne({
          where: {
            id: token.tokenId,
          },
          attributes: {
            exclude: ["password"],
          },
        });
        const convertStringToNumber = +userData.positionId;
        req.userData = {
          userData,
          positionId: convertStringToNumber,
        };

        next();
      }
      // console.log("token", token);
    } else {
      return res.status(200).json({
        message: "Bạn cần phải đăng nhập",
      });
    }
  } catch {
    return res.status(200).json({
      message: "Error from serve",
    });
  }
};
const handleCheckAuthAdmin = (req, res, next) => {
  // console.log("handleCheckAuthAdmin", req.userData.positionId);
  if (req.userData.positionId === 5) {
    next();
  } else {
    return res.status(200).json({
      message: "ban ko du quyen truy cap vao he thong",
    });
  }
};
const handleCheckShipper = (req, res, next) => {
  // console.log(req.userData.positionId);
  if (req.userData.positionId >= 2) {
    next();
  } else {
    return res.status(200).json({
      message: "ban ko du quyen truy cap vao he thong",
    });
  }
};
const handleCheckSalesma = (req, res, next) => {
  if (req.userData.positionId >= 1) {
    next();
  } else {
    return res.status(200).json({
      message: "ban ko du quyen truy cap vao he thong",
    });
  }
};

module.exports = {
  hanleCheckLogin,
  handleCheckAuthAdmin,
  handleCheckShipper,
  handleCheckSalesma,
};
