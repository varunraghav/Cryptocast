"use client"

import * as React from "react"

interface CoinContextType {
  selectedCoin: string
  setSelectedCoin: (coin: string) => void
}

const CoinContext = React.createContext<CoinContextType | undefined>(undefined)

export function CoinProvider({ children }: { children: React.ReactNode }) {
  const [selectedCoin, setSelectedCoin] = React.useState("BTC")

  return (
    <CoinContext.Provider value={{ selectedCoin, setSelectedCoin }}>
      {children}
    </CoinContext.Provider>
  )
}

export function useCoin() {
  const context = React.useContext(CoinContext)
  if (context === undefined) {
    throw new Error("useCoin must be used within a CoinProvider")
  }
  return context
} 