import arrow from "../src/assets/icons/arrow.svg";
import user from "../src/assets/images/user.png";
import "./Profile.css";
import {useNavigate} from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    //to go back
    function back(){
        navigate('/blogs')
    }
  return (
    <div className="profile">
      <header className="profile-header">
        <div className="header-div">
          <button className="arrow-button" onClick={back}>
            <img src={arrow} alt="arrow" className="back-arrow" />
          </button>

          <div className="user-prof">
            <p className="user-name">Adejoju Taiwo Adetiloye</p>
            <img src={user} alt="user-profile" className="user-pic" />
          </div>
        </div>
      </header>

      <section className="user-details">
        <p className="email-detail">adejojuaires@gmail.com</p>
        <p className="address-detail">
          4, Ogunleye Street, Off The Bells, Ota, Ogun State.
        </p>
        <p className="phone-detail">09015816695</p>
        <p className="allergy">
          I am not allergic to any food though in the past i've once been
          allergic to okra but i don't anymore. i can eat any kind of food
          except if i don't want to eat it
        </p>
        <p className="medical-report">
          There is no medical report. I am 100% fit and perfectly ok
        </p>
      </section>
      <section className="edit-section">
        <button className="edit-button">
            EDIT PROFILE
        </button>
      </section>
    </div>
  );
}
