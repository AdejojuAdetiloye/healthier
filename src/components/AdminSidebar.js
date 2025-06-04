import Route from "./Route";
import blogs from '../assets/icons/blogs.png'
import schedule from '../assets/icons/schedule.png'
import person from '../assets/icons/person.svg'
import upload from '../assets/icons/upload.svg';



 export default function AdminSidebar({isUsers,setIsUsers,isBlogs,setIsBlogs,isAppointment,setIsAppointment,isCreateBlog,setIsCreateBlog}) {

  //routing functions
  function toBlogs(){
    setIsBlogs(true)
    setIsUsers(false)
    setIsAppointment(false);
    setIsCreateBlog(false)
  }
  function toAppointments(){
    setIsBlogs(false)
    setIsAppointment(true)
    setIsUsers(false);
    setIsCreateBlog(false)
  }
  function toUsers(){
    setIsBlogs(false)
    setIsAppointment(false)
    setIsUsers(true);
    setIsCreateBlog(false)
  }
  function toUpload(){
    setIsBlogs(false)
    setIsAppointment(false)
    setIsUsers(false);
    setIsCreateBlog(true)
  }
    
  return (
    <div className="sidebar">
      <img
        src={require("../assets/logos/healthier-no-bg.png")}
        className="logo"
        alt="content"
      />

      <p className="username">Welcome {'Admin'}</p>

      <div className="routes">
       <Route route={'Blogs'} icon={blogs} onclick={toBlogs} isClicked={isBlogs}/> 
       <Route route={'Appointments'} icon={schedule} onclick={toAppointments} isClicked={isAppointment}/> 
       <Route route={'Users'} icon={person} onclick={toUsers} isClicked={isUsers}/> 
       <Route route={'Create Blog'} icon={upload} onclick={toUpload} isClicked={isCreateBlog}/> 
      </div>
    </div>
  );
}
