var CACHE_NAME = 'todo-v1';
var urlsToCache = [
  '/',
  '/css/theme/theme.css',
  '/css/index.css',
  '/js/main.js',
  '/js/todos.js',
  '/js/todo.js',
  '/js/events.js',
  '/js/doms.js',
  '/js/database.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) return response;
        return fetch(event.request);
      }
    )
  );
});