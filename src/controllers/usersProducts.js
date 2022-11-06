import usersProduct from "../services/usersServices";

const handleCreateProducts = async (req, res) => {
  try {
    const data = await usersProduct.handleCreateProducts(req.body);
    return res.status(200).json({
      errCode: 1,
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: 1,
      message: "error form serve",
    });
  }
};

const handleGetProduct = async (req, res) => {
  try {
    const data = await usersProduct.handleGetProduct();
    return res.status(200).json({
      errCode: 1,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handleCreateProducts,
  handleGetProduct,
};
