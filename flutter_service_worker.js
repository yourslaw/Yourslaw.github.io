'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2568767801f53d8927540c51b0afd861",
"/": "2568767801f53d8927540c51b0afd861",
"main.dart.js": "e8deaaaceb9b3af1e69ddc3a653cb872",
".git/config": "2a6c26945e0bcd2a239fa7dd9d614b58",
".git/objects/0d/0277b6e9e2089e9368e96a14f7fd41027e3909": "541afdcf6de9b9ac97c48f3f1955a8fd",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/59/e5ab155064b74db59336b4484d50366a400dd5": "d0eb021675854c01468774055bb60fa9",
".git/objects/92/1a09b4d598a068c95f657f68432d9a6261389b": "edb8985e94d894cb57aff8b9b7c50cab",
".git/objects/66/8cdf45e6e143163f2b7a68a5630fb5bd04f7e1": "31c7b1cfb752d98ca2d82b559cd7eb15",
".git/objects/3b/0de2d95ccb68c1977288708724f3f3d32c044c": "173359e972c07031a957df370ca7777a",
".git/objects/03/0dfa63ebc1c4999f7a0d926924f49e2b4ac4a3": "b21dd6a42c738646897af4e7f2a288d3",
".git/objects/9b/ba71500fe0a2b207b3666ddb3a52cf9abc20c0": "b2663fb863935138cc5e19495b8a3e52",
".git/objects/35/5395f8d3759b658e4e0da8ae4e1f5c5f655210": "603f686951dc550c72691d55b861a317",
".git/objects/69/0401ad323e74bf8504d07836ddd91b38f409f9": "95b51b35a58226b7a139e0e9d876d664",
".git/objects/3c/af25e018b08dbcba3f2a07f8ce50547a15674c": "3e555d50648459c900b2c4aeb8949190",
".git/objects/56/57fc483a5c0e0aaea5d67aaf0a06c2cd6ef526": "cedb85eecadebca76c3034d4c90939bb",
".git/objects/51/5cedf0a41d322f2db72cf81c33a0e2c30e573a": "d10bcfd56a0a7f82d46beeb54ed4269f",
".git/objects/94/c49a89619a1d47fe8e985f87d762ef042c929e": "bcdea3a9a1ac91a23fa48e74bd9084a7",
".git/objects/94/4742a691e92ce739c975c3f807a68c7e77903d": "c685e856bda86f9cb6a77aecf5e7b494",
".git/objects/0e/6a93442904f17aa66e4043824815b09f37dd65": "d7a9b88782a54d4a6681a8238e017322",
".git/objects/5a/b7eab6de719482284ec635fd6f2ca4b619ec45": "2b1fa4c2027a76aff039753df64d2332",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/9c/846d90cd553bd29c7f98da710739460d220572": "f19c3c44bd86e3806f67870924955d7a",
".git/objects/b2/deeb4031d275467de7d91822dce30b9bfed746": "f9b890dc5c80d9294641be0cae56d072",
".git/objects/ad/c3229a55c9457a7d57c27539aaecb805cc9900": "4e3220424e10069236f0a00cc9319af5",
".git/objects/d7/3c61200a2ca1b50c7c992fce8afddf5263b2a7": "f37018c8a9c9a28213c323ac64b24b07",
".git/objects/d1/b08e199d22cbed88462fc6202a2bb26ecf77aa": "5fef41a2f628cedf7424d4b7ec691aa2",
".git/objects/d1/213f9fcaeea3650b9a7db2f924a060c038a175": "004d9ab91173a0066f1f00703323d6a3",
".git/objects/d8/b6e4c5dbf9a976551c8951752037708dcbd73f": "92dccd27ed46e280c63bdb841316e244",
".git/objects/d8/ba1cda26fe1d5d81cdb972ab14790342f90a8d": "723344fe3316284d387937a42415df77",
".git/objects/e2/56f3716f927755c6a58dbdc71dd659e8e674a5": "1031c4ce7e1a77a63b42eebc7a5c8d2d",
".git/objects/eb/731c3e1b553e474a8257c214ec6a77712287d3": "c2c4064a677ae21b797968e1615a31f4",
".git/objects/ee/4152373c07542b5fb2abc57c91bf35cecda38f": "89d433598c172d6cb1006c55f2493eee",
".git/objects/fc/b56794cbdc8db493eb1b794f78d6cd59a99348": "72b85a2d0e022ab8ee2d53c640a41544",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/dd1cc55f62bfbd7ff433038fd53d2948d0bd02": "a01855928c5ae9d7b81e3bee6e094bc5",
".git/objects/c8/9bbafc51f05343a7d5463d87e2d6daf5a59d10": "c16e2d734c9c4b686bb35ffcc365d71f",
".git/objects/ed/4c9163d382327b539d5f28038c41cbbbe93e2f": "8e6fcdc7704565f6336d36a58df6087f",
".git/objects/ed/13e979fe8973b73e1e3c7746520a2c5c9318fe": "374ec415263ee13ba9f1182a3e1fccbb",
".git/objects/ec/c5736f14d96f282dd3a2c0c94879e3eb0fb9cf": "2023c7177a3c8ac8baea7ff133dbdd11",
".git/objects/4b/c59d15905a4bdf7fb1e78b0d1043ba7281f3d6": "7ddfc9eab8f64df58446688681933e58",
".git/objects/11/d4c52ddb44ff4b7e768962b762228d1d81c133": "be43f2d624d42e684a60f81aae395612",
".git/objects/7c/6c55fb3e0bd48b6ac317d97d255fc107f9a75f": "a72f9ca449f6fceaca7307c3085513d1",
".git/objects/45/9946d6738329de31a39d09258ad1a91d1d761d": "e51e3c281189ed759c556560aec1b045",
".git/objects/73/e40965984d5a4f0bd1de65f4b8deb6472488a1": "3e2aa7416ded83c2ac1dee921fdcbc50",
".git/objects/80/ac71dab1b46fdbc6465c512aef7084936be3d1": "f5bcc2b9d2b2edd2566c8b1012555983",
".git/objects/74/87e5a5c40f337d4ef527cb39b9fa4371e8e670": "d4d44cfd51507648725301cc4b7a0af8",
".git/objects/74/dc7a1d07264e3769baea6cabe88b4ecf5c2f36": "b089616cea851624459fd8a9366a2e4e",
".git/objects/8f/a5a34f6df54de86f9a9eb0051d304524ef4c3b": "84dd9664e15e10d983eba561f5026072",
".git/objects/7e/e49cc6bd24c39733b83e812978f4de11c3cf3e": "58917a0651451b4c15a275df10055305",
".git/objects/21/a59c7c906e0b43843d720166e05c22f9ddb4a7": "a7bbaa917aeae0391c01f93559be6056",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/43/cc37865b003e93c0d80872742022a2059a47ae": "42413c6fa91f0918ccc54ae0257dd42c",
".git/objects/9f/e10c9d0d5f9607eab338924d67e8259328229c": "f066549374f42f8096ecc6dc847c5a67",
".git/objects/38/208dbd33c658b7d29f5ba2474026fd3eb61be2": "d7052fb0eb93bfe23ea13f319cb913da",
".git/objects/36/9f1e479b641d42799bd4cf830ce8992b50582f": "333265bcc302397596783f62542402f0",
".git/objects/36/7e825d0d209e52fe0cece6f8155f0c06594328": "fb73b907101874c6dc2280fad9f96be5",
".git/objects/09/d5553a471b6d8710f06e0812a1e49d7a0dc16f": "0a8974a3b6b3a91ac5fdb9ebb3f0f2ba",
".git/objects/31/bb2fbc12e79e469b29f317ffccbdd86d5cca2f": "51547a6bc7df089464a927781a26e4e4",
".git/objects/62/3561f858a7d73aab57d1a51f8465ab39b17303": "d444a474bf723852dc32e2aa93f0b730",
".git/objects/62/3058147a784e752b37993e0932069a3b3a3fcf": "f51a54a506b7794b72785182e6a8fb60",
".git/objects/98/9f80fda893c4c40eede0ff8279cfc139663ab4": "e6c7894058ea3d7bea44d93899d567ce",
".git/objects/3f/511c2b9e36fcebddb15320adee80a87f2ce4b4": "fc711ea464fbae3a44f5301bc7887c17",
".git/objects/30/5829d6bb39851727b9c712ca30ae4f894b4363": "38f3db39f1bb87b5c62d414cc726d6b8",
".git/objects/08/ff5c30e4908aa5f6b51f7091027487b079d7ed": "b751eb20333aeedf2b094c7f180dacdb",
".git/objects/06/d134b22685ff370e2991084160c4818f1d3896": "6eaeccbecc700186b00a5ec964372bde",
".git/objects/06/a56b92501afdfcb826ad6c8f3cb30b73eb178f": "bc1b35f69f68fd6bb7181a791425deec",
".git/objects/39/a369cc84e9c28717a67b8f5a590c5c210dc391": "7b07b69586e4fef919283409fcb353cb",
".git/objects/39/3b47d2ad36e097b199026323622182936a2f43": "18d2d80bcab65c9586060c1599e002d0",
".git/objects/52/f0bbfdb16a222a5cc12de9e99fec3ca85aecd6": "415ecfcec8ea5dfdddc02bd4c93f4217",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dc/226c2a726527d2885457b31c9c994dae5b2189": "453da2ef870d1c66cbfce9b51fd2b6c4",
".git/objects/dc/75e2d1faa058771c379f428a81904dccd92d0b": "a0ef4a817dd576c6434e6cf237ccdd8b",
".git/objects/dc/a329a519eb8f4212b7031c8e89c5f5ce1518e3": "a702e7e8fe8490a83ad087b90769fbd5",
".git/objects/d2/6690c7ddc96a6ea6fb2314db5006b271a55ef6": "653aced0fab9df3f9c6cde8835d1178e",
".git/objects/aa/3c0fb573d9d1ec3907005b651cabd81274cae8": "a9e7d98043f8fe11f8ab009233b4734e",
".git/objects/aa/0f117ddc94e38aa1e16d01825a4596e6e0a9f1": "db8021699363cf98d5043061f96f9197",
".git/objects/a8/dd76c342553bf6961b09ebdfca600bb632699b": "4be91240e54b7ecfd32fade5a51988ba",
".git/objects/a6/7880d69b63c244e5f0ea2cb27ac1704ba6bd79": "50ff616745da23d7b5ccea453bfc6f31",
".git/objects/cc/015f3a084bd10a24d7412867bc3a8d00430376": "ce227c0209618608b054a9ef0949fcfa",
".git/objects/fa/f7146a03475fa652a211dac36bfb56e843a61b": "a98d2b594dd241321df5d237e543ba0c",
".git/objects/fa/df6f53ceda35c69c516a637ede2795c416e9c1": "6a07ef09799f5f7d290f92ad85e6c658",
".git/objects/c5/3bf2119b1a50c09f75f13be52879d9c781e6c2": "3bcf546d3016f85c768e56afa42a6ee4",
".git/objects/2d/2ba0bd041884f2c39c7ae910e462ea19ddacfc": "4886daf5a49cf185f76aa8412b333e20",
".git/objects/41/ebf4265d3ad3f03e490c09560b93f06b44ac23": "fb71a339ce3620c097b731689e049b35",
".git/objects/1b/957a6e3362f5b1e3a754fde4b0ae34c0ecff82": "c635143ee9f4a662f37f7e1f37571892",
".git/objects/48/5da8ce9b1a021fe5c7286851b68627f4262521": "95fac8536b879185ea143921d6fb0978",
".git/objects/70/b2e222ac5ca052e6353a97a734edc3c9fd8048": "4659cfe325049cee2cc83ee1be1d3d48",
".git/objects/70/5ff8d93379917d8b8dbda44000056bab5f6a73": "f8fc981b9c627e7568bb9459764da77b",
".git/objects/70/70c6bc6a31898995e566b7f85206d6b6e25931": "bfd8ee24a841abb0aa54b494e5851be7",
".git/objects/70/0426e8ced6683c37bd24154c977fe138b655eb": "52827c53a6d2a522bbb9c2d7bb512870",
".git/objects/1e/6e3452093fd99f228807cd92d41b9a0b0f2e1d": "d2c97e592e7770025b4c8dbcc697589d",
".git/objects/24/13d7fb063be4ab0d23154a3e6eb5ca8b2dc3a1": "b1d261f70b22b7032b6c89fde7c4bdec",
".git/objects/4f/f01f0bf8233a512e92ea05e4122bb4a7562094": "8d804da1b7d0f975f9fad06eac70c9fa",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/433d29946c88e8bab12f4e35a8e8c4ab120aa7": "308f3bd2a9db0320aaedba0ab9c316c4",
".git/objects/8c/817a350fffd9809775b50570336e1a60e19af6": "14e2b298b1312b03afe9badf453cb7ed",
".git/objects/1d/a894a9a886802181c9b3b51ba6ac6f5243a632": "2cf82430789cacc0af42cd783e19832b",
".git/objects/47/bfddd1c913c2c8d6bfcf48ac9d1c4967db6c8e": "323233ce86ecfc3dcb23174c263b49f5",
".git/objects/8e/ff79abdf1978482c5f7546ad8966969a5afa38": "6632559ff9cdbe24e5cc22a67ba6c407",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0083e2311ac620d34eac5a336a1b638",
".git/logs/refs/heads/master": "a0083e2311ac620d34eac5a336a1b638",
".git/logs/refs/remotes/origin/master": "8090e694d36a294d276f2f0d549833ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "cddcc848fe1caa33407dc78a0fff7f1d",
".git/refs/remotes/origin/master": "cddcc848fe1caa33407dc78a0fff7f1d",
".git/index": "19101a4b6a4a510720d0838547e74e62",
".git/COMMIT_EDITMSG": "0c24b7ae6c6fae5e0cae777840a7f936",
"assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/images/juhye_rect.jpg": "05611fcaea9ce54012039b61813f2b55",
"assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/images/myungjin_rect.jpg": "b3f92746155b693a23db42fb046083f2",
"assets/images/yours_map.jpg": "b412805cb572ebd5ffdc7428fd631a65",
"assets/images/hayoung_circle.jpg": "2c00d7e0f65deb17793d1e4f4f0b7f2f",
"assets/images/juhye_circle.jpg": "0f840ddf0dd77435068fa0e74cc3f984",
"assets/images/hayoung_rect.jpg": "6bc6ed76432bb98548dcabb4552c509e",
"assets/images/myungjin_circle.jpg": "308f787bf7d3cb76575b580cc145045f",
"assets/web/assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/web/assets/images/juhye_rect.jpg": "05611fcaea9ce54012039b61813f2b55",
"assets/web/assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/web/assets/images/myungjin_rect.jpg": "b3f92746155b693a23db42fb046083f2",
"assets/web/assets/images/yours_map.jpg": "b412805cb572ebd5ffdc7428fd631a65",
"assets/web/assets/images/hayoung_circle.jpg": "2c00d7e0f65deb17793d1e4f4f0b7f2f",
"assets/web/assets/images/juhye_circle.jpg": "0f840ddf0dd77435068fa0e74cc3f984",
"assets/web/assets/images/hayoung_rect.jpg": "6bc6ed76432bb98548dcabb4552c509e",
"assets/web/assets/images/myungjin_circle.jpg": "308f787bf7d3cb76575b580cc145045f",
"assets/web/assets/fonts/Cormorant-Light.otf": "8623b4e7e03d8aeb0cd91f5739ea2f7e",
"assets/web/assets/fonts/Cormorant-Bold.otf": "7ee1d5b702784f585e1570d5485e24a7",
"assets/AssetManifest.json": "1c60e68541fc6c82a7125514211a7bd6",
"assets/NOTICES": "7668383412e15721631f2bad5d361eec",
"assets/FontManifest.json": "b21d380eb7aa8d0ff69f63d205b05a34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/NanumSquareOTFBold.otf": "d7c4bb6cc69192432eea2124eac30fdd",
"assets/fonts/NanumSquareOTFLight.otf": "c40969eb31e6b4fde6545d9ceb518288",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Cormorant-Light.otf": "8623b4e7e03d8aeb0cd91f5739ea2f7e",
"assets/fonts/NanumSquareOTFRegular.otf": "94caf6ad65d567bf536b3dfc12d1ae81",
"assets/fonts/Cormorant-Bold.otf": "7ee1d5b702784f585e1570d5485e24a7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
