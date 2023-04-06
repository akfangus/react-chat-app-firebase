import React, { useContext } from "react";
import { AiOutlineVideoCamera, AiOutlineUserAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";

export default function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
