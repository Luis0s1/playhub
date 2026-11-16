/* =====================================================================
   PlayHub - Service Worker (Cache Dividido: Sistema & Categorias)
   ===================================================================== */

// 1. Versão do Core do Site (index, CSS, script principal, manifest)
const CORE_CACHE_NAME = 'playhub-core-v0.9.00';

// 2. Versão dos Arquivos de Dados da pasta sites/
const SITES_CACHE_NAME = 'playhub-sites-v0.9.00';

// Ficheiros Principais da Raiz
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './i18n.js',
  './sites.js',
  './icons-catalog.js',
  './bubble.js'
];

// Ficheiros das Categorias na pasta sites/
const SITES_ASSETS = [
  './sites/ai.js',
  './sites/apps.js',
  './sites/audio.js',
  './sites/design.js',
  './sites/dev.js',
  './sites/games.js',
  './sites/movies-&-series.js',
  './sites/others.js',
  './sites/productivity.js',
  './sites/video.js'
];

// Instalação: Salva cada grupo em seu respectivo banco de cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CORE_CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)),
      caches.open(SITES_CACHE_NAME).then((cache) => cache.addAll(SITES_ASSETS))
    ])
  );
  self.skipWaiting();
});

// Limpeza: Apaga caches antigos que não correspondem a NENHUMA das duas versões ativas
self.addEventListener('activate', (event) => {
  const activeCaches = [CORE_CACHE_NAME, SITES_CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => !activeCaches.includes(key)).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Busca Inteligente: Procura primeiro no cache dos arquivos de sites, depois no core e por fim na rede
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          
          // Se for um arquivo da pasta sites/, salva no cache de sites; senão, salva no core
          const targetCache = event.request.url.includes('/sites/') ? SITES_CACHE_NAME : CORE_CACHE_NAME;
          caches.open(targetCache).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});