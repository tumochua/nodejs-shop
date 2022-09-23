const JWT = require("jsonwebtoken");
import db from "../models/index";
import bcrypt from "bcryptjs";

const loginMiddware = async (req, res, next) => {
  try {
    let userEmail = req.body.email;
    let userPsswordHash = req.body.passwordHash;
    if (!userEmail || !userPsswordHash) {
      return res.status(500).json({
        errCode: 1,
        message: "missing inputs parmeter",
      });
    }
    const data = await db.User.findOne({
      //   attributes: {
      //     exclude: ["passwordHash"],
      //   },
      where: {
        email: userEmail,
      },
    });
    const checkDataEmail = data.email;
    const checkPasswordHash = data.passwordHash;
    const checkComparePassword = await bcrypt.compareSync(
      userPsswordHash,
      checkPasswordHash
    );

    if (userEmail !== checkDataEmail && checkComparePassword) {
      return res.status(403).json({
        errCode: 1,
        message:
          "Incorrect account information or password please log in again",
      });
    } else {
      delete data.passwordHash;
      return res.status(200).json({
        data: data,
        message: "ok",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  loginMiddware,
};
