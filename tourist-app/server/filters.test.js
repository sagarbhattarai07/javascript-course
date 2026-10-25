import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyFilters, parseNumber } from './filters.js';

const hotels = [
  { id: 'a', pricePerNight: 100, rating: 8.0 },
  { id: 'b', pricePerNight: 50, rating: 9.0 },
  { id: 'c', pricePerNight: 150, rating: 7.0 },
];

test('filters by max price and min rating', () => {
  assert.deepEqual(applyFilters(hotels, { maxPrice: 100 }).map((h) => h.id), ['a', 'b']);
  assert.deepEqual(applyFilters(hotels, { minRating: 8 }).map((h) => h.id), ['a', 'b']);
});

test('sorts by price ascending and rating descending without mutating input', () => {
  assert.deepEqual(applyFilters(hotels, { sort: 'price' }).map((h) => h.id), ['b', 'a', 'c']);
  assert.deepEqual(applyFilters(hotels, { sort: 'rating' }).map((h) => h.id), ['b', 'a', 'c']);
  assert.deepEqual(hotels.map((h) => h.id), ['a', 'b', 'c']);
});

test('ignores unknown sort and no filters', () => {
  assert.equal(applyFilters(hotels, { sort: 'nope' }).length, 3);
  assert.equal(applyFilters(hotels).length, 3);
});

test('parseNumber handles blanks and junk', () => {
  assert.equal(parseNumber(''), undefined);
  assert.equal(parseNumber(null), undefined);
  assert.equal(parseNumber('abc'), undefined);
  assert.equal(parseNumber('42'), 42);
});
