import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide "
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://insanelygoodrecipes.com/wp-content/uploads/2022/01/Cheeseburger-Sliders-with-Vegetables-and-Sesame-Seeds.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src="https://media.self.com/photos/6172c5144c19234fdf79ed24/2:1/w_2580,c_limit/Slow-Cooker-indian-Butter-ChickenIMG_9285.jpeg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src="https://img.freepik.com/premium-photo/whole-roasted-chicken-rosemary-tomato-lemon-wooden-cutting-board-baked-chicken-grilled-barbecue-delicious-food-dining-table-holiday-celebrate_73523-3045.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
