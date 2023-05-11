import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Registar/Register";
import ViewRecipes from "../Components/Chef/Recipes/ViewRecipes";
import RecipeInfo from "../Components/Chef/Recipes/RecipeInfo";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Blog from "../Components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/recipes/:id",
        element: <PrivateRouter><ViewRecipes></ViewRecipes></PrivateRouter>,
        loader: ({ params }) =>
          fetch(`https://recipe-house-server.vercel.app/chef/${params.id}`),
      },
      {
        path: "/recipe/:id",
        element: <RecipeInfo></RecipeInfo>,
        loader: ({ params }) =>
          fetch(`https://recipe-house-server.vercel.app/recipe/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      }
    ],
  },
]);

export default router;
