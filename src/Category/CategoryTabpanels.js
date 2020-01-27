import React from "react";
import CATEGORIES from "./Categories";
import CategoryTabpanel from "./CategoryTabpanel";
import * as EMOJI from "../Emoji/Emojis";

export default function CategoryTabpanels(props) {
  return (
    <>
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.ALL}
        emoji={EMOJI.ALL}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.FACES}
        emoji={EMOJI.FACES_AND_PEOPLE}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.ANIMALS}
        emoji={EMOJI.ANIMALS}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.FOODS}
        emoji={EMOJI.FOOD_AND_DRINK}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.ACTIVITIES}
        emoji={EMOJI.ACTIVITIES}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.TRAVEL_AND_PLACES}
        emoji={EMOJI.TRAVEL_AND_PLACES}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.OBJECTS}
        emoji={EMOJI.OBJECTS}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.SYMBOLS}
        emoji={EMOJI.SYMBOLS}
      />
      <CategoryTabpanel
        onClick={props.onClick}
        category={CATEGORIES.FLAGS}
        emoji={EMOJI.FLAGS}
      />
    </>
  );
}
