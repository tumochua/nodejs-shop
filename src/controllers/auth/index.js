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
  // console.log("Cookies: ", req.cookies);
  try {
    // res.setHeader("token", req.token);
    // console.log(res.getHeader("token"));
    const data = await auth.handleLogin(req.body);
    return res.status(200).json({
      data: data,
      token: req.token,
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
