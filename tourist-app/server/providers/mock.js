// Mock hotel provider so the app runs with no API keys.
// Every provider must export: search({ city, checkIn, checkOut, guests }) -> Hotel[]
// Hotel: { id, name, city, pricePerNight, currency, rating, imageUrl, bookingUrl }

const HOTELS = [
  { id: 'm1', name: 'Himalayan Heritage Inn', city: 'Kathmandu', pricePerNight: 45, rating: 8.7 },
  { id: 'm2', name: 'Lakeside Retreat', city: 'Pokhara', pricePerNight: 60, rating: 9.1 },
  { id: 'm3', name: 'Old Town Boutique', city: 'Lisbon', pricePerNight: 110, rating: 8.9 },
  { id: 'm4', name: 'Harbour View Hotel', city: 'Lisbon', pricePerNight: 140, rating: 8.4 },
  { id: 'm5', name: 'Shibuya Capsule Stay', city: 'Tokyo', pricePerNight: 55, rating: 8.2 },
  { id: 'm6', name: 'Garden Ryokan', city: 'Tokyo', pricePerNight: 180, rating: 9.4 },
];

export async function search({ city }) {
  const q = (city ?? '').trim().toLowerCase();
  return HOTELS.filter((h) => !q || h.city.toLowerCase().includes(q)).map((h) => ({
    ...h,
    currency: 'USD',
    imageUrl: null,
    bookingUrl: '#',
  }));
}
