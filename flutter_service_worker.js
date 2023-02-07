'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6e48c7783625dbcee776d09945f9caa2",
".git/config": "4edbc9fc33c4e88e79be9756da9a8df7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0ea4f1f5fd62f9a4b44426e0e88a1741",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c1cef49cb5e9d323df1d7b6f75faf28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7575a6df347018147f19ccfd445bdcb4",
".git/logs/refs/heads/main": "3f04e156dc59c16ff183fc3190485a54",
".git/logs/refs/remotes/origin/main": "d7ef2f0eda546e673a4a0e721fa5a36c",
".git/objects/00/514028b342565f20772e796f31e8b840f87fc1": "0d26da80ba7e3a0720007badc7826102",
".git/objects/03/fffe095edb961107f30866b7518ddd785e960a": "649cd4a65635e8ef659a6bb821a30839",
".git/objects/04/00ade1e5297b70d33cf1bc95f706424b63a06b": "1440f2c4ccb5f7a5600a716498acdd27",
".git/objects/10/c50dc1cd93774527cc1f0297d4a293fb921331": "c626dbdfe29ce38678c7127a812e3b74",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/c645a94e8d537a8b50e51cc864a930f4f526b1": "7cbf57d66d22b4ddedad1b9b3ba16a61",
".git/objects/19/157bfc734d98191af93c0513f02dae8eeddaa2": "01e15e63f6c8ed4af4c9ee9a62529466",
".git/objects/1a/ea88c223835839b15e65d1c8879778fa38578d": "4d69ba8a3072fbe7b70d99dee098e7d4",
".git/objects/1b/0b0b97cfa73073ed010c4596388f8596fa23de": "745aa0d83a9435e5939bea5279f31374",
".git/objects/29/30b0e1753416e12f4268a98f9a5e8be35778a3": "1e787c669c61d9a7173bd1d627323108",
".git/objects/2b/82a9de1d1b6318be62d6973128ca1ef4442f23": "e29e240911c05f23d1beefe7cc024cbb",
".git/objects/2e/2d823e8f0496a0b46dd6c0520ea5a160113f13": "79fb6220e6391bb05201fd5e12a3152c",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/36/8b959d06d34bc287c29d1da72e9c7d63d28cf4": "82f4f2029cc2077319c21e1eee660827",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3e/645e9273d2e6a2d09d74faa2c34dd1e95bff61": "91498cb05b5c0853e2d08c91fbc3e5b8",
".git/objects/3e/dc979b0582a1ff15dde5d51a7684b97e68741b": "ef5cb401f441559eacf06887cd5ad99e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/8d1d73de822d1d080263f9ada254d280a761a8": "b53cb1811143b65c94f16b402d6271fe",
".git/objects/48/b7ef617271ba5102d741d864b50cd424925d1d": "1acfbb35aae597afdc65a27fa5c9d74c",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/58/6e6fa4074bf699a51ef199087207a49867b89e": "18bba158745808828462f490402714c4",
".git/objects/58/ce7ab5ae7b8bc21ad98e6fc5073cc492cc50a6": "f274069055e0193f2c079f01795c296f",
".git/objects/5c/2ecfba4906eeb60ba905bf8f8e736ce78c5140": "82ff70e1d99f029d0188fbdf3e126102",
".git/objects/62/1a6b14774ea37f92181a943060523b0776e93b": "d264171da57f5c838fc2842fb674bc46",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/66/636db1cfd4f576cb634480a4c68ad962ef8930": "4ec509a1c9991246e09865ebaa446d11",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/80da0964d16f56fedccc713c2b54bd597d29a8": "d14550241313e731ec6e158714a62dc4",
".git/objects/70/2b772b60ce1742df7dc399b295d7503ef8351e": "911ec7e93afb5a146bdad3ce5d494016",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/4e8bb8ad94b5242e83cddcdcd6b223a0966672": "f8bcb55253534fbe72cddfe29f16d4d1",
".git/objects/75/dfb78df95692a63b026ffc1a91537fe6edcfea": "c5706f4555ac2912706c8b8b0ff2445a",
".git/objects/76/5ded732f4383154e156001838d6b0eef1ed75f": "6054f807e3212ef70ee88e0fd4684834",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/4609b3ba75659a2c5f6921378f8cfde529b9ac": "1564de61bc783f1e7a5e2330de5e4383",
".git/objects/7d/a44d50d4a20b23707b7d89ef3b5cc385d0f4ac": "9948edf92688c732efdaae2e22e6a71c",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/80/fc981860a9dd7f6de3e66e8f77a58ec9345366": "2986d40fff3fdfd1cb3eb8efed7db206",
".git/objects/82/a4b519170da0e33c53f4f952ae624cdf657d56": "c73331ae7e47406de97e3fe24f091d48",
".git/objects/86/63d5a9022f3480e39b134d430b584a76716f02": "0bc4c713fffaa347ff996c3d3d440df6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/007c067d0d460b0d74d608ceb71a1991fa0636": "b0c81b918340d0636a4feaa6381d0c6e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/db5f3c236b1bc581d7d273b0cd5790fd5dd3eb": "fdb96ddb1652f778ef2e4e869e653d2e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/e3ec341004d9834fb25b3eca37cd25161a6f03": "fae6454091c23d55c39769be2741f3de",
".git/objects/8e/696f2aa532cbc1347f22bc7c1958336e0c8a24": "388683396b45f1180971d970b868c866",
".git/objects/8e/c2f1d2fa4a7fa579345421800649e9295ff8ec": "ccd2ffdb4b6361af8860fdc225b5a5eb",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/97/5eb1b719b9b2577452a7f9abf2847c61598dec": "3bc807aa4c0265d07595cf053cbae5fe",
".git/objects/98/89a65b3a097ad764b658d71eaf3b92d873292e": "2352c04be530c5fa62c53987156a3dea",
".git/objects/a0/f58ad45c9ecff2f885ce19530009151cb47848": "54f24168e74f323c8944c1ca14758585",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b6/a41a5113c371d99961c3e20a55268f15f13daf": "7805cebea74ae8b072a0b80e6b2c496b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/82105a5edc225ef3a45354441586cd960ee14b": "791d3893c8a9eb41d30b94137e5d4bac",
".git/objects/bd/e8f8092257b6782c7c4df8e74e72bf2bbda10b": "c0b650e0bced4ee4bab5bfe7d941d8b4",
".git/objects/be/6811ca025118e9726fff807881844b6a7926d8": "3df13982aabf0bc0c14acea3f3150032",
".git/objects/bf/b9e9ed21c29ec309faaea4b929bfa89cdb589e": "20ceebb6919fd1d9d6c6a93e7349ba42",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c5/1cd0db1eb6f7782ee1cc826de020da3b9381eb": "24d7d0d949adcf4a46a88abbf2279e86",
".git/objects/c8/7e1ad33b59d717e273edf3352d5d64514dfe0a": "a4ed2915f21c8b19ec7d0b595bdce008",
".git/objects/c9/5e10d6842d525093ce2c1db7e4a89b64f3975f": "ca30ad5c35661841c1c0c0a81d71242e",
".git/objects/cb/c74f2c361c51015ba1cdd613e45022f640511d": "fd41d2502f75d999d8047eba1c74b53e",
".git/objects/cc/0ea670e1ed4e3e6e8fc27d9be5279f342c5086": "ba0ba484debee473b5dfd8018ef74de9",
".git/objects/ce/390debe2318400dfa5c553ab70d8955f52cb19": "57e8c6cf5501ce7bcec6b252df3cfc2e",
".git/objects/d4/a7e7a20bbbb3e23a2b6cb782595e4f0323a16a": "cda91e25e963818b7b1ddda4817276ab",
".git/objects/d5/1fc15f521e839ecb35f755c88fe81f06598893": "21c9a6ecdb068b7872ee919ab199292f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b527aab6faa85278d7900a1015da6bb15280cb": "8d56a4e804a2833812e6dfa07df7cf98",
".git/objects/d8/60e0fa176831cf8800b0a704e19fb4e3b4a85a": "9d612078622b7a72e2f1565eb640c905",
".git/objects/da/3a3f3c12a5175be0ca9ef256e4202a31c056bc": "a0c3f86bd248e5c23c21d9c50831a9b8",
".git/objects/da/971661242e6cfdc392d0b4e2d04f298d35364d": "dba03f6d6363ac34a368499f783fadf9",
".git/objects/de/8bd2874322660a7890afa7e881b23c529c354d": "daafbb9d9d3c33aebd01b084321f3c8c",
".git/objects/e0/b0384db5164e70258652a05ad24a42067626d7": "5134c972fccc303dfa9db5469e05dc9c",
".git/objects/e3/7409f2a1b132d0a9d331d0f91f652d2c687aaf": "874e2ea496d99f38cd8336496b85bfed",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/7ba3efac10ba4da70f89b282d5e047fab4441b": "f4eb2be465a0e367348f3b30ec68374e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/4dd238171477f5a1b1eaac13458cc25b41c0e3": "50b69ae917972c4dccf1dc3b42c104ad",
".git/objects/f6/2f99fa1307cc9c14ef552a073ca475ebf8671f": "43112e1a054f2cf5df5ee0b58d0ea69f",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/ORIG_HEAD": "c321f22143fce643a133db779fe2381d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "c321f22143fce643a133db779fe2381d",
".git/refs/remotes/origin/main": "c321f22143fce643a133db779fe2381d",
"assets/AssetManifest.json": "53906433e3f59f362984f489ad26c9e1",
"assets/assets/images/90698-online-investment.json": "f46ca99820d29500834f3c0f63c88696",
"assets/assets/images/expense-card.png": "9eea22aaeacc189622e310befa66dd2f",
"assets/assets/images/getStarted.json": "45f2dd94546a5db9e2f299efeb18f1ee",
"assets/assets/images/gradienta-background.jpg": "6894f17a9d5865622e26e0ca4b67416b",
"assets/assets/images/graph-stats.json": "27a303e7c0a005c832126ec1c3a3660a",
"assets/assets/images/growth-analysis.gif": "697ad698ca3e5291f27d65f6c2394cdf",
"assets/assets/images/income-card.png": "da6d6c02ce9f31369c31a1eeee192420",
"assets/assets/images/iPhone%25208%2520-%25202.png": "f7668a45f61835fc15c3e0a6205f3a4a",
"assets/assets/images/iPhone%25208%2520-%25202@2x.png": "0a28ee70db734f58ac0f90bc17f7c906",
"assets/assets/images/loading-process.json": "6e2a20758ac46dc60fea2553e6257ec0",
"assets/assets/images/Loading_1.json": "1d2a08cac838c7c6744266e9316ccf75",
"assets/assets/images/Lottie%2520Lego.json": "86b572741366f677d92bbd95d3289d05",
"assets/assets/images/man-holding-note.gif": "8620ca2b8b99a6ee4ecd27031e59ac1b",
"assets/assets/images/man-waiving-hand.gif": "db44ee843e6eaebd1d0673389f2661c6",
"assets/assets/images/Next%2520background.png": "147c253d41279e135855cedb10b3515b",
"assets/assets/images/no-data.json": "c9521e2e8df29241161b0d464b9d0796",
"assets/assets/images/onBoarding%25201.png": "4be72be83f76659cae42944c367ac243",
"assets/assets/images/onBoarding%25202.png": "ccfec29eac7766e6f0c32a1dd3cf4a13",
"assets/assets/images/opener-loading.gif": "6c17329cf893a686f66ba3f35ac16351",
"assets/assets/images/organize-in-closet-wardrobe-animation.json": "e19d101d51f06e64de4ea9d59d97677b",
"assets/assets/images/party-celebration.json": "0b8f90f2db067d915b33a178fcad4762",
"assets/assets/images/progression1.json": "2843a353aa88ca40fc65abcb3814dcd8",
"assets/assets/images/pulse-loader.gif": "6b00037799b477dc5ad6b5e5f3f15825",
"assets/assets/images/Rectangle%252024.png": "ec8603064791099d7d5260963741fc2f",
"assets/assets/images/Splash%2520Screen.png": "f75b7c38e891745070a3ee4add60a84c",
"assets/assets/images/WhatsApp%2520Image%25202023-01-17%2520at%252012.06.12.jpg": "54a597b1d1ed55f101f57f1776383417",
"assets/assets/images/women_sitting.json": "b955f60bdc3fa5ad285fb3761d4e2403",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2d458481c8708897c10c16c5419795d1",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "53e7bfb8e1b8d7f02606bd466e612bb0",
"/": "53e7bfb8e1b8d7f02606bd466e612bb0",
"main.dart.js": "eeccf3c1c6439ca5450e688fb15a60af",
"manifest.json": "ba720190afa62e4e7196457ac53e8c9d",
"version.json": "bdfa7a13114111fda70c4b79bf1b28a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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