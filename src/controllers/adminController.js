import adminServices from "../services/adminServices";
import {
  usesDeleteUserService,
  usersEditUsers,
  userGetDetailUser,
} from "../utils/index";

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
const handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing required parameters",
    });
  } else {
    const data = await usesDeleteUserService(req.body.id);
    return res.status(200).json(data);
  }
};

const handleEditUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing required parameters",
    });
  } else {
    const data = await usersEditUsers(req.body);
    return res.status(200).json({
      message: "ok",
      data: data,
    });
  }
};

const handleGetDetailUser = async (req, res) => {
  if (!req.query.userId) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing required parameters",
    });
  } else {
    const data = await userGetDetailUser(req.query.userId);
    return res.status(200).json({
      message: "ok",
      data: data,
    });
  }
};

const handleApiTestRelationship = async (req, res) => {
  const infor = await adminServices.handleApiTestRelationship(req.query.id);
  return res.status(200).json({
    message: "ok",
    data: infor,
  });
};

module.exports = {
  handleGetAllUsers,
  handleGetPagingListUsers,
  handleDeleteUser,
  handleEditUser,
  handleGetDetailUser,
  handleApiTestRelationship,
};
