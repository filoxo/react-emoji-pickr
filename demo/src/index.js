import React, { useState } from "react";
import ReactDOM from "react-dom";

import EmojiPicker from "react-emoji-pickr.esm";
import "react-emoji-pickr.esm.css";

const Radio = ({ children, ...props }) => (
  <div>
    <label>
      <input {...props} type="radio" />
      {children}
    </label>
  </div>
);

const App = () => {
  const [position, setPosition] = useState("top");
  const [align, setAlignment] = useState("center");
  const [selectedEmojis, setSelectedEmojis] = useState([])
  const [keepEmojiMenuOpenAfterSelection, setKeepEmojiOpen] = useState(false)

  const handleKeepEmojiOpenSetting = () => {
    setKeepEmojiOpen(!keepEmojiMenuOpenAfterSelection)
  }
  
  const handleEmojiSelect = (evt) => {
    const emoji = evt.target.value
    console.log('selected emoji:', emoji)
    setSelectedEmojis(selectedEmojis.concat(emoji))
    return keepEmojiMenuOpenAfterSelection
  }

  const handleSetPosition = e => setPosition(e.target.value)
  const handleSetAlignment = e => setAlignment(e.target.value)

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: "25vh 0"
      }}
    >
      <fieldset>
        <legend>Positioning</legend>
        <Radio
          name="positioning"
          value="top"
          onChange={handleSetPosition}
          checked={position === "top"}
        >
          Top
        </Radio>
        <Radio
          name="positioning"
          value="bottom"
          onChange={handleSetPosition}
          checked={position === "bottom"}
        >
          Bottom
        </Radio>
        <Radio
          name="positioning"
          value="left"
          onChange={handleSetPosition}
          checked={position === "left"}
        >
          Left
        </Radio>
        <Radio
          name="positioning"
          value="right"
          onChange={handleSetPosition}
          checked={position === "right"}
        >
          Right
        </Radio>
      </fieldset>
      <fieldset>
        <legend>Alignment</legend>
        <Radio
          name="alignment"
          value="start"
          onChange={handleSetAlignment}
          checked={align === "start"}
        >
          Start
        </Radio>
        <Radio
          name="alignment"
          value="center"
          onChange={handleSetAlignment}
          checked={align === "center"}
        >
          Center
        </Radio>
        <Radio
          name="alignment"
          value="end"
          onChange={handleSetAlignment}
          checked={align === "end"}
        >
          End
        </Radio>
      </fieldset>
      <div>
        <label>
          <input type="checkbox" checked={keepEmojiMenuOpenAfterSelection} onChange={handleKeepEmojiOpenSetting} />
          Keep emoji menu open after selection?
        </label>
      </div>
      <div style={{ textAlign: "center" }}>
        <EmojiPicker
          onEmojiSelect={handleEmojiSelect}
          position={position}
          align={align}
        >
          <EmojiPicker.Trigger
            aria-label="Select an emoji"
            id="emojiBtnTrigger"
            style={{ margin: 3 }}
          >
            :D
          </EmojiPicker.Trigger>
        </EmojiPicker>
        <p>Selected emojis: {selectedEmojis.join(' ')} </p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
