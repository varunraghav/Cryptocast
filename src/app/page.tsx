"use client"

import * as React from "react"
import { DockPanel } from "@/components/dashboard/dock-panel"
import { SentimentChart } from "@/components/widgets/sentiment-chart"
import { InfluencerPanel } from "@/components/widgets/influencer-panel"
import { DistributionPanel } from "@/components/widgets/distribution-panel"
import { useCoin } from "@/lib/context/coin-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, Loader2 } from "lucide-react"
import { useSentiment } from "@/lib/hooks"

export default function Home() {
  const [selectedPanel, setSelectedPanel] = React.useState("sentiment")
  const { selectedCoin } = useCoin()
  
  // Calculate date ranges for shared data
  const thirtyDaysAgo = React.useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() - 30)
    return date
  }, [])
  
  // Only fetch data once for all components
  const { data, isLoading, error } = useSentiment(
    selectedCoin,
    thirtyDaysAgo.toISOString(),
    new Date().toISOString()
  )
  
  // Memoize the panel select handler to prevent recreating it on each render
  const handlePanelSelect = React.useCallback((id: string) => {
    setSelectedPanel(id);
  }, []);
  
  // Memoize panel content to prevent unnecessary re-renders
  // IMPORTANT: Keep all hooks at the top level, before any conditionals
  const panelContent = React.useMemo(() => {
    if (!data) return null; // Handle no data case
    
    switch (selectedPanel) {
      case "sentiment":
        return (
          <motion.div
            key="sentiment"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <SentimentChart coin={selectedCoin} initialData={data} />
          </motion.div>
        )
      case "distribution":
        return (
          <motion.div
            key="distribution"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <DistributionPanel coin={selectedCoin} initialData={data} />
          </motion.div>
        )
      case "influencers":
        return (
          <motion.div
            key="influencers"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <InfluencerPanel coin={selectedCoin} initialData={data} />
          </motion.div>
        )
      case "tweets":
        return (
          <motion.div
            key="tweets"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Latest Tweets - {selectedCoin}</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center text-muted-foreground text-lg">
                Tweet feed will appear here
              </CardContent>
            </Card>
          </motion.div>
        )
      case "alerts":
        return (
          <motion.div
            key="alerts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Sentiment Alerts</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-4 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                <div className="bg-muted p-6 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-yellow-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg">Prototype Mode</h3>
                    <p className="text-base text-muted-foreground">
                      In the full version, you would be able to configure custom alerts based on sentiment thresholds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      default:
        return null
    }
  }, [selectedPanel, selectedCoin, data]);

  // Show global loading state
  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Loading sentiment data...</p>
        </div>
        <MemoizedDockPanel selectedId={selectedPanel} onSelect={handlePanelSelect} />
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col pb-[5.5rem]">
      <div className="flex-1 w-full p-0 md:p-1 lg:p-2 pt-2">
        <AnimatePresence mode="wait">
          <div className="w-full">
            {panelContent}
          </div>
        </AnimatePresence>
      </div>
      <MemoizedDockPanel selectedId={selectedPanel} onSelect={handlePanelSelect} />
    </div>
  )
}

// Memoized DockPanel to prevent unnecessary re-renders
const MemoizedDockPanel = React.memo(DockPanel)
