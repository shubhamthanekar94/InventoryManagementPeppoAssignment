//this is for Menu bar
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signuout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" }; //active colour green
  } else {
    return { color: "#FFFFFF" }; //not active colour white
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>

      {isAuthenticated() && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            Inventory Management Dashboard
          </Link>
        </li>
      )}
      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signuout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
