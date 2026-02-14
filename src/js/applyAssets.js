// src/js/applyAssets.js
import { assetUrl } from './assetResolver';

function setUseHref(useEl, value) {
  useEl.setAttribute('href', value);
  useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value);
}

function shouldRewrite(raw) {
  if (!raw) return false;
  return (
    raw.includes('/img/') ||
    raw.startsWith('img/') ||
    raw.startsWith('./img/') ||
    raw.startsWith('/img/')
  );
}

function rewriteSrcsetString(raw) {
  // "url1 1x, url2 2x" OR "url 640w, url 1280w"
  return raw
    .split(',')
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => {
      const pieces = part.split(/\s+/);
      const u = pieces[0];
      const descriptor = pieces.slice(1).join(' ');
      const ru = shouldRewrite(u) ? assetUrl(u) : u;
      return descriptor ? `${ru} ${descriptor}` : ru;
    })
    .join(', ');
}

function rewriteAttr(el, attr) {
  const raw = el.getAttribute(attr);
  if (!raw) return;

  if (attr === 'srcset') {
    const rewritten = rewriteSrcsetString(raw);
    el.setAttribute('srcset', rewritten);
    return;
  }

  if (!shouldRewrite(raw)) return;

  const resolved = assetUrl(raw);

  if (el.tagName?.toLowerCase() === 'use' && (attr === 'href' || attr === 'xlink:href')) {
    setUseHref(el, resolved);
  } else {
    el.setAttribute(attr, resolved);
  }
}

export function applyAssets(root = document) {
  // data-src -> src
  root.querySelectorAll('[data-src]').forEach(el => {
    const raw = el.getAttribute('data-src');
    if (!raw) return;
    el.setAttribute('src', shouldRewrite(raw) ? assetUrl(raw) : raw);
    el.removeAttribute('data-src');
  });

  // data-srcset -> srcset
  root.querySelectorAll('[data-srcset]').forEach(el => {
    const raw = el.getAttribute('data-srcset');
    if (!raw) return;
    el.setAttribute('srcset', rewriteSrcsetString(raw));
    el.removeAttribute('data-srcset');
  });

  // data-href -> href (for <a> and <use>)
  root.querySelectorAll('[data-href]').forEach(el => {
    const raw = el.getAttribute('data-href');
    if (!raw) return;

    const resolved = shouldRewrite(raw) ? assetUrl(raw) : raw;

    if (el.tagName?.toLowerCase() === 'use') {
      setUseHref(el, resolved);
    } else {
      el.setAttribute('href', resolved);
    }

    el.removeAttribute('data-href');
  });

  // normal attributes
  root.querySelectorAll('img[src]').forEach(el => rewriteAttr(el, 'src'));
  root.querySelectorAll('img[srcset]').forEach(el => rewriteAttr(el, 'srcset'));
  root.querySelectorAll('source[srcset]').forEach(el => rewriteAttr(el, 'srcset'));
  root.querySelectorAll('a[href]').forEach(el => rewriteAttr(el, 'href'));

  // svg <use>
  root.querySelectorAll('use[href]').forEach(el => rewriteAttr(el, 'href'));
  root.querySelectorAll('use[xlink\\:href]').forEach(el => rewriteAttr(el, 'xlink:href'));
}

// alias for your imports
export function applyAssetUrls(root = document) {
  return applyAssets(root);
}
