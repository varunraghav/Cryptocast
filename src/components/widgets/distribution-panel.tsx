"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSentiment } from "@/lib/hooks"
import { Loader2 } from "lucide-react"

interface DistributionPanelProps {
  coin: string
  initialData?: any
}

export function DistributionPanel({ coin, initialData }: DistributionPanelProps) {
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
          <CardTitle className="text-2xl md:text-3xl">Sentiment Distribution - {coin}</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-lg text-muted-foreground">Loading distribution data...</p>
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
          <CardTitle className="text-2xl md:text-3xl">Sentiment Distribution - {coin}</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Failed to load sentiment distribution data</p>
        </CardContent>
      </Card>
    )
  }

  const distribution = data.distribution || { positive: 0, neutral: 0, negative: 0 }
  
  // Function to convert score to category
  const getCategory = (score: number): string => {
    if (score >= 0.7) return "Very Positive"
    if (score >= 0.5) return "Positive"
    if (score >= 0.4) return "Neutral"
    if (score >= 0.2) return "Negative"
    return "Very Negative"
  }
  
  // Calculate more detailed distribution
  const detailedDistribution = React.useMemo(() => {
    if (!data.timeSeries) return {}
    
    const categories: Record<string, number> = {
      "Very Positive": 0,
      "Positive": 0,
      "Neutral": 0,
      "Negative": 0,
      "Very Negative": 0
    }
    
    data.timeSeries.forEach(item => {
      const category = getCategory(item.score)
      categories[category]++
    })
    
    const total = data.timeSeries.length
    
    return Object.entries(categories).map(([category, count]) => ({
      category,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0
    }))
  }, [data.timeSeries])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">Sentiment Distribution - {coin}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8 h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Pie chart visualization */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="transparent" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    className="text-muted"
                  />
                  
                  {/* Pie chart segments */}
                  {detailedDistribution.length > 0 && (
                    <>
                      {(() => {
                        let startAngle = 0
                        return detailedDistribution.map((segment, index) => {
                          if (segment.percentage === 0) return null
                          
                          // Calculate angles
                          const angle = (segment.percentage / 100) * 360
                          const endAngle = startAngle + angle
                          
                          // SVG arc path
                          const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180)
                          const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180)
                          const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180)
                          const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180)
                          
                          // Flag for large arc
                          const largeArcFlag = angle > 180 ? 1 : 0
                          
                          // Generate color based on category
                          let color = "text-yellow-500"
                          if (segment.category === "Very Positive") color = "text-green-600"
                          else if (segment.category === "Positive") color = "text-green-400"
                          else if (segment.category === "Negative") color = "text-red-400"
                          else if (segment.category === "Very Negative") color = "text-red-600"
                          
                          // Create the arc path
                          const path = `
                            M 50 50
                            L ${x1} ${y1}
                            A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
                            Z
                          `
                          
                          // For label positioning
                          const labelAngle = startAngle + (angle / 2)
                          const labelRadius = 30 // Slightly inside the pie
                          const labelX = 50 + labelRadius * Math.cos((labelAngle - 90) * Math.PI / 180)
                          const labelY = 50 + labelRadius * Math.sin((labelAngle - 90) * Math.PI / 180)
                          
                          // Store the current end angle as the next start angle
                          const currentStartAngle = startAngle
                          startAngle = endAngle
                          
                          return (
                            <g key={index}>
                              <path 
                                d={path} 
                                className={`${color} fill-current`}
                                strokeWidth="1"
                                stroke="white"
                              />
                              {segment.percentage >= 10 && (
                                <text 
                                  x={labelX} 
                                  y={labelY} 
                                  textAnchor="middle" 
                                  alignmentBaseline="middle"
                                  fill="white"
                                  fontSize="4"
                                  fontWeight="bold"
                                >
                                  {segment.percentage}%
                                </text>
                              )}
                            </g>
                          )
                        })
                      })()}
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
          
          {/* Distribution stats */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-medium mb-6">Sentiment Breakdown</h3>
            <div className="space-y-6">
              {detailedDistribution.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-sm">{item.count} tweets ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        item.category === "Very Positive" ? "bg-green-600" :
                        item.category === "Positive" ? "bg-green-400" :
                        item.category === "Neutral" ? "bg-yellow-500" :
                        item.category === "Negative" ? "bg-red-400" :
                        "bg-red-600"
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t">
              <div className="text-sm text-muted-foreground">
                Based on {data.timeSeries?.length || 0} analyzed tweets over the last 30 days.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 