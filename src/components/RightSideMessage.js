import profile from "../assets/images/doctor.png";

export default function RightSideMessage() {
  return (
    <div className="RightSideMessage">
      <div className="right-side">
        <img src={profile} alt="profile" className="profile-image" />
        <div className="message-text">
          Hello how are you doing today?
        </div>
      </div>
    </div>
  );
}
