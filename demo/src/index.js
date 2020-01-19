import React from "react";
import ReactDOM from "react-dom";

import EmojiPicker from "react-emoji-pickr.esm";

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
      <EmojiPicker>
        <EmojiPicker.Trigger>:D</EmojiPicker.Trigger>
      </EmojiPicker>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
