import React from "react";
import CATEGORIES from "./Categories";
import Tabs from "../Tabs";
import {
  IconRecent,
  IconPeople,
  IconNature,
  IconFoods,
  IconActivity,
  IconObjects,
  IconPlaces,
  IconSymbols,
  IconFlags,
  IconCustom
} from "../Icons";

export default function CategoriesTablist(props) {
  return (
    <Tabs.Tablist aria-label="Emoji Categories" data-emoji-category-tablist>
      <Tabs.Tab id={CATEGORIES.ALL} label="Recent and all emoji">
        <IconRecent />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.FACES} label="People emoji">
        <IconPeople />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.ANIMALS} label="Animals emoji">
        <IconNature />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.FOODS} label="Foods emoji">
        <IconFoods />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.SPORTS} label="Sports emoji">
        <IconActivity />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.VEHICLES} label="Places emoji">
        <IconPlaces />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.THINGS} label="Objects emoji">
        <IconObjects />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.SYMBOLS} label="Symbols emoji">
        <IconSymbols />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.FLAGS} label="Flags emoji">
        <IconFlags />
      </Tabs.Tab>
      <Tabs.Tab id={CATEGORIES.SPECIAL} label="Special emoji">
        <IconCustom />
      </Tabs.Tab>
    </Tabs.Tablist>
  );
}
