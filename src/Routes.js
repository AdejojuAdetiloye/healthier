import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/App";
import Home from "../src/Home";
import Chat from "./Chat";
import DietsExercise from "./DietsExercise";
import ScheduleTime from "./ScheduleTime";
import Experiment from './Experiment'

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="diets" element={<DietsExercise />} />
        <Route path="/schedule" element={<ScheduleTime />} />
        <Route path="/experiment" element={<Experiment />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RoutesPage />);
