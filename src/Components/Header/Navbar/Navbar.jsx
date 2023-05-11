import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import {
  sweetError,
  sweetSuccess,
} from "../../../utilities/SweetAlert/SweetAlert";
import { AiOutlineLogin } from "react-icons/ai";
const Navbar = () => {
  const { user, logOut, spinner } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleLogOut = () => {
    setLoading(true);
    logOut()
      .then(() => {
        sweetSuccess("logout successfull");
        setLoading(false);
      })
      .catch((error) => {
        sweetError(error.message);
        setLoading(false);
      });
  };
  // mouse popup with profile picture
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#DCDFDD" }}

    >
      <div className="container-fluid container">
        <Link className="navbar-brand fw-bold" to={"/"}>
          <h4 className="fw-bold text-primary"> RECIPE HOUSE</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav menuli m-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item me-3">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            {!user && (
              <li className="nav-item me-3">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}

            {!user && (
              <li className="nav-item me-3">
                <NavLink to={"/register"}>Registration</NavLink>
              </li>
            )}

            <li className="nav-item me-3">
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
          {user && (
            <div className="nav-right d-flex align-items-center">
              {/* log out button */}
              <span>
                <button
                  onClick={() => handleLogOut()}
                  className="btn btn-danger me-3"
                >
                  {loading && (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  <AiOutlineLogin size={20} /> logout
                </button>
              </span>
              <div className="profile">
                <img
                  src={user?.photoURL}
                  alt="profile"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {showPopup && (
                  <div className="popup">
                    <p>{user?.displayName}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
