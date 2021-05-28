import React, { useRef, useLayoutEffect, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Trigger } from './Trigger'
import Tabs from './Tabs'
import CATEGORIES from './Category/Categories'
import CategoriesTablist from './Category/CategoriesTablist'
import CategoriesTabpanels from './Category/CategoryTabpanels'
import { toPx } from './utils'

import './styles.css'

export default function ReactEmojiPickr(props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const triggerRef = useRef()
  const listboxRef = useRef()

  const trigger = React.cloneElement(React.Children.only(props.children), {
    'aria-expanded': isOpen ? 'true' : null,
    onClick: (e) => {
      setIsOpen(!isOpen)
    },
    ref: triggerRef,
  })

  const onEmojiSelectInternal = (e) => {
    const shouldRemainOpen = !!props.onEmojiSelect(e)
    setIsOpen(shouldRemainOpen)
    return e
  }

  // TODO: maybe expose this as a prop so that consumers can provide their own logic?
  const positionAndAlignListbox = () => {
    const triggerRect = triggerRef.current.getBoundingClientRect()
    const alignAxisVertical =
      props.position === 'top' || props.position === 'bottom'
    // reset all styles...
    const style = {
      bottom: '',
      top: '',
      left: '',
      right: '',
      transform: '',
    }

    switch (props.position) {
      case 'top':
        style.bottom = toPx(
          document.documentElement.clientHeight - triggerRect.top
        )
        break
      case 'bottom':
        style.top = toPx(triggerRect.bottom)
        break
      case 'left':
        style.right = toPx(triggerRect.right)
        break
      case 'right':
        style.left = toPx(triggerRect.right)
        break
    }

    switch (props.align) {
      case 'start':
        if (alignAxisVertical) {
          style.left = toPx(triggerRect.left)
        } else {
          style.top = toPx(triggerRect.top)
        }
        break
      case 'center':
        if (alignAxisVertical) {
          style.left = toPx(triggerRect.left + triggerRect.width / 2)
          style.transform = 'translateX(-50%)'
        } else {
          style.top = toPx(triggerRect.top + triggerRect.height / 2)
          style.transform = 'translateY(-50%)'
        }
        break
      case 'end':
        if (alignAxisVertical) {
          style.right = toPx(triggerRect.left)
        } else {
          style.bottom = toPx(
            document.documentElement.clientHeight - triggerRect.bottom
          )
        }
        break
    }

    for (let s in style) {
      listboxRef.current.style[s] = style[s]
    }
  }
  useLayoutEffect(() => {
    if (isOpen) {
      let timeout
      const rafPositionAndAlignListbox = () => {
        if (timeout) window.cancelAnimationFrame(timeout)
        timeout = window.requestAnimationFrame(positionAndAlignListbox)
      }
      positionAndAlignListbox()
      window.addEventListener('scroll', rafPositionAndAlignListbox)
      window.addEventListener('resize', rafPositionAndAlignListbox)
      return function cleanup() {
        window.removeEventListener('scroll', rafPositionAndAlignListbox)
        window.removeEventListener('resize', rafPositionAndAlignListbox)
      }
    }
  }, [isOpen, props])

  useEffect(() => {
    if (isOpen) {
      const firstFocusableElem =
        listboxRef.current &&
        listboxRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      if (firstFocusableElem) firstFocusableElem.focus()
    }
  }, [isOpen])

  const handleKeyboardClose = ({ key }) => {
    if (key === 'Escape') {
      triggerRef.current && triggerRef.current.focus()
      setIsOpen(false)
    }
  }

  return (
    <React.Fragment>
      {trigger}
      {isOpen && (
        <div
          ref={listboxRef}
          onKeyDown={handleKeyboardClose}
          data-emoji-listbox
        >
          <Tabs initialTab={CATEGORIES.ALL}>
            <CategoriesTablist />
            <CategoriesTabpanels onClick={onEmojiSelectInternal} />
          </Tabs>
        </div>
      )}
    </React.Fragment>
  )
}

ReactEmojiPickr.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  onEmojiSelect: PropTypes.func.isRequired,
  children: function ReactEmojiPickrTriggerType(
    props,
    propName,
    componentName
  ) {
    if (props[propName].type !== Trigger) {
      return new Error(
        `Invalid child supplied to ${componentName}. It must only render a ReactEmojiPickr.Trigger!`
      )
    }
  },
}

ReactEmojiPickr.defaultProps = {
  position: 'top',
  align: 'center',
}

ReactEmojiPickr.Trigger = Trigger
