import React from "react";
import styles from "./Listbox.css";
import Tabs from "./Tabs";
import CATEGORIES from "./Category/Categories";
import CategoriesTablist from "./Category/CategoriesTablist";
import CategoriesTabpanels from "./Category/CategoryTabpanels";

export function Listbox(props) {
  return (
    <div className={styles.listbox}>
      <Tabs initialTab={CATEGORIES.ALL}>
        <CategoriesTablist />
        <input
          type="text"
          placeholder="Search..."
          autoFocus
          className={styles.search}
        />
        <CategoriesTabpanels />
      </Tabs>
      {/* Recently used */}
      {/* Scrollable list of all */}
    </div>
  );
}
