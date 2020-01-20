import React from "react";
import Tabs from "../Tabs/";
import CATEGORIES from "./Categories";

import Emojis from "../Emoji/Emojis";
import EmojiButton from "../Emoji/Button";

export default function CategoryTabpanels(props) {
  return (
    <div>
      <Tabs.Tabpanel id={CATEGORIES.ALL} data-emoji-list>
        {Emojis.map(emoji => (
          <EmojiButton
            key={emoji.e}
            emoji={emoji.e}
            aria-label={emoji.n.join(" ")}
          />
        ))}
      </Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.FACES}>Faces content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.ANIMALS}>Animals content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.FOODS}>Foods content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.SPORTS}>Sports content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.VEHICLES}>Vehicles content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.THINGS}>Things content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.SYMBOLS}>Symbols content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.FLAGS}>Flags content</Tabs.Tabpanel>
      <Tabs.Tabpanel id={CATEGORIES.SPECIAL}>
        Special chars content
      </Tabs.Tabpanel>
    </div>
  );
}
