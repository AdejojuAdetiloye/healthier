import Route from "./Route";
import blogs from '../assets/icons/blogs.png'
import diet from '../assets/icons/diet.png'
import chat from '../assets/icons/chat.png'
import person from '../assets/icons/person.svg'
 export default function AdminSidebar() {

    
  return (
    <div className="sidebar">
      <img
        src={require("../assets/logos/healthier-no-bg.png")}
        className="logo"
      />

      <p className="username">Welcome {'Admin'}</p>

      <div className="routes">
       <Route route={'Blogs'} icon={blogs} /> 
       <Route route={'Appointments'} icon={diet} /> 
       <Route route={'Users'} icon={person} /> 
      </div>
    </div>
  );
}
