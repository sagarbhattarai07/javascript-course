import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from './index.js';

test('GET /api/hotels/search filters by city', async () => {
  const server = createServer().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/api/hotels/search?city=lisbon`);
    const { hotels } = await res.json();
    assert.equal(res.status, 200);
    assert.ok(hotels.length > 0);
    assert.ok(hotels.every((h) => h.city === 'Lisbon'));
  } finally {
    server.close();
  }
});

test('GET /api/hotels/search applies filters and sorting', async () => {
  const server = createServer().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/api/hotels/search?maxPrice=120&sort=price`);
    const { hotels } = await res.json();
    assert.ok(hotels.length > 0);
    assert.ok(hotels.every((h) => h.pricePerNight <= 120));
    const prices = hotels.map((h) => h.pricePerNight);
    assert.deepEqual(prices, [...prices].sort((a, b) => a - b));
  } finally {
    server.close();
  }
});
