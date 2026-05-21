"use client"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import React from "react"

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}

export default Providers
