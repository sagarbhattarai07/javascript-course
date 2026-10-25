const form = document.getElementById('search');
const statusEl = document.getElementById('status');
const results = document.getElementById('results');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const params = new URLSearchParams(new FormData(form));
  statusEl.textContent = 'Searching…';
  results.replaceChildren();
  try {
    const res = await fetch(`/api/hotels/search?${params}`);
    const { hotels, error } = await res.json();
    if (error) throw new Error(error);
    statusEl.textContent = hotels.length ? `${hotels.length} stays found` : 'No stays found';
    for (const h of hotels) results.append(card(h));
  } catch (err) {
    statusEl.textContent = `Something went wrong: ${err.message}`;
  }
});

function card(h) {
  const li = document.createElement('li');
  const title = document.createElement('strong');
  title.textContent = h.name;
  const meta = document.createElement('span');
  meta.textContent = `${h.city} · ★ ${h.rating} · ${h.currency} ${h.pricePerNight}/night`;
  const link = document.createElement('a');
  link.href = h.bookingUrl;
  link.textContent = 'View deal';
  link.rel = 'noopener sponsored';
  li.append(title, meta, link);
  return li;
}
