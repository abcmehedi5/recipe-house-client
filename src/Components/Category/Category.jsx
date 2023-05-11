import React, { useEffect, useState } from "react";
import "./Category.css";
import CategoryDetails from "./CategoryDetails";
const Category = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("https://recipe-house-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div>
      {categorys.length != 0 ? (
        <div className="container mt-5">
          <h3 className="text-center fw-bold">Recipe House Category List</h3>
          <p className="text-center text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nostrum facere adipisci vitae inventore ipsam .
          </p>
          <div className="row mt-5 mb-5">
            {categorys.map((category) => (
              <CategoryDetails
                category={category}
                key={category._id}
              ></CategoryDetails>
            ))}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
