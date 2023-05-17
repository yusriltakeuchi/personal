'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "527a581e17321961447a8b72867233bf",
"index.html": "2ea67cd9cbb70fa0109e4fc8a4255892",
"/": "2ea67cd9cbb70fa0109e4fc8a4255892",
"firebase-messaging-sw.js": "e5c132bcb92e266cc818e74a237754f1",
"main.dart.js": "4aaedb2e72a49d1ce51d4ae5a4b02c8f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "62123069f62eb054f6d897959569daa3",
"assets/AssetManifest.json": "ffd5a5a3b68f868af154feefa54d5dc7",
"assets/NOTICES": "acec5787f0f763abef84ed9b5091aaa5",
"assets/FontManifest.json": "ff27a12f4e28d6afe7bb318ada0d5bd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6f03cd89cc41c4cb630817c67e9ff8c2",
"assets/fonts/Urbanist/Urbanist-Bold.ttf": "fb884444541be363b5c0e0061c263d30",
"assets/fonts/Urbanist/Urbanist-Regular.ttf": "837b1925efce4640df48540678d45d30",
"assets/fonts/Urbanist/Urbanist-SemiBold.ttf": "3d48965b5965e8dd69ed0e18d044d64f",
"assets/fonts/Urbanist/Urbanist-Medium.ttf": "70e637ec0b1644a19c2df09389a3b876",
"assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/MaterialIcons-Regular.otf": "da4cbeceebefdc53591f248938ec79c6",
"assets/fonts/PlusJakartaSans/PlusJakartaSans-Medium.ttf": "86c690cf3c5fa19ac4d644e3179d726e",
"assets/fonts/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf": "888a09fc349fd86b358f8bf1d343c69f",
"assets/fonts/PlusJakartaSans/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
"assets/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf": "202ed785290892875b3c8b3d0584efc5",
"assets/assets/images/illustration_beach.png": "27ca466a6eeb112089a3d98098d2b219",
"assets/assets/images/illustration_person_location.png": "cb23ccbce90c3051816c6f100b2d085f",
"assets/assets/images/image_circle2.png": "553f897cf8f655588ccde321829f3bdb",
"assets/assets/images/city_malang.png": "835bd5a6a431948e45ef35b11949ae73",
"assets/assets/images/illustration_map.png": "77a2838df65d895bacd9311abb3b2907",
"assets/assets/images/image_background_splash.png": "a6ae464ea85da38e13e1aa096724784b",
"assets/assets/images/onboarding_1.png": "569353d5de934bbbd809a4f169490bd3",
"assets/assets/images/onboarding_3.png": "c325df672d392b0d72df25a27a8601e1",
"assets/assets/images/onboarding_2.png": "93a333aaabf42f1b14d7663b568295ff",
"assets/assets/images/background.png": "fd44b84d3c7ecb87c350712bb2c8aab7",
"assets/assets/images/image_banner.png": "e67cd2f347bd27888809621eb64d104f",
"assets/assets/images/city_bali.png": "135b6de6926d8c4654afb4a8a1f3a75d",
"assets/assets/images/image_borobudur.png": "8a265f694927d225256da47bb012ba8d",
"assets/assets/images/logo.png": "95730997a75c251481d8f84c3af2ed22",
"assets/assets/images/logo_white.png": "145be10ed7d9ff3a007dafd26f5cd5d7",
"assets/assets/images/logo_icon.png": "4011cc8f8fc1fcfdd253cf1f58ac2c64",
"assets/assets/images/city_padang.png": "563f2e54685bbbcbea0357731e3c743b",
"assets/assets/images/city_bali2.png": "e1ee02c2b19ca1bd9bf10258f013e21f",
"assets/assets/images/image_circle.png": "ccc984e0a8514b5ab49df0dc3e471f1e",
"assets/assets/images/image_profile.png": "fcab5c0247f416a07bf54664d0106fdb",
"assets/assets/images/city_building.png": "99d62d6d78b3bf543a788fc6dff874b3",
"assets/assets/icons/icon_edit.png": "8511842873ffa1aa02d4c77e33e29abe",
"assets/assets/icons/icon_location_solid.png": "51710f8bf0243d3e7a31f0e456f0c6b0",
"assets/assets/icons/icon_bag_solid.png": "b2629302ec38241552e811ae77d5da7b",
"assets/assets/icons/icon_menu_post_hover.png": "47914a17960c7e237e8d0350f742a792",
"assets/assets/icons/icon_pdf.png": "95342df1e243422f60bff76d7c74cf1f",
"assets/assets/icons/icon_about_solid.png": "f0fe984d5b1ae371ceaaecdfa84ad4f7",
"assets/assets/icons/icon_comment.png": "1a01fc7f1bbeea9b653ef6615aaf07e9",
"assets/assets/icons/icon_close.png": "6e2bc9e635a1a02e24ebadabb42d208c",
"assets/assets/icons/icon_notice_error.png": "e4bb9ced198d18de8fec822eac8ea2f1",
"assets/assets/icons/icon_menu_home.png": "5d321709f7a54d170cba217f50895e98",
"assets/assets/icons/icon_menu_mytrips_hover.png": "514ea56ab02718b34a80d708ea352364",
"assets/assets/icons/icon_search.png": "447d6d98a9c4534a01cbe2038de9bcd1",
"assets/assets/icons/icon_coin.png": "bcb081dbf418b2327ebb706d2973451c",
"assets/assets/icons/icon_send.png": "4f38666fb85a36ee357fec71fb3efe14",
"assets/assets/icons/icon_about.png": "2919b500c2237c797fc3901d4ad1b4e9",
"assets/assets/icons/icon_coments.png": "c922aea18bf3d752854c75fef65847f4",
"assets/assets/icons/icon_menu_profile.png": "a72f91ccd14a28f2858d8185c82818f0",
"assets/assets/icons/icon_instagram_outline.png": "12f89a412ad5e848aeff4906e3a1cf29",
"assets/assets/icons/icon_trash.png": "734426a17823a748deaa052d562f32cf",
"assets/assets/icons/icon_faq_solid.png": "6b3f5a8a571a036e1ad0063a7c25ea3e",
"assets/assets/icons/icon_money.png": "3cb9c638ed853ca20face8e8390d371b",
"assets/assets/icons/icon_building2.png": "e190c8278dddb4444d420c26920b5ffe",
"assets/assets/icons/icon_send_outline.png": "0310067d226ec66e6026c87f4ba8d8a6",
"assets/assets/icons/icon_setting.png": "1d223e1a626938b5b2d3ab330fa6ba58",
"assets/assets/icons/icon_info_success.png": "0c36a8d9e579cca219f7571993c05801",
"assets/assets/icons/icon_comments2.png": "5ed4d2682867fb1a6423d07dc7897eed",
"assets/assets/icons/icon_menu.png": "30ec4b3dfa4d9a57bb09940dc9608dc4",
"assets/assets/icons/icon_info_complete.png": "3139486ba5655fd873ebc3b8289fe669",
"assets/assets/icons/icon_apple.png": "1f88143033771f5475954407fc0b3292",
"assets/assets/icons/icon_menu_explore.png": "0b8c6e039e4dfed9abcccba644603477",
"assets/assets/icons/icon_info_write.png": "03c09905ce758447b9c2049f5201c391",
"assets/assets/icons/icon_notice_info.png": "ba573c9eb0f9e6440915f9cecaa922a1",
"assets/assets/icons/icon_mail_outline.png": "a1c25065dfad02d1eba9f171b9dc6993",
"assets/assets/icons/icon_add_image.png": "6228df53ac970911683ea69437e3ee72",
"assets/assets/icons/icon_menu_post.png": "0d6a76cf472702a1f63a17b429397587",
"assets/assets/icons/icon_google.png": "8a8c19b169368c6feb38861ce069a681",
"assets/assets/icons/icon_favorite_outlinebold.png": "2744fd45ce639ef8f102126d50286385",
"assets/assets/icons/icon_location_outline.png": "2efe4ac1615fdf0f85a68d215cb7c594",
"assets/assets/icons/icon_building.png": "f0a6597e899fef47b9ba61f28c2952e8",
"assets/assets/icons/icon_notice_success.png": "a74ff1979780e3f1b887a1d6d2a9362c",
"assets/assets/icons/icon_notification_notfound.png": "a708bc628e46b08f73c2edc133378a22",
"assets/assets/icons/icon_profile_solid.png": "35978433271adbb0e579faf858dc41a4",
"assets/assets/icons/icon_favorite2.png": "a45569158b3cf8a90e8d52af69dcc4dd",
"assets/assets/icons/icon_whatsapp_outline.png": "4cef3858cb5fb810ae5c45a678d23002",
"assets/assets/icons/icon_favorite_solid.png": "b1ecc7c1f69e5966d9082edc0ded8943",
"assets/assets/icons/icon_shield_solid.png": "dbb03111b7ea24bddce9b80b88fae50f",
"assets/assets/icons/icon_bulb.png": "6353746e70190f792f7e17da0ec3f2f6",
"assets/assets/icons/icon_flag_indonesia.png": "a0070437eaa408e82b0ad442746e2cfd",
"assets/assets/icons/icon_calendar.png": "48ee9972a8c9f54bf76e24048f17100e",
"assets/assets/icons/icon_menu_home_hover.png": "30fcc89096e0c6a11b32b255dfac9fd1",
"assets/assets/icons/icon_location_hover.png": "c2ea0181640ce42b858e9158f139bf43",
"assets/assets/icons/icon_notifications.png": "033bb4840324236f60b9e3f81999205c",
"assets/assets/icons/icon_notification2.png": "926acf9f447df43c8e006c4f39ae0cb5",
"assets/assets/icons/icon_whatsapp.png": "d5b623e84b39cbdd7817b2bffa097088",
"assets/assets/icons/icon_menu_explore_hover.png": "d685919ad8289a05ef206dc182d5b8b3",
"assets/assets/icons/icon_square_info.png": "1fffd60d26763edf0b05a1119f6aed8e",
"assets/assets/icons/icon_info.png": "bd244a6d1d239e5eb1d86a96c6a0c445",
"assets/assets/icons/icon_notfound.png": "915fcf5d5b889c6af7012a051bfd5fd1",
"assets/assets/icons/icon_plane.png": "fa46b0627876a74bdcbbc405fc30f074",
"assets/assets/icons/icon_menu_profile_hover.png": "841f39d70c7eef076ff6ca668dfc1b13",
"assets/assets/icons/icon_favorite.png": "1b82a77681311203338f78740ae7ffe1",
"assets/assets/icons/icon_menu_mytrips.png": "02ec8ff1461a707bd4a5317a0261bf8e",
"assets/assets/icons/icon_invisible.png": "79914e93c65aa84868f356e3d8627925",
"assets/assets/icons/icon_arrow_right.png": "64f9d7b114870cb63e3f981b076edace",
"assets/assets/icons/icon_facebook.png": "2c5f6e65071bb6f8421ebb0a1d21405f",
"assets/assets/icons/icon_visible.png": "70b2cf033f5b2175df04987434222e5c",
"assets/assets/icons/icon_arrow_down.png": "1f6bb49579eb331d429e412d68ff6ed8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
