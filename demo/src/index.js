import React from "react";
import ReactDOM from "react-dom";

import EmojiPicker from "react-emoji-pickr.esm";
import "react-emoji-pickr.esm.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh"
      }}
    >
      <EmojiPicker onEmojiSelect={e => console.log(e.target.value)}>
        <EmojiPicker.Trigger aria-label="Select an emoji" id="emojiBtnTrigger">
          :D
        </EmojiPicker.Trigger>
      </EmojiPicker>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
