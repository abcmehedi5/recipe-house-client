import React from "react";
import { MdFavorite } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const RecipeDetails = ({ recipe, handleFevorite, fevorite }) => {
  const { ingredients, name, description, instructions, rating, image, _id } =
    recipe;
  return (
    <div className="col-md-3">
      <div className="card recipe-card">
        <div className="card-body">
          <img className="img img-fluid" src={image} alt="icon" />
          <hr />
          <Link to={`/recipe/${_id}`}>
            <h5 className="card-title fw-bold mt-3">{name}</h5>
          </Link>
          <p>{description.slice(0, 100)}...</p>
          <div className="d-flex justify-content-between align-items-center recipe-card-footer">
            <Rating
              readOnly
              style={{ maxWidth: 120 }}
              value={parseInt(Math.round(rating))}
            />
            <button
              disabled={fevorite.includes(recipe._id)}
              onClick={() => handleFevorite(_id)}
            >
              <MdFavorite />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
