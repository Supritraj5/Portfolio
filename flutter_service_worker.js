'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "1ba5d1731f6c090a73fafe1fccbe55bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1fb238f7f6eae94a3d97baaa4d0342e7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c7a41a5f2c5fe582ecebb5d45a6d23f7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea8a6387fc67e83c2dfc7ca200dd6382",
".git/logs/refs/heads/master": "ea8a6387fc67e83c2dfc7ca200dd6382",
".git/logs/refs/remotes/origin/master": "f5582ec01b029d278cc8c24e2419eadf",
".git/objects/pack/pack-51f40d641108fad421d6cf9b0e763cefb26aba8c.idx": "f4bda2f27603e6e3a1e2fdac76f4d90c",
".git/objects/pack/pack-51f40d641108fad421d6cf9b0e763cefb26aba8c.pack": "6b82513f74a180dea89be77138806aa0",
".git/objects/pack/pack-51f40d641108fad421d6cf9b0e763cefb26aba8c.rev": "5f3349680705013ed70282aa178f977e",
".git/refs/heads/master": "fa5bd3fe8521472cdcc7db062ab22f1c",
".git/refs/remotes/origin/master": "fa5bd3fe8521472cdcc7db062ab22f1c",
"assets/AssetManifest.bin": "69e7523908b9860f2060c7bdf29dcc12",
"assets/AssetManifest.bin.json": "0bdaa37d368590c2289162b77e8be944",
"assets/AssetManifest.json": "1079e8d8b3692e236c37ec0b0a097000",
"assets/assets/files/Resume.pdf": "b4844634da66774fbb70c81645fb7d53",
"assets/assets/icons/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/linkedin.svg": "fc81555a452e0fafcb442f489ceef19d",
"assets/assets/images/another.jpg": "94984848345c27aeb4b39da38b99fbe6",
"assets/assets/images/another2.jpg": "02bdbcb098f5f5ff39b9059705679f7d",
"assets/assets/images/background.jpg": "dd663224571b1122d51ddf95f479a951",
"assets/assets/images/backgroundB.jpg": "5eec90a74f5b1c24414378095b8d4709",
"assets/assets/images/profile.jpg": "bf6473dce2aa84fe8a1e9c749410e74c",
"assets/assets/images/profileimg.jpg": "136b36b8f38bbeafc948a59c2b9002c4",
"assets/assets/images/projects/ems1.png": "177429d100dd24cf6b33b9b0269fad54",
"assets/assets/images/projects/ems2.png": "b60a0bc3c58d7c4c2fd5aa488df03d99",
"assets/assets/images/projects/ems3.png": "148ca3cb2459f5cde925299c0e0bcb68",
"assets/assets/images/projects/ems4.png": "8181093ddf812571004feddcea41f131",
"assets/assets/images/projects/mpi1.jpg": "b24a56067e0f6976fa91a8d27547cd66",
"assets/assets/images/projects/mpi2.jpg": "30be26af66029d9f0e4d39f6189e84d4",
"assets/assets/images/projects/mpi3.jpg": "7f03cccae061d4e17085867cb6d8e13c",
"assets/assets/images/projects/mpi4.jpg": "5c596cc65f1a1f166c7160d527daf466",
"assets/assets/images/projects/mpi5.jpg": "07861b0ed49bee4564074a57742e0cf8",
"assets/assets/images/projects/mpi6.jpg": "aebb7463ed915bec9e6b902294e6f5d6",
"assets/assets/images/projects/mpi7.jpg": "2bf2b95d783cd84953b9fb8a5697c70e",
"assets/assets/images/projects/mpi8.jpg": "6fa8070bbe3e768adc969d5e7cca7c8b",
"assets/assets/images/projects/mpi9.jpg": "a297fe92aa5485bfb2db573aa9ef9609",
"assets/assets/images/projects/tictac1.png": "68b6ea388cc1c5658259d87a5d920f98",
"assets/assets/images/projects/tictac2.png": "dfc14bb46d858ec08d5183031252a9ca",
"assets/assets/images/projects/tictac3.png": "55dc60c1e0a19b34cd1c12e28ecf4fa6",
"assets/assets/images/projects/tictac4.png": "3a112dea42fb6c6231158a55d884abfe",
"assets/assets/images/projects/tictac5.png": "14a4ea8084ca24d5c7525d0c64393357",
"assets/assets/images/projects/tictac6.png": "21fc1aabc6f9e734f4933c75d0b5fa64",
"assets/assets/images/projects/tictac7.png": "928981c42464136a80d0789e2053bcf6",
"assets/assets/images/projects/will1.jpg": "6dce194ecd51681cb73598d592a22e90",
"assets/assets/images/projects/will2.jpg": "c2b57fb841133ff7a6ec48c90d49e528",
"assets/assets/images/projects/will3.jpg": "ffa66f7826ffa8c70ca047456e8c57af",
"assets/assets/images/projects/will4.jpg": "a0078b92027865dacd56e69167407be1",
"assets/assets/images/projects/will5.jpg": "56f62faffa00a1b8958bff7f665cd4c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fab9286998999e9be0facb06e3722657",
"assets/NOTICES": "fb82d76a5c82c0de47c612a56df9a3b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3b545ad2e6793517b9f6c8c86eab040b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2474623404f8a78ffbc26a371b54ad3",
"/": "d2474623404f8a78ffbc26a371b54ad3",
"main.dart.js": "fd879845e7ed57becdbaa733d2d96ac0",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
