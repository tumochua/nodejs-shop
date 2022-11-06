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
      products.forEach((product) => {
        const base64 = convertBufferToBase64(product.image);
        product.image = base64;
      });
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};

const userGetDetailProduct = async (id) => {
  try {
    if (!id) {
      return {
        errorCode: 4,
        message: "missing required parameters",
      };
    } else {
      const data = await db.Product.findOne({
        where: {
          id: id,
        },
      });
      return data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

const handleGetDetailProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await userGetDetailProduct(id);
      // console.log(data.image);
      const base64 = await Buffer.from(data.image, "base64").toString("binary");
      data.image = base64;
      resolve({
        errorCode: 2,
        data: data,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
module.exports = {
  handleCreateProducts,
  handleGetProduct,
  handleGetDetailProduct,
};
