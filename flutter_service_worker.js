'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.ico": "82c9a3667f5ddaa3fdb0e75291b08aa7",
"index.html": "1f1b1db3d3916a760f4f52674ddf32b9",
"/": "1f1b1db3d3916a760f4f52674ddf32b9",
"CNAME": "cb6cdb239bad646edc3cf542eebe09ae",
"main.dart.js": "5677bf718cf6490e3d93fac923492673",
".git/ORIG_HEAD": "6a0de5afc7375f729102fd401bf0142b",
".git/config": "fa19c931ac9a1e2d62711d8c4c5261d3",
".git/objects/0d/0277b6e9e2089e9368e96a14f7fd41027e3909": "541afdcf6de9b9ac97c48f3f1955a8fd",
".git/objects/95/28ad0e866fb5c8c33f31475c9cd3ad9e3ad209": "04cb23627b596cb854aa2c400129c33f",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/59/e5ab155064b74db59336b4484d50366a400dd5": "d0eb021675854c01468774055bb60fa9",
".git/objects/92/1a09b4d598a068c95f657f68432d9a6261389b": "edb8985e94d894cb57aff8b9b7c50cab",
".git/objects/66/8cdf45e6e143163f2b7a68a5630fb5bd04f7e1": "31c7b1cfb752d98ca2d82b559cd7eb15",
".git/objects/3b/0de2d95ccb68c1977288708724f3f3d32c044c": "173359e972c07031a957df370ca7777a",
".git/objects/6f/38648267e259f22921d5725fc0249257cf7cee": "67c022fc5683b51cc2a3db5bdb3b6658",
".git/objects/03/24beb58b0752cb8a689bcf0de71d2aa8e38323": "a18e331b7c021efedba168ec2fbc1b1d",
".git/objects/03/0dfa63ebc1c4999f7a0d926924f49e2b4ac4a3": "b21dd6a42c738646897af4e7f2a288d3",
".git/objects/9b/ba71500fe0a2b207b3666ddb3a52cf9abc20c0": "b2663fb863935138cc5e19495b8a3e52",
".git/objects/9e/f7886b2366185b73616f60b86680193f7962c7": "7d2607a529c174496b281623d215fb7d",
".git/objects/35/5395f8d3759b658e4e0da8ae4e1f5c5f655210": "603f686951dc550c72691d55b861a317",
".git/objects/69/0401ad323e74bf8504d07836ddd91b38f409f9": "95b51b35a58226b7a139e0e9d876d664",
".git/objects/3c/af25e018b08dbcba3f2a07f8ce50547a15674c": "3e555d50648459c900b2c4aeb8949190",
".git/objects/56/57fc483a5c0e0aaea5d67aaf0a06c2cd6ef526": "cedb85eecadebca76c3034d4c90939bb",
".git/objects/51/014ff42c5513fe69c63f6c180d71d64631d15c": "e9c6c64db0b1023dece4a250a104d136",
".git/objects/51/5cedf0a41d322f2db72cf81c33a0e2c30e573a": "d10bcfd56a0a7f82d46beeb54ed4269f",
".git/objects/51/e1b05b2236570807dfdf63655fed2e141e7c44": "24dba0c454b89a79f930dcf6d3a9a3f1",
".git/objects/67/2ea6915f730f7601dfeb07a0b4d7c7fbc552e4": "ce93b7d03f35c192e173397f36326151",
".git/objects/94/912d735facb9db4af2d0d936b04089381d8d3d": "7e05b0f407b71738f787e506acef7a38",
".git/objects/94/c49a89619a1d47fe8e985f87d762ef042c929e": "bcdea3a9a1ac91a23fa48e74bd9084a7",
".git/objects/94/4742a691e92ce739c975c3f807a68c7e77903d": "c685e856bda86f9cb6a77aecf5e7b494",
".git/objects/0e/6a93442904f17aa66e4043824815b09f37dd65": "d7a9b88782a54d4a6681a8238e017322",
".git/objects/5a/b7eab6de719482284ec635fd6f2ca4b619ec45": "2b1fa4c2027a76aff039753df64d2332",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/05/6786527042a655444c2ddead15101e51c536bd": "3dd67a05d9894c80fa6074e7252570fd",
".git/objects/9d/b8fc9c4d32ff248c487151325db41f558718d1": "46a4fa6f7db8768db4dc2d69b4f28e65",
".git/objects/9c/846d90cd553bd29c7f98da710739460d220572": "f19c3c44bd86e3806f67870924955d7a",
".git/objects/a3/f1efc06feb39deb933038ae7740420ed775cfa": "5f836dafff5957b40ddeababd17c7ca6",
".git/objects/b2/deeb4031d275467de7d91822dce30b9bfed746": "f9b890dc5c80d9294641be0cae56d072",
".git/objects/ad/d058ef4c5e020413921c41cd49628f9368e82c": "5fdffefe7df114ea36148cf76aa0d529",
".git/objects/ad/c3229a55c9457a7d57c27539aaecb805cc9900": "4e3220424e10069236f0a00cc9319af5",
".git/objects/d7/3c61200a2ca1b50c7c992fce8afddf5263b2a7": "f37018c8a9c9a28213c323ac64b24b07",
".git/objects/d7/c44b66aeb96e2477525196d7caeafb757d2ac6": "8fb01e759b0c0cff19805d04eb6798bd",
".git/objects/be/f00666899a92f3befff811fdf864d1ddb4055e": "fd01cb7098252bcfdd2bdaa1b0861def",
".git/objects/df/3073f8d19c363b97d7faacea149d27a58d8d61": "d793ee08b4563d6d84fabc85e5b45f30",
".git/objects/df/63decf9de99228a0c563e091b675ac7a79d14e": "812104a3952cb8cbf5b4015ceaaf49d2",
".git/objects/b4/703aeea978eb2e35c127ffa7690bceb109e12e": "8445885aff2c2e74a882af9df531e53e",
".git/objects/b4/512223e416e4db59784a9e6b1e210d64fc7411": "8c0c830bb23dbcccb559640f1f91e555",
".git/objects/bd/ec5ce1a8396be757ad30dd8e08ac579a19007d": "0f9ec8ba055d589d6f5d001ddb1e8e55",
".git/objects/d1/b08e199d22cbed88462fc6202a2bb26ecf77aa": "5fef41a2f628cedf7424d4b7ec691aa2",
".git/objects/d1/213f9fcaeea3650b9a7db2f924a060c038a175": "004d9ab91173a0066f1f00703323d6a3",
".git/objects/ae/d0e02cd6ff8353d72dba615631a5c8d650dd37": "0710ef43e89fe1a221f9a9e9723980b8",
".git/objects/d8/b6e4c5dbf9a976551c8951752037708dcbd73f": "92dccd27ed46e280c63bdb841316e244",
".git/objects/d8/ba1cda26fe1d5d81cdb972ab14790342f90a8d": "723344fe3316284d387937a42415df77",
".git/objects/e2/56f3716f927755c6a58dbdc71dd659e8e674a5": "1031c4ce7e1a77a63b42eebc7a5c8d2d",
".git/objects/eb/731c3e1b553e474a8257c214ec6a77712287d3": "c2c4064a677ae21b797968e1615a31f4",
".git/objects/ee/4152373c07542b5fb2abc57c91bf35cecda38f": "89d433598c172d6cb1006c55f2493eee",
".git/objects/fc/b56794cbdc8db493eb1b794f78d6cd59a99348": "72b85a2d0e022ab8ee2d53c640a41544",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/dd1cc55f62bfbd7ff433038fd53d2948d0bd02": "a01855928c5ae9d7b81e3bee6e094bc5",
".git/objects/e3/9ec557a16fde898dcb400caefac6b4ec6c4ec5": "6ff8c6ebcd2e3666fce39cd2881877df",
".git/objects/fe/8cdb66bf684fd819a07c9a5133916be96f444e": "4a93826ea4946440efb970df172e04c8",
".git/objects/fe/d0cb62a751d48d468d091a1cba762493bcfaa0": "13f94b0262828eb19181dc97f4a8ff64",
".git/objects/c8/9bbafc51f05343a7d5463d87e2d6daf5a59d10": "c16e2d734c9c4b686bb35ffcc365d71f",
".git/objects/ed/4c9163d382327b539d5f28038c41cbbbe93e2f": "8e6fcdc7704565f6336d36a58df6087f",
".git/objects/ed/13e979fe8973b73e1e3c7746520a2c5c9318fe": "374ec415263ee13ba9f1182a3e1fccbb",
".git/objects/c1/a49ba5593b81d991fd133a379f7e54cf58b02f": "b09d963300bc77db02b401eea568ca17",
".git/objects/c1/2a6e2d9aac83492ceb1da083979064711d7874": "ac9821f29ea065ada49b9a325412c9e6",
".git/objects/c6/953311aed9a2f4917b071e12e0c1428669c485": "bff80b010638a782e860f663ab11c2b4",
".git/objects/ec/c5736f14d96f282dd3a2c0c94879e3eb0fb9cf": "2023c7177a3c8ac8baea7ff133dbdd11",
".git/objects/20/d5e7e0f1fda03962673f8a6d85d60eb1082cf4": "805856642d5cbbcf5be5ae1e3bd9df81",
".git/objects/18/c23303d87f156aa186a9e83fa0e9fe9ae55169": "65f59d9a30b1f628824331fde7fad451",
".git/objects/27/56f5333847fa01c826ad6ac0a2546385f3605c": "90bf7abb1c5f8e4a49436c593082e8b8",
".git/objects/4b/c59d15905a4bdf7fb1e78b0d1043ba7281f3d6": "7ddfc9eab8f64df58446688681933e58",
".git/objects/11/d4c52ddb44ff4b7e768962b762228d1d81c133": "be43f2d624d42e684a60f81aae395612",
".git/objects/7c/6c55fb3e0bd48b6ac317d97d255fc107f9a75f": "a72f9ca449f6fceaca7307c3085513d1",
".git/objects/42/50b3c0e3e0684fa5d776171c3c0f69085b3db3": "d607d264943579de930d75c5362483a7",
".git/objects/89/120fd623fdd840b0c243a3c3468c55f457512a": "1fc7eafee474a9efc8a86fdd687cbe3a",
".git/objects/45/9946d6738329de31a39d09258ad1a91d1d761d": "e51e3c281189ed759c556560aec1b045",
".git/objects/73/e40965984d5a4f0bd1de65f4b8deb6472488a1": "3e2aa7416ded83c2ac1dee921fdcbc50",
".git/objects/87/b26ccb6a8567ac76f4b59d2ecdef4786230c9c": "9e9f8f55c5953f31735af38899c7c8f9",
".git/objects/80/ac71dab1b46fdbc6465c512aef7084936be3d1": "f5bcc2b9d2b2edd2566c8b1012555983",
".git/objects/74/87e5a5c40f337d4ef527cb39b9fa4371e8e670": "d4d44cfd51507648725301cc4b7a0af8",
".git/objects/74/dc7a1d07264e3769baea6cabe88b4ecf5c2f36": "b089616cea851624459fd8a9366a2e4e",
".git/objects/1a/194e58c124d94220d967333d2b46d04816a702": "de869ec368c72d84a7fbe9be7b1c5cc3",
".git/objects/28/d8f794f94c4119de04b689b3db959d73f4418a": "628823d801a717bb306b2e2908c608c4",
".git/objects/17/bfba0da3f92797a88969bce053f1e7d602e35c": "1fb21ce44816d56ca327a8860d75471a",
".git/objects/17/4f32406f3052c2f6803ddf382d216a4cadaab7": "69a399f1f97e7022c8fb8de21de8a96a",
".git/objects/8f/a5a34f6df54de86f9a9eb0051d304524ef4c3b": "84dd9664e15e10d983eba561f5026072",
".git/objects/7e/b223428b135a9356fda8492fb7bf0318a6bb38": "3f7a0553b3697c221f49c3715b273db6",
".git/objects/7e/e49cc6bd24c39733b83e812978f4de11c3cf3e": "58917a0651451b4c15a275df10055305",
".git/objects/10/18187897cb92175f8f5f7fbc91625931c68367": "92731b4952806452e33199751ab681ad",
".git/objects/4c/b8cf17a2dcb4801ed8761da34bd5fde47c0776": "956eb9217ab3c32ac5936d9671df9056",
".git/objects/21/a59c7c906e0b43843d720166e05c22f9ddb4a7": "a7bbaa917aeae0391c01f93559be6056",
".git/objects/21/d58439447eeae79ea05015f12d12269984cc95": "dd6cb782dd7729326cbd09b36b24bde8",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/43/cc37865b003e93c0d80872742022a2059a47ae": "42413c6fa91f0918ccc54ae0257dd42c",
".git/objects/9f/e10c9d0d5f9607eab338924d67e8259328229c": "f066549374f42f8096ecc6dc847c5a67",
".git/objects/38/208dbd33c658b7d29f5ba2474026fd3eb61be2": "d7052fb0eb93bfe23ea13f319cb913da",
".git/objects/6e/de3b20e4d2624d0252600af3b1289d7a1cc83e": "c6e8812b2b63f479d6ff300819f51bb4",
".git/objects/9a/b133f2ff9f9ae0dfbe3f2b09c704b910ef2859": "fc9353e8c8bbda8eb32a5ebf46f02801",
".git/objects/36/9f1e479b641d42799bd4cf830ce8992b50582f": "333265bcc302397596783f62542402f0",
".git/objects/36/7e825d0d209e52fe0cece6f8155f0c06594328": "fb73b907101874c6dc2280fad9f96be5",
".git/objects/09/d5553a471b6d8710f06e0812a1e49d7a0dc16f": "0a8974a3b6b3a91ac5fdb9ebb3f0f2ba",
".git/objects/5d/330d0ad391603c4835485cf13c1081b7481c5c": "2eb71324652571e948875354148773cb",
".git/objects/31/bb2fbc12e79e469b29f317ffccbdd86d5cca2f": "51547a6bc7df089464a927781a26e4e4",
".git/objects/65/d99a0a9c9b1a7696202fa102c4dbacfca100d6": "417c53704296cac1cc47ced6cc557df6",
".git/objects/62/3561f858a7d73aab57d1a51f8465ab39b17303": "d444a474bf723852dc32e2aa93f0b730",
".git/objects/62/3058147a784e752b37993e0932069a3b3a3fcf": "f51a54a506b7794b72785182e6a8fb60",
".git/objects/54/a70db03981d67d6b09028832bf7bdab657389b": "a20e5ea735300588e64378655884b7ae",
".git/objects/98/9f80fda893c4c40eede0ff8279cfc139663ab4": "e6c7894058ea3d7bea44d93899d567ce",
".git/objects/98/8fc6946b6f107443fccb69e7e553e930e374d7": "5425d0ae9e4599133b9c8e43a6af53d8",
".git/objects/3f/511c2b9e36fcebddb15320adee80a87f2ce4b4": "fc711ea464fbae3a44f5301bc7887c17",
".git/objects/30/5829d6bb39851727b9c712ca30ae4f894b4363": "38f3db39f1bb87b5c62d414cc726d6b8",
".git/objects/37/dc3934dda523f1632ee29f0d1db3d342c335dc": "822782eee197a3b9278f3cd54dde40f9",
".git/objects/08/6bfcf304802e2c0cf6b1f3de737717cc8a8966": "8eed50785b45581c40577ce0cef9f69f",
".git/objects/08/ff5c30e4908aa5f6b51f7091027487b079d7ed": "b751eb20333aeedf2b094c7f180dacdb",
".git/objects/01/6e9e19c88cc3e67e7fa81a901fa7855f553050": "2cf55ca4749a6948a662f7796f2dba35",
".git/objects/06/d134b22685ff370e2991084160c4818f1d3896": "6eaeccbecc700186b00a5ec964372bde",
".git/objects/06/a56b92501afdfcb826ad6c8f3cb30b73eb178f": "bc1b35f69f68fd6bb7181a791425deec",
".git/objects/39/13761102a546b8093907044bb333d9cc1ec573": "2de893c5acba564ee79c7fd9706e146f",
".git/objects/39/a369cc84e9c28717a67b8f5a590c5c210dc391": "7b07b69586e4fef919283409fcb353cb",
".git/objects/39/3b47d2ad36e097b199026323622182936a2f43": "18d2d80bcab65c9586060c1599e002d0",
".git/objects/99/59850f6f29eddf18e810468fe693287b699257": "41c7dea5d8aec762d1cfba8f4988891b",
".git/objects/52/f0bbfdb16a222a5cc12de9e99fec3ca85aecd6": "415ecfcec8ea5dfdddc02bd4c93f4217",
".git/objects/97/47289f00904480011e1e278ee662f2df82113d": "0783ff1ecc0a043be702dc1c013e441d",
".git/objects/0f/68d7f8f43dcd90a07b6e98602ea1c8df0eb54c": "420672fa5f9cd88e1a92305d8f40e739",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/18ad384fedd38f5319720cb6e1e8d4f4b818ff": "210e53a17d3f3a0b36bd6be51ad95e53",
".git/objects/64/8f9d27c341129fa30188e3205388b97bb77d9a": "8deeeb6bc6a6bbf7d922cad3701eda84",
".git/objects/a7/207c9381ff0d6d741edac943a2658f85a9929a": "4c3f878252a1f2f7fad686b9a750812b",
".git/objects/b1/d6746f0ca7962a4c6f657b3b1a5b3b5bd85edf": "8a54c0ac4928f6fc8ec359a25cdfae5f",
".git/objects/dc/226c2a726527d2885457b31c9c994dae5b2189": "453da2ef870d1c66cbfce9b51fd2b6c4",
".git/objects/dc/75e2d1faa058771c379f428a81904dccd92d0b": "a0ef4a817dd576c6434e6cf237ccdd8b",
".git/objects/dc/a329a519eb8f4212b7031c8e89c5f5ce1518e3": "a702e7e8fe8490a83ad087b90769fbd5",
".git/objects/d2/6690c7ddc96a6ea6fb2314db5006b271a55ef6": "653aced0fab9df3f9c6cde8835d1178e",
".git/objects/aa/3c0fb573d9d1ec3907005b651cabd81274cae8": "a9e7d98043f8fe11f8ab009233b4734e",
".git/objects/aa/0f117ddc94e38aa1e16d01825a4596e6e0a9f1": "db8021699363cf98d5043061f96f9197",
".git/objects/db/d8be011c65f2adcc8ec13468951d46bb5d65f4": "542247d289c777a976fe616c9d0ded62",
".git/objects/db/ed9469c0672383d269557f9a51f3155b4517b8": "2a4516310a362299bc113dffca19f888",
".git/objects/a8/dd76c342553bf6961b09ebdfca600bb632699b": "4be91240e54b7ecfd32fade5a51988ba",
".git/objects/de/49ad3dda12b09631107970a3377112d4006e52": "f43114dd2f9a952e489d2fe27379ae7b",
".git/objects/a6/7880d69b63c244e5f0ea2cb27ac1704ba6bd79": "50ff616745da23d7b5ccea453bfc6f31",
".git/objects/b9/2cff46ba4d474754a6c0a6e9bb426cdc9a5f1a": "b5a30b85aeed15def33bc69afa53df96",
".git/objects/ef/f43104c89f431363b1ae09aff0dc03f38d3173": "067fdab9dbe49157170b4f3d19ec1057",
".git/objects/cd/18ebf6049d20a30039b233769f9eab3934fa89": "48f1476ee6b9561177d3efb630c2ef43",
".git/objects/cc/015f3a084bd10a24d7412867bc3a8d00430376": "ce227c0209618608b054a9ef0949fcfa",
".git/objects/e8/1602584c16fc72657711e4fe1876c6719919dd": "b549d246585c948ea2397ee5f31b84d2",
".git/objects/e8/7d1cf3840d3479e2d0b3535bc1b493739ef4ef": "4982b71b8898e060a9c90d29f6a3fdb2",
".git/objects/fa/f7146a03475fa652a211dac36bfb56e843a61b": "a98d2b594dd241321df5d237e543ba0c",
".git/objects/fa/df6f53ceda35c69c516a637ede2795c416e9c1": "6a07ef09799f5f7d290f92ad85e6c658",
".git/objects/c5/3bf2119b1a50c09f75f13be52879d9c781e6c2": "3bcf546d3016f85c768e56afa42a6ee4",
".git/objects/c2/7b4c416f9ea74ba8525ccb14465dcd546071a6": "a7632b668928a7ff47e1e77756d7b3be",
".git/objects/c2/a8b567d0b4e361396686a407ce65145f021586": "b0818f88a4b3cc2cd321e619f40baf4d",
".git/objects/e7/5c3c92e1e8bc4c1fe0c994b614e7975353dd47": "a6e2cae04f387e4de36b9cb257e92d67",
".git/objects/cb/e5dc491f9f8dd5ea39b338bb2e014b2952df26": "4712a533bba3164195bea2bc42472a6f",
".git/objects/ce/32f5e35569d0aa1b2a5c5702a5de8d9475477b": "4de93ba3bfe49c67d033d9451f030f24",
".git/objects/46/fbbdeaea5890586cbf83751b7522e93ce07f9c": "9033916b34b5756aafe582f4c6dd5a16",
".git/objects/79/c8e51ec04f3286922bc4e2644711efa5f2b473": "f864a57e09104e4228875b40b7b8d62b",
".git/objects/2d/2ba0bd041884f2c39c7ae910e462ea19ddacfc": "4886daf5a49cf185f76aa8412b333e20",
".git/objects/41/ebf4265d3ad3f03e490c09560b93f06b44ac23": "fb71a339ce3620c097b731689e049b35",
".git/objects/83/2e8841f543fc7ceb35d95bfe5cb2aba1d95183": "dcba63da075047cedafde6f8f6f38b48",
".git/objects/1b/957a6e3362f5b1e3a754fde4b0ae34c0ecff82": "c635143ee9f4a662f37f7e1f37571892",
".git/objects/48/5da8ce9b1a021fe5c7286851b68627f4262521": "95fac8536b879185ea143921d6fb0978",
".git/objects/70/b2e222ac5ca052e6353a97a734edc3c9fd8048": "4659cfe325049cee2cc83ee1be1d3d48",
".git/objects/70/5ff8d93379917d8b8dbda44000056bab5f6a73": "f8fc981b9c627e7568bb9459764da77b",
".git/objects/70/70c6bc6a31898995e566b7f85206d6b6e25931": "bfd8ee24a841abb0aa54b494e5851be7",
".git/objects/70/0426e8ced6683c37bd24154c977fe138b655eb": "52827c53a6d2a522bbb9c2d7bb512870",
".git/objects/1e/6e3452093fd99f228807cd92d41b9a0b0f2e1d": "d2c97e592e7770025b4c8dbcc697589d",
".git/objects/84/42929bd857e2d61e0918e45114e1b083f4c42d": "f491c99826df5648525903f15f598c57",
".git/objects/24/e16289cf62cda400e50da2cdf4e3b89fe09950": "ac7c021fd632c6d85b866f54be2d19c8",
".git/objects/24/13d7fb063be4ab0d23154a3e6eb5ca8b2dc3a1": "b1d261f70b22b7032b6c89fde7c4bdec",
".git/objects/4f/f01f0bf8233a512e92ea05e4122bb4a7562094": "8d804da1b7d0f975f9fad06eac70c9fa",
".git/objects/15/8548824f43c3608d2fe35d819dd6eaa02e3a9e": "8c9460730490d9d0e465ddf61ddce72c",
".git/objects/15/4bb8b5335e498f6034390ffc22c2f000f2b71d": "06217d8905bd0fde7dba8d5c6081242a",
".git/objects/15/2d3d3543b90785f9c51c0fc472805f3f5457d1": "82b5f18d5b5e6b20c5eedcad3dfd41d3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/433d29946c88e8bab12f4e35a8e8c4ab120aa7": "308f3bd2a9db0320aaedba0ab9c316c4",
".git/objects/8c/817a350fffd9809775b50570336e1a60e19af6": "14e2b298b1312b03afe9badf453cb7ed",
".git/objects/1d/a894a9a886802181c9b3b51ba6ac6f5243a632": "2cf82430789cacc0af42cd783e19832b",
".git/objects/40/b4bf1a5b4b7456b2cfbca7aee55f2f85c1b7d7": "27afed4801e4d7482ee7954084b188e2",
".git/objects/2e/1382f3d80ee5ef69ede6bd8ec01e78e67e8ea2": "3a9d2dbe387a00984201c656ef69690a",
".git/objects/2b/84a4a612ed8f3b1c3dd40ab74ee659ab74df59": "1f3d4ec6a1f6da865a29f8d7b9914483",
".git/objects/2b/d803afe5c18d15f9f8f9c3c0835301e3a20f7a": "09e75f21400a65b25dd2edda0cdb2d5f",
".git/objects/47/bfddd1c913c2c8d6bfcf48ac9d1c4967db6c8e": "323233ce86ecfc3dcb23174c263b49f5",
".git/objects/47/4693eea413cfaf168b9f62cea431191d977c40": "68426d6e7184f0ead56c52003c5f8625",
".git/objects/47/5d41d3cfa8cfeba9e869c844f864f3f043d06e": "7b9a8f93febaac1988269e6247609ad7",
".git/objects/13/9c58b92d71983d684b8ef8f52a3ebd588cce03": "e3172ab69396a9f6fd575760f55177e8",
".git/objects/7a/e5f338b515550f0c0006cf99e6d8fb170976ed": "553612cc30de5ff82f4d99b7ca6ee000",
".git/objects/8e/ff79abdf1978482c5f7546ad8966969a5afa38": "6632559ff9cdbe24e5cc22a67ba6c407",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a43f704921bb95c5025f3a163a6a18c5",
".git/logs/refs/heads/master": "a43f704921bb95c5025f3a163a6a18c5",
".git/logs/refs/remotes/origin/master": "b301de228b57cbefeaab7280dc5fda62",
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
".git/refs/heads/master": "c11462bcba8c8333c05e0cbaa7ee9d9b",
".git/refs/tags/0.9.0": "ffaad4525b3781dc6757c780f988bd47",
".git/refs/remotes/origin/master": "635a7fb2247ce20a448f75157c893e92",
".git/index": "f20c6d26c9f0351efcafbb3d2c1fa38a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "ac1a8a501ab378319ec2fee335e48695",
".git/FETCH_HEAD": "face4a4118abc537eb69f8f114f12e59",
".git/sourcetreeconfig": "6136f5a7b126a249ee502d276c24dfef",
"assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/images/sample_home.jpg": "5cf151d43f3e5dfafe9967651963e2ff",
"assets/images/juhye_rect.jpg": "05611fcaea9ce54012039b61813f2b55",
"assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/images/myungjin_rect.jpg": "b3f92746155b693a23db42fb046083f2",
"assets/images/yours_map.jpg": "b412805cb572ebd5ffdc7428fd631a65",
"assets/images/hayoung_circle.jpg": "2c00d7e0f65deb17793d1e4f4f0b7f2f",
"assets/images/service_area2.jpg": "0617d451eaeb6662db3507699cc4dd5d",
"assets/images/service_area3.jpg": "7cb853ca0af76c788e7ab436bd4c23c6",
"assets/images/juhye_circle.jpg": "0f840ddf0dd77435068fa0e74cc3f984",
"assets/images/service_area1.jpg": "5cb169512c7fee71f8b2802f8174f46c",
"assets/images/hayoung_rect.jpg": "6bc6ed76432bb98548dcabb4552c509e",
"assets/images/myungjin_circle.jpg": "308f787bf7d3cb76575b580cc145045f",
"assets/web/assets/images/icon.png": "c4e1a90ecd1fa94201da29d86b8d5c7e",
"assets/web/assets/images/sample_home.jpg": "5cf151d43f3e5dfafe9967651963e2ff",
"assets/web/assets/images/juhye_rect.jpg": "05611fcaea9ce54012039b61813f2b55",
"assets/web/assets/images/profile_hayoung.jpg": "59dd436e0ffe73bfc86a5054cf7f8d13",
"assets/web/assets/images/myungjin_rect.jpg": "b3f92746155b693a23db42fb046083f2",
"assets/web/assets/images/yours_map.jpg": "b412805cb572ebd5ffdc7428fd631a65",
"assets/web/assets/images/hayoung_circle.jpg": "2c00d7e0f65deb17793d1e4f4f0b7f2f",
"assets/web/assets/images/service_area2.jpg": "0617d451eaeb6662db3507699cc4dd5d",
"assets/web/assets/images/service_area3.jpg": "7cb853ca0af76c788e7ab436bd4c23c6",
"assets/web/assets/images/juhye_circle.jpg": "0f840ddf0dd77435068fa0e74cc3f984",
"assets/web/assets/images/service_area1.jpg": "5cb169512c7fee71f8b2802f8174f46c",
"assets/web/assets/images/hayoung_rect.jpg": "6bc6ed76432bb98548dcabb4552c509e",
"assets/web/assets/images/myungjin_circle.jpg": "308f787bf7d3cb76575b580cc145045f",
"assets/web/assets/fonts/Cormorant-Light.otf": "8623b4e7e03d8aeb0cd91f5739ea2f7e",
"assets/web/assets/fonts/Cormorant-Bold.otf": "7ee1d5b702784f585e1570d5485e24a7",
"assets/AssetManifest.json": "6b9c310ec31f897ddf82caffb9174127",
"assets/NOTICES": "e19844657daec549c9ec00f896811eca",
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
  // If the URL is not the RESOURCE list, skip the cache.
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
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
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
