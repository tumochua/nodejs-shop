import db from "../models/index";
import { convertBufferToBase64 } from "../utils/index";

const handleCreateProducts = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = db.Product.create({
        userId: data.userId,
        shop: data.shop,
        title: data.title,
        price: data.price,
        discount: data.discount,
        quantity: data.quantity,
        description: data.description,
        image: data.avatar,
      });
      resolve({
        message: "create product successful",
        errorCode: 2,
        user: user,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const handleGetProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const products = await db.Product.findAll();
      const base64 = convertBufferToBase64(products);
      products.forEach((product) => {
        product.image = base64;
      });
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleCreateProducts,
  handleGetProduct,
};
