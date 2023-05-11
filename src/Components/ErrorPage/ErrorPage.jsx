import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="img img-fluid"
          src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
          alt="error"
        />
      </div>
      <h5 className="text-center"><Link to={'/'}>go to home page</Link> </h5>
    </div>
  );
};

export default ErrorPage;
