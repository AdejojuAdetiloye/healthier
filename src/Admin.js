import AdminSidebar from './components/AdminSidebar';
import HomeMain from './components/HomeMain';
import './Home.css';


export default function Admin() {
  return (
    <div className="Admin">
      {/* Sidebar */}
      <div className="sidebar-div">
        <AdminSidebar />
      </div>

      {/* main content */}
      <div className="main-div">
        
      </div>
    </div>
  );
}
