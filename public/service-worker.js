var filesToCache = [
    '/',
    './index.html',
    './login.html',
    './signUp.html',
    './submit.html',
    './detail.html',
    './favorite.html',
    './chat.html',
    './myAds.html',
    './style.css',
    './app.js',
    './js/bootstrap.min.js',
    './js/fontawesome-all.js',
    './js/sweetalert2.all.js',
    './css/bootstrap.min.css',
    './img/footer.jpg',
    './img/logo-olx.png',
    './img/logo.png'

];

var cacheName = 'olx';
var filesToCache = [];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});



self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});


self.addEventListener('fetch', function (e) {
    console.log('[Service Worker] Fetch', e.request.url);
    var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
    if (e.request.url.indexOf(dataUrl) > -1) {

        e.respondWith(
            caches.open(dataCacheName).then(function (cache) {
                return fetch(e.request).then(function (response) {
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            })
        );
    } else {

        e.respondWith(
            caches.match(e.request).then(function (response) {
                return response || fetch(e.request);
            })
        );
    }
});

//  app.js k andr add hoga


//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//              .register('./service-worker.js')
//              .then(function() { console.log('Service Worker Registered'); });
//   }