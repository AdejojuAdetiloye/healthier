
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import email from '../assets/icons/email.svg';
import password from '../assets/icons/password.svg'
import { useNavigate } from "react-router-dom";

export default function Login({toggle}) {
const navigate = useNavigate('/blogs')
  //to login user
  function login() {
    navigate('/blogs')
  }

  return (
    <div className="Login">
      <img
        src={require("../assets/logos/healthier-no-bg.png")}
        className="logo"
        alt="logo"
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
