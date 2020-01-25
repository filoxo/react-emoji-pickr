import React from "react";
import Tabs from "./Tabs";
import CATEGORIES from "./Category/Categories";
import CategoriesTablist from "./Category/CategoriesTablist";
import CategoriesTabpanels from "./Category/CategoryTabpanels";

export function Listbox(props) {
  return (
    <div data-emoji-listbox>
      <Tabs initialTab={CATEGORIES.ALL}>
        <CategoriesTablist />
        <CategoriesTabpanels />
      </Tabs>
    </div>
  );
}
