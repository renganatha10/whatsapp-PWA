self.addEventListener('install', () => {
  console.log('Service Woker Started');
});

self.addEventListener('activate', () => {
  console.log('Service Woker Activated');
});

self.addEventListener('fetch', () => {
  console.log('Service Woker Fetched');
});

