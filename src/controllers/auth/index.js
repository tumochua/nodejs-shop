require("dotenv").config();
const jwt = require("jsonwebtoken");
import auth from "../../services/auth/index";

const handleRegister = async (req, res) => {
  // console.log("check data", req.body);
  try {
    let data = await auth.handleregisters(req.body);
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
const handleLogin = async (req, res) => {
  try {
    const userData = await auth.handleLogin(req.body);
    // console.log(" data", userData.data.id);
    if (userData.errorCode === 2) {
      const userId = userData.data.id;
      let token = jwt.sign({ tokenId: userId }, process.env.JSON_WEB_TOKEN);
      // console.log(token);
      return res.status(200).json({
        data: userData,
        token: token,
      });
    }
    return res.status(200).json({
      data: userData,
    });
  } catch (error) {
    console.log(error);
  }
};

// const handleTest = (req, res) => {

//   res.send("mess");
// };

module.exports = {
  handleRegister,
  handleLogin,
  // handleTest,
};
