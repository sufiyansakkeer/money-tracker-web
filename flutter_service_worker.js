'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "683f216b913ec73f7e5110868d477da9",
".git/config": "4edbc9fc33c4e88e79be9756da9a8df7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3875c9c29dd883b1c9f7048850a73ab4",
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
".git/index": "f8694a7e01e3585de222ea33ceb9bdbc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d23f535d6e5aafd1084e573098b301fd",
".git/logs/refs/heads/main": "71709246df092594ae941eaa2e1fcc4f",
".git/logs/refs/remotes/origin/main": "b41ae1647832a97352a1a5d7b1397cd9",
".git/objects/00/514028b342565f20772e796f31e8b840f87fc1": "0d26da80ba7e3a0720007badc7826102",
".git/objects/01/348cdc6de24e843bccce1976604f54cebe57ae": "10ec7cd11565b9c2a702a608547142f4",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/03/fffe095edb961107f30866b7518ddd785e960a": "649cd4a65635e8ef659a6bb821a30839",
".git/objects/04/00ade1e5297b70d33cf1bc95f706424b63a06b": "1440f2c4ccb5f7a5600a716498acdd27",
".git/objects/06/3d8bb9eec8edb10cf31a6b803b069463a4e9a1": "b3499e6063eaac7099f1fc5088272652",
".git/objects/06/afc88d364530a379c120ee930e1845c8a44bc9": "4ddb5533bbbfd4475227de5e076c8a3c",
".git/objects/06/cb8be6d5c86d89a2f613045cfdd20a53acd3eb": "42d448f7e0f179b781efc4fde1319293",
".git/objects/09/562e22f7a829c0dc0ce8673d26bc11174d5be2": "b045486e910bcfe866737c87e70cd51c",
".git/objects/0c/41b3773da47d469e5821142f8875034210f663": "fdf015e30e62472947a9f4c7886edc34",
".git/objects/0d/432722f140df548190723acf2ba999104751b2": "e4f4e1f187b5774b88922cabe1a60dfe",
".git/objects/0d/d5c85df71e37251bcbdc8544a6f98c55b27d4a": "3c5008f19c19c43137aabb86fca7221c",
".git/objects/10/c50dc1cd93774527cc1f0297d4a293fb921331": "c626dbdfe29ce38678c7127a812e3b74",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/c645a94e8d537a8b50e51cc864a930f4f526b1": "7cbf57d66d22b4ddedad1b9b3ba16a61",
".git/objects/19/157bfc734d98191af93c0513f02dae8eeddaa2": "01e15e63f6c8ed4af4c9ee9a62529466",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "ca397eafb79f12c456994b1e4a0d5300",
".git/objects/1a/bfdc83c013a064652c02b259332fe8fb56e29b": "d6161875e555c94bf08f98b82273608b",
".git/objects/1a/ea88c223835839b15e65d1c8879778fa38578d": "4d69ba8a3072fbe7b70d99dee098e7d4",
".git/objects/1b/0b0b97cfa73073ed010c4596388f8596fa23de": "745aa0d83a9435e5939bea5279f31374",
".git/objects/1d/780faaadf81634e8a1c5194e81c929f017332b": "f6f3c4a9fdb4ec08ea1ce858b99eec96",
".git/objects/1e/afad8ce379e58bcacd81b70bfeac6fc2af93b5": "2bc07bb0cfa7ddd768a3611ab0394d28",
".git/objects/1f/daaf913255f36e65a2e7816e68f4bff019fedf": "58bd90506e710ae5f6a1cb76a9dce756",
".git/objects/24/92b9996db31792a2840c92116a4bbcce509cc7": "8963ad5d2b20ccef93e9539a038d05c3",
".git/objects/29/233c1815741bc5dbd6f676f580a0326f988060": "86848625763141a41491d68da12a6a09",
".git/objects/29/30b0e1753416e12f4268a98f9a5e8be35778a3": "1e787c669c61d9a7173bd1d627323108",
".git/objects/2a/38cbf7c5d1aab7a44712d415e70408300d5222": "911a0581f575b4d70963098a37d3fe15",
".git/objects/2b/82a9de1d1b6318be62d6973128ca1ef4442f23": "e29e240911c05f23d1beefe7cc024cbb",
".git/objects/2d/f505470e713267baca9e75844c556ca964ff46": "c362af7a8afd90ded5ba09944fe5680c",
".git/objects/2e/2d823e8f0496a0b46dd6c0520ea5a160113f13": "79fb6220e6391bb05201fd5e12a3152c",
".git/objects/2e/ca2530761eba2f0fae3c108d4040f632387a05": "41d549f6be5ef8365a00f607b2149d83",
".git/objects/2f/293f50ad24e83132cb719fcd577a8315b00304": "69e22c1f1eaab4e7dba6116af13e0ab3",
".git/objects/2f/ff4af26ba5723bc1f652fd94507645cdf05abd": "b8e0170c1610bc63d69a93273ef68b4f",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/32/0d8129ef4dbcf975ff057224ea0f2cc537cae7": "c6e1337fc50b74a20cf2c0ebc39920f7",
".git/objects/32/59b638ae43b193d28e5bf098adbb27396e3150": "88e3eeeac770a7b36f5a98dc80444a12",
".git/objects/33/9c47168a826b9c2e3af24f8551067fc5073a65": "fc1b58b0c5a94982060aa1b8a43ab015",
".git/objects/36/1b0fea3a2bc7778d3d7b6930fff1b5a3a88077": "ca08d89f0eec3c7846e46a0385317f9f",
".git/objects/36/1d82a3633ce14d1e0e93046fd2f39e379cc59f": "16521ac961f81bfa3fe2d605d0c4c3b1",
".git/objects/36/8b959d06d34bc287c29d1da72e9c7d63d28cf4": "82f4f2029cc2077319c21e1eee660827",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/322f9d5559be920f16483e591999e16b037f6c": "14be7beab23696b24a8cb949c7cda860",
".git/objects/3b/c176cdf78126adb3b4120e64cd4e6d05fbb4e8": "e69ccd058190e329428b0317fa63c064",
".git/objects/3b/f052ca586c31022e42c0359719092eba3668fc": "85edc66e2627b8fdea29587b8b67c772",
".git/objects/3c/de73be02b5fc4d2b65306abee3b55fc876528c": "c35a2f61d62493163e82339e8b481fb5",
".git/objects/3e/645e9273d2e6a2d09d74faa2c34dd1e95bff61": "91498cb05b5c0853e2d08c91fbc3e5b8",
".git/objects/3e/dc979b0582a1ff15dde5d51a7684b97e68741b": "ef5cb401f441559eacf06887cd5ad99e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/7b9fd7689c644790bab9a89c230ca700c5586c": "6cf70f30d92d38a6d9bbbcfc7f811f6c",
".git/objects/42/05ac7d2c1a3cc8ed0a43b2d65740e1062751f8": "630be5ea89f03a12a2fadb3678b0ae08",
".git/objects/42/5e91f5736e9edc86b74de410b74c24320be3bf": "e25d3d4e0d6d9d2296e32f81f163a917",
".git/objects/43/fcf537282e454840884637ff784cb347a0b786": "19f0d1e414151169763fd079b4184e28",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/554cfa6117ff8aba29523f954235e48135cfa5": "921e6596504cafa8a8135cfea66d5f04",
".git/objects/47/8d1d73de822d1d080263f9ada254d280a761a8": "b53cb1811143b65c94f16b402d6271fe",
".git/objects/48/b7ef617271ba5102d741d864b50cd424925d1d": "1acfbb35aae597afdc65a27fa5c9d74c",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/563a518166d10194119b8a8a097a939f8c8781": "6b9380dc228f0478516b261b6bd4b4b1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/51/af50ab261668bef2994fad456a4a74506b6fed": "88d163a802f7841df70cbe6ea2dcc04e",
".git/objects/54/4e2bdb812dfb020ec0f9de213a94cf7908b2fc": "6f3c96426f3038a5940c236d270acf5b",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/dcb4220b6be1c917c077d2b77365d538bdb58b": "5d729b1059654299413a4c191c9bbe95",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/58/6e6fa4074bf699a51ef199087207a49867b89e": "18bba158745808828462f490402714c4",
".git/objects/58/8d67cbbb2dafb51e9a1bf8e9b40efe206aad83": "b41f85f299899e83dc3264a655ce8a59",
".git/objects/58/ce7ab5ae7b8bc21ad98e6fc5073cc492cc50a6": "f274069055e0193f2c079f01795c296f",
".git/objects/59/9857e2a304e5c373c0854911c1967e1496e88a": "4c68ec92d9462a6312d7d50bfa879b56",
".git/objects/5c/2ecfba4906eeb60ba905bf8f8e736ce78c5140": "82ff70e1d99f029d0188fbdf3e126102",
".git/objects/5d/beec29911fffbe30390d4ca729f3e319d69248": "d6b04f029059d3039f0f2b495f94701d",
".git/objects/5e/66633aac0aed206f47b9f2b6cec648ca01b37e": "39761f661c9414e9bab541d0e73584dd",
".git/objects/5e/ac70e1af2dc6501f8a1f0523c0e31b15f2f1d6": "b260266de5b8409454e9dcb55bbc6762",
".git/objects/5f/a5d2b0d5f89b6a93b7546bf4526dd742eb8ef4": "51ebfedee636e6951de44bf0575790a8",
".git/objects/62/1a6b14774ea37f92181a943060523b0776e93b": "d264171da57f5c838fc2842fb674bc46",
".git/objects/63/4b3c8025c316e6627d162773d92e9e7ab71c7a": "2014671445505c55ef94cc202fa74f50",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/64/55715ee22f3c71140f94ce5afc7034bb9762cd": "079a991fc1815fba26e803dc8e1a33e6",
".git/objects/64/ef08cdae54c2cb2587fb9428c92534ed65bcb4": "bd3440caf3cfac135789dd828a34ac6c",
".git/objects/66/636db1cfd4f576cb634480a4c68ad962ef8930": "4ec509a1c9991246e09865ebaa446d11",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/4b0ed9496ba94453cca5e387941c8615761c89": "41f85701d54acfdd6155297f7b39485f",
".git/objects/6d/ca5677833d05cde4449a6e00a18fc347178726": "633cbcc8f1d9ca515293b20534cb95d6",
".git/objects/6e/80da0964d16f56fedccc713c2b54bd597d29a8": "d14550241313e731ec6e158714a62dc4",
".git/objects/6e/acd7562020b6ce693a106c773b41372a994acb": "7714fe1fba29b51171d3cd6f265ff3e8",
".git/objects/70/2b772b60ce1742df7dc399b295d7503ef8351e": "911ec7e93afb5a146bdad3ce5d494016",
".git/objects/70/cdcadcef755400b8facea7381c0720e2725743": "2658e94b0ab89aac969809bb969f8a9d",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/225510310c6e2b8bd00d5656f443b982089d34": "7bfef794ed0fbe7f37cdadb9f8c805b7",
".git/objects/74/9c9a44cfc9e7e83d7bf304f5f48e2c0733ccc1": "15d28f84d9408f2c0c5dfb548c37a5ef",
".git/objects/75/4e8bb8ad94b5242e83cddcdcd6b223a0966672": "f8bcb55253534fbe72cddfe29f16d4d1",
".git/objects/75/b93eb366b98fb4ef5351842c021e8d31dd2b4f": "b65e5568f468249c58262e88cdb138d1",
".git/objects/75/dfb78df95692a63b026ffc1a91537fe6edcfea": "c5706f4555ac2912706c8b8b0ff2445a",
".git/objects/76/5ded732f4383154e156001838d6b0eef1ed75f": "6054f807e3212ef70ee88e0fd4684834",
".git/objects/77/267439cf156c7eccad9755e5789e02f93c2e01": "65d0ce122d4f5041619ff6781f34481e",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/baae885c36745b2b896f9f18df67bb631055cf": "369d0829797ff836e3d8898fa7610ade",
".git/objects/7a/b548c58a9cfef8a8eefac6905aedd06a2a45f3": "0044ed93ae703f9d86c72af33c7aa416",
".git/objects/7a/c4fc5218eef8b883a115297e2a9b641215e9fd": "cc6d76ec23fc1bb1c09d4321f4dc72e1",
".git/objects/7b/4609b3ba75659a2c5f6921378f8cfde529b9ac": "1564de61bc783f1e7a5e2330de5e4383",
".git/objects/7d/79b7088378d32ed5b53c1ad3c9c4b8d0948fb3": "fd0ce125f84e9bea49a1e91b606670f8",
".git/objects/7d/a44d50d4a20b23707b7d89ef3b5cc385d0f4ac": "9948edf92688c732efdaae2e22e6a71c",
".git/objects/7f/31c68ddab874bf58743fdd78fbf74645431eb4": "75646779d23bb9f4d9251094ba0e1076",
".git/objects/7f/8786d66594e414e5f31cb2d3f0d2dcc149e200": "a72a6f2e8f2ad435d78a2f9db9319ef7",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/80/fc981860a9dd7f6de3e66e8f77a58ec9345366": "2986d40fff3fdfd1cb3eb8efed7db206",
".git/objects/82/a4b519170da0e33c53f4f952ae624cdf657d56": "c73331ae7e47406de97e3fe24f091d48",
".git/objects/82/c178746342fc9d379c131ca12569320b5e1850": "ddbcc837bb3b932b2dcf54c6bdf89362",
".git/objects/82/ec6c301322c9a7362c1f8707a01720fa73b36a": "6021b5b6f1a570b40983f4610ac2e791",
".git/objects/84/fe4e57cce8554097de6f70201b97fef0348de1": "eee53eb1776055f9f888d344f93d9c0d",
".git/objects/86/63d5a9022f3480e39b134d430b584a76716f02": "0bc4c713fffaa347ff996c3d3d440df6",
".git/objects/87/234bdca21a09c9900c827d0b6b9b74e0be1150": "b15e7c1e7d850d55d34cc88eb7f956da",
".git/objects/87/d6d533f0725ccab79f980532bde0194afc5987": "facd664f4916e56e743f18f24abaa1e0",
".git/objects/88/711a9545371459214dc0e20e8e77728c5bc0b0": "532c90d044298fc5e06b31015907f077",
".git/objects/88/befd72a9e072f7197a5e81676dbcc624b07199": "a892118093bd75092b7987ee5c44fce2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d0b0dfab37ebbc7c94157052ac18ab01c43ae4": "85fd4a9c5732084a300a5ae6617ed308",
".git/objects/89/730b852bdc4d5188c980e1b85c74efcf910ad5": "af8dde56c31ebd206b36503bf7117104",
".git/objects/89/afbd5779dbd95e53a16cdb1c6f3fecf4903d3f": "ef85dfa7536b86abc609d77478af1c1e",
".git/objects/8a/007c067d0d460b0d74d608ceb71a1991fa0636": "b0c81b918340d0636a4feaa6381d0c6e",
".git/objects/8a/25c2c2e5615623cf94d45168d83c1cb40d41cf": "91e6cf18eb71bfbd1b9c7d6472a14059",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/db5f3c236b1bc581d7d273b0cd5790fd5dd3eb": "fdb96ddb1652f778ef2e4e869e653d2e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/e3ec341004d9834fb25b3eca37cd25161a6f03": "fae6454091c23d55c39769be2741f3de",
".git/objects/8d/aed885486b393a5a36b9779a381bdbd158b0ac": "7742ff2154755e97e5e49aafbfb60445",
".git/objects/8e/696f2aa532cbc1347f22bc7c1958336e0c8a24": "388683396b45f1180971d970b868c866",
".git/objects/8e/c2f1d2fa4a7fa579345421800649e9295ff8ec": "ccd2ffdb4b6361af8860fdc225b5a5eb",
".git/objects/8e/f9a7d5bae52ec177c466f4a5066ae3eaad4a93": "23bc4ecb4c02363a9c3f70ec36f40fa7",
".git/objects/90/1bb7d585bbf7e46f4028093c7b141ca2a4c070": "e281c69e3e6bbcd8e496ce756cb843ea",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/97/5eb1b719b9b2577452a7f9abf2847c61598dec": "3bc807aa4c0265d07595cf053cbae5fe",
".git/objects/98/89a65b3a097ad764b658d71eaf3b92d873292e": "2352c04be530c5fa62c53987156a3dea",
".git/objects/99/8067482343d276033c93ab7cc17ae67abc919c": "0a7317decefe97d255bdef377a1cdb8c",
".git/objects/99/c769758a563bbece653631544d69149aa9c8ef": "065a6d016bc3a2b7f87b3ad551e4ab63",
".git/objects/9a/77da390053b0d84073e82e5a49e029e9700c97": "fc5eb72c4581b3603bc45303bb753e74",
".git/objects/9d/cbcd79adb6aa83ce44df0aab2c2603dc39e3b3": "33adc59d5dc0c820abd1342cb3f41557",
".git/objects/a0/f58ad45c9ecff2f885ce19530009151cb47848": "54f24168e74f323c8944c1ca14758585",
".git/objects/a1/10218044a4e5bfb5a7a23100170bc06f8e70d5": "631b067fbe9891ad915f4c6ce34bc430",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/5a53cc98c2c366cf8887db4b8a170aeb781ab6": "34dfa5a470466e2edf3cea86f5180d6c",
".git/objects/a2/61f474fea09e89c7ae17b6609efe5da664d2ba": "54a511c8822c9a7b8dec79726a4e3c1c",
".git/objects/a5/bcdda02b61e98c9f78483b99d0d2384d06c1ef": "3c98b5357e32867b8856b3d2c5d91d5f",
".git/objects/a7/ca833f119df9950f085bc82bfe629ffe5fa7db": "82f43d6c221bf3b8959f83a710caf719",
".git/objects/ab/aaffa7b00e752f84d27e4d4c4f32ce3019e262": "7edaab8934563e0b1db5632f74ecb0a7",
".git/objects/ab/e535a63af5602af517151a774b6c6b2de5957a": "2cc00479ae6f41704e15891b50ade606",
".git/objects/ad/ccfc4c88b0b879e39ac7dc3dd480289021d26b": "3cbf3610bbf28b4f0e0c9407ebc3bf3e",
".git/objects/af/072ae17c7d7d9911c25918a43edc630883c054": "d8fe2df6d45e5a6c2df5f9f718572b04",
".git/objects/af/d36c17d5bdf51ca0bf6cf092e0386a6b36b499": "cd690a75b961d39fa0e6809b7b3b8128",
".git/objects/b1/b6c192cf2b8d605a7c5b5831eb2151d3b30dc9": "5302bbb0325e805440b7282f51c857eb",
".git/objects/b5/985936a567ab15dd296236fa43d5e579bd87c5": "26781b64322f27ec1a79be8261af53d4",
".git/objects/b6/0261a56f6ea865044612fed42932e6ed5ca4c5": "b9a98a537ff7689ac3b3849454b781a8",
".git/objects/b6/a41a5113c371d99961c3e20a55268f15f13daf": "7805cebea74ae8b072a0b80e6b2c496b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/05c716f858f8b5ca242d592707cf2a204e4299": "de03b4ffe400e3ff5272d48e63f095e1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/82105a5edc225ef3a45354441586cd960ee14b": "791d3893c8a9eb41d30b94137e5d4bac",
".git/objects/bd/e8f8092257b6782c7c4df8e74e72bf2bbda10b": "c0b650e0bced4ee4bab5bfe7d941d8b4",
".git/objects/be/04c475422230f8fbde4c9aec3c2054a083cb17": "e36197174572fef618cb32f068d68b36",
".git/objects/be/6811ca025118e9726fff807881844b6a7926d8": "3df13982aabf0bc0c14acea3f3150032",
".git/objects/bf/b9e9ed21c29ec309faaea4b929bfa89cdb589e": "20ceebb6919fd1d9d6c6a93e7349ba42",
".git/objects/c2/2cecfd9acdcf8432e30c19998d769f24396c78": "177a3e60ca616a5d509996ff215ae825",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c4/6fa4b0df97b92a039d6743a8c2bc6a04f25355": "8bd5d81b7528a10de8702d86c0168b45",
".git/objects/c4/8e696af46ae5b8c26abfa150ac56b96ac3bf5a": "e7f1b6b525050735548ea3a4a7ccc514",
".git/objects/c5/1cd0db1eb6f7782ee1cc826de020da3b9381eb": "24d7d0d949adcf4a46a88abbf2279e86",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c6/19058ba170dd21ef61d74f5c694813b3fa5d53": "2c1171a2274de00f4da7ace26f7c7a2d",
".git/objects/c8/7e1ad33b59d717e273edf3352d5d64514dfe0a": "a4ed2915f21c8b19ec7d0b595bdce008",
".git/objects/c9/5e10d6842d525093ce2c1db7e4a89b64f3975f": "ca30ad5c35661841c1c0c0a81d71242e",
".git/objects/c9/6d10a53e50cfa51e8b143ce20c7d55781f182b": "2f81268644cc9988f9b4be58e9bbd48c",
".git/objects/ca/bc9bbe672b4d39efdd69be675bf34925be720c": "198bd57ca7740a5ecef9d2f2520c417f",
".git/objects/cb/c74f2c361c51015ba1cdd613e45022f640511d": "fd41d2502f75d999d8047eba1c74b53e",
".git/objects/cc/0ea670e1ed4e3e6e8fc27d9be5279f342c5086": "ba0ba484debee473b5dfd8018ef74de9",
".git/objects/ce/390debe2318400dfa5c553ab70d8955f52cb19": "57e8c6cf5501ce7bcec6b252df3cfc2e",
".git/objects/cf/cc3a6b55e637d253dcf88c547e0f09690cda9e": "d2adfbe2b8d2b94f9ede2dfc1f9411e4",
".git/objects/d0/6b0f062eba5d2167f40f2e699403f3944572ed": "0801c1c6a339c230abbeb02c76a4f431",
".git/objects/d0/8c728028bb8189ba909cc4d175edb1af4d6565": "b69cc47d5a3c86ec70a398ebb309e1ad",
".git/objects/d1/36044cb5231c133361516fef3600a1e42e9bbd": "a2ab2d7f5110878f66266b329ed61eed",
".git/objects/d4/a7e7a20bbbb3e23a2b6cb782595e4f0323a16a": "cda91e25e963818b7b1ddda4817276ab",
".git/objects/d4/c8f21c190a56e269dedbd042044ecbd6a3e4e8": "9ca1ee8eb3485231640e40e1ff394039",
".git/objects/d4/e3c534d369f86da32cd61520e926a261c898fa": "e891c64929d9d0637064dff5e16c804e",
".git/objects/d5/1fc15f521e839ecb35f755c88fe81f06598893": "21c9a6ecdb068b7872ee919ab199292f",
".git/objects/d5/ee7e614c42120d91d2a7b3331352be0fddcc43": "d402eac25a91e2613ef46f7ed5d521ca",
".git/objects/d6/90337771c764263a61af28a2fe3fcf2c8914bb": "0d78a298d549048d9e4aa6269127e18e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b527aab6faa85278d7900a1015da6bb15280cb": "8d56a4e804a2833812e6dfa07df7cf98",
".git/objects/d8/1592f784cf8423b8853f7d7d24bc8128fcb338": "34441944b18f4d73cc842d845628060e",
".git/objects/d8/60e0fa176831cf8800b0a704e19fb4e3b4a85a": "9d612078622b7a72e2f1565eb640c905",
".git/objects/d8/9d87b21a9ce6b218581cfdbf788b3599946fed": "963112fad9ebd171c8e9c1491d22eaff",
".git/objects/d9/84aa4ba777b5451bac0fbae8aeca06787c9928": "d8fd59640c6898c77c426dcf4483dde7",
".git/objects/da/3a3f3c12a5175be0ca9ef256e4202a31c056bc": "a0c3f86bd248e5c23c21d9c50831a9b8",
".git/objects/da/971661242e6cfdc392d0b4e2d04f298d35364d": "dba03f6d6363ac34a368499f783fadf9",
".git/objects/de/89b778312c5b06bf7dfa4bbdd20da5b463ef42": "65a241da41afc4d13c1b6d382358bdc9",
".git/objects/de/8bd2874322660a7890afa7e881b23c529c354d": "daafbb9d9d3c33aebd01b084321f3c8c",
".git/objects/e0/b0384db5164e70258652a05ad24a42067626d7": "5134c972fccc303dfa9db5469e05dc9c",
".git/objects/e1/4a8de0d9b2571e0c6f7fe3229fbed201e07860": "c3cc64e61e28c64d86d25ae03992c8d4",
".git/objects/e3/7409f2a1b132d0a9d331d0f91f652d2c687aaf": "874e2ea496d99f38cd8336496b85bfed",
".git/objects/e4/19ce41b16c3dcc765f5a5f66aa7eb929ccc1c8": "7bf3630d557a9ef2b3349c8dfbf19d60",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/7eb4d7a15d6456ef0218a0834d40f5f2e2004f": "b0dd8b02eb2e6b334e0dcb55842ecdd3",
".git/objects/ea/7ba3efac10ba4da70f89b282d5e047fab4441b": "f4eb2be465a0e367348f3b30ec68374e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/10f4fc643464a4dd2c3684ca95a5f78356b807": "691aa693dd297e06f4227de3ff831a74",
".git/objects/ed/29e8ebc5917cb3b7e36a48b110531f2ef27761": "ee7bc35519dbed26fc158ebaf4d065a9",
".git/objects/ee/75c27098bb509339ecc5b9f463d2c253341392": "2d4d6ac1e77fc0d4642b1ac8e4a885fc",
".git/objects/ef/4dd238171477f5a1b1eaac13458cc25b41c0e3": "50b69ae917972c4dccf1dc3b42c104ad",
".git/objects/f6/2f99fa1307cc9c14ef552a073ca475ebf8671f": "43112e1a054f2cf5df5ee0b58d0ea69f",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f7/ec7b7e106cbd631388f307855c4f99ce5aae9c": "0ab3fa7c88eb1ee65d306a6381fc81e7",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/objects/ff/0efdb94730978bc9b5a69012746c83b31c10f2": "572d9169747cc96607c0bb215e3d21fb",
".git/ORIG_HEAD": "c0c7dbafe2e686dd6abc56a3b786d337",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "c201cf2e1bc41eb7acaa4203f5a96042",
".git/refs/remotes/origin/main": "c201cf2e1bc41eb7acaa4203f5a96042",
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
"assets/NOTICES": "b8899e052095fc34a2f22fa514248eca",
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
"favicon.ico": "846abdba5f63ed85ee1b0edb74273df4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-icon-144x144.png": "9d4cca0d0072188f03f4ecfae62a3ec4",
"icons/android-icon-192x192.png": "4920cb078d4914a4069c6c83c0f7d4aa",
"icons/android-icon-36x36.png": "f2bc9ab568f8dffcd4f5c91e10c4350f",
"icons/android-icon-48x48.png": "ffea5a9bc6665bd2565d472e1b53ad38",
"icons/android-icon-72x72.png": "5b85bc893f7013d829ff0e57bf8213dc",
"icons/android-icon-96x96.png": "436b76055a236ac4f77ba165660541f1",
"icons/apple-icon-114x114.png": "c74493d8f6eec256f3633bcdc07b42ab",
"icons/apple-icon-120x120.png": "d9da81a48554fb4eb8363b44b2a96e28",
"icons/apple-icon-144x144.png": "9d4cca0d0072188f03f4ecfae62a3ec4",
"icons/apple-icon-152x152.png": "4787733de307383170be6634827aa13c",
"icons/apple-icon-180x180.png": "93f9da6beb6bcac28c2c7ec00a92e2b8",
"icons/apple-icon-57x57.png": "c435396311ee3d29d07c7d063a5c7988",
"icons/apple-icon-60x60.png": "26c01625e8c4d3a948414588293eb7e0",
"icons/apple-icon-72x72.png": "5b85bc893f7013d829ff0e57bf8213dc",
"icons/apple-icon-76x76.png": "d59359768e918ad4723962dcdefdd830",
"icons/apple-icon-precomposed.png": "33c8c22d3cfc055fc5e259c013ffca19",
"icons/apple-icon.png": "33c8c22d3cfc055fc5e259c013ffca19",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "ea212a3714a195d91ba9a680bbaf30ca",
"icons/favicon-32x32.png": "35fec94a5f9a14d6c02f0399e73901d5",
"icons/favicon-96x96.png": "436b76055a236ac4f77ba165660541f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "9d4cca0d0072188f03f4ecfae62a3ec4",
"icons/ms-icon-150x150.png": "09fa62b309f029b5f1ba60280a617a7f",
"icons/ms-icon-310x310.png": "d3f971cf06c1089a18eff4e0dd2ef517",
"icons/ms-icon-70x70.png": "80469df84f24e64393b5e46ffac5c1c6",
"index.html": "c4dfd4554a91f683cfc1193b916f6c3a",
"/": "c4dfd4554a91f683cfc1193b916f6c3a",
"main.dart.js": "3f97a1e529d213126e98dfdf7b68c6bc",
"manifest.json": "ba720190afa62e4e7196457ac53e8c9d",
"version.json": "eaa45b99cb320695d4958bed663004c0"
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
