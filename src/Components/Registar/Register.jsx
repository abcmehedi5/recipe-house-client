import React, { useContext, useState } from "react";
import "./Register.css";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { HiPhotograph } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  sweetError,
  sweetSuccess,
} from "../../utilities/SweetAlert/SweetAlert";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
  const [loading, setLoading] = useState(false);
  // authentication context
  const { createUserEmail, googleSingin, updateUserProfile } =
    useContext(AuthContext);
  // submit registrtion
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const photoUrl = from.photoUrl.value;
    const password = from.password.value;
    const confirmPassword = from.confirm.value;

    // validate------------------
    // name validate
    if (!/(?=.*[a-z])/.test(name)) {
      sweetError("Your name not valid");
      setLoading(false);
      return;
    }
    // email validate

    // password validate
    if (password !== confirmPassword) {
      sweetError("Your password did not match");
      setLoading(false);
      return;
    } else if (password.length < 6) {
      sweetError("password must be 6 characters or longer");
      setLoading(false);
      return;
    }

    // user create email and password
    createUserEmail(email, password)
      .then((result) => {
        const user = result.user;
        profileUpdate(user, name, photoUrl);
        sweetSuccess("Registration Successfull ");
        setLoading(false);
        from.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetError(errorMessage);
        setLoading(false);
      });
  };

  // update user profile

  const profileUpdate = (user, name, photoUrl) => {
    updateUserProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then((result) => {})
      .catch((error) => {
        sweetError(error.message);
      });
  };

  // handle google singin
  const handleGoogleSignIn = () => {
    googleSingin()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetError(errorMessage);
      });
  };

  return (
    <div className="m-4">
      <div className="register-container">
        <form onSubmit={handleSubmit} className="w-100">
          <h4 className="text-center text-primary mb-4">
            Recipe House Registration
          </h4>
          <div className="mb-3">
            <span className="input-group-text">
              <RxAvatar />
              <input
                type="text"
                name="name"
                required
                className=" form-control"
                placeholder="full name"
              />
            </span>
          </div>
          <div className="mb-3">
            <span className="input-group-text">
              <AiOutlineMail />
              <input
                type="email"
                name="email"
                required
                className=" form-control"
                placeholder="email"
              />
            </span>
          </div>

          <div className="mb-3">
            <span className="input-group-text">
              <HiPhotograph />
              <input
                type="text"
                name="photoUrl"
                required
                className=" form-control"
                placeholder="Photo url"
              />
            </span>
          </div>

          <div className="mb-3">
            <span className="input-group-text">
              <RiLockPasswordLine />
              <input
                type="password"
                name="password"
                required
                className=" form-control"
                placeholder="password"
              />
            </span>
          </div>
          <div>
            <span className="input-group-text">
              <RiLockPasswordLine />
              <input
                type="password"
                name="confirm"
                required
                className=" form-control"
                placeholder="confirm password"
              />
            </span>
          </div>
          <small>
            Already have an account?
            <Link to={"/login"}>
              <small>Login</small>
            </Link>
          </small>

          {/* loading  */}
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <button type="submit" className="w-100 btn btn-danger mt-3">
            Submit
          </button>
        </form>
        <button
          onClick={() => handleGoogleSignIn()}
          className="w-100  mt-2 google-login "
        >
          <FcGoogle size={25} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
