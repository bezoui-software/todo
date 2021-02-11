var CACHE_NAME = 'todo-v1';
var CACHE_URLS = [
  '/todo/',
  '/todo/index.html',
  '/todo/css/theme/theme.css',
  '/todo/css/index.css',
  '/todo/js/main.js',
  '/todo/js/todos.js',
  '/todo/js/todo.js',
  '/todo/js/events.js',
  '/todo/js/doms.js',
  '/todo/js/database.js',
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(CACHE_URLS);
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
