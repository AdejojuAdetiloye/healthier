import { useState } from "react";
import "./App.css";
import Animation from "./components/animation";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import BlogCard from "./components/BlogCard";

function App() {
const [islogin,setIsLogin] = useState(true)

//function to change the state
function toggleForm(){
    setIsLogin(!islogin);
}

  return (
    <div className="main">
      {/* animation div */}
      <div className="animation-div">
        <Animation />
      </div>
      {/* login div */}
      <div className="login-div">
        {islogin ? <Login toggle={toggleForm} /> : <SignUp toggle={toggleForm} />}
      </div>
      {/* blogs div */}
      <div className="blogs-div">
        <BlogCard image={require('../src/assets/images/bitter-kola.jpg')} title={'How you can boost your immunity with bitter kola'}/>
        <BlogCard image={require('../src/assets/images/tester.jpg')} title={'How you can help your vision with the use of tinted specs'}/>
        <BlogCard image={require('../src/assets/images/vegatables.jpg')} title={'How beneficial is being a vegetarian?'}/>
      </div>
    </div>
  );
}

export default App;
