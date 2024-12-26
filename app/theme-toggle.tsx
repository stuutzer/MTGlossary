'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  if (theme == "dark"){
    return (
        <div className="hover-b nav-item" onClick={e => setTheme('light')}>Light Mode</div>
      )
  } else if (theme == "light") {
    return (
        <div className="hover-b nav-item" onClick={e => setTheme('dark')}>Dark Mode</div>
      )
  }
}
