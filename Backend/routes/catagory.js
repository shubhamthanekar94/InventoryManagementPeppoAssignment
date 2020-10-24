const express = require("express");
const router = express.Router(); //express creates Routers

const {
  getCatagoryById,
  createCatagory,
  getAllCatagories,
  getCatagory,
  updateCatagory,
  removeCatagory,
} = require("../controllers/catagory");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("catagoryId", getCatagoryById);

//actual routes goes here

//create route
router.post(
  "/catagory/create/:userId",
  isSignedIn,
  isAuthenticated,
  createCatagory
);

//read routes
router.get("/catagory/:catagoryId", getCatagory);
router.get("/catagories", getAllCatagories);

//update route
router.put(
  "/catagory/:catagoryId/:userId",
  isSignedIn,
  isAuthenticated,
  updateCatagory
);

//delete route
router.delete(
  "/catagory/:catagoryId/:userId",
  isSignedIn,
  isAuthenticated,
  removeCatagory
);

module.exports = router;
