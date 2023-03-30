import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import styled from "styled-components";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Firebase Chat</span>
        <span className="title"> Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <Label htmlFor="file" id="file">
            <AddPhotoAlternateIcon style={{ fontSize: "40px" }} />
            <span>Add An Avatar</span>
          </Label>

          <button>SignUp</button>
        </form>
        <p>you do have an account? Login</p>
      </div>
    </div>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;
  color: #a7bcff;
  cursor: pointer;
`;
