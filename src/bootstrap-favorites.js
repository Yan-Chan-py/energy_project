// src/bootstrap-favorites.js
import { includePartials } from './includePartials.js';
import { applyAssetUrls } from './js/applyAssets.js';
import './favorites.js'; // або './main.js' якщо так треба саме тобі

(async () => {
  await includePartials();
  applyAssetUrls();
})();
