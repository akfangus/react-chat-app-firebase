import React from "react";
import { AiOutlineVideoCamera, AiOutlineUserAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { Messages } from "./Messages";
import { Input } from "./Input";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <AiOutlineVideoCamera size={"24px"} className="img" />
          <AiOutlineUserAdd size={"24px"} className="img" />
          <FiMoreHorizontal size={"24px"} className="img" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
