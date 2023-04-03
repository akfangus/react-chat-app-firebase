import React from "react";

export default function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1628813640706-ca88bcdfb228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
