import { includePartials } from './includePartials.js';
import { applyAssets } from './js/applyAssets.js';

includePartials()
  .then(() => {
    applyAssets();
    return import('./favorites.js');
  })
  .catch(err => console.error('bootstrap-favorites error:', err));
