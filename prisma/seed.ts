import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Get or create a test user (assuming you have at least one user from Clerk)
  let user = await prisma.user.findFirst();
  
  if (!user) {
    console.log('Creating test user...');
    user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        clerkId: 'test_clerk_id',
      },
    });
  }

  // Create dummy watchlist if none exists
  const watchlistCount = await prisma.watchlist.count();
  if (watchlistCount === 0) {
    console.log('Creating test watchlist...');
    await prisma.watchlist.create({
      data: {
        name: 'My Top Coins',
        userId: user.id,
        coins: {
          create: [
            { coinSymbol: 'BTC' },
            { coinSymbol: 'ETH' },
            { coinSymbol: 'SOL' },
            { coinSymbol: 'DOGE' },
          ],
        },
      },
    });
  }

  // Create dummy alerts if none exist
  const alertCount = await prisma.alert.count();
  if (alertCount === 0) {
    console.log('Creating test alerts...');
    
    // Sentiment alert
    await prisma.alert.create({
      data: {
        userId: user.id,
        type: 'sentiment',
        coinSymbol: 'BTC',
        threshold: 0.7,
        condition: 'above',
        channels: JSON.stringify(['email', 'push']),
        alertEvents: {
          create: [
            {
              details: JSON.stringify({
                score: 0.75,
                trigger: 'Positive sentiment spike detected',
              }),
            },
          ],
        },
      },
    });

    // Price alert
    await prisma.alert.create({
      data: {
        userId: user.id,
        type: 'price',
        coinSymbol: 'ETH',
        threshold: 3000,
        condition: 'above',
        channels: JSON.stringify(['email']),
        alertEvents: {
          create: [
            {
              details: JSON.stringify({
                price: 3150,
                trigger: 'Price target reached',
              }),
            },
          ],
        },
      },
    });

    // Volume alert
    await prisma.alert.create({
      data: {
        userId: user.id,
        type: 'volume',
        coinSymbol: 'SOL',
        threshold: 1000000,
        condition: 'above',
        channels: JSON.stringify(['push']),
      },
    });
  }

  // Create dummy influencers, tweets, and sentiment scores
  const tweetCount = await prisma.rawTweet.count();
  if (tweetCount === 0) {
    console.log('Creating test tweets and sentiment scores...');
    
    const influencers = [
      'crypto_wizard',
      'blockchain_guru',
      'satoshi_disciple',
      'eth_maxi',
      'sol_advocate',
      'crypto_analyst',
      'defi_expert',
      'nft_collector',
      'token_trader',
      'altcoin_hunter',
    ];
    
    const coins = ['BTC', 'ETH', 'SOL', 'DOGE', 'XRP', 'ADA', 'DOT', 'AVAX'] as const;
    type CoinSymbol = typeof coins[number];
    
    // Generate tweets from the last 30 days
    const now = new Date();
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    for (let i = 0; i < 100; i++) {
      const influencer = influencers[Math.floor(Math.random() * influencers.length)];
      const tweetDate = new Date(
        oneMonthAgo.getTime() + Math.random() * (now.getTime() - oneMonthAgo.getTime())
      );
      
      const positiveMessages = [
        `I'm incredibly bullish on the future of cryptocurrencies! #crypto`,
        `Just increased my position in #crypto. The future is bright!`,
        `Technical analysis suggests a big pump coming soon! #crypto`,
        `Fundamentals are stronger than ever for this project. #crypto`,
        `This is the best time to buy before it moons! #crypto`,
      ];
      
      const negativeMessages = [
        `The market looks bearish right now, might need to reconsider positions. #crypto`,
        `Not convinced by the recent developments. Proceeding with caution. #crypto`,
        `Technical indicators point to a potential dump. Stay alert. #crypto`,
        `Project's fundamentals are concerning. Do your research. #crypto`,
        `This might not be the right time to enter the market. #crypto`,
      ];
      
      const neutralMessages = [
        `Watching the market closely. Interesting movements today. #crypto`,
        `Still analyzing the recent news. More info needed. #crypto`,
        `Mixed signals in the charts. Could go either way. #crypto`,
        `Keeping my current position unchanged for now. #crypto`,
        `Let's see how this plays out in the coming days. #crypto`,
      ];
      
      const messageArrays = [positiveMessages, negativeMessages, neutralMessages];
      const selectedArray = messageArrays[Math.floor(Math.random() * messageArrays.length)];
      const content = selectedArray[Math.floor(Math.random() * selectedArray.length)];
      
      // Create tweet
      const tweet = await prisma.rawTweet.create({
        data: {
          influencer,
          content,
          fetchedAt: tweetDate,
        },
      });
      
      // Add sentiment scores for random coins (1-3 coins per tweet)
      const numCoins = Math.floor(Math.random() * 3) + 1;
      const selectedCoins = [...coins].sort(() => 0.5 - Math.random()).slice(0, numCoins);
      
      for (const coin of selectedCoins) {
        // Generate score based on message type
        let score;
        if (selectedArray === positiveMessages) {
          score = 0.5 + Math.random() * 0.5; // 0.5 to 1.0
        } else if (selectedArray === negativeMessages) {
          score = Math.random() * 0.5; // 0 to 0.5
        } else {
          score = 0.4 + Math.random() * 0.2; // 0.4 to 0.6
        }
        
        await prisma.sentimentScore.create({
          data: {
            tweetId: tweet.id,
            coinSymbol: coin,
            score,
            calculatedAt: new Date(tweetDate.getTime() + 5 * 60 * 1000), // 5 minutes after tweet
          },
        });
      }
    }
  }

  // Create market data
  const marketDataCount = await prisma.marketData.count();
  if (marketDataCount === 0) {
    console.log('Creating market data...');
    
    const coins = ['BTC', 'ETH', 'SOL', 'DOGE', 'XRP', 'ADA', 'DOT', 'AVAX'] as const;
    type CoinSymbol = typeof coins[number];
    
    const now = new Date();
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    // Initial prices for coins
    const basePrices: Record<CoinSymbol, number> = {
      BTC: 68000,
      ETH: 3500,
      SOL: 160,
      DOGE: 0.12,
      XRP: 0.60,
      ADA: 0.45,
      DOT: 7.50,
      AVAX: 35,
    };
    
    // Base volumes (in millions)
    const baseVolumes: Record<CoinSymbol, number> = {
      BTC: 30000,
      ETH: 15000,
      SOL: 5000,
      DOGE: 2000,
      XRP: 1500,
      ADA: 1000,
      DOT: 800,
      AVAX: 700,
    };
    
    // Generate hourly data for last 30 days
    for (let hour = 0; hour < 24 * 30; hour++) {
      const timestamp = new Date(oneMonthAgo.getTime() + hour * 60 * 60 * 1000);
      
      for (const coin of coins) {
        // Create price movement with some randomness but also trends
        const trendFactor = Math.sin(hour / 48) * 0.05; // Slight trend over time
        const randomFactor = (Math.random() - 0.5) * 0.03; // Random noise
        const priceChange = trendFactor + randomFactor;
        
        // Base price with accumulated change
        const basePrice = basePrices[coin];
        const adjustedPrice = basePrice * (1 + priceChange);
        
        // Volume also fluctuates
        const volumeNoise = 0.7 + Math.random() * 0.6; // 0.7 to 1.3x base volume
        const volume = baseVolumes[coin] * volumeNoise;
        
        await prisma.marketData.create({
          data: {
            coinSymbol: coin,
            price: adjustedPrice,
            volume: volume * 1000000, // Convert millions to actual value
            recordedAt: timestamp,
          },
        });
      }
    }
  }
  
  console.log('Seeding completed successfully');
}

// Execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma client connection
    await prisma.$disconnect();
  }); 