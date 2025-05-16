import { prisma } from "@/lib/prisma";

/**
 * Get all sentiment data for a specific coin in a single query
 * This replaces the need for separate functions and reduces database calls
 */
export async function getSentimentData(
  coinSymbol: string,
  from?: Date,
  to?: Date
) {
  try {
    const dateFilter: any = {};
    if (from) dateFilter.gte = from;
    if (to) dateFilter.lte = to;

    const whereClause: any = {
      coinSymbol,
    };

    if (from || to) {
      whereClause.calculatedAt = dateFilter;
    }

    // Get all sentiment scores with tweets in a single query
    const scores = await prisma.sentimentScore.findMany({
      where: whereClause,
      include: {
        tweet: true,
      },
      orderBy: {
        calculatedAt: "asc",
      },
    });

    // Process the data for time series
    const timeSeries = scores.map(score => ({
      timestamp: score.calculatedAt,
      score: score.score,
      tweet: {
        id: score.tweet.id,
        content: score.tweet.content,
        influencer: score.tweet.influencer,
        fetchedAt: score.tweet.fetchedAt
      }
    }));

    // Calculate distribution
    let positive = 0;
    let neutral = 0;
    let negative = 0;

    scores.forEach((score) => {
      if (score.score >= 0.5) positive++;
      else if (score.score < 0.3) negative++;
      else neutral++;
    });

    const total = scores.length || 1; // Avoid division by zero

    const distribution = {
      positive: Math.round((positive / total) * 100),
      neutral: Math.round((neutral / total) * 100),
      negative: Math.round((negative / total) * 100),
      totalScores: total,
    };

    // Group by influencer and calculate average sentiment
    const influencerMap = new Map();
    
    scores.forEach((score) => {
      const { influencer } = score.tweet;
      
      if (!influencerMap.has(influencer)) {
        influencerMap.set(influencer, {
          influencer,
          totalScore: 0,
          totalTweets: 0,
          averageSentiment: 0,
        });
      }

      const influencerData = influencerMap.get(influencer);
      influencerData.totalScore += score.score;
      influencerData.totalTweets++;
    });
    
    // Calculate average sentiment for each influencer
    influencerMap.forEach((data) => {
      data.averageSentiment = data.totalScore / data.totalTweets;
    });

    // Convert to array and sort by total influence (combination of volume and sentiment)
    const influencers = Array.from(influencerMap.values());
    influencers.sort((a, b) => b.totalScore - a.totalScore);

    return {
      timeSeries,
      distribution,
      influencers: influencers.slice(0, 10), // Top 10 influencers
    };
  } catch (error) {
    console.error("Error getting sentiment data:", error);
    throw error;
  }
}

/**
 * Get sentiment scores for a specific coin
 * @deprecated Use getSentimentData instead for better performance
 */
export async function getSentimentScoresByCoin(
  coinSymbol: string,
  from?: Date,
  to?: Date
) {
  try {
    const dateFilter: any = {};
    if (from) dateFilter.gte = from;
    if (to) dateFilter.lte = to;

    const whereClause: any = {
      coinSymbol,
    };

    if (from || to) {
      whereClause.calculatedAt = dateFilter;
    }

    return await prisma.sentimentScore.findMany({
      where: whereClause,
      include: {
        tweet: true,
      },
      orderBy: {
        calculatedAt: "asc",
      },
    });
  } catch (error) {
    console.error("Error getting sentiment scores:", error);
    throw error;
  }
}

/**
 * Get sentiment distribution for a specific coin
 * @deprecated Use getSentimentData instead for better performance
 */
export async function getSentimentDistribution(
  coinSymbol: string,
  from?: Date,
  to?: Date
) {
  try {
    const dateFilter: any = {};
    if (from) dateFilter.gte = from;
    if (to) dateFilter.lte = to;

    const whereClause: any = {
      coinSymbol,
    };

    if (from || to) {
      whereClause.calculatedAt = dateFilter;
    }

    const scores = await prisma.sentimentScore.findMany({
      where: whereClause,
      select: {
        score: true,
      },
    });

    // Calculate distribution
    let positive = 0;
    let neutral = 0;
    let negative = 0;

    scores.forEach((score) => {
      if (score.score >= 0.5) positive++;
      else if (score.score < 0.3) negative++;
      else neutral++;
    });

    const total = scores.length || 1; // Avoid division by zero

    return {
      positive: Math.round((positive / total) * 100),
      neutral: Math.round((neutral / total) * 100),
      negative: Math.round((negative / total) * 100),
      totalScores: total,
    };
  } catch (error) {
    console.error("Error getting sentiment distribution:", error);
    throw error;
  }
}

/**
 * Store a new raw tweet
 */
export async function storeTweet(
  influencer: string,
  content: string,
  scraperJobId?: string
) {
  try {
    return await prisma.rawTweet.create({
      data: {
        influencer,
        content,
        scraperJobId,
      },
    });
  } catch (error) {
    console.error("Error storing tweet:", error);
    throw error;
  }
}

/**
 * Store a sentiment score for a tweet
 */
export async function storeSentimentScore(
  tweetId: string,
  coinSymbol: string,
  score: number,
  window?: string
) {
  try {
    return await prisma.sentimentScore.create({
      data: {
        tweetId,
        coinSymbol,
        score,
        window,
      },
    });
  } catch (error) {
    console.error("Error storing sentiment score:", error);
    throw error;
  }
}

/**
 * Get top influencers by sentiment impact
 * @deprecated Use getSentimentData instead for better performance
 */
export async function getTopInfluencers(
  coinSymbol: string,
  limit: number = 10,
  from?: Date,
  to?: Date
) {
  try {
    // For a production app, this would be a more complex query
    // This is a simplified version
    const tweets = await prisma.rawTweet.findMany({
      where: {
        sentimentScores: {
          some: {
            coinSymbol,
            calculatedAt: from && to ? { gte: from, lte: to } : undefined,
          },
        },
      },
      include: {
        sentimentScores: {
          where: {
            coinSymbol,
          },
        },
      },
    });

    // Group by influencer and calculate average sentiment
    const influencerMap = new Map();
    tweets.forEach((tweet) => {
      const { influencer } = tweet;
      if (!influencerMap.has(influencer)) {
        influencerMap.set(influencer, {
          influencer,
          totalScore: 0,
          totalTweets: 0,
          averageSentiment: 0,
        });
      }

      const influencerData = influencerMap.get(influencer);
      tweet.sentimentScores.forEach((score) => {
        influencerData.totalScore += score.score;
      });
      influencerData.totalTweets++;
      influencerData.averageSentiment =
        influencerData.totalScore / influencerData.totalTweets;
    });

    // Convert to array and sort by impact (absolute sentiment)
    const influencers = Array.from(influencerMap.values());
    influencers.sort(
      (a, b) => b.totalScore - a.totalScore
    );

    return influencers.slice(0, limit);
  } catch (error) {
    console.error("Error getting top influencers:", error);
    throw error;
  }
} 