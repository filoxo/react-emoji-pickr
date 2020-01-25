import React from "react";
import Tabs from "../Tabs/";
import CATEGORIES from "./Categories";

import * as EMOJI from "../Emoji/Emojis";
import EmojiButton from "../Emoji/Button";
import { toId } from "../utils";

const renderEmojiBtn = ([emoji, names]) => (
  <EmojiButton key={emoji} emoji={emoji} aria-label={names.join(" ")} />
);

export default function CategoryTabpanels(props) {
  return (
    <div>
      <Tabs.Tabpanel id={toId(CATEGORIES.ALL)}>
        {EMOJI.ALL.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.FACES)}>
        {EMOJI.FACES_AND_PEOPLE.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.ANIMALS)}>
        {EMOJI.ANIMALS.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.FOODS)}>
        {EMOJI.FOOD_AND_DRINK.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.ACTIVITIES)}>
        {EMOJI.ACTIVITIES.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.TRAVEL_AND_PLACES)}>
        {EMOJI.TRAVEL_AND_PLACES.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.OBJECTS)}>
        {EMOJI.OBJECTS.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.SYMBOLS)}>
        {EMOJI.SYMBOLS.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={toId(CATEGORIES.FLAGS)}>
        {EMOJI.FLAGS.map(renderEmojiBtn)}
      </Tabs.Tabpanel>
      {/* <Tabs.Tabpanel id={toId(CATEGORIES.NATURE)}>
        {EMOJI.N.map(renderEmojiBtn)}
      </Tabs.Tabpanel> */}
    </div>
  );
}
