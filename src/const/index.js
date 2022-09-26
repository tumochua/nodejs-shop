import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
const HANDLE_CHECK_EMAIL = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkIsEmail = await db.User.findOne({
        where: {
          email: email,
        },
        // attributes: {
        //   exclude: ["password"],
        // },
      });
      if (checkIsEmail) {
        resolve(checkIsEmail);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
const HANDEL_HASH_PASSWORD = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
const HANDLE_COMPARE_PASSWORD = (password, hashPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await bcrypt.compareSync(password, hashPassword);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  HANDLE_CHECK_EMAIL,
  HANDEL_HASH_PASSWORD,
  HANDLE_COMPARE_PASSWORD,
};
