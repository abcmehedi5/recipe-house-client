import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipes from "./Recipes";

const ViewRecipes = () => {
  const chef = useLoaderData();
  const { _id, image, name, experience, recipes, likes, bio } = chef;
  return (
    <div className="view-recipes-container">
      {/* recipe header */}
      <div className="view-header">
        <h2 className="text-center">Recipes</h2>
        <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis.</p>
      </div>

      <div className="container">
        <div className="row pt-3 d-flex justify-content-evenly align-items-center chef-recipe-about">
          <div className="col-md-4">
            <img className="img-fluid rounded-4" src={chef.image} alt="" />
          </div>
          <div className="col-md-6 chef-recipe-about-right">
            <h4>Name: {name}</h4>
            <p>{bio}</p>
            <p>Like: {likes}</p>
            <p>Total Recipes {recipes}</p>
            <p> Experience: {experience} years</p>
          </div>
        </div>
        <Recipes id ={_id}></Recipes>
      </div>
    </div>
  );
};

export default ViewRecipes;
