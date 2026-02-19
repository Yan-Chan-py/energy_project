// src/js/assetResolver.js
const assets = import.meta.glob('../img/**/*', { as: 'url', eager: true });

// key: "img/..."  value: "/energy_project/assets/...."
const urlMap = new Map(
  Object.entries(assets).map(([k, v]) => [k.replace('../', ''), v])
);

const SCHEME_RE = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;

function stripBase(p) {
  const base = import.meta.env.BASE_URL || '/';
  return p.startsWith(base) ? p.slice(base.length) : p;
}

function normalizeToKey(inputPath) {
  if (!inputPath) return null;

  let p = String(inputPath).trim();
  if (!p) return null;

  if (p.startsWith('data:')) return null;
  if (SCHEME_RE.test(p) && !p.startsWith('http:') && !p.startsWith('https:')) return null;

  // already-built
  if (p.includes('/assets/') || p.includes('/energy_project/assets/')) return null;

  const hashIdx = p.indexOf('#');
  if (hashIdx >= 0) p = p.slice(0, hashIdx);

  p = stripBase(p);

  if (p.startsWith('./')) p = p.slice(2);
  if (p.startsWith('/')) p = p.slice(1);

  if (!p.startsWith('img/')) {
    const idx = p.indexOf('img/');
    if (idx >= 0) p = p.slice(idx);
    else return null;
  }

  return p;
}

export function assetUrl(inputPath) {
  const key = normalizeToKey(inputPath);
  if (!key) return null;
  return urlMap.get(key) || null;
}
