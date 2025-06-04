import Route from "./Route";
import blogs from '../assets/icons/blogs.png'
import diet from '../assets/icons/diet.png'
import chat from '../assets/icons/chat.png'
import timer from '../assets/icons/schedule.png'
import experiment from '../assets/icons/experiment.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

 export default function Sidebar() {
  const [isBlog,setisBlog] = useState(false)
  const [isDiet,setisDiet] = useState(false)
  const [isChat,setisChat] = useState(false)
  const [isSchedule,setisSchedule] = useState(false)
  const [isEXperiment,setisExperiment] = useState(false)
  
 const navigate = useNavigate();

 //navigate functions
 function toBlogs(){
  setisBlog(true);
  setisChat(false)
  setisDiet(false)
  setisExperiment(false)
  setisSchedule(false)
  navigate('/blogs')
  
 }
 function toChat(){
  navigate('/chat')
  setisBlog(false);
  setisChat(true)
  setisDiet(false)
  setisExperiment(false)
  setisSchedule(false)
 }
 function toDiets(){
  navigate('/diets')
  setisBlog(false);
  setisChat(false)
  setisDiet(true)
  setisExperiment(false)
  setisSchedule(false)
 }
 function toSchedule(){
  navigate('/schedule')
  setisBlog(false);
  setisChat(false)
  setisDiet(false)
  setisExperiment(false)
  setisSchedule(true)
 }
 function toExperiment(){
  navigate('/experiment')
  setisBlog(false);
  setisChat(false)
  setisDiet(false)
  setisExperiment(true)
  setisSchedule(false)
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
       <Route route={'Blogs'} icon={blogs} onclick={toBlogs} isClicked={isBlog} /> 
       <Route route={'Diets & Exercise'} icon={diet}  onclick={toDiets} isClicked={isDiet}/> 
       <Route route={'Chat'} icon={chat}  onclick={toChat} isClicked={isChat}/> 
       <Route route={'Schedule Time'} icon={timer}  onclick={toSchedule} isClicked={isSchedule}/> 
       <Route route={'Experiment'} icon={experiment} onclick={toExperiment} isClicked={isEXperiment}/> 
      </div>
    </div>
  );
}
