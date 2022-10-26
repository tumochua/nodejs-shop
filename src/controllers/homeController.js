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
    // console.log("check token", token);
    if (token) {
      const data = await homeServices.handleGetPrivate(token);
      console.log("check", data);
    }

    next();
    // if (data) {
    // } else {
    // }
  } catch (error) {
    res.send("token ko hop le");
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

const handleAdmin = (req, res, next) => {
  // const token = req.cookies;
  // console.log("check token admin", token);
  try {
    return res.status(200).json({
      message: "hello admin",
    });
  } catch (error) {
    res.status(500).json({
      message: "error from serve",
    });
    console.log("check eror controll", error);
  }
};

const handleShipper = (req, res) => {
  try {
    return res.status(200).json({
      message: "hello shipper",
    });
  } catch (error) {
    res.status(500).json({
      message: "error from serve",
    });
    console.log("check eror controll", error);
  }
};
const handelSalesman = (req, res) => {
  try {
    return res.status(200).json({
      message: "hello salesman",
    });
  } catch (error) {
    res.status(500).json({
      message: "error from serve",
    });
    console.log("check eror controll", error);
  }
};
module.exports = {
  getHomePage,
  getAboutPage,
  getDetail,
  handleGetPrivate,
  handlePrivate,
  handleAdmin,
  handleShipper,
  handelSalesman,
};
