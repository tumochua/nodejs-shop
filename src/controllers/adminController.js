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
const handleGetPagingListUsers = async (req, res) => {
  try {
    return res.status(200).json({
      data: req.data,
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
  handleGetPagingListUsers,
};
