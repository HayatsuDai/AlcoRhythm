const SW_VERSION = "";
const CACHE_TARGET_FILE = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js'
];

/**
 * NOTE:
 * Service Workerが初めてインストールされるときに発生します。
 * 通常、キャッシュの設定などを行います。
 */
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // キャッシュを行うファイルの指定など
    event.waitUntil(
        caches.open(SW_VERSION).then(function(cache) {
            return cache.addAll(CACHE_TARGET_FILE);
        })
    );
});

/**
 * NOTE:
 * Service Workerがアクティベートされたときに発生します。
 * 通常、古いキャッシュの削除などを行います。
 */
self.addEventListener('activate', (event) => {
    console.log('Service Worker activate.');
    var cacheWhitelist = [SW_VERSION];
    event.waitUntil(
    caches.keys().then(function(cacheNames) {
        return Promise.all(
        cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
        })
        );
    })
    );
});

/**
 * NOTE:
 * ネットワークリクエストが発生するたびに発生します。
 * キャッシュからリソースを提供したり、ネットワークから取得したリソースをキャッシュに保存したりします。
 */
self.addEventListener('fetch', (event) => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
    caches.match(event.request).then(function(response) {
        if (response) {
        return response; // キャッシュがあればそれを返す
        }
        return fetch(event.request).then(function(response) {
            return caches.open(SW_VERSION).then(function(cache) {
                cache.put(event.request.url, response.clone());
                return response;
            });
        });
    }).catch(function(error) {
        console.error('Fetching failed:', error);
        throw error;
    })
    );
});
