export default async function handler(req, res) {
  const id = req.query.id || req.url.split('/').pop().replace('.mpd', '');
  
  const primary = `https://linearjitp-playback.astro.com.my/dash-wv/linear/${id}/default_primary.mpd`;
  const fallback = `https://linearjitp-playback.astro.com.my/dash-wv/linear/${id}/default_ott.mpd`;

  try {
    const r = await fetch(primary, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (r.ok) return res.redirect(primary);
    return res.redirect(fallback);
  } catch {
    return res.redirect(fallback);
  }
}
