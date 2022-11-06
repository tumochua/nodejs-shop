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

const handleGetPagingListUsers = (page) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (page) {
        const PAGE_SIZE = 5;
        page <= 1 ? (page = 1) : page;
        const skip = (page - 1) * PAGE_SIZE;
        const data = await db.User.findAll({
          limit: PAGE_SIZE,
          offset: skip,
          attributes: {
            exclude: ["password"],
          },
          // include: [
          //   {
          //     model: db.AllCode,
          //     as: "genderData",
          //     attributes: ["id", "KeyMap", "valueEn", "valueVi"],
          //   },
          // ],
          // raw: true,
          // nest: true,
        });
        console.log(data);
        let users = await db.User.findAll();
        users = users.length;
        resolve({
          errCode: 0,
          data: data,
          currentPage: page,
          totalItemPage: PAGE_SIZE,
          totalUsers: users,
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

const handleApiTestRelationship = (inputId) => {
  return new Promise(async (resolve, reject) => {
    const data = await db.User.findOne({
      where: {
        id: inputId,
      },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: db.AllCode,
          as: "genderData",
          attributes: ["id", "KeyMap", "valueEn", "valueVi"],
        },
      ],
      raw: true,
      nest: true,
    });
    resolve(data);
  });
};

module.exports = {
  handleGetAllUsers,
  handleGetPagingListUsers,
  handleApiTestRelationship,
};
