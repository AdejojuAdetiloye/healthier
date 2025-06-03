
import Sidebar from "./components/Sidebar";
import "./ScheduleTime.css";

export default function ScheduleTime() {
  return (
    <div className="ScheduleTime">
      {/* Sidebar */}
      <div className="sidebar-div">
        <Sidebar />
      </div>

      {/* main content */}
      <div className="schedule-main-div">
        <div>
            <h1 className="schedule-header">Schedule an Appointment</h1>
            <h3 className="schedule-sub-header">Pick a convenient date with a doctor</h3>
        </div>
        <input type="date" className="date" />
        <div>
          <button className="schedule-button">Schedule Time</button>
        </div>
      </div>
    </div>
  );
}
