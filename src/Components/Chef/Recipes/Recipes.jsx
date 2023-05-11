import React, { useEffect, useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipes = ({ id }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch(`https://recipe-house-server.vercel.app/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // handle fevorite
  const handleFevorite = (id) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
  };
  return (
    <div>
      <div className="row mx-auto d-flex justify-content-center mt-4 pb-3">
        {recipes.map((recipe) => (
          <RecipeDetails
            recipe={recipe}
            key={recipe._id}
            fevorite={favorites}
            handleFevorite={handleFevorite}
          ></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
