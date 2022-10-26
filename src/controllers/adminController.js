import adminServices from "../services/adminServices";

const handleGetAllUsers = async (req, res) => {
  try {
    const data = await adminServices.handleGetAllUsers();
    return res.status(200).json({
      data: data,
      message: "ok",
    });
  } catch (error) {
    res.status(500).json({
      message: "error from serve",
    });
    console.log(error);
  }
};
const handleGetAllUser = async (req, res) => {
  try {
    let PAGE_SIZE = req.query.page ? req.query.page : null;
    PAGE_SIZE = parseInt(PAGE_SIZE);
    const data = await adminServices.handleGetAllUser(PAGE_SIZE);
    return res.status(200).json({
      data: data,
      message: "ok",
    });
  } catch (error) {
    res.status(500).json({
      message: "error from serve",
    });
    console.log(error);
  }
};
module.exports = {
  handleGetAllUsers,
  handleGetAllUser,
};
