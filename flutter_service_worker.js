'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2568767801f53d8927540c51b0afd861",
"/": "2568767801f53d8927540c51b0afd861",
"main.dart.js": "9fcb3524c495da06ee37881c53c298e0",
".git/config": "2a6c26945e0bcd2a239fa7dd9d614b58",
".git/objects/0d/0277b6e9e2089e9368e96a14f7fd41027e3909": "541afdcf6de9b9ac97c48f3f1955a8fd",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/59/e5ab155064b74db59336b4484d50366a400dd5": "d0eb021675854c01468774055bb60fa9",
".git/objects/92/1a09b4d598a068c95f657f68432d9a6261389b": "edb8985e94d894cb57aff8b9b7c50cab",
".git/objects/3b/0de2d95ccb68c1977288708724f3f3d32c044c": "173359e972c07031a957df370ca7777a",
".git/objects/69/0401ad323e74bf8504d07836ddd91b38f409f9": "95b51b35a58226b7a139e0e9d876d664",
".git/objects/94/c49a89619a1d47fe8e985f87d762ef042c929e": "bcdea3a9a1ac91a23fa48e74bd9084a7",
".git/objects/94/4742a691e92ce739c975c3f807a68c7e77903d": "c685e856bda86f9cb6a77aecf5e7b494",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/ad/c3229a55c9457a7d57c27539aaecb805cc9900": "4e3220424e10069236f0a00cc9319af5",
".git/objects/d1/b08e199d22cbed88462fc6202a2bb26ecf77aa": "5fef41a2f628cedf7424d4b7ec691aa2",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ed/4c9163d382327b539d5f28038c41cbbbe93e2f": "8e6fcdc7704565f6336d36a58df6087f",
".git/objects/ed/13e979fe8973b73e1e3c7746520a2c5c9318fe": "374ec415263ee13ba9f1182a3e1fccbb",
".git/objects/4b/c59d15905a4bdf7fb1e78b0d1043ba7281f3d6": "7ddfc9eab8f64df58446688681933e58",
".git/objects/73/e40965984d5a4f0bd1de65f4b8deb6472488a1": "3e2aa7416ded83c2ac1dee921fdcbc50",
".git/objects/74/87e5a5c40f337d4ef527cb39b9fa4371e8e670": "d4d44cfd51507648725301cc4b7a0af8",
".git/objects/74/dc7a1d07264e3769baea6cabe88b4ecf5c2f36": "b089616cea851624459fd8a9366a2e4e",
".git/objects/7e/e49cc6bd24c39733b83e812978f4de11c3cf3e": "58917a0651451b4c15a275df10055305",
".git/objects/21/a59c7c906e0b43843d720166e05c22f9ddb4a7": "a7bbaa917aeae0391c01f93559be6056",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/36/9f1e479b641d42799bd4cf830ce8992b50582f": "333265bcc302397596783f62542402f0",
".git/objects/31/bb2fbc12e79e469b29f317ffccbdd86d5cca2f": "51547a6bc7df089464a927781a26e4e4",
".git/objects/62/3561f858a7d73aab57d1a51f8465ab39b17303": "d444a474bf723852dc32e2aa93f0b730",
".git/objects/62/3058147a784e752b37993e0932069a3b3a3fcf": "f51a54a506b7794b72785182e6a8fb60",
".git/objects/30/5829d6bb39851727b9c712ca30ae4f894b4363": "38f3db39f1bb87b5c62d414cc726d6b8",
".git/objects/06/a56b92501afdfcb826ad6c8f3cb30b73eb178f": "bc1b35f69f68fd6bb7181a791425deec",
".git/objects/39/3b47d2ad36e097b199026323622182936a2f43": "18d2d80bcab65c9586060c1599e002d0",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dc/a329a519eb8f4212b7031c8e89c5f5ce1518e3": "a702e7e8fe8490a83ad087b90769fbd5",
".git/objects/d2/6690c7ddc96a6ea6fb2314db5006b271a55ef6": "653aced0fab9df3f9c6cde8835d1178e",
".git/objects/aa/0f117ddc94e38aa1e16d01825a4596e6e0a9f1": "db8021699363cf98d5043061f96f9197",
".git/objects/a8/dd76c342553bf6961b09ebdfca600bb632699b": "4be91240e54b7ecfd32fade5a51988ba",
".git/objects/cc/015f3a084bd10a24d7412867bc3a8d00430376": "ce227c0209618608b054a9ef0949fcfa",
".git/objects/fa/df6f53ceda35c69c516a637ede2795c416e9c1": "6a07ef09799f5f7d290f92ad85e6c658",
".git/objects/c5/3bf2119b1a50c09f75f13be52879d9c781e6c2": "3bcf546d3016f85c768e56afa42a6ee4",
".git/objects/2d/2ba0bd041884f2c39c7ae910e462ea19ddacfc": "4886daf5a49cf185f76aa8412b333e20",
".git/objects/41/ebf4265d3ad3f03e490c09560b93f06b44ac23": "fb71a339ce3620c097b731689e049b35",
".git/objects/1b/957a6e3362f5b1e3a754fde4b0ae34c0ecff82": "c635143ee9f4a662f37f7e1f37571892",
".git/objects/70/70c6bc6a31898995e566b7f85206d6b6e25931": "bfd8ee24a841abb0aa54b494e5851be7",
".git/objects/70/0426e8ced6683c37bd24154c977fe138b655eb": "52827c53a6d2a522bbb9c2d7bb512870",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/817a350fffd9809775b50570336e1a60e19af6": "14e2b298b1312b03afe9badf453cb7ed",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "822cf8e35f48cb273713bea547afe950",
".git/logs/refs/heads/master": "822cf8e35f48cb273713bea547afe950",
".git/logs/refs/remotes/origin/master": "f4fae0e2c96a784c8da2b96a5253ffeb",
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
".git/refs/heads/master": "e6553d22f9ef7d1267ee607666e9d02b",
".git/refs/remotes/origin/master": "e6553d22f9ef7d1267ee607666e9d02b",
".git/index": "fabff604fa75e81f4c82d916a6a8cf2a",
".git/COMMIT_EDITMSG": "50417f1f95ee12e454824a9f64ed7eb1",
"assets/LICENSE": "ccc19ec7cf2a14524540f3e02f74f181",
"assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/images/myungjin.jpg": "308f787bf7d3cb76575b580cc145045f",
"assets/images/juhye.jpg": "0f840ddf0dd77435068fa0e74cc3f984",
"assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/images/hayoung.jpg": "2c00d7e0f65deb17793d1e4f4f0b7f2f",
"assets/web/assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/web/assets/images/myungjin.jpg": "308f787bf7d3cb76575b580cc145045f",
"assets/web/assets/images/juhye.jpg": "0f840ddf0dd77435068fa0e74cc3f984",
"assets/web/assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/web/assets/images/hayoung.jpg": "2c00d7e0f65deb17793d1e4f4f0b7f2f",
"assets/web/assets/fonts/Cormorant-Light.otf": "8623b4e7e03d8aeb0cd91f5739ea2f7e",
"assets/web/assets/fonts/Cormorant-Bold.otf": "7ee1d5b702784f585e1570d5485e24a7",
"assets/AssetManifest.json": "38b07b483fb5422f0f71dbfe0bb61ef0",
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
