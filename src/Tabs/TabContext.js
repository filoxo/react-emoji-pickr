import React from "react";

export const TabContext = React.createContext({
  currentTab: null,
  setCurrentTab: () => {}
});
