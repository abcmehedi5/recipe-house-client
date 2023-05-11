import React from "react";
import LazyLoad from "react-lazy-load";

const CategoryDetails = ({ category }) => {
  const { description, name, image } = category;
  return (
    <div className="col-md-3 mt-2">
      <div className="card catergory-card">
        <div className="card-body text-center">
          <LazyLoad height={160} threshold={0.5}>
            <img className="img img-fluid" src={image} alt="icon" />
          </LazyLoad>
          <hr />
          <h5 className="card-title fw-bold mt-3">{name}</h5>
          <p className="card-text text-secondary">
            {description.slice(0, 65)}..
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
