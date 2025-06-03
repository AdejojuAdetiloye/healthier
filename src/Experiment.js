import Sidebar from "./components/Sidebar";
import "./Experiment.css";

export default function Experiment() {
  return (
    <div className="Experiment">
      {/* Sidebar */}
      <div className="sidebar-div">
        <Sidebar />
      </div>

      {/* main content */}
      <div className="experiment-main-div">
        <div className="experiment-container">
          <div className="experiment-alert">
            🚧 This page is under development.
          </div>
        </div>
      </div>
    </div>
  );
}
