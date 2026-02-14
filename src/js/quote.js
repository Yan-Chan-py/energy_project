import fetchSportEnergy from './api/apiSport';
import { loader } from './loader/loader';

function getRefs() {
  return {
    quoteText: document.querySelector('.quote-text'),
    quoteAuthor: document.querySelector('.quote-author'),
  };
}

export async function loadQuote() {
  const { quoteText, quoteAuthor } = getRefs();

  // Якщо блоку цитати нема на цій сторінці — просто виходимо
  if (!quoteText || !quoteAuthor) return;

  const storageRaw = localStorage.getItem('quote');
  const today = new Date().toDateString();

  // 1) Якщо є кеш на сьогодні — показуємо з кешу
  if (storageRaw) {
    try {
      const parsed = JSON.parse(storageRaw);
      if (parsed?.date === today && parsed?.quote) {
        quoteText.textContent = parsed.quote ?? '';
        quoteAuthor.textContent = parsed.author ?? '';
        return;
      }
    } catch (_) {
      // якщо storage зламаний — просто перезапишемо нижче
    }
  }

  // 2) Інакше — тягнемо з API
  await fetchAndRenderQuote(quoteText, quoteAuthor);
}

async function fetchAndRenderQuote(quoteText, quoteAuthor) {
  try {
    loader.open();
    const res = await fetchSportEnergy.getQuotes();
    if (!res) return;

    const { author, quote } = res;

    localStorage.setItem(
      'quote',
      JSON.stringify({
        author: author ?? '',
        quote: quote ?? '',
        date: new Date().toDateString(),
      })
    );

    quoteText.textContent = quote ?? '';
    quoteAuthor.textContent = author ?? '';
  } finally {
    loader.close();
  }
}

// ✅ Важливо для твого випадку з dynamic import після includePartials:
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadQuote, { once: true });
} else {
  loadQuote();
}
