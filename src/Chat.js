import ChatPage from './components/ChatPage';
import Sidebar from './components/Sidebar';
import './Chat.css';
import ProfileCard from './components/ProfileCard';


export default function Chat() {
  return (
    <div className="Chat">
      {/* Sidebar */}
      <div className="sidebar-div">
        <Sidebar />
      </div>

      {/* main content */}
      <div className="chat-main-div">
        <ProfileCard />
        <ChatPage />
      </div>
    </div>
  );
}
