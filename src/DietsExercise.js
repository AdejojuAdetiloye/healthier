import Diets from "./components/Diets";
import Exercise from "./components/Exercise";
import Sidebar from "./components/Sidebar";
import "./DietsExercise.css";
import doctor from '../src/assets/images/doctor.png'

export default function DietsExercise() {
  return (
    <div className="Home">
      {/* Sidebar */}
      <div className="sidebar-div">
        <Sidebar />
      </div>

      {/* main content */}
      <div className="diets-exercise-main-div">
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
