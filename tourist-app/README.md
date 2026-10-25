# Tourist App

A travel super-app: search and book hotels today; flights, eSIMs, museum passes and more later. Built on affiliate APIs, web first, mobile app later.

## Run

```bash
cd tourist-app
cp .env.example .env
npm start        # http://localhost:3000
npm test
```

Requires Node 18+. No dependencies yet. It runs on mock data (`HOTEL_PROVIDER=mock`) until affiliate keys are available.

## Adding a partner

Create `server/providers/<name>.js` exporting `search(params)` that returns the normalised shape documented in `mock.js`, then register it in `server/providers/index.js`.

See [docs/ROADMAP.md](docs/ROADMAP.md) for the plan.
