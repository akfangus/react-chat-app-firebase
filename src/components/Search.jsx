import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="search a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1628813640706-ca88bcdfb228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};
