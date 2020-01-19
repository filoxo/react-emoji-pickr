import React from "react";
import { Trigger } from "./Trigger";
import { Listbox } from "./Listbox";

export default function ReactEmojiPickr(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const trigger = React.cloneElement(React.Children.only(props.children), {
    "aria-expanded": isOpen ? "true" : null,
    onClick: e => {
      setIsOpen(!isOpen);
    }
  });
  return (
    <React.Fragment>
      {trigger}
      {isOpen && <Listbox />}
    </React.Fragment>
  );
}

ReactEmojiPickr.propTypes = {
  children: function ReactEmojiPickrTriggerType(
    props,
    propName,
    componentName
  ) {
    if (props[propName].type !== Trigger) {
      return new Error(
        `Invalid child supplied to ${componentName}. It must only render a ReactEmojiPickr.Trigger!`
      );
    }
  }
};

ReactEmojiPickr.Trigger = Trigger;
ReactEmojiPickr.Listbox = Listbox;
