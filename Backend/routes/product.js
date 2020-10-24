const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCatagories,
} = require("../controllers/product");
const { isAuthenticated, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("productId", getProductById);

//create route
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  createProduct
);

//read route
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete route
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteProduct
);

//update route
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  updateProduct
);

router.get("/products", getAllProducts);

router.get("/products/catagories", getAllUniqueCatagories);

module.exports = router;
