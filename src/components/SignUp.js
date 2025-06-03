import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import email from '../assets/icons/email.svg';
import password from '../assets/icons/password.svg';
import person from '../assets/icons/person.svg'

export default function SignUp({toggle}) {
  //to signup user
  function signup() {
    console.log("signup  user");
  }

  return (
    <div className="Signup">
      <img
        src={require("../assets/logos/healthier-no-bg.png")}
        className="logo"
      />

      <h3 className="signup-welcome-text">Become healthier!</h3>
      <h1 className="signup-text">Signup, let's care for you</h1>
      <CustomTextInput
        src={email}
        type={"text"}
        placeholder={"Enter your email"}
      />
      <CustomTextInput
        src={person}
        type={"text"}
        placeholder={"Enter your Full Name"}
      />
      
      <CustomTextInput
        src={password}
        type={"text"}
        placeholder={"Enter your password"}
      />
      
      <CustomButton text={"Register"} onclick={signup} />
      <div className="options">
        <button className="login-options" onClick={toggle}>Login</button>
      </div>
    </div>
  );
}
