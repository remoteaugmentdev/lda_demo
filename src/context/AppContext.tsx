'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface AppContextValue {
  sidebarCollapsed: boolean
  setSidebarCollapsed: (v: boolean) => void
  toggleSidebar: () => void
  mobileSidebarOpen: boolean
  toggleMobileSidebar: () => void
  closeMobileSidebar: () => void
  lang: 'en' | 'fr'
  setLang: (l: 'en' | 'fr') => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [lang, setLang] = useState<'en' | 'fr'>('en')

  function toggleSidebar() {
    setSidebarCollapsed((prev) => !prev)
  }

  function toggleMobileSidebar() {
    setMobileSidebarOpen((prev) => !prev)
  }

  function closeMobileSidebar() {
    setMobileSidebarOpen(false)
  }

  return (
    <AppContext.Provider value={{ sidebarCollapsed, setSidebarCollapsed, toggleSidebar, mobileSidebarOpen, toggleMobileSidebar, closeMobileSidebar, lang, setLang }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
