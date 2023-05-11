import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="mt-5 mb-3  text-center">
      <div className="subscribe p-5">
        <h3 className="text-center mb-4">Save time, save money!</h3>
        <p className="text-secondary">Sign up and we'll send the best deals to you</p>
        <div className="mb-3 w-50 mx-auto ">
          <input
            type="email"
            placeholder="Your Email Address"
            className=" "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <button className="subBtn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
