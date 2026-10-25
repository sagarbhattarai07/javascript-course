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
