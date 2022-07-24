import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Header, Footer } from "./components";
import "./Login.css";

const Login = () => {
  const { user, signin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleSignin = () => {
    console.log("signIn fired");
    signin();
  };
  return (
    <div className="full-view relative">
      <div className="overlay">
        <img
          className="overlay-img"
          src="./assets/site_overlay.webp"
          alt="overlay"
        />
        <div className="overlay-tint"></div>
      </div>
      <div className="full-content z-3">
        <Header />
        <div className="section login-section p-3 d-flex align-items-center justify-content-center h-50">
          <button onClick={handleSignin} className="btn btn-danger px-5">
            Sign In
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
