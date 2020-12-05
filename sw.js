var CACHE_NAME = 'todo-v1';
var urlsToCache = [
  '/todo',
  '/todo/css/theme/theme.css',
  '/todo/css/index.css',
  '/todo/js/main.js',
  '/todo/js/todos.js',
  '/todo/js/todo.js',
  '/todo/js/events.js',
  '/todo/js/doms.js',
  '/todo/js/database.js',
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
