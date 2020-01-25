import React from "react";
import Tabs from "../Tabs/";
import EmojiButton from "../Emoji/Button";
import { toId } from "../utils";

export default function CategoryTabpanels({ category, emoji }) {
  return (
    <Tabs.Tabpanel id={toId(category)}>
      <input
        type="text"
        placeholder={`Search ${category}...`}
        autoFocus
        data-emoji-searchinput
      />
      <div data-emoji-scroll-list>
        {emoji.map(([emoji, names]) => (
          <EmojiButton key={emoji} emoji={emoji} aria-label={names.join(" ")} />
        ))}
      </div>
    </Tabs.Tabpanel>
  );
}
