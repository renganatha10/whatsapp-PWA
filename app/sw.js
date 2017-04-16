const CACHE_NAME = 'whatsappweb-cache-v8';
const {
  assets,
} = global.serviceWorkerOption;


const urlsToCache = [
  './',
  './index.html',
  ...assets,
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

self.addEventListener('activate', event => {
  console.log('Service Woker Activated');
  event.waitUntil(
   caches.keys().then(cacheNames => Promise.all(
       cacheNames.map(cacheName => caches.delete(cacheName))
     ))
 );
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => cache.match(event.request).then(response => response || fetch(event.request).then(response => {
      cache.put(event.request, response.clone());
      return response;
    })))
  );
});
