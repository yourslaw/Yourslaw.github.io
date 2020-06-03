'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2568767801f53d8927540c51b0afd861",
"/": "2568767801f53d8927540c51b0afd861",
"main.dart.js": "f14c048775c54d3bec607c7baa81720e",
"assets/LICENSE": "ccc19ec7cf2a14524540f3e02f74f181",
"assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/web/assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/web/assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/web/assets/fonts/Cormorant-Light.otf": "8623b4e7e03d8aeb0cd91f5739ea2f7e",
"assets/web/assets/fonts/Cormorant-Bold.otf": "7ee1d5b702784f585e1570d5485e24a7",
"assets/AssetManifest.json": "770d46a7cf8055dd8099f6dfec1826af",
"assets/FontManifest.json": "b21d380eb7aa8d0ff69f63d205b05a34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/NanumSquareOTFBold.otf": "d7c4bb6cc69192432eea2124eac30fdd",
"assets/fonts/NanumSquareOTFLight.otf": "c40969eb31e6b4fde6545d9ceb518288",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Cormorant-Light.otf": "8623b4e7e03d8aeb0cd91f5739ea2f7e",
"assets/fonts/NanumSquareOTFRegular.otf": "94caf6ad65d567bf536b3dfc12d1ae81",
"assets/fonts/Cormorant-Bold.otf": "7ee1d5b702784f585e1570d5485e24a7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
