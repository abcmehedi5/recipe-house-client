import React from "react";
import "./Footer.css";
import { FaFacebookSquare,FaTwitter,FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" footer-items d-flex justify-content-center align-items-center">
      <div className="row  container">
        <div className="col-md-4">
          <h4 className="fw-bold">RECIPE HOUSE</h4>
          <p className="text-secondary">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="d-flex gap-3">
            <FaFacebookSquare size={20}/>
            <FaTwitter size={20}/>
            <FaInstagramSquare size={20}/>
          </div>
        </div>
        <div className="col-md-2">
          <h4 className="fw-bold">Company</h4>
          <li>About Us</li>
          <li>Work</li>
          <li>Latest News</li>
          <li>Careers</li>
        </div>
        <div className="col-md-2">
          <h4 className="fw-bold">Quick Start</h4>
          <li>Home</li>
          <li>Login</li>
          <li>Contact</li>
          <li>blog</li>
        </div>
        <div className="col-md-2">
          <h4 className="fw-bold">Support</h4>
          <li>Help Desk</li>
          <li>Sales</li>
          <li>Become a Partner</li>
          <li>Developers</li>
        </div>
        <div className="col-md-2">
          <h4 className="fw-bold ">Contact</h4>
          <p className="text-secondary">524 Broadway , NYC</p>
          <p className="text-secondary">+1 777 - 978 - 5570</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
