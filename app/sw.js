const CACHE_NAME = 'whatsappweb-cache-v2';
const {
  assets,
} = global.serviceWorkerOption;

const urlsToCache = [
  ...assets,
  '/',
];

self.addEventListener('install', event => {
  console.log('Service Woker Started');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', () => {
  console.log('Service Woker Activated');
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
