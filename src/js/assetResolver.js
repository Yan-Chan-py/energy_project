// src/js/assetResolver.js
const ASSET_URLS = import.meta.glob('../img/**/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  as: 'url',
});

export function assetUrl(relPath) {
  const normalized = String(relPath || '').replace(/^\/+/, ''); // прибрати "/" на початку
  const key = `../img/${normalized}`;
  const url = ASSET_URLS[key];

  if (!url) {
    console.warn(`[assetUrl] Not found: ${key}`);
    return '';
  }
  return url;
}
