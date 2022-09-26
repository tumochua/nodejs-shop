require("dotenv").config();
import db from "../models/index";
const jwt = require("jsonwebtoken");
let getDataHome = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findAll();
      resolve({
        errCode: 0,
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findOne({
        where: {
          id: id,
        },
      });
      resolve({
        errCode: 0,
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const handleGetPrivate = (tokenData) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const token = jwt.verify(tokenData, process.env.JSON_WEB_TOKEN);
      const token = jwt.verify(tokenData, process.env.JSON_WEB_TOKEN);
      resolve({
        errCode: 0,
        data: token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getDetail,
  getDataHome,
  handleGetPrivate,
};
