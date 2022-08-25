import React from "react";
import pagenotfoundImage from "../assets/pagenotfound.jpg";
//react router dom
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead">Sorry, thie page does not exist</p>
      <img src={pagenotfoundImage} height="500" width="500" alt="not found" />
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
