import React, { useState } from "react";
import { TabContext } from "./TabContext";

export function Tabs({ children, initialTab }) {
  const [currentTab, setCurrentTab] = useState(() => initialTab);
  return (
    <TabContext.Provider
      value={{
        currentTab,
        setCurrentTab
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
