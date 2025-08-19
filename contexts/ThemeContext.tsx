'use client'

import React, { createContext, useContext } from 'react'
import { useTheme as useNextTheme } from 'next-themes'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useNextTheme()
  
  const isDark = theme === 'dark'
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}