import React from 'react'
import CATEGORIES from './Categories'
import CategoryTabpanel from './CategoryTabpanel'
import * as EMOJI from '../Emoji/Emojis'

export default function CategoryTabpanels(props) {
  return (
    <>
      <CategoryTabpanel category={CATEGORIES.ALL} emoji={EMOJI.ALL} />
      <CategoryTabpanel
        category={CATEGORIES.FACES}
        emoji={EMOJI.FACES_AND_PEOPLE}
      />
      <CategoryTabpanel category={CATEGORIES.ANIMALS} emoji={EMOJI.ANIMALS} />
      <CategoryTabpanel
        category={CATEGORIES.FOODS}
        emoji={EMOJI.FOOD_AND_DRINK}
      />
      <CategoryTabpanel
        category={CATEGORIES.ACTIVITIES}
        emoji={EMOJI.ACTIVITIES}
      />
      <CategoryTabpanel
        category={CATEGORIES.TRAVEL_AND_PLACES}
        emoji={EMOJI.TRAVEL_AND_PLACES}
      />
      <CategoryTabpanel category={CATEGORIES.OBJECTS} emoji={EMOJI.OBJECTS} />
      <CategoryTabpanel category={CATEGORIES.SYMBOLS} emoji={EMOJI.SYMBOLS} />
      <CategoryTabpanel category={CATEGORIES.FLAGS} emoji={EMOJI.FLAGS} />
    </>
  )
}
