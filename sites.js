/**
 * PlayHub - Agregador Principal de Sites (com proteção contra erros)
 */

// Pega o conteúdo de cada arquivo se ele existir, caso contrário usa um array vazio []
const SITES = [
  ...(typeof SERVER_SITES !== 'undefined' ? SERVER_SITES : []),
  ...(typeof AI_SITES !== 'undefined' ? AI_SITES : []),
  ...(typeof APPS_SITES !== 'undefined' ? APPS_SITES : []),
  ...(typeof AUDIO_SITES !== 'undefined' ? AUDIO_SITES : []),
  ...(typeof DESIGN_SITES !== 'undefined' ? DESIGN_SITES : []),
  ...(typeof DEV_SITES !== 'undefined' ? DEV_SITES : []),
  ...(typeof GAMES_SITES !== 'undefined' ? GAMES_SITES : []),
  ...(typeof FILMES_E_SERIES_SITES !== 'undefined' ? FILMES_E_SERIES_SITES : []),
  ...(typeof OUTROS_SITES !== 'undefined' ? OUTROS_SITES : []),
  ...(typeof PRODUTIVIDADE_SITES !== 'undefined' ? PRODUTIVIDADE_SITES : []),
  ...(typeof VIDEO_SITES !== 'undefined' ? VIDEO_SITES : [])
];

function getAllSites() {
  return SITES;
}

function getSitesByCategory(category) {
  return SITES.filter(site => site.category && site.category.toLowerCase() === category.toLowerCase());
}

function searchSites(query) {
  const term = query.toLowerCase();
  return SITES.filter(site => 
    (site.name && site.name.toLowerCase().includes(term)) ||
    (site.description && site.description.toLowerCase().includes(term)) ||
    (site.tags && site.tags.some(tag => tag.toLowerCase().includes(term)))
  );
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITES, getAllSites, getSitesByCategory, searchSites };
}
