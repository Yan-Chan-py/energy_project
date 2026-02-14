export async function includePartials() {
  const nodes = document.querySelectorAll('[data-include]');

  await Promise.all(
    [...nodes].map(async el => {
      const path = el.getAttribute('data-include');
      const res = await fetch(path);

      if (!res.ok) {
        throw new Error(`Failed to load ${path}: ${res.status}`);
      }

      const html = await res.text();
      // Replace the placeholder node with the loaded HTML.
      el.outerHTML = html;
    })
  );
}
