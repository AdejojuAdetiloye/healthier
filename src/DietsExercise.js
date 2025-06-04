import Diets from "./components/Diets";
import Exercise from "./components/Exercise";
import ProfileCard from "./components/ProfileCard";
import Sidebar from "./components/Sidebar";
import "./DietsExercise.css";

export default function DietsExercise() {
  return (
    <div className="Home">
      {/* Sidebar */}
      <div className="sidebar-div">
        <Sidebar />
      </div>

      {/* main content */}
      <div className="diets-exercise-main-div">
        <ProfileCard />
        <div className="diet-exercise-div">
          <div className="diet">
            <Diets />
          </div>
          <div className="exercise">
            <Exercise />
          </div>
        </div>
        <div className="timer">
           <h2 className="time">00: 04: 58</h2>
        </div>
      </div>
    </div>
  );
}
