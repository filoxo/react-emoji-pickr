import React from "react";
import CATEGORIES from "./Categories";
import Tabs from "../Tabs";
import { IconRecent, IconPeople } from "../Icons";

export default function CategoriesTablist(props) {
  return (
    <Tabs.Tablist aria-label="Emoji Categories" data-emoji-category-tablist>
      <Tabs.Tab id={CATEGORIES.ALL} label="Recent and all emoji">
        <IconRecent />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.FACES} label="People emoji">
        <IconPeople />
      </Tabs.Tab>
    </Tabs.Tablist>
  );
}
