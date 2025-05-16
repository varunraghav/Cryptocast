import { NextRequest } from "next/server";
import { getSentimentData } from "@/services/sentiment.service";
import { successResponse, errorResponse, withErrorHandling } from "@/lib/api-utils";

/**
 * GET /api/sentiment/[coin] - Get sentiment data for a specific coin
 * This is a public endpoint that doesn't require authentication
 */
export const GET = withErrorHandling(async (
  req: NextRequest,
  { params }: { params: { coin: string } }
) => {
  // Await the params to fix the warning
  const { coin } = await Promise.resolve(params);
  
  // Get URL parameters
  const url = new URL(req.url);
  const fromParam = url.searchParams.get("from");
  const toParam = url.searchParams.get("to");
  
  // Parse date parameters
  const from = fromParam ? new Date(fromParam) : undefined;
  const to = toParam ? new Date(toParam) : undefined;
  
  // Get all sentiment data in a single query
  const data = await getSentimentData(coin, from, to);
  
  // Calculate a cache key based on the request parameters
  const cacheKey = `${coin}-${fromParam || 'default'}-${toParam || 'default'}`;
  
  // Create response with cache headers for 60 seconds
  const response = successResponse({
    coin,
    ...data,
    timeRange: {
      from: from?.toISOString(),
      to: to?.toISOString(),
    }
  });
  
  // Set cache control headers
  response.headers.set('Cache-Control', 'public, max-age=60');
  response.headers.set('ETag', JSON.stringify(cacheKey));
  
  return response;
}); 