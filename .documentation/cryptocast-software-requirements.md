## System Design
- **Layers**  
  - **Data Ingestion**: Apify scrapers + YahooFinance pulls → raw tweets & market data  
  - **Processing & Storage**: LLM sentiment pipeline (LlamaIndex) → Postgres via Prisma  
  - **Backend API**: FastAPI exposes REST endpoints  
  - **Frontend**: Next.js app on Vercel  
- **External Services**  
  - Supabase for hosted Postgres  
  - Clerk for user auth  
  - Vercel for CI/CD & hosting  

## Architecture pattern
- **Modular Monolith** (single FastAPI codebase)  
- **Separation of Concerns**  
  - Ingestion worker(s)  
  - Sentiment-processing module  
  - API & business-logic layer  
  - Frontend React components  
- **Deployment**  
  - Worker (cron or queue-driven) & API in one container  
  - Frontend in separate Vercel deployment  

## State management
- **Frontend**  
  - React Query for server state (watchlists, alerts, sentiment streams)  
  - Local component state for UI toggles (dock index, chart filters)  
- **Backend**  
  - Ingestion jobs store intermediary state in Postgres tables  
  - Alert engine persisted rules → triggers on new data  

## Data flow
1. **Fetch**  
   - Cron-driven Apify jobs bring tweets → `raw_tweets` table  
   - YahooFinance pulls price/volume → `market_data` table  
2. **Process**  
   - LlamaIndex pipeline reads new `raw_tweets` → computes sentiment → `sentiment_scores` table  
3. **Alerting**  
   - Alert engine queries rolling windows on `sentiment_scores` → creates `alert_events`  
4. **Serve**  
   - FastAPI endpoints aggregate data (time-series, distributions, leaderboards) → JSON to Next.js  
5. **UI update**  
   - React Query subscriptions poll/stream JSON → update charts & dock panels  

## Technical Stack
- **Language & Frameworks**  
  - Python 3.x, FastAPI, pandas, numpy, LlamaIndex  
  - TypeScript, Next.js  
- **ORM & Database**  
  - Prisma ORM → PostgreSQL (Supabase)  
- **Authentication & Deployment**  
  - Clerk for signin/OAuth  
  - Vercel for frontend  
  - Docker + Kubernetes (optional) or Vercel/Fly.io for backend  

## Authentication Process
- **Clerk**  
  - Email/password + OAuth providers  
  - Middleware in Next.js to protect UI routes  
- **Backend**  
  - JWTs issued by Clerk → FastAPI `Authorization: Bearer <token>` dependency guard  
  - Role enforcement: `user`, `admin`  

## Route Design
- **FastAPI path prefixes**  
  - `/api/auth/*` (health-check, token verify)  
  - `/api/users/*` (profile, settings)  
  - `/api/watchlists/*`  
  - `/api/alerts/*`  
  - `/api/sentiment/*`  
  - `/api/influencers/*`  
- **Next.js routes**  
  - `/` → Dashboard  
  - `/watchlists/[id]` → Watchlist view  
  - `/alerts` → Alerts management  
  - `/settings` → Profile & preferences  

## API Design
- **Watchlists**  
  - `GET /api/watchlists` → list user’s watchlists  
  - `POST /api/watchlists` `{ name, coins: string[] }`  
  - `PUT /api/watchlists/{id}` `{ name?, coins? }`  
  - `DELETE /api/watchlists/{id}`  
- **Alerts**  
  - `GET /api/alerts` → list alerts  
  - `POST /api/alerts` `{ type, config, deliveryChannels }`  
  - `PUT /api/alerts/{id}`  
  - `DELETE /api/alerts/{id}`  
- **Sentiment**  
  - `GET /api/sentiment/{coin}` → `{ timeSeries: [...], distribution: {...} }`  
  - Query params: `?from=2025-05-01&to=2025-05-16&by=influencer`  
- **Influencers**  
  - `GET /api/influencers/top?coin=BTC&limit=10`  

## Database Design ERD
- **Users** (1) ──< **Watchlists** (N) ──< **WatchlistCoins** (N) ──> **Coins**  
- **Users** (1) ──< **Alerts** (N)  
- **RawTweets** ← **ScraperJobs**  
- **SentimentScores** (tweet_id FK, coin, score, timestamp)  
- **MarketData** (coin, price, volume, timestamp)  
- **AlertEvents** (alert_id FK, triggered_at, payload)  

### Entities and Key Attributes
```plaintext
Users(id, email, clerk_id, created_at)  
Watchlists(id, user_id, name)  
WatchlistCoins(id, watchlist_id, coin_symbol)  
Alerts(id, user_id, type, config_json, channels_json)  
RawTweets(id, scraper_job_id, influencer, content, fetched_at)  
SentimentScores(id, tweet_id, coin_symbol, score, window, calculated_at)  
MarketData(id, coin_symbol, price, volume, recorded_at)  
AlertEvents(id, alert_id, triggered_at, details_json)  
