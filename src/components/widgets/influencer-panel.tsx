"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSentiment } from "@/lib/hooks"
import { Loader2, Trophy, UserRound, BarChart3 } from "lucide-react"

interface InfluencerPanelProps {
  coin: string
  initialData?: any
}

export function InfluencerPanel({ coin, initialData }: InfluencerPanelProps) {
  // Get the last 30 days of data by default
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  
  // Skip fetch if initialData is provided
  const fetchResult = initialData
    ? { data: initialData, isLoading: false, error: null }
    : useSentiment(coin, thirtyDaysAgo.toISOString(), new Date().toISOString());
  
  const { data, isLoading, error } = fetchResult;

  // Show loading state
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Top Influencers - {coin}</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-lg text-muted-foreground">Loading influencer data...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Show error state
  if (error || !data) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Top Influencers - {coin}</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Failed to load influencer data</p>
        </CardContent>
      </Card>
    )
  }

  const influencers = data.influencers || []
  
  // If no data, show empty state
  if (influencers.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Top Influencers - {coin}</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <p className="text-lg text-muted-foreground">No influencer data available for {coin}</p>
        </CardContent>
      </Card>
    )
  }
  
  // Function to determine sentiment color
  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 0.7) return "text-green-500"
    if (sentiment >= 0.5) return "text-green-400"
    if (sentiment >= 0.4) return "text-yellow-500"
    if (sentiment >= 0.3) return "text-yellow-400"
    if (sentiment >= 0.2) return "text-orange-400"
    return "text-red-500"
  }
  
  // Function to get sentiment label
  const getSentimentLabel = (sentiment: number) => {
    if (sentiment >= 0.7) return "Very Positive"
    if (sentiment >= 0.5) return "Positive"
    if (sentiment >= 0.4) return "Neutral"
    if (sentiment >= 0.3) return "Slightly Negative"
    if (sentiment >= 0.2) return "Negative"
    return "Very Negative"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">Top Influencers - {coin}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] md:h-[500px] lg:h-[600px] overflow-auto pr-2">
          {/* Top influencers */}
          <div className="space-y-6">
            {influencers.map((influencer, index) => (
              <div 
                key={influencer.influencer} 
                className="flex items-center gap-4 p-4 rounded-lg border bg-card transition-colors hover:bg-muted/50"
              >
                {/* Rank indicator */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center relative">
                  {index < 3 ? (
                    <Trophy className={`h-6 w-6 ${
                      index === 0 ? "text-yellow-500" : 
                      index === 1 ? "text-zinc-400" : 
                      "text-amber-700"
                    }`} />
                  ) : (
                    <UserRound className="h-6 w-6 text-muted-foreground" />
                  )}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Influencer info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-lg truncate">@{influencer.influencer}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{influencer.totalTweets} tweets</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                    <span className={getSentimentColor(influencer.averageSentiment)}>
                      {getSentimentLabel(influencer.averageSentiment)}
                    </span>
                  </div>
                </div>
                
                {/* Sentiment score visualization */}
                <div className="w-32 flex-shrink-0">
                  <div className="flex flex-col items-end">
                    <span className={`font-bold ${getSentimentColor(influencer.averageSentiment)}`}>
                      {influencer.averageSentiment.toFixed(2)}
                    </span>
                    <span className="text-xs text-muted-foreground">Avg. Sentiment</span>
                  </div>
                  <div className="mt-2 w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        influencer.averageSentiment >= 0.7 ? "bg-green-500" :
                        influencer.averageSentiment >= 0.5 ? "bg-green-400" :
                        influencer.averageSentiment >= 0.4 ? "bg-yellow-500" :
                        influencer.averageSentiment >= 0.3 ? "bg-yellow-400" :
                        influencer.averageSentiment >= 0.2 ? "bg-orange-400" :
                        "bg-red-500"
                      }`}
                      style={{ width: `${influencer.averageSentiment * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Total influence score */}
                <div className="w-24 flex-shrink-0">
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <span className="font-bold">{influencer.totalScore.toFixed(1)}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Total Impact</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <div className="text-sm text-muted-foreground">
              Influencer impact is calculated based on sentiment strength and number of tweets.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 