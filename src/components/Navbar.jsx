import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Lee Chat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1557778358-9fb87328a7db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlciUyMHVuaXRlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <span>Lee</span>
        <button>logout</button>
      </div>
    </div>
  );
}
