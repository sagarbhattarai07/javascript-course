# Backlog

Written in issue format. When GitHub Issues is enabled these become real issues (one each); until then this file is the source of truth. Status: `todo` | `doing` | `done`.

## Epic: Foundation
- **T-001 [done]** Scaffold app, provider layer, hotel search API + UI
- **T-002 [done]** Hotel price/rating filters and sorting
- **T-003 [todo]** Day 2: Apply for affiliate programs and choose stack
  - Apply: Booking.com (Awin / Demand API), Skyscanner, Airalo, GetYourGuide/Tiqets
  - Decide web stack (proposal: Next.js + TypeScript) and mobile (Expo); write a decision note
  - AC: applications submitted with status noted; decision note committed
- **T-004 [todo]** CI: run `npm test` on every push (GitHub Actions)
- **T-005 [todo]** Input validation and error handling on API (bad dates, guests)

## Epic: Hotels
- **T-010 [todo]** Real hotel provider behind `HOTEL_PROVIDER` (needs approved keys)
- **T-011 [todo]** Hotel images and detail view
- **T-012 [todo]** Affiliate link tracking and `rel="sponsored"` disclosure page

## Epic: Flights
- **T-020 [todo]** Flights provider with the same `search()` contract + UI tab

## Epic: eSIM
- **T-030 [todo]** Airalo eSIM provider + UI tab

## Epic: Attractions
- **T-040 [todo]** Museum passes / attractions provider + UI tab

## Epic: Platform
- **T-050 [todo]** User accounts and saved trips
- **T-051 [todo]** Mobile app (Expo) reusing the API
- **T-052 [todo]** Legal: affiliate disclosure, privacy policy, cookie consent
