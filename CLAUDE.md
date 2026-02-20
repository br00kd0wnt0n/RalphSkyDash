# Ralph Loves Trends

AI-powered trend scraping system with stealth browser techniques, Claude AI analysis, and a Sky-branded dashboard.

## Architecture

- **Backend**: Node.js + TypeScript + Express.js REST API (`src/`)
- **Frontend**: Vanilla HTML/CSS/JS dashboard (`public/`)
- **Database**: PostgreSQL via Sequelize ORM
- **Scraping**: Puppeteer + Stealth Plugin, Apify API integrations
- **AI**: Anthropic Claude 3.5 Sonnet for trend enrichment & analysis
- **Cache**: Redis

## Commands

```bash
npm run build        # Compile TypeScript (tsc)
npm run typecheck    # Type check without emitting (tsc --noEmit)
npm run lint         # ESLint on src/**/*.ts
npm run dev          # Development server with hot reload (tsx watch)
npm start            # Production server (node dist/index.js)
npm run scrape       # One-time scraping run
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
npm run docker:up    # Start PostgreSQL + Redis via Docker Compose
npm run docker:down  # Stop Docker services
```

## Project Structure

```
src/
  index.ts                  # CLI entry point (--scrape, --server, --migrate, --seed, --schedule)
  api/server.ts             # Express REST API (port 30003 default)
  config/database.ts        # PostgreSQL + Winston logging config
  models/Trend.ts           # Sequelize Trend model (UUID pk)
  scrapers/
    TrendScraper.ts         # Orchestrator for all scraper sources
    sources/
      apify-tiktok-hashtags.ts  # Working - Apify TikTok hashtags
      apify-instagram.ts        # TODO: fix data extraction
      apify-pinterest.ts        # TODO: fix input config
      trends24.ts               # X/Twitter alternative via web scraping
      tiktok.ts                 # Disabled - direct Puppeteer scraping
      pinterest.ts              # Disabled
      twitter.ts                # Disabled - requires auth
  services/ai-enrichment.ts # Claude AI analysis (sentiment, growth, opportunities)
  types/index.ts             # Shared TypeScript interfaces
  utils/
    browser.ts              # Puppeteer browser manager with stealth/anti-bot
    progress-manager.ts     # Singleton scraping progress tracker
public/
  index.html                # Dashboard HTML (Sky x Ralph branding)
  css/sky-trends.css        # Dashboard styles
  js/sky-trends.js          # Dashboard frontend logic
  js/mock-data.js           # Mock data for offline/demo mode
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/trends` | Fetch trends (query: platform, category, sentiment, since, limit, offset) |
| GET | `/api/trends/stats` | Aggregate statistics |
| GET | `/api/trends/narrative` | AI-generated weekly briefing |
| GET | `/api/trends/search?q=` | Full-text search |
| POST | `/api/scrape` | Trigger manual scraping |
| GET | `/api/scrape/status` | Scraping progress |
| GET | `/api/scrape/history` | Historical scrape sessions |
| POST | `/api/trends/ask` | AI Q&A with trend context |
| GET | `/api/trending/top` | Top trends by timeframe |
| GET | `/api/debug/trends` | Debug: recent trends |
| DELETE | `/api/debug/trends` | Debug: clear all trends |

## Code Conventions

- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- Prefix unused parameters with `_` (e.g., `_req`)
- Use `prefer-const` and `no-var`
- `@typescript-eslint/no-explicit-any` is a warning (not error) — existing codebase uses `any` in some places
- Express error handler middleware uses `any` for err param
- Sequelize raw queries return `any` — this is expected
- No test framework configured; test files in root are ad-hoc integration scripts

## Environment Variables

Required:
- `ANTHROPIC_API_KEY` — Claude AI API key
- `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_DATABASE`, `POSTGRES_USER`, `POSTGRES_PASSWORD` (or `DATABASE_URL`)

Optional:
- `DASHBOARD_PORT` / `PORT` — API server port (default: 30003)
- `NODE_ENV` — development/production
- `LOG_LEVEL` — Winston log level (default: info)
- `SCRAPE_INTERVAL_HOURS` — Scheduled scraping interval
- `APIFY_API_TOKEN` — For Apify scraper sources

## Development Setup

1. `npm install --ignore-scripts` (skip Puppeteer Chrome download if no network)
2. `npm run docker:up` — Start PostgreSQL + Redis
3. Copy `.env.example` to `.env` and fill in credentials
4. `npm run db:migrate && npm run db:seed`
5. `npm run dev` — Start dev server with hot reload

## Known Issues

- ESLint has 3 pre-existing errors (prefer-const, no-constant-condition) that are non-blocking
- Apify Instagram and Pinterest scrapers need data extraction fixes
- Root-level `test-*.ts` and `debug-*.ts` files are excluded from lint/build (not in tsconfig)
- Puppeteer Chrome download requires network access; use `--ignore-scripts` when offline
