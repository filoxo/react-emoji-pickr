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
import { toId } from "../utils";

export default function CategoriesTablist(props) {
  return (
    <Tabs.Tablist aria-label="Emoji Categories" data-emoji-category-tablist>
      <Tabs.Tab id={toId(CATEGORIES.ALL)} label="Recent and all emoji">
        <IconRecent />
      </Tabs.Tab>
      <Tabs.Tab id={toId(CATEGORIES.FACES)} label={CATEGORIES.FACES + " emoji"}>
        <IconPeople />
      </Tabs.Tab>
      <Tabs.Tab
        id={toId(CATEGORIES.ANIMALS)}
        label={CATEGORIES.ANIMALS + " emoji"}
      >
        <IconNature />
      </Tabs.Tab>
      <Tabs.Tab id={toId(CATEGORIES.FOODS)} label={CATEGORIES.FOODS + " emoji"}>
        <IconFoods />
      </Tabs.Tab>
      <Tabs.Tab
        id={toId(CATEGORIES.ACTIVITIES)}
        label={CATEGORIES.ACTIVITIES + " emoji"}
      >
        <IconActivity />
      </Tabs.Tab>
      <Tabs.Tab
        id={toId(CATEGORIES.TRAVEL_AND_PLACES)}
        label={CATEGORIES.TRAVEL_AND_PLACES + " emoji"}
      >
        <IconPlaces />
      </Tabs.Tab>
      {/* <Tabs.Tab
        id={toId(CATEGORIES.NATURE)}
        label={CATEGORIES.NATURE + " emoji"}
      >
        <IconCustom />
      </Tabs.Tab> */}
      <Tabs.Tab
        id={toId(CATEGORIES.OBJECTS)}
        label={CATEGORIES.OBJECTS + " emoji"}
      >
        <IconObjects />
      </Tabs.Tab>
      <Tabs.Tab
        id={toId(CATEGORIES.SYMBOLS)}
        label={CATEGORIES.SYMBOLS + " emoji"}
      >
        <IconSymbols />
      </Tabs.Tab>
      <Tabs.Tab id={toId(CATEGORIES.FLAGS)} label={CATEGORIES.FLAGS + " emoji"}>
        <IconFlags />
      </Tabs.Tab>
    </Tabs.Tablist>
  );
}
