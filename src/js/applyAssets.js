// src/js/applyAssets.js
import { assetUrl } from './assetResolver.js';

/**
 * Vite не переписує кастомні атрибути (data-src, data-href, ...)
 * у partials. Тому після вставки partials ми:
 * - перетворюємо data-src/data-srcset -> src/srcset
 * - перетворюємо use[data-href] -> use[href]
 *
 * Важливо: НЕ чіпаємо <a href="...">, <script src="...">,
 * і НЕ чіпаємо вже зібрані /assets/* урли.
 */

const SCHEME_RE = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;

function isAlreadyBuilt(url) {
  return (
    url.includes('/assets/') ||
    url.includes('\\assets\\') ||
    url.includes('/energy_project/assets/')
  );
}

function isSpecialScheme(url) {
  // data:, blob:, chrome-extension:, file:, etc.
  return SCHEME_RE.test(url) && !url.startsWith('http:') && !url.startsWith('https:');
}

function looksLikeSourceAsset(url) {
  if (!url) return false;
  if (isAlreadyBuilt(url)) return false;

  return (
    url.includes('/img/') ||
    url.includes('\\img\\') ||
    url.startsWith('img/') ||
    url.startsWith('./img/') ||
    url.startsWith('../img/') ||
    url.startsWith('/img/')
  );
}

function resolveOne(raw) {
  if (!raw) return raw;

  const s = String(raw).trim();
  if (!s) return s;

  if (s.startsWith('#') || s.startsWith('data:')) return s;
  if (isSpecialScheme(s)) return s;

  if (isAlreadyBuilt(s)) return s;
  if (s.endsWith('.js') || s.endsWith('.css') || s.endsWith('.html')) return s;

  if (!looksLikeSourceAsset(s)) return s;

  const hashIdx = s.indexOf('#');
  const base = hashIdx >= 0 ? s.slice(0, hashIdx) : s;
  const frag = hashIdx >= 0 ? s.slice(hashIdx) : '';

  const resolved = assetUrl(base);
  return resolved ? `${resolved}${frag}` : s;
}

function resolveSrcset(rawSrcset) {
  const raw = String(rawSrcset || '').trim();
  if (!raw) return raw;

  return raw
    .split(',')
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => {
      const tokens = part.split(/\s+/);
      const url = tokens.shift();
      const descr = tokens.join(' ');
      const resolvedUrl = resolveOne(url);
      return descr ? `${resolvedUrl} ${descr}` : resolvedUrl;
    })
    .join(', ');
}

function setAttrIfResolved(el, attr, raw) {
  const resolved = resolveOne(raw);
  if (resolved && resolved !== raw) el.setAttribute(attr, resolved);
  else if (resolved && !el.getAttribute(attr)) el.setAttribute(attr, resolved);
}

function patchRoot(root) {
  if (!root) return;

  // addedNodes можуть бути Text/Comment -> без querySelectorAll
  const canQuery = typeof root.querySelectorAll === 'function';
  const q = sel => (canQuery ? Array.from(root.querySelectorAll(sel)) : []);

  // data-src/data-srcset (картинки)
  q('img[data-src]').forEach(img => setAttrIfResolved(img, 'src', img.getAttribute('data-src')));

  q('img[data-srcset]').forEach(img => {
    const v = img.getAttribute('data-srcset');
    const resolved = resolveSrcset(v);
    if (resolved && resolved !== v) img.setAttribute('srcset', resolved);
  });

  q('source[data-src]').forEach(src => setAttrIfResolved(src, 'src', src.getAttribute('data-src')));

  q('source[data-srcset]').forEach(src => {
    const v = src.getAttribute('data-srcset');
    const resolved = resolveSrcset(v);
    if (resolved && resolved !== v) src.setAttribute('srcset', resolved);
  });

  // Якщо десь лишились прямі img/src з /img/...
  q('img[src]').forEach(img => {
    const raw = img.getAttribute('src');
    if (looksLikeSourceAsset(raw)) setAttrIfResolved(img, 'src', raw);
  });

  q('source[src]').forEach(src => {
    const raw = src.getAttribute('src');
    if (looksLikeSourceAsset(raw)) setAttrIfResolved(src, 'src', raw);
  });

  q('img[srcset]').forEach(img => {
    const raw = img.getAttribute('srcset');
    if (raw && looksLikeSourceAsset(raw)) {
      const resolved = resolveSrcset(raw);
      if (resolved && resolved !== raw) img.setAttribute('srcset', resolved);
    }
  });

  q('source[srcset]').forEach(src => {
    const raw = src.getAttribute('srcset');
    if (raw && looksLikeSourceAsset(raw)) {
      const resolved = resolveSrcset(raw);
      if (resolved && resolved !== raw) src.setAttribute('srcset', resolved);
    }
  });

  // SVG sprite: <use data-href="...#icon-...">
  q('use[data-href]').forEach(useEl => {
    const raw = useEl.getAttribute('data-href');
    if (!raw) return;
    setAttrIfResolved(useEl, 'href', raw);
    setAttrIfResolved(useEl, 'xlink:href', raw);
  });

  // Якщо десь ще є href/xlink:href на /img/...
  q('use[href]').forEach(useEl => {
    const raw = useEl.getAttribute('href');
    if (looksLikeSourceAsset(raw)) setAttrIfResolved(useEl, 'href', raw);
  });

  q('use[xlink\\:href]').forEach(useEl => {
    const raw = useEl.getAttribute('xlink:href');
    if (looksLikeSourceAsset(raw)) setAttrIfResolved(useEl, 'xlink:href', raw);
  });
}

let observerStarted = false;

function startObserver() {
  if (observerStarted) return;
  observerStarted = true;

  const target = document.body || document.documentElement;
  if (!target) return;

  const obs = new MutationObserver(muts => {
    for (const m of muts) {
      m.addedNodes.forEach(node => {
        if (node && typeof node.querySelectorAll === 'function') patchRoot(node);
      });
    }
  });

  obs.observe(target, { childList: true, subtree: true });
}

export function applyAssets(root = document) {
  patchRoot(root);
  if (root === document) startObserver();
}

// backward-compatible name (твої файли так імпортують)
export function applyAssetUrls(root = document) {
  applyAssets(root);
}
