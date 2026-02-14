import { includePartials } from './includePartials.js';
import { applyAssets } from './js/applyAssets.js';

includePartials()
  .then(() => {
    applyAssets();          // ✅ ПІСЛЯ вставки partials підставляємо картинки
    return import('./main.js');
  })
  .catch(err => console.error('bootstrap error:', err));
