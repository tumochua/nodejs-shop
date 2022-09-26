import homeServices from "../services/homeServices";

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
let getDetail = async (req, res) => {
  try {
    let data = await homeServices.getDetail(req.query.id);
    console.log("check data", data);
    return res.render("detail.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getHomePage = async (req, res) => {
  try {
    let data = await homeServices.getDataHome();
    // console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const handleGetPrivate = async (req, res, next) => {
  // return res.render("test/about.ejs");
  // const data = res.getHeader("token");
  // console.log("Cookies: ", req.cookies.token);
  try {
    const token = req.cookies.token;
    const data = await homeServices.handleGetPrivate(token);

    console.log("check", data);
    next();
    // if (data) {
    // } else {
    // }
  } catch (error) {
    res.send("login");
    console.log(error);
  }
  // const data = req.body;
  // console.log(data);
  // next()
};
const handlePrivate = (req, res, next) => {
  // return res.render("test/about.ejs");
  res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getHomePage,
  getAboutPage,
  getDetail,
  handleGetPrivate,
  handlePrivate,
};
