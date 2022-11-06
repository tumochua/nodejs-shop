import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

import { PAGE_SIZE } from "../constants/index";

const usersCheckUserAlreadyExist = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await db.User.findOne({
        where: {
          id: userId,
        },
        attributes: {
          exclude: ["password", "email"],
        },
      });
      if (userData) {
        resolve(userData);
      } else {
        resolve({ errCode: 4, message: "Not Found User" });
      }
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

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
      order: [["id", "ASC"]],
      include: [
        {
          model: db.AllCode,
          as: "genderData",
          attributes: ["id", "KeyMap", "valueEn", "valueVi"],
        },
        {
          model: db.AllCode,
          as: "positionData",
          attributes: ["id", "KeyMap", "valueEn", "valueVi"],
        },
      ],
      raw: true,
      nest: true,
    });
    users = users.length;
    if (data.length === 0) {
      return {
        errCode: 4,
        message: "Not Found Fage",
        totalUsers: users,
      };
    } else {
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

const usesDeleteUserService = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const foundUser = await db.User.findOne({
        where: {
          id: userId,
        },
      });
      if (!foundUser) {
        resolve({
          errCode: 2,
          errMessage: `User Not Fount`,
        });
      } else {
        await db.User.destroy({
          where: { id: userId },
        });
        resolve({
          errCode: 0,
          errMessage: `Delete User successful`,
        });
      }
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

const usersEditUsers = (data) => {
  // console.log(data);
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (user) {
        user.lastName = data.lastName;
        user.firstName = data.firstName;
        user.address = data.address;
        user.genderId = data.genderId;
        user.positionId = data.positionId;

        await user.save();

        resolve({
          errCode: 2,
          message: "update the user succeeds",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: `user's not found`,
        });
      }
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};
const userGetDetailUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await db.User.findOne({
        where: {
          id: userId,
        },
        // order: [["id", "ASC"]],
        attributes: {
          exclude: ["password", "email"],
        },
        include: [
          {
            model: db.AllCode,
            as: "genderData",
            attributes: ["id", "KeyMap", "valueEn", "valueVi"],
          },
          {
            model: db.AllCode,
            as: "positionData",
            attributes: ["id", "KeyMap", "valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });

      if (userData) {
        resolve(userData);
      } else {
        resolve({ errCode: 4, message: "Not Found User" });
      }
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

const convertBufferToBase64 = (product) => {
  try {
    const imageBase64 = Buffer.from(product, "base64").toString("binary");
    // let imageBase64 = null;
    // products.map((product) => {
    //   imageBase64 = product.image;
    // });
    return imageBase64;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  HANDLE_CHECK_EMAIL,
  HANDEL_HASH_PASSWORD,
  HANDLE_COMPARE_PASSWORD,

  usePagination,
  usePaginationService,
  usesDeleteUserService,
  usersEditUsers,
  userGetDetailUser,
  convertBufferToBase64,
};
