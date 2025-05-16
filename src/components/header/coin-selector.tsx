"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockWatchlists } from "@/lib/mock-data"
import { useCoin } from "@/lib/context/coin-context"

export function CoinSelector() {
  const [selectedWatchlist, setSelectedWatchlist] = React.useState(mockWatchlists[0].id)
  const { selectedCoin, setSelectedCoin } = useCoin()

  const currentWatchlist = mockWatchlists.find(w => w.id === selectedWatchlist)

  return (
    <div className="flex items-center space-x-2">
      <Select value={selectedWatchlist} onValueChange={setSelectedWatchlist}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select watchlist" />
        </SelectTrigger>
        <SelectContent>
          {mockWatchlists.map((watchlist) => (
            <SelectItem key={watchlist.id} value={watchlist.id}>
              {watchlist.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedCoin} onValueChange={setSelectedCoin}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select coin" />
        </SelectTrigger>
        <SelectContent>
          {currentWatchlist?.coins.map((coin) => (
            <SelectItem key={coin} value={coin}>
              {coin}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
} 