import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

import { PAGE_SIZE } from "../constants/index";

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
        resolve(true);
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

const usePagination = (req, res, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      let currentPage = req.query.page >= 1 ? req.query.page : null;
      currentPage = parseInt(currentPage);

      const data = await usePaginationService(currentPage);
      req.data = data;
      next();
    } catch (error) {
      res.status(500).json({
        message: "error from serve page",
      });
      console.log(error);
    }
  });
};

const usePaginationService = async (currentPage) => {
  let users = await db.User.findAll({
    attributes: {
      exclude: ["password"],
    },
  });
  if (!currentPage) {
    return {
      message: "ok",
      data: users,
    };
  } else {
    const skip = (currentPage - 1) * PAGE_SIZE;
    const data = await db.User.findAll({
      limit: PAGE_SIZE,
      offset: skip,
      attributes: {
        exclude: ["password"],
      },
    });
    if (data.length === 0) {
      return {
        errCode: 4,
        message: "Not Found Fage",
      };
    } else {
      users = users.length;
      return {
        errCode: 0,
        data: data,
        currentPage: currentPage,
        totalItemPage: PAGE_SIZE,
        totalUsers: users,
      };
    }
  }
};

module.exports = {
  HANDLE_CHECK_EMAIL,
  HANDEL_HASH_PASSWORD,
  HANDLE_COMPARE_PASSWORD,

  usePagination,
  usePaginationService,
};
