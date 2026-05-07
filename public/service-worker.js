const CACHE_NAME = 'antadigital-cache-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Images from AntAcademy and Home
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  'https://i.postimg.cc/5y22Td7n/logo-png.png',
  'https://i.postimg.cc/02Jnsqgq/Your_paragraph_text_(1).png',
  'https://i.postimg.cc/CLf7gp33/Salford_Co.png',
  'https://i.postimg.cc/Z5tcYDmQ/Blue_And_White_Modern_Cleaning_Service_Flyer.png'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Force the new service worker to activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache v3');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // Use Network First strategy for document/navigation requests (HTML files)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // Use Stale-While-Revalidate for other requests
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const networkFetch = fetch(event.request).then(response => {
        // update the cache with a clone of the network response
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(err => {
        console.error('Network request failed', err);
      });

      // return cached response immediately if available, otherwise wait for network
      return cachedResponse || networkFetch;
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
