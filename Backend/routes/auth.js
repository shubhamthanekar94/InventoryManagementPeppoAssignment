var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signup, signout, signin } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name must be alphabeic and min length 3")
      .isAlpha()
      .isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be of min length 3").isLength({
      min: 3,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
