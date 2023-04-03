import React from "react";
import { AiOutlineFileImage, AiOutlinePaperClip } from "react-icons/ai";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <AiOutlineFileImage className="img" size={"24px"} />
        <input type="file" style={{ display: "none" }} id="file" />

        <label htmlFor="file">
          <AiOutlinePaperClip className="img" size={"24px"} />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
