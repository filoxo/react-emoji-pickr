import React, { useRef, useEffect } from 'react'

export function Tablist(props) {
  const tablistRef = useRef()
  const tabsRef = useRef([])
  useEffect(() => {
    tabsRef.current = Array.from(
      tablistRef.current.querySelectorAll('[role="tab"]')
    )
  }, [props.children])

  const handleKeypress = (e) => {
    const currentTabIndex = tabsRef.current.findIndex((tab) => tab === e.target)
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault()
        const nextTabIndex = Math.min(
          currentTabIndex + 1,
          tabsRef.current.length - 1
        )
        tabsRef.current[nextTabIndex].click()
        tabsRef.current[nextTabIndex].focus()
        break
      case 'ArrowLeft':
        e.preventDefault()
        const prevTabIndex = Math.max(currentTabIndex - 1, 0)
        tabsRef.current[prevTabIndex].click()
        tabsRef.current[prevTabIndex].focus()
        break
      default:
        break
    }
  }
  return (
    <div
      {...props}
      ref={tablistRef}
      onKeyDown={handleKeypress}
      role="tablist"
    />
  )
}
