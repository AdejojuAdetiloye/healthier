import HomeMain from './components/HomeMain';
import ProfileCard from './components/ProfileCard';
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
        <ProfileCard />
        <HomeMain />
      </div>
    </div>
  );
}
