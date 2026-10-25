// Pure helpers that apply user-facing filters/sorting to normalised Hotel[] from any provider.

const SORTERS = {
  price: (a, b) => a.pricePerNight - b.pricePerNight,
  rating: (a, b) => b.rating - a.rating,
};

export function applyFilters(hotels, { maxPrice, minRating, sort } = {}) {
  let out = hotels;
  if (Number.isFinite(maxPrice)) out = out.filter((h) => h.pricePerNight <= maxPrice);
  if (Number.isFinite(minRating)) out = out.filter((h) => h.rating >= minRating);
  const sorter = SORTERS[sort];
  return sorter ? [...out].sort(sorter) : out;
}

export function parseNumber(value) {
  if (value === null || value === undefined || value === '') return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}
