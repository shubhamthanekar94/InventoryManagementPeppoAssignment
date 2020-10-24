import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminDashBoard from "./user/AdminDashboard";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import AddCategory from "./admin/AddCategory";
import ManageCatagories from "./admin/ManageCatagories";
import UpdateCatagory from "./admin/UpdateCatagory";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/admin/create/product" exact component={AddProduct} />
        <Route path="/admin/dashboard" exact component={AdminDashBoard} />
        <Route path="/admin/products" exact component={ManageProducts} />
        <Route
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <Route path="/admin/create/catagory" exact component={AddCategory} />
        <Route path="/admin/catagories" exact component={ManageCatagories} />
        <Route
          path="/admin/catagory/update/:catagoryId"
          exact
          component={UpdateCatagory}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
