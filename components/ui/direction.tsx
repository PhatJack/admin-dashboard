"use client"

import * as React from "react"
import { Direction } from "radix-ui"

type DirectionValue = NonNullable<
  React.ComponentProps<typeof Direction.DirectionProvider>["dir"]
>

type DirectionContextValue = {
  direction: DirectionValue
  setDirection: (direction: DirectionValue) => void
}

const DirectionContext = React.createContext<DirectionContextValue | null>(null)
const DIRECTION_STORAGE_KEY = "admin-dashboard-direction"

function DirectionProvider({
  dir = "ltr",
  direction,
  children,
  storageKey = DIRECTION_STORAGE_KEY,
}: React.ComponentProps<typeof Direction.DirectionProvider> & {
  direction?: DirectionValue
  storageKey?: string
}) {
  const [storedDirection, setStoredDirection] = React.useState<DirectionValue>(
    () => {
      if (typeof window === "undefined") {
        return dir
      }

      const savedDirection = window.localStorage.getItem(storageKey)
      return savedDirection === "ltr" || savedDirection === "rtl"
        ? savedDirection
        : dir
    }
  )

  const currentDirection = direction ?? storedDirection

  React.useEffect(() => {
    document.documentElement.dir = currentDirection

    if (!direction) {
      window.localStorage.setItem(storageKey, currentDirection)
    }
  }, [currentDirection, direction, storageKey])

  const contextValue = React.useMemo<DirectionContextValue>(
    () => ({
      direction: currentDirection,
      setDirection: setStoredDirection,
    }),
    [currentDirection]
  )

  return (
    <DirectionContext.Provider value={contextValue}>
      <Direction.DirectionProvider dir={currentDirection}>
        {children}
      </Direction.DirectionProvider>
    </DirectionContext.Provider>
  )
}

const useDirection = Direction.useDirection

function useDirectionSettings() {
  const context = React.useContext(DirectionContext)
  if (!context) {
    throw new Error(
      "useDirectionSettings must be used within a DirectionProvider."
    )
  }

  return context
}

export { DirectionProvider, useDirection, useDirectionSettings }
