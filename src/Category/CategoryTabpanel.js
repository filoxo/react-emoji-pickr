import React from "react";
import Tabs from "../Tabs/";
import EmojiButton from "../Emoji/Button";
import { toId } from "../utils";

export default function CategoryTabpanels({ category, emoji, onClick }) {
  return (
    <Tabs.Tabpanel id={toId(category)}>
      <input
        type="text"
        placeholder={`Search ${category}...`}
        data-emoji-searchinput
      />
      <div
        data-emoji-scroll-list
        onClick={e => {
          e.target.value = e.target.innerText;
          onClick(e);
        }}
      >
        {emoji.map(([emoji, names]) => (
          <EmojiButton key={emoji} emoji={emoji} aria-label={names.join(" ")} />
        ))}
      </div>
    </Tabs.Tabpanel>
  );
}
