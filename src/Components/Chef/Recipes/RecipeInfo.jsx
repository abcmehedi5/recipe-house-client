import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const RecipeInfo = () => {
  const recipe = useLoaderData();
  const { _id, name, description, ingredients, instructions, image } = recipe;
  return (
    <div>
      <div className="recipe-info-header d-flex flex-column justify-content-center align-items-center">
        <h1>{name}</h1>
        <p className="w-50 text-center text-secondary">{description}</p>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between gap-5 mt-5 align-items-center">
          <img className="img-fluid w-50 rounded-4 mb-3" src={image} alt="" />
          <div>
            <h5 className="fw-bold">ingredients</h5>
            {ingredients.map((intgre, index) => (
              <li className="text-secondary" key={index}>{intgre}</li>
            ))}

            <h5 className="fw-bold mt-4">instructions</h5>
            {instructions.map((instr, index) => (
              <li className="text-secondary" key={index}>{instr}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
