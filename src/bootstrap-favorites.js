import { includePartials } from './includePartials';
import { applyAssetUrls } from './js/applyAssets';

(async () => {
  await includePartials();
  applyAssetUrls();
  await import('./main.js'); // або що там у тебе стартує логіку
})();
