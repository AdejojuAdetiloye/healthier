import HomeMain from './components/HomeMain';
import Sidebar from './components/Sidebar';
import './Home.css';


export default function Home() {
  return (
    <div className="Home">
      {/* Sidebar */}
      <div className="sidebar-div">
        <Sidebar />
      </div>

      {/* main content */}
      <div className="main-div">
        <HomeMain />
      </div>
    </div>
  );
}
