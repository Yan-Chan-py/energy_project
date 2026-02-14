import { assetUrl } from './assetResolver';

/**
 * Applies correct built URLs to assets in HTML (src/srcset/href/poster + SVG <use>).
 * Also watches DOM for dynamically injected markup (so icons/images added later won't 404).
 */

const MISSING_ONCE = new Set();

function warnOnce(msg) {
  if (MISSING_ONCE.has(msg)) return;
  MISSING_ONCE.add(msg);
  console.warn(msg);
}

function normalizeUrlValue(raw) {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  return trimmed;
}

function resolveWithHash(raw) {
  const v = normalizeUrlValue(raw);
  if (!v) return null;

  // keep external/data/fragment-only refs as-is
  if (v.startsWith('http') || v.startsWith('data:') || v.startsWith('#')) return v;

  // Preserve hash fragment (e.g. sprite.svg#icon-search)
  const [basePart, hashPart] = v.split('#');
  const resolvedBase = assetUrl(basePart);

  if (!resolvedBase) {
    warnOnce(`[assetUrl] Not found: ${v}`);
    return null;
  }

  return hashPart ? `${resolvedBase}#${hashPart}` : resolvedBase;
}

function resolveSrcset(raw) {
  const v = normalizeUrlValue(raw);
  if (!v) return null;

  // Example: "img1.webp 1x, img2.webp 2x"
  const parts = v.split(',').map(s => s.trim()).filter(Boolean);

  const resolvedParts = parts.map(part => {
    // part = "path 2x" or "path 480w"
    const tokens = part.split(/\s+/);
    const pathToken = tokens[0];
    const descriptor = tokens.slice(1).join(' ');

    const resolvedPath = resolveWithHash(pathToken);
    if (!resolvedPath) return part; // keep original if not resolvable

    return descriptor ? `${resolvedPath} ${descriptor}` : resolvedPath;
  });

  return resolvedParts.join(', ');
}

function setAttr(el, attr, value) {
  if (!value) return false;

  // Special handling for SVG <use>
  const isUse = el.tagName && el.tagName.toLowerCase() === 'use';
  if (isUse && (attr === 'href' || attr === 'xlink:href')) {
    el.setAttribute('href', value);
    el.setAttribute('xlink:href', value);
    return true;
  }

  el.setAttribute(attr, value);
  return true;
}

function patchElement(el) {
  if (!(el instanceof Element)) return;

  // data-* first
  if (el.hasAttribute('data-src')) {
    const resolved = resolveWithHash(el.getAttribute('data-src'));
    if (resolved) {
      el.setAttribute('src', resolved);
      el.removeAttribute('data-src');
    }
  }

  if (el.hasAttribute('data-srcset')) {
    const resolved = resolveSrcset(el.getAttribute('data-srcset'));
    if (resolved) {
      el.setAttribute('srcset', resolved);
      el.removeAttribute('data-srcset');
    }
  }

  if (el.hasAttribute('data-href')) {
    const resolved = resolveWithHash(el.getAttribute('data-href'));
    if (resolved) {
      // for <use> set both href & xlink:href
      if (el.tagName && el.tagName.toLowerCase() === 'use') {
        setAttr(el, 'href', resolved);
        setAttr(el, 'xlink:href', resolved);
      } else {
        el.setAttribute('href', resolved);
      }
      el.removeAttribute('data-href');
    }
  }

  // direct attrs (in case some markup still uses href/src directly)
  if (el.hasAttribute('src')) {
    const resolved = resolveWithHash(el.getAttribute('src'));
    if (resolved) el.setAttribute('src', resolved);
  }

  if (el.hasAttribute('poster')) {
    const resolved = resolveWithHash(el.getAttribute('poster'));
    if (resolved) el.setAttribute('poster', resolved);
  }

  if (el.hasAttribute('href')) {
    const resolved = resolveWithHash(el.getAttribute('href'));
    if (resolved) setAttr(el, 'href', resolved);
  }

  if (el.hasAttribute('xlink:href')) {
    const resolved = resolveWithHash(el.getAttribute('xlink:href'));
    if (resolved) setAttr(el, 'xlink:href', resolved);
  }

  if (el.hasAttribute('srcset')) {
    const resolved = resolveSrcset(el.getAttribute('srcset'));
    if (resolved) el.setAttribute('srcset', resolved);
  }
}

function patchTree(root) {
  if (!root) return;

  // patch root itself
  if (root instanceof Element) patchElement(root);

  // patch descendants
  const nodes = root.querySelectorAll(
    '[data-src],[data-srcset],[data-href],[src],[srcset],[href],[xlink\\:href],[poster]'
  );
  nodes.forEach(patchElement);
}

let OBSERVER_STARTED = false;

export function applyAssetUrls(root = document) {
  patchTree(root);

  // Watch for dynamically inserted markup (cards/partials/modals etc)
  if (!OBSERVER_STARTED && typeof MutationObserver !== 'undefined') {
    OBSERVER_STARTED = true;

    const obs = new MutationObserver(mutations => {
      for (const m of mutations) {
        if (m.type === 'attributes') {
          patchElement(m.target);
        } else if (m.type === 'childList') {
          m.addedNodes.forEach(node => patchTree(node));
        }
      }
    });

    obs.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        'data-src',
        'data-srcset',
        'data-href',
        'src',
        'srcset',
        'href',
        'xlink:href',
        'poster',
      ],
    });
  }
}

// Backward-compatible alias (if somewhere you import applyAssets)
export const applyAssets = applyAssetUrls;
