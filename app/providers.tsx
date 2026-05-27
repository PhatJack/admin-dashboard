"use client"
import NextTopLoader from "nextjs-toploader"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import React from "react"
import { DirectionProvider } from "@/components/ui/direction"
import { ThemeCustomProvider } from "@/context/ThemeCustomContext"
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
      <ThemeCustomProvider>
        <NextTopLoader color="var(--primary)" height={3} showSpinner={false} />
        <DirectionProvider dir="ltr">
          <TooltipProvider>{children}</TooltipProvider>
        </DirectionProvider>
      </ThemeCustomProvider>
    </ThemeProvider>
  )
}

export default Providers
