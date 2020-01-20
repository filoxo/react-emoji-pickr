import React, { useContext } from "react";
import { TabContext } from "./TabContext";

export function Tabpanel({ children, id, ...props }) {
  const { currentTab } = useContext(TabContext);
  const isSelected = currentTab === id;
  return (
    <div
      {...props}
      role="tabpanel"
      id={id + "-panel"}
      aria-labelledby={id}
      tabIndex="0"
      hidden={!isSelected}
    >
      {isSelected && children}
    </div>
  );
}
