# Roadmap (1 hour per day)

Each session is sized to fit in ~1 hour. Ship something small and working every day.

## Done
- **Day 1** – Project scaffold, provider abstraction (mock + Booking stub), hotel search API + UI, test.

## Next sessions
- **Day 2** – Apply for affiliate programs (Booking.com / Awin, Skyscanner, Airalo, GetYourGuide); decide stack (see below).
- **Day 3** – Implement real hotel provider behind `HOTEL_PROVIDER`; env-based keys.
- **Day 4** – Hotel results: filters, sorting, images, affiliate link tracking.
- **Day 5** – Flights provider (same `search()` contract) + UI tab.
- **Day 6** – eSIM provider (Airalo) + UI tab.
- **Day 7** – Attractions / museum passes provider.
- **Later** – Accounts, saved trips, mobile app (React Native / Expo reusing the same API).

## Architecture
- `server/providers/<vertical>/` – one adapter per affiliate partner, all returning a normalised shape.
- `server/index.js` – thin API; the web UI and future mobile app both call it.
- API keys live only on the server (`.env`), never in the browser.

## Open decisions
- Move to Next.js/React + TypeScript once the UI grows (Day 2–3), keeping the API contract.
- Mobile: Expo (React Native) to share TypeScript types with the web app.
