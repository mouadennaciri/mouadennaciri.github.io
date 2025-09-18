const CACHE_NAME = 'mouad-ennaciri-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/main.css',
  './css/default.css',
  './js/hl.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});