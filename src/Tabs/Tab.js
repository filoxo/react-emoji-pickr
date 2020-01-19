import React, { useContext } from "react";
import { TabContext } from "./TabContext";

export function Tab({ label, id, ...props }) {
  const { currentTab, setCurrentTab } = useContext(TabContext);
  const isSelected = id === currentTab;
  return (
    <button
      {...props}
      role="tab"
      id={id}
      aria-selected={isSelected}
      aria-controls={id + "-panel"}
      onClick={() => setCurrentTab(id)}
      aria-label={label}
      tabIndex={!isSelected ? "-1" : undefined}
    />
  );
}
