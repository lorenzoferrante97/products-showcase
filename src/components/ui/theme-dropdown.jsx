import { Moon, Sun, SunMoon } from "lucide-react"
import { useEffect } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import usePersistStore from "@/store/persistStore/store"

export default function ThemeDropdown() {
  const activeTheme = usePersistStore((s) => s.activeTheme)
  const setTheme = usePersistStore((s) => s.setTheme)

  const applyTheme = (theme) => {
    const root = document.documentElement

    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.toggle("dark", prefersDark)
    } else {
      root.classList.toggle("dark", theme === "dark")
    }
  }

  useEffect(() => {
    applyTheme(activeTheme)

    if (activeTheme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)")
      const handler = () => applyTheme("system")
      media.addEventListener("change", handler)
      return () => media.removeEventListener("change", handler)
    }
  }, [activeTheme])

  const themeIcon =
    activeTheme === "light" ? (
      <Sun className='size-4' />
    ) : activeTheme === "dark" ? (
      <Moon className='size-4' />
    ) : (
      <SunMoon className='size-4' />
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className='bg-neutral-200 rounded-md size-8 flex items-center justify-center relative'
          type='button'>
          {themeIcon}
          <span className='sr-only'>Cambia tema</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className='size-4' /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className='size-4' /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <SunMoon className='size-4' /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
