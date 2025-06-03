import profile from "../assets/images/doctor.png";

export default function LeftSideMessage() {
  return (
    <div className="LeftSideMessage">
      <div className="left-side">
        <img src={profile} alt="profile" className="profile-image" />
        <div className="left-message-text">
          Hello how are you doing today?
        </div>
      </div>
    </div>
  );
}
