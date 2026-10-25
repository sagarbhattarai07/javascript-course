import * as mock from './mock.js';
import * as booking from './booking.js';

const hotelProviders = { mock, booking };

export function getHotelProvider(name = process.env.HOTEL_PROVIDER || 'mock') {
  const provider = hotelProviders[name];
  if (!provider) throw new Error(`Unknown hotel provider: ${name}`);
  return provider;
}
