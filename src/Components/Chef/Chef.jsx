import React, { useEffect, useState } from "react";
import ChefDetails from "./ChefDetails";
import "./Chef.css";
const Chef = () => {
  const [chefs, setChef] = useState([]);
  useEffect(() => {
    fetch("https://recipe-house-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
      });
  }, []);
  return (
    <div>
      {chefs.length != 0 ? (
        <div className="container">
          <h3 className="text-center fw-bold">Our Chef</h3>
          <p className="text-center text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nostrum facere adipisci vitae inventore ipsam .
          </p>

          <div className="row ">
            {chefs.map((chef) => (
              <ChefDetails chef={chef} key={chef._id}></ChefDetails>
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

export default Chef;
