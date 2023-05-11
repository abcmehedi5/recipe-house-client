import React from "react";
import food from "../../assets/food.png";
const About = () => {
  return (
    <div className="container mt-5 mb-5 p-5 rounded " style={{backgroundColor:'#ddd7'}}>
      <div className="row">
        <div className="col-md-6">
          <img className="img img-fluid" src={food} alt="photo" />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold mb-4">About Us</h1>
          <h4 className="text-info mb-4 fw-bold">Why Choose Us ?</h4>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ea
            ratione laborum cum consectetur? Sapiente, officia vero? Libero
            doloremque excepturi quos ut, sint eius iusto dolore natus inventore
            labore? Aliquid unde sunt soluta expedita aperiam deleniti debitis
            facilis repudiandae eligendi.
          </p>
          <button className="btn btn-danger">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
