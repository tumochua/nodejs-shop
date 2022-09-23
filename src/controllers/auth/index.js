import auth from "../../services/auth/index";

const handleRegister = async (req, res) => {
  //   console.log("check data", req.body);
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
    const data = await auth.handleLogin(req.body);
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  handleRegister,
  handleLogin,
};
