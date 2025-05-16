"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InfoIcon, Loader2 } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useSentiment } from "@/lib/hooks"

interface SentimentChartProps {
  coin: string
  initialData?: any
}

const timeRanges = [
  { label: "24h", value: "24h" },
  { label: "7d", value: "7d" },
  { label: "30d", value: "30d" },
  { label: "All", value: "all" },
]

export function SentimentChart({ coin, initialData }: SentimentChartProps) {
  const [timeRange, setTimeRange] = React.useState("30d")
  const [hoveredPoint, setHoveredPoint] = React.useState<number | null>(null)
  
  // Calculate date ranges based on selected time range
  const getDateRange = React.useCallback(() => {
    const now = new Date();
    let from = new Date();
    
    switch(timeRange) {
      case "24h":
        from.setDate(now.getDate() - 1);
        break;
      case "7d":
        from.setDate(now.getDate() - 7);
        break;
      case "30d":
        from.setDate(now.getDate() - 30);
        break;
      case "all":
      default:
        from.setDate(now.getDate() - 90);
        break;
    }
    
    return {
      from: from.toISOString(),
      to: now.toISOString()
    };
  }, [timeRange]);
  
  // Only fetch new data if timeRange changes or initialData isn't available
  const { from, to } = getDateRange();
  const shouldFetch = timeRange !== "30d" || !initialData;
  const fetchResult = shouldFetch 
    ? useSentiment(coin, from, to)
    : { data: initialData, isLoading: false, error: null };
  
  const { data, isLoading, error } = fetchResult;
  
  // Show loading state
  if (isLoading) {
    return (
      <Card className="border shadow-lg w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Sentiment Analysis - {coin}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-[500px]">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-lg text-muted-foreground">Loading sentiment data...</p>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  // Show error state
  if (error || !data) {
    return (
      <Card className="border shadow-lg w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Sentiment Analysis - {coin}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-[500px]">
          <div className="flex flex-col items-center gap-4 max-w-md text-center">
            <InfoIcon className="h-10 w-10 text-red-500" />
            <p className="text-lg font-medium">Failed to load sentiment data</p>
            <p className="text-muted-foreground">
              {error || "There was a problem retrieving sentiment data. Please try again later."}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  const timeSeries = data.timeSeries || [];
  const distribution = data.distribution || { positive: 0, neutral: 0, negative: 0 };
  
  // If no data points, show empty state
  if (timeSeries.length === 0) {
    return (
      <Card className="border shadow-lg w-full">
        <CardHeader className="px-6 pt-6 pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl md:text-3xl">Sentiment Analysis - {coin}</CardTitle>
            </div>
            <div className="flex space-x-1">
              {timeRanges.map((range) => (
                <Button 
                  key={range.value}
                  variant={timeRange === range.value ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setTimeRange(range.value)}
                  className="h-8 px-3 md:h-10 md:px-5 md:text-base"
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-[500px]">
          <div className="text-center max-w-md">
            <p className="text-lg font-medium">No sentiment data available</p>
            <p className="text-muted-foreground mt-2">
              No sentiment data found for {coin} in the selected time range. Try changing the time range or check back later.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  const maxScore = Math.max(...timeSeries.map(d => Math.abs(d.score)));
  
  return (
    <Card className="border shadow-lg w-full">
      <CardHeader className="px-6 pt-6 pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-2xl md:text-3xl">Sentiment Analysis - {coin}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1 text-base md:text-lg">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sentiment analysis measures the overall emotion in social media and news sources</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </div>
          <div className="flex space-x-1">
            {timeRanges.map((range) => (
              <Button 
                key={range.value}
                variant={timeRange === range.value ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeRange(range.value)}
                className="h-8 px-3 md:h-10 md:px-5 md:text-base"
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 md:px-4 lg:px-6">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full my-2 md:my-4">
          {/* Background grid */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-muted" />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-b border-muted" />
            ))}
          </div>

          {/* Zero line */}
          <div className="absolute left-0 right-0 top-1/2 border-t border-muted-foreground/30" />

          {/* Sentiment line and area */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="sentimentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="rgb(234, 179, 8)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <path
              d={timeSeries
                .map((point, i) => {
                  const x = (i / (timeSeries.length - 1)) * 100
                  const y = 50 - (point.score / maxScore) * 40
                  return `${i === 0 ? 'M' : 'L'} ${x}% ${y}%`
                })
                .join(' ') + ` L 100% 50% L 0% 50% Z`}
              fill="url(#sentimentGradient)"
              className="opacity-80"
            />
            
            {/* Line */}
            <path
              d={timeSeries
                .map((point, i) => {
                  const x = (i / (timeSeries.length - 1)) * 100
                  const y = 50 - (point.score / maxScore) * 40
                  return `${i === 0 ? 'M' : 'L'} ${x}% ${y}%`
                })
                .join(' ')}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
            
            {/* Data points and hover circles */}
            {timeSeries.map((point, i) => {
              const x = (i / (timeSeries.length - 1)) * 100
              const y = 50 - (point.score / maxScore) * 40
              return (
                <React.Fragment key={i}>
                  <circle 
                    cx={`${x}%`} 
                    cy={`${y}%`} 
                    r="5"
                    fill={point.score > 0.5 ? "rgb(34, 197, 94)" : point.score < 0.3 ? "rgb(239, 68, 68)" : "rgb(234, 179, 8)"}
                    className={`${i % 4 === 0 ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                  />
                  {/* Hover area */}
                  <circle 
                    cx={`${x}%`} 
                    cy={`${y}%`} 
                    r="16"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  {/* Hover indicator */}
                  {hoveredPoint === i && (
                    <>
                      <circle 
                        cx={`${x}%`} 
                        cy={`${y}%`} 
                        r="8"
                        fill="currentColor"
                        className="animate-pulse"
                      />
                      <foreignObject
                        x={`${Math.min(Math.max(x - 5, 0), 90)}%`}
                        y={`${y < 30 ? y + 5 : y - 18}%`}
                        width="10%"
                        height="10%"
                      >
                        <div className="bg-popover text-popover-foreground rounded px-3 py-2 text-sm shadow-md border">
                          <div className="font-bold">{point.score.toFixed(2)}</div>
                          <div className="text-xs opacity-80">
                            {new Date(point.timestamp).toLocaleTimeString()}
                          </div>
                          {point.tweet && (
                            <div className="text-xs mt-1 max-w-[200px] truncate">
                              {point.tweet.influencer}: {point.tweet.content.substring(0, 50)}...
                            </div>
                          )}
                        </div>
                      </foreignObject>
                    </>
                  )}
                </React.Fragment>
              )
            })}
          </svg>

          {/* Y-axis labels */}
          <div className="absolute left-4 top-0 h-full flex flex-col justify-between text-sm text-muted-foreground font-medium">
            <span>+1.0</span>
            <span>+0.5</span>
            <span>0</span>
            <span>-0.5</span>
            <span>-1.0</span>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-sm text-muted-foreground px-10 font-medium">
            {timeSeries
              .filter((_, i) => i % 6 === 0)
              .map((point, i) => (
                <span key={i}>
                  {new Date(point.timestamp).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                </span>
              ))}
          </div>
        </div>

        {/* Distribution summary */}
        <div className="mt-6 md:mt-8 grid grid-cols-3 gap-6 text-center">
          <div className="flex flex-col space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-green-500">
              {distribution.positive}%
            </div>
            <div className="text-sm md:text-base text-muted-foreground">Positive</div>
            <div className="w-full bg-muted rounded-full h-3 mt-1">
              <div 
                className="bg-green-500 h-3 rounded-full" 
                style={{ width: `${distribution.positive}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500">
              {distribution.neutral}%
            </div>
            <div className="text-sm md:text-base text-muted-foreground">Neutral</div>
            <div className="w-full bg-muted rounded-full h-3 mt-1">
              <div 
                className="bg-yellow-500 h-3 rounded-full" 
                style={{ width: `${distribution.neutral}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-red-500">
              {distribution.negative}%
            </div>
            <div className="text-sm md:text-base text-muted-foreground">Negative</div>
            <div className="w-full bg-muted rounded-full h-3 mt-1">
              <div 
                className="bg-red-500 h-3 rounded-full" 
                style={{ width: `${distribution.negative}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 