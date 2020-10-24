import React from "react";
import "../styles.css";
import Base from "./Base";

export default function Home() {
  return (
    <Base title="Welcome to ABC store" description="Branch - Bangalore">
      <div className="row text-center">
        <h1 className="text-white">
          Please Signup and Signin with prefilled credentials to see the
          Inventory Management tab in menu bar.
        </h1>
      </div>
    </Base>
  );
}
