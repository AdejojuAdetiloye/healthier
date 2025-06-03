import { div } from "three/tsl";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import { useState } from "react";
import email from '../assets/icons/email.svg';
import password from '../assets/icons/password.svg'

export default function Login({toggle}) {

  //to login user
  function login() {
    console.log("logged in user");
  }

  return (
    <div className="Login">
      <img
        src={require("../assets/logos/healthier-no-bg.png")}
        className="logo"
      />

      <h3 className="login-welcome-text">Welcome Back</h3>
      <h1 className="login-text">Login to begin</h1>
      <CustomTextInput
        src={email}
        type={"text"}
        placeholder={"Enter your email"}
      />
      <CustomTextInput
        src={password}
        type={"text"}
        placeholder={"Enter your password"}
      />
      <CustomButton text={"Login"} onclick={login} />
      <div className="options">
        <button className="login-options" onClick={toggle}>Sign up</button>
      </div>
    </div>
  );
}
