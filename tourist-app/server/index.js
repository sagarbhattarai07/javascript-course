import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getHotelProvider } from './providers/index.js';

const PUBLIC_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };

const sendJson = (res, status, body) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

export function createServer() {
  return http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (url.pathname === '/api/hotels/search') {
      try {
        const hotels = await getHotelProvider().search({
          city: url.searchParams.get('city'),
          checkIn: url.searchParams.get('checkIn'),
          checkOut: url.searchParams.get('checkOut'),
          guests: Number(url.searchParams.get('guests') || 1),
        });
        return sendJson(res, 200, { hotels });
      } catch (err) {
        return sendJson(res, 500, { error: err.message });
      }
    }

    const rel = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
    const file = path.join(PUBLIC_DIR, rel);
    if (!file.startsWith(PUBLIC_DIR)) return sendJson(res, 403, { error: 'Forbidden' });
    try {
      const data = await readFile(file);
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      sendJson(res, 404, { error: 'Not found' });
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = process.env.PORT || 3000;
  createServer().listen(port, () => console.log(`Tourist app on http://localhost:${port}`));
}
