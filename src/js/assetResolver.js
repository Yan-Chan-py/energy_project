// src/js/assetResolver.js
// Resolves asset URLs for runtime-injected HTML (partials) on Vite/GH Pages

const BASE_URL = import.meta.env.BASE_URL || '/';

// IMPORTANT: images live in src/img, while this file is in src/js
// so we must glob "../img", not "./img"
const modules = import.meta.glob('../img/**/*.*', { as: 'url', eager: true });

const assetMap = new Map();

function normalizeKey(key) {
  // examples of key: "../img/svg/sprite.svg"
  // make it "img/svg/sprite.svg"
  return key.replace(/^(\.\/|\.\.\/)+/, '');
}

for (const [key, url] of Object.entries(modules)) {
  const normalized = normalizeKey(key); // "img/...."
  assetMap.set(normalized, url);

  // allow common variants:
  assetMap.set('/' + normalized, url);
  assetMap.set('./' + normalized, url);
}

function stripOrigin(u) {
  try {
    const url = new URL(u, window.location.href);
    return url.pathname + url.search + url.hash;
  } catch {
    return u;
  }
}

function stripBase(u) {
  // remove base prefix like "/energy_project/"
  const raw = u.startsWith('http') ? stripOrigin(u) : u;
  if (BASE_URL !== '/' && raw.startsWith(BASE_URL)) {
    return raw.slice(BASE_URL.length);
  }
  return raw;
}

function splitHash(u) {
  const idx = u.indexOf('#');
  if (idx === -1) return { path: u, hash: '' };
  return { path: u.slice(0, idx), hash: u.slice(idx) };
}

export function assetUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return rawUrl;

  const trimmed = rawUrl.trim();
  // ignore absolute external urls/data/mailto/tel
  if (/^(data:|mailto:|tel:)/i.test(trimmed)) return trimmed;

  const { path, hash } = splitHash(trimmed);

  // Turn "/energy_project/img/..", "./img/..", "/img/.." -> "img/.."
  let key = stripBase(path);
  key = key.replace(/^\/+/, '');      // remove leading "/"
  key = key.replace(/^(\.\/)+/, '');  // remove leading "./"

  // Try match
  const resolved = assetMap.get(key) || assetMap.get('/' + key) || assetMap.get('./' + key);

  if (!resolved) {
    // keep original – but warn so you can see which path is missing
    console.warn('[assetUrl] Not found:', rawUrl, '-> key:', key);
    return rawUrl;
  }

  return resolved + hash;
}
