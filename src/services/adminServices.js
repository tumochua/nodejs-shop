import db from "../models/index";

const handleGetAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.User.findAll({
        limit: 5,
        ofset: 2,
      });
      resolve({
        errCode: 0,
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetAllUser = (page) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (page) {
        page <= 1 ? (page = 1) : page;
        const PAGE_SIZE = 5;
        const skip = (page - 1) * PAGE_SIZE;
        const data = await db.User.findAll({
          limit: PAGE_SIZE,
          offset: skip,
        });
        resolve({
          errCode: 0,
          data: data,
          currentPage: page,
          totalItem: PAGE_SIZE,
        });
      } else {
        const data = await db.User.findAll();
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleGetAllUsers,
  handleGetAllUser,
};
