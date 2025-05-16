export const mockWatchlists = [
  {
    id: '1',
    name: 'Top Cryptos',
    coins: ['BTC', 'ETH', 'SOL', 'ADA', 'DOT'],
  },
  {
    id: '2',
    name: 'DeFi Tokens',
    coins: ['UNI', 'AAVE', 'MKR', 'SNX', 'COMP'],
  },
];

export const mockSentimentData = {
  BTC: {
    timeSeries: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - (23 - i) * 3600000).toISOString(),
      score: Math.random() * 2 - 1, // Random score between -1 and 1
    })),
    distribution: {
      positive: 45,
      neutral: 30,
      negative: 25,
    },
  },
  ETH: {
    timeSeries: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - (23 - i) * 3600000).toISOString(),
      score: Math.random() * 2 - 1,
    })),
    distribution: {
      positive: 50,
      neutral: 25,
      negative: 25,
    },
  },
};

export const mockInfluencers = [
  {
    id: '1',
    name: 'CryptoWhale',
    handle: '@cryptowhale',
    followers: 250000,
    sentiment: 0.8,
    recentTweets: 15,
  },
  {
    id: '2',
    name: 'BlockchainGuru',
    handle: '@blockchainguru',
    followers: 180000,
    sentiment: 0.6,
    recentTweets: 12,
  },
  {
    id: '3',
    name: 'CryptoAnalyst',
    handle: '@cryptoanalyst',
    followers: 150000,
    sentiment: -0.3,
    recentTweets: 8,
  },
];

export const mockAlerts = [
  {
    id: '1',
    type: 'sentiment',
    coin: 'BTC',
    threshold: 0.7,
    condition: 'above',
    active: true,
  },
  {
    id: '2',
    type: 'volume',
    coin: 'ETH',
    threshold: 1000000,
    condition: 'above',
    active: true,
  },
];

export const mockMarketData = {
  BTC: {
    price: 45000,
    change24h: 2.5,
    volume24h: 25000000000,
    marketCap: 850000000000,
  },
  ETH: {
    price: 2800,
    change24h: 1.8,
    volume24h: 15000000000,
    marketCap: 320000000000,
  },
}; 