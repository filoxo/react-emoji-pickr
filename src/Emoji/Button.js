import React from "react";
// import PropTypes from "prop-types";

export default function EmojiButton({ emoji, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      data-emoji-button
    >
      {emoji}
    </button>
  );
}

// EmojiButton.propTypes = {
//   emoji: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// };
