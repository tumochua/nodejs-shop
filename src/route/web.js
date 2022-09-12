import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/home", homeController.getHomePage);
  router.get("/detail", homeController.getDetail);
  router.get("/about", homeController.getAboutPage);

  router.post("/register", homeController.handleRegister);

  return app.use("/", router);
};

module.exports = initWebRoutes;
