import React from "react";
import Tabs from "../Tabs/";
import CATEGORIES from "./Categories";

export default function CategoryTabpanels(props) {
  return (
    <div>
      <Tabs.Tabpanel id={CATEGORIES.ALL}>All content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.FACES}>Faces content</Tabs.Tabpanel>
    </div>
  );
}
