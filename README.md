# react-emoji-pickr

Inspired by:

- https://github.com/missive/emoji-mart
- https://www.npmjs.com/package/emoji-picker-react

## Usage

```javascript
import EmojiPicker from 'react-emoji-pickr.esm'
import 'react-emoji-pickr.esm.css'

export default function App(props) {
  const [selectedEmojis, setSelectedEmojis] = useState([])

  const handleEmojiSelect = (evt) => {
    const emoji = evt.target.value
    setSelectedEmojis(selectedEmojis.concat(emoji))
  }

  return (
    <EmojiPicker onEmojiSelect={handleEmojiSelect}>
      <EmojiPicker.Trigger aria-label="Select an emoji" id="emojiBtnTrigger">
        :D
      </EmojiPicker.Trigger>
    </EmojiPicker>
  )
}
```

## Components

### EmojiPicker

`EmojiPicker` can only render an `EmojiPicker.Trigger` as its child. This is done to avoid props grouping (collecting props used for a single place within the parent component).

#### Props

| prop           | type                                         | description                                                                                                                                                                                        |
| -------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onEmojiSelect: | function                                     | Required. This callback provides you with the `event` to read the value from. The return value is used to determine if the emoji should close or remain open after the callback has been executed. |
| position       | "top"&#124;"right"&#124;"bottom"&#124;"left" | Default is `"top"`. Defines the edge along which the menu will be shown.                                                                                                                           |
| align          | "start"&#124;"center"&#124;"end"             | Default is `"center"`. Defines the alignment of the menu along the position edge.                                                                                                                  |

### EmojiPicker.Trigger

An `EmojiPicker.Trigger` must be rendered inside of an `EmojiPicker`.

#### Props

All props are forwarded on to the underlying `button` element.
