// src/js/applyAssets.js
import { assetUrl } from './assetResolver.js';

function buildSrcset(value) {
  // value: "hero/1.webp 1x, hero/2.webp 2x"
  return value
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
    .map(part => {
      const [path, ...rest] = part.split(/\s+/);
      const url = assetUrl(path);
      return url ? [url, ...rest].join(' ') : part;
    })
    .join(', ');
}

export function applyAssets(root = document) {
  // <img data-src="hero/hero.webp">
  root.querySelectorAll('img[data-src]').forEach(img => {
    const url = assetUrl(img.dataset.src);
    if (url) img.src = url;
  });

  // <source data-srcset="..."> або <img data-srcset="...">
  root.querySelectorAll('[data-srcset]').forEach(el => {
    const srcset = buildSrcset(el.dataset.srcset);
    if (srcset) el.setAttribute('srcset', srcset);
  });

  // SVG sprite: <use data-icon="icon-facebook"></use>
  const sprite = assetUrl('svg/sprite.svg');
  if (sprite) {
    root.querySelectorAll('use[data-icon]').forEach(useEl => {
      const icon = useEl.dataset.icon;
      const full = `${sprite}#${icon}`;
      useEl.setAttribute('href', full);
      useEl.setAttribute('xlink:href', full); // на всяк випадок
    });
  }
}
