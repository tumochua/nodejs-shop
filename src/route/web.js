import express from "express";
import homeController from "../controllers/homeController";
import adminController from "../controllers/adminController";
import auth from "../controllers/auth/index";
import {
  hanleCheckLogin,
  handleCheckAuthAdmin,
  handleCheckShipper,
  handleCheckSalesma,
} from "../middleware/hook/index";
// import middeware from "../middleware/loginMiddware";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail", homeController.getDetail);
  router.get("/about", homeController.getAboutPage);

  router.post("/register", auth.handleRegister);
  router.post("/login", auth.handleLogin);
  // router.post("/login", middeware.handleSiginTokens, auth.handleLogin);
  router.get(
    "/private",
    homeController.handleGetPrivate,
    homeController.handlePrivate
  );

  router.get(
    "/admin",
    hanleCheckLogin,
    handleCheckAuthAdmin,
    homeController.handleAdmin
  );
  router.get(
    "/shipper",
    hanleCheckLogin,
    handleCheckShipper,
    homeController.handleShipper
  );
  router.get(
    "/salesman",
    hanleCheckLogin,
    handleCheckSalesma,
    homeController.handelSalesman
  );
  router.get("/get-all-users", adminController.handleGetAllUsers);
  router.get("/users", adminController.handleGetAllUser);
  // router.get("/test", auth.handleTest);
  // router.post("/login", middeware.loginMiddware);

  return app.use("/", router);
};

module.exports = initWebRoutes;
