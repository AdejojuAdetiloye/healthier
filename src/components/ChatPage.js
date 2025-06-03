import { BiCamera, BiMicrophone } from "react-icons/bi";
import { BsEmojiFrown, BsSendExclamation } from "react-icons/bs";
import { CgFile } from "react-icons/cg";
import RightSideMessage from "./RightSideMessage";
import LeftSideMessage from "./LeftSideMessage";

export default function ChatPage() {
  return (
    <div className="chat-page">
      <RightSideMessage />
      <LeftSideMessage />
      <RightSideMessage />
      <LeftSideMessage />
      <LeftSideMessage />
      <LeftSideMessage />
      <RightSideMessage />
      <div className="message-section">
        <div className="first">
          <div className="message-icon">
            <BsEmojiFrown className="icon-style" />
          </div>
          <div className="text-input">
            <input
              type="text"
              className="text-input-width"
              placeholder="Message"
            />
          </div>
          <div className="message-icon">
            <CgFile className="icon-style" />
          </div>
          <div className="message-icon">
            <BiCamera className="icon-style" />
          </div>
          <div className="message-icon">
            <BsSendExclamation className="icon-style" />
          </div>
        </div>
        <div className="second">
            < BiMicrophone className="mic"/>
        </div>
      </div>
    </div>
  );
}
