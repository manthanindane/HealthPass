"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button onClick={toggleTheme} className="bg-transparent border-none p-2 rounded-lg focus:outline-none">
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-slate-400" />
      ) : (
        <MoonIcon className="5-4 w-5 text-gray-600" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
