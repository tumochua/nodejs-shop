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

const handleRegister = (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  getDetail,
  handleRegister,
};
