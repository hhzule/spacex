
const cacheName = 'version-01';

const assets = [
    '/',
    '/index.html',
    './offline.html',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',

];


// install event
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    //console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then(keys => {

            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// fetch event
self.addEventListener('fetch', event => {

    if (!navigator.onLine) {
        event.respondWith(cache.match(event.request).then((resp) => {
            if (resp) {
                return resp
            }
            let requestUrl = event.request.clone();
            fetch(requestUrl)
        })
        )
    }


})