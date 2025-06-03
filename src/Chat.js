import ChatPage from './components/ChatPage';
import HomeMain from './components/HomeMain';
import Sidebar from './components/Sidebar';
import './Chat.css';


export default function Chat() {
  return (
    <div className="Chat">
      {/* Sidebar */}
      <div className="sidebar-div">
        <Sidebar />
      </div>

      {/* main content */}
      <div className="chat-main-div">
        <ChatPage />
      </div>
    </div>
  );
}
