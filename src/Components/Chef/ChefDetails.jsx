import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefDetails = ({ chef }) => {
  const { _id, image, name } = chef;
  return (
    <div className="col-md-3 mb-3">
      <div className="card chef-card position-relative ">
        <div className="card-body text-center">
          <LazyLoad height={200} threshold={0.5}>
            <img className="img img-fluid" src={image} alt="icon" />
          </LazyLoad>
          <h6 className="card-title fw-bold  mt-3">
            <small>{name}</small>
          </h6>
          <Link to={`/recipes/${_id}`}>
            <button className="  btn-chef btn btn-danger ">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
