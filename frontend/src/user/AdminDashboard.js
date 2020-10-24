import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
const InventoryDashboard = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card text-center">
        <h4 className="card-header bg-dark text-white">Inventory Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/catagory" className="nav-link text-success">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/catagories" className="nav-link text-success">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="Welcome to Inventory Management"
      description="Manage all of your products here"
    >
      <div className="row h-100">
        <div className="col-4 mx-auto"> {adminLeftSide()}</div>
      </div>
    </Base>
  );
};
export default InventoryDashboard;
