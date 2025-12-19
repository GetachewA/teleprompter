// CinePrompter Service Worker
// Makes the app work offline as a regular iPhone app

const CACHE_NAME = 'cineprompter-v1.0';
const urlsToCache = [
    '/teleprompter.html',
    '/teleprompter.css',
    '/teleprompter.js',
    '/index.html',
    '/speed_test.html',
    '/full_scroll_test.html',
    '/iphone_scroll_test.html',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install service worker
self.addEventListener('install', function(event) {
    console.log('CinePrompter: Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('CinePrompter: Caching app files');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve cached files when offline
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', function(event) {
    console.log('CinePrompter: Service Worker activated');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('CinePrompter: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});