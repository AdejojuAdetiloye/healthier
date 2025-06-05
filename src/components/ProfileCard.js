import { MdDashboard } from "react-icons/md";
import profile from "../assets/images/user.png";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const navigate = useNavigate();
  //go to admin dashboard
  function toAdmin() {
    navigate("/admin");
  }

//to profile page
function toProfile(){
    navigate('/profile')
}

  return (
    <div className="profile-div">
      <div className="inner-div">
        <img src={profile} alt="profile" className="profile-image" onClick={toProfile}/>
        
        <button className="dashboard-button" onClick={toAdmin}>
          <MdDashboard className="dashboard-icon" />
        </button>
      </div>
    </div>
  );
}
