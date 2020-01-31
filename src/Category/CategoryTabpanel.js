import React from "react";
import Tabs from "../Tabs/";
import { toId } from "../utils";

export default function CategoryTabpanel({ category, emoji, onClick }) {
  const handleEmojiClick = e => {
    if (e.target.hasAttribute("data-emoji-button")) {
      e.target.value = e.target.innerText;
      onClick(e);
    }
  };
  const getDelta = key => {
    // TODO: find a better API to allow users to control this
    switch (key) {
      case "ArrowUp":
        return -7;
      case "ArrowDown":
        return 7;
      case "ArrowLeft":
        return -1;
      case "ArrowRight":
        return 1;
      default:
        return;
    }
  };
  const handleEmojiNavigation = e => {
    const delta = getDelta(e.key);
    if (delta !== undefined) {
      const emojiIndex = parseInt(e.target.dataset.emojiListIndex, 10);
      const nextEmojiIndex = emojiIndex + delta;
      const nextEmoji = document.querySelector(
        `[data-emoji-list-index="${nextEmojiIndex}"]`
      );
      if (nextEmoji) {
        e.preventDefault();
        nextEmoji.focus();
      }
    }
  };
  return (
    <Tabs.Tabpanel id={toId(category)}>
      <input
        type="text"
        placeholder={`Search ${category}...`}
        data-emoji-searchinput
      />
      <div
        data-emoji-scroll-list
        data-emoji-width-count="6"
        onClick={handleEmojiClick}
        onKeyDown={handleEmojiNavigation}
      >
        {emoji.map(([emoji, names], index) => (
          <button
            key={emoji}
            type="button"
            data-emoji-button
            data-emoji-list-index={index}
            aria-label={names.join(" ")}
          >
            {emoji}
          </button>
        ))}
      </div>
    </Tabs.Tabpanel>
  );
}
