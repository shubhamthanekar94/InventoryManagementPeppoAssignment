import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3 mt-5">
        <h4>If you got any questions, feel free to reach out!</h4>
      </div>
      <div className="container">
        <span className="text-muted">
          This is an Inventory Management assignment for Peppo Full Stack
          Developer
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
