import React, { useContext } from "react";
import { TabContext } from "./TabContext";

export function Tabpanel({ children, id }) {
  const { currentTab } = useContext(TabContext);
  const isSelected = currentTab === id;
  return (
    <div
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
