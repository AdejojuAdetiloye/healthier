import Route from "./Route";
import blogs from '../assets/icons/blogs.png'
import diet from '../assets/icons/diet.png'
import chat from '../assets/icons/chat.png'
import timer from '../assets/icons/schedule.png'
import experiment from '../assets/icons/experiment.png'
import { useNavigate } from "react-router-dom";
 export default function Sidebar() {

 const navigate = useNavigate();

 //navigate functions
 function toBlogs(){
  navigate('/blogs')
 }
 function toChat(){
  navigate('/chat')
 }
 function toDiets(){
  navigate('/diets')
 }
 function toSchedule(){
  navigate('/schedule')
 }
 function toExperiment(){
  navigate('/experiment')
 }
    
  return (
    <div className="sidebar">
      <img
        src={require("../assets/logos/healthier-no-bg.png")}
        className="logo"
        alt="logo"
      />

      <p className="username">Welcome {'Taiwo'}</p>

      <div className="routes">
       <Route route={'Blogs'} icon={blogs} onclick={toBlogs} /> 
       <Route route={'Diets & Exercise'} icon={diet}  onclick={toDiets}/> 
       <Route route={'Chat'} icon={chat}  onclick={toChat}/> 
       <Route route={'Schedule Time'} icon={timer}  onclick={toSchedule}/> 
       <Route route={'Experiment'} icon={experiment} onclick={toExperiment}/> 
      </div>
    </div>
  );
}
