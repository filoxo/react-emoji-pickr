import React, { useRef, useCallback, useState } from "react";
import Tabs from "../Tabs/";
import { toId, getNthSibling } from "../utils";

export default function CategoryTabpanel({ category, emoji, onClick }) {
  const buttonsPerRow = useRef(1);
  const [searchFilter, setSearchFilter] = useState('') 
  const containerWatchRef = useCallback((node) => {
    if (node !== null) {
      const containerWidth = node.getBoundingClientRect().width;
      const buttonWidth = node
        .querySelector("[data-emoji-button]")
        .getBoundingClientRect().width;
      buttonsPerRow.current = Math.floor(containerWidth / buttonWidth);
    }
  }, []);
  const handleEmojiClick = (e) => {
    if (e.target.hasAttribute("data-emoji-button")) {
      e.target.value = e.target.innerText;
      onClick(e);
    }
  };
  const getFocusTarget = (target, key) => {
    switch (key) {
      case "ArrowUp":
        return getNthSibling(target, -buttonsPerRow.current);
      case "ArrowDown":
        return getNthSibling(target, buttonsPerRow.current);
      case "ArrowLeft":
        return target.previousElementSibling;
      case "ArrowRight":
        return target.nextElementSibling;
      default:
        return;
    }
  };
  const handleSearchFilter = (evt) =>  {
    setSearchFilter(evt.target.value)
  }
  const handleEmojiKeyboardNavigation = (e) => {
    const nextTarget = getFocusTarget(e.target, e.key);
    if (nextTarget) {
      e.preventDefault();
      nextTarget.focus();
    }
  };
  const emojisToDisplay = !searchFilter 
    ? emoji 
    : emoji.filter(([_e, names]) => 
        names.some((name) => name.toLowerCase().includes(searchFilter.toLowerCase()))
      )
  return (
    <Tabs.Tabpanel id={toId(category)}>
      <input
        type="text"
        placeholder={`Search ${category}...`}
        onChange={handleSearchFilter}
        data-emoji-searchinput=""
      />
      <div
        data-emoji-scroll-list=""
        ref={containerWatchRef}
        onClick={handleEmojiClick}
        onKeyDown={handleEmojiKeyboardNavigation}
      >
        {emojisToDisplay.map(([emoji, names], index) => (
          <button
            key={emoji}
            type="button"
            data-emoji-button=""
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
