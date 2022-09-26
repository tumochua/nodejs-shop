import db from "../../models/index";
import {
  HANDLE_CHECK_EMAIL,
  HANDEL_HASH_PASSWORD,
  HANDLE_COMPARE_PASSWORD,
} from "../../const/index";
const handleregisters = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userEmail = data.email;
      const userPassword = data.password;
      if (!userEmail || !userPassword) {
        resolve({
          message: "missing inputs parmeter",
        });
        return;
      }
      const checkIsData = await HANDLE_CHECK_EMAIL(data.email);
      if (!checkIsData) {
        let hashPasswordFromBcrypt = await HANDEL_HASH_PASSWORD(data.password);
        await db.User.create({
          email: data.email,
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          password: hashPasswordFromBcrypt,
        });
        resolve("create users successful");
        return;
      } else {
        resolve("User already exists ");
      }
    } catch (e) {
      reject(e);
    }
  });
};

let handleLogin = (user) => {
  return new Promise(async (resolve, reject) => {
    // console.log("check cookies", user);
    let userEmail = user.email;
    let userPsswordHash = user.password;
    try {
      if (!userEmail || !userPsswordHash) {
        resolve({
          errCode: 1,
          message: "missing inputs parmeter",
        });
        return;
      }
      // userData = await db.User.findOne({
      //   where: {
      //     email: userEmail,
      //   },
      // });
      const userData = await HANDLE_CHECK_EMAIL(userEmail);
      if (userData) {
        const checkpassword = userData.password;
        const checkComparePassword = await HANDLE_COMPARE_PASSWORD(
          userPsswordHash,
          checkpassword
        );
        // console.log(checkpassword);
        if (!checkComparePassword) {
          resolve({
            errCode: 1,
            message:
              "Incorrect account information or password please log in again",
          });
          return;
        } else {
          delete userData.password;
          resolve({
            data: userData,
            message: "ok",
          });
        }
        return;
      } else {
        resolve({
          errCode: 2,
          message: "User's not found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = {
  handleregisters,
  handleLogin,
};
