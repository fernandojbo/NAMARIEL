<!-- ==================== sw.js ==================== -->
// SALVE ESTE CONTEÚDO EM UM ARQUIVO chamado: sw.js
const CACHE_NAME = 'namariel-cache-v1';
const FILES_TO_CACHE = ['/', '/index.html', '/manifest.json'];
self.addEventListener('install', evt => {
  self.skipWaiting();
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});
self.addEventListener('activate', evt => {
  evt.waitUntil(clients.claim());
});
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(resp => resp || fetch(evt.request))
  );
});
