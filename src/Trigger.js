import React from "react";

export const Trigger = React.forwardRef(function Trigger(props, ref) {
  return <button {...props} ref={ref} type="button" data-emoji-trigger />;
});

Trigger.displayName = "ReactEmojiPickr.Trigger";
