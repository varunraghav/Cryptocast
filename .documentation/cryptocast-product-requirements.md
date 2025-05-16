# CryptoSentimentIQ Product Requirements Document

## 1. Elevator Pitch  
CryptoSentimentIQ is a real-time sentiment-tracking web app for crypto investors and analysts. By scraping and filtering tweets from trusted influencers and the broader public, then running them through an LLM–powered sentiment pipeline, the platform delivers a clean, actionable “Bloomberg terminal for sentiment.” Users can save watchlists, visualize aggregated sentiment trends, drill into raw tweets, and configure custom alerts—so they never miss a market-moving mood shift.

## 2. Who Is This App For  
- **Active Traders** looking for fast, data-driven insights to adjust positions before price moves.  
- **Crypto Researchers** who need to gauge the tone and credibility of influencer commentary.  
- **Long-Term Investors** who want scheduled digest summaries to stay informed without constant monitoring.  
- **Analysts & Portfolio Managers** seeking to incorporate social sentiment signals into their models and reports.

## 3. Functional Requirements  
1. **User Accounts & Persistence**  
   - Signup / login (email + password, OAuth)  
   - Save / manage multiple watchlists of tickers (e.g., $BTC, $ETH)  
   - Store alert configurations and delivery preferences (email, in-app, push)

2. **Data Ingestion & Filtering**  
   - Input: ticker symbol + optional list of Twitter/X usernames  
   - Apify-backed scraper to fetch latest tweets from specified profiles  
   - Keyword filter: include only tweets mentioning the target ticker

3. **Sentiment Analysis Pipeline**  
   - LLM-based classification into Positive / Neutral / Negative  
   - Compute rolling sentiment scores (e.g., raw score, 6-hr MA, 24-hr MA)  
   - Enrich with engagement metrics (likes, retweets, replies)

4. **Dashboard & Visualizations**  
   - Time-series chart of sentiment score (combined and by influencer)  
   - Bar / pie breakdown of sentiment distribution  
   - Leaderboard of top influencers by impact score  
   - Drill-down list of raw tweets with metadata and sentiment tags

5. **Alerting Engine**  
   - **Threshold-based alerts**  
     - Sentiment score crosses below/above user-defined thresholds  
     - Supports moving-average triggers (6-hr, 24-hr windows)  
   - **Volume-based alerts**  
     - Mentions spike by X% vs. baseline  
     - Influencer tweets exceed Z tweets in a time window  
   - **Time-based summaries**  
     - Scheduled digests: hourly, daily, weekly  
     - Include top 3 tweets, average score, trending influencers  
   - Delivery via email, in-app notifications, or push (mobile)

6. **Future Extensions (post-MVP)**  
   - Support Reddit, Telegram, Discord channels  
   - Add comparative views across multiple tickers  
   - API access for programmatic querying  

## 4. User Stories  
1. **Threshold Alerts**  
   - *As an active trader, I want to set an alert for when sentiment on $ETH turns negative so that I can adjust my position before the market reacts.*  
2. **Influencer Tracking**  
   - *As a crypto researcher, I want to track the sentiment of top influencers on $BTC so that I can gauge the credibility and tone of market discussions.*  
3. **Digest Summaries**  
   - *As a long-term investor, I want to receive a daily summary of sentiment trends for coins in my watchlist so that I stay informed without constantly monitoring the market.*  
4. **Watchlist Management**  
   - *As any user, I want to save and organize multiple coin watchlists so that I can quickly switch between sets of tickers.*  
5. **Raw Tweet Exploration**  
   - *As an analyst, I want to drill into the underlying tweets behind a sentiment spike so that I can evaluate context and nuance.*

## 5. User Interface  
- **Responsive Web App** designed for desktop and tablet—mobile-friendly in later iterations.  
- **Main Dashboard**  
  - Top nav: Watchlist selector, Alerts, Account menu  
  - Left panel: list of watchlist coins with current sentiment badge  
  - Central chart area: interactive time-series sentiment graph  
  - Right panel: top influencers leaderboard + recent raw tweets feed  
- **Alert Settings Modal**  
  - Step 1: choose coin + influencers  
  - Step 2: configure Threshold / Volume / Time rules  
  - Step 3: select delivery channels  
- **Watchlist & Account Page**  
  - CRUD interface for watchlists & saved alerts  
  - Profile settings for notification preferences  
- **Visual Style**  
  - Clean, minimalist color palette (dark mode primary)  
  - Clear typography for numbers and charts  
  - Intuitive icons for sentiment (😊 😐 🙁)  
  - Fast interactions with tooltips, hover states, and drill-downs  

