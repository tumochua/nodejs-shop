import db from "../../models/index";
import {
  HANDLE_CHECK_EMAIL,
  HANDEL_HASH_PASSWORD,
  HANDLE_COMPARE_PASSWORD,
} from "../../utils/index";
const handleregisters = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userEmail = data.email;
      const userFirstName = data.firstName;
      const userLastName = data.lastName;
      const userPassword = data.password;
      if (!userEmail || !userFirstName || !userLastName || !userPassword) {
        resolve({
          message: "missing inputs parmeter",
        });
        return;
      }
      const checkIsData = await HANDLE_CHECK_EMAIL(data.email);
      if (!checkIsData) {
        let hashPasswordFromBcrypt = await HANDEL_HASH_PASSWORD(data.password);
        let user = await db.User.create({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          genderId: data.genderId,
          positionId: data.positionId,
          password: hashPasswordFromBcrypt,
        });
        delete user.dataValues.password;
        resolve({
          message: "create users successful",
          errorCode: 2,
          user: user,
        });
        return;
      } else {
        resolve({
          message: "User already exists ",
          errorCode: 4,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

// let handleLogin = (user) => {
//   return new Promise(async (resolve, reject) => {
//     // console.log("check cookies", user);
//     let userEmail = user.email;
//     let userPsswordHash = user.password;
//     try {
//       if (!userEmail || !userPsswordHash) {
//         resolve({
//           errCode: 1,
//           message: "missing inputs parmeter",
//         });
//         return;
//       }
//       // userData = await db.User.findOne({
//       //   where: {
//       //     email: userEmail,
//       //   },
//       // });
//       const userData = await HANDLE_CHECK_EMAIL(userEmail);
//       console.log(userData);
//       if (userData.status === 4) {
//         resolve({
//           errCode: 1,
//           message:
//             "Incorrect account information or password please log in again",
//         });
//       }
//       if (userData) {
//         const checkpassword = userData.password;
//         const checkComparePassword = await HANDLE_COMPARE_PASSWORD(
//           userPsswordHash,
//           checkpassword
//         );
//         // console.log(checkpassword);
//         if (!checkComparePassword) {
//           resolve({
//             errCode: 1,
//             message:
//               "Incorrect account information or password please log in again",
//           });
//           return;
//         } else {
//           delete userData.password;
//           resolve({
//             data: userData,
//             message: "ok",
//           });
//         }
//         return;
//       } else {
//         resolve({
//           errCode: 2,
//           message: "User's not found",
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });
// };
const handleLogin = ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await HANDLE_CHECK_EMAIL(email);
      if (user === true) {
        let users = await db.User.findOne({
          where: { email: email },
          // attributes: {
          //   exclude: ["password"],
          // },
        });
        if (users) {
          const userPassword = users.password;
          const isPassword = await await HANDLE_COMPARE_PASSWORD(
            password,
            userPassword
          );

          if (isPassword) {
            delete users.password;
            resolve({
              errorCode: 2,
              data: users,
            });
          } else {
            resolve({
              errorCode: 4,
              message:
                "Incorrect account or password information. Please update again",
            });
          }
        }
      } else {
        resolve({
          errorCode: 4,
          message:
            "Incorrect account or password information. Please update again",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleregisters,
  handleLogin,
};
