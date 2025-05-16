"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

const DOCK_ITEMS = [
  {
    id: "sentiment",
    label: "Sentiment",
    icon: "📊",
    description: "Real-time sentiment analysis from social media",
  },
  {
    id: "distribution",
    label: "Distribution",
    icon: "📈",
    description: "Breakdown of positive vs negative sentiment",
  },
  {
    id: "influencers",
    label: "Influencers",
    icon: "👥",
    description: "Top crypto influencers and their impact",
  },
  {
    id: "tweets",
    label: "Tweets",
    icon: "🐦",
    description: "Latest relevant tweets about this coin",
  },
  {
    id: "alerts",
    label: "Alerts",
    icon: "⚡",
    description: "Set up notifications for sentiment changes",
  },
]

interface DockPanelProps {
  onSelect: (id: string) => void
  selectedId: string
}

// Use memo to prevent unnecessary re-renders
export const DockPanel = React.memo(function DockPanel({ onSelect, selectedId }: DockPanelProps) {
  // Use for touch swipe on mobile
  const [touchStart, setTouchStart] = React.useState<number | null>(null)
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null)
  
  // Handle swipe gestures - memoize the handlers
  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }, []);
  
  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, []);
  
  const handleTouchEnd = React.useCallback(() => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe || isRightSwipe) {
      const currentIndex = DOCK_ITEMS.findIndex(item => item.id === selectedId)
      if (isLeftSwipe && currentIndex < DOCK_ITEMS.length - 1) {
        onSelect(DOCK_ITEMS[currentIndex + 1].id)
      } else if (isRightSwipe && currentIndex > 0) {
        onSelect(DOCK_ITEMS[currentIndex - 1].id)
      }
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }, [touchStart, touchEnd, selectedId, onSelect]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const currentIndex = DOCK_ITEMS.findIndex(item => item.id === selectedId)
        if (e.key === 'ArrowRight' && currentIndex < DOCK_ITEMS.length - 1) {
          onSelect(DOCK_ITEMS[currentIndex + 1].id)
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          onSelect(DOCK_ITEMS[currentIndex - 1].id)
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedId, onSelect])

  // Memoize the entire tab list
  const tabsList = React.useMemo(() => (
    <TabsList className="w-full justify-start h-18 p-2 gap-1">
      {DOCK_ITEMS.map((item) => (
        <TooltipProvider key={item.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <TabsTrigger
                value={item.id}
                className="relative flex-1 h-full rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-200 ease-in-out"
              >
                <div className="flex flex-col items-center gap-1 py-1">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                  
                  {/* Active indicator animation */}
                  {selectedId === item.id && (
                    <motion.div 
                      className="absolute bottom-0 left-1/2 w-8 h-1 bg-primary-foreground rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ translateX: "-50%" }}
                    />
                  )}
                </div>
              </TabsTrigger>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
              {item.description}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </TabsList>
  ), [selectedId]);

  return (
    <Card 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl border shadow-lg backdrop-blur-sm bg-background/95"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full overflow-auto">
        <Tabs value={selectedId} onValueChange={onSelect} className="w-full">
          {tabsList}
        </Tabs>
      </div>
      
      {/* Swipe instruction - shown only on small screens */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded-t-md hidden sm:hidden">
        Swipe to navigate
      </div>
    </Card>
  )
}) 