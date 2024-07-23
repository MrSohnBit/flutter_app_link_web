'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8833bf75a3c54f38944e60fa31f80634",
".git/config": "418dc096186267da300f96dac72dad8f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "37fb1476a1f681afb843f83ea8b46f87",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
<<<<<<< HEAD
".git/index": "48570108fe494c92b36380edba0b5d27",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "124d4576b75086760a90d6a8373469ab",
".git/logs/refs/heads/main": "43b18c4ef7285f56b1edd20454813920",
".git/logs/refs/remotes/origin/main": "0be3891467620116474f0c90d9cb32db",
".git/logs/refs/remotes/origin/master": "0ad072b15879d551ada05923d782ca11",
=======
".git/index": "fe59945a927863d9b4f5e2c1f479cf13",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e88aadc4ad7c3df5dc3e80dd36050f74",
".git/logs/refs/heads/main": "23f286792856f10c9efa6286d34afdb9",
".git/logs/refs/heads/master": "f6b9edea151b3837f4434e1abae09ed2",
".git/logs/refs/remotes/origin/main": "ba031ec0d409fced114463288e723bc0",
".git/logs/refs/remotes/origin/master": "8eae3e142b645cb469876c9c15eaa50a",
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
".git/objects/00/5a3a05c85d0fd9f7794d6bfaa8930b97bf85cc": "544fa7a747188480a0d38c9429280b78",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/adc3dd48ebeb9f3d09f1a33d1f00b66f21f816": "7ba01fd01c4587314494b13c5200ee74",
".git/objects/0b/9461521045991776085ec76045ba506b4135a9": "ad65daa95a4d1a34a607353467d1cc9a",
".git/objects/0f/61be80c5a6416d93edf83e6aabad48b8e75610": "58ca57cdb94f2641ce6cf6b949758dee",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/f1f284e787a033c3248e57603f87731220bcbf": "b7fd602b5c560e7b458f90edad8a9cfd",
".git/objects/15/b10c1213673ec0cce74e0c6596797256c8247b": "07b27124d73176bd65b345fa632ea832",
".git/objects/18/5705b7679606f0bd00ad0710845804b4daa820": "83754430337e9056ad16f02851d381fc",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/c9947f8367d6b16a5f348d2ea22f25f2fbc952": "5b3e26a85762b73d73543afe062e72a9",
".git/objects/1b/2d65bcf44929b390dc0c5a1ad029ea91f89f3d": "306b04153052a70cb49e706dd63fe6b9",
".git/objects/1b/ba7b87877bfcb19589de28e923c70cdcc55a45": "fdfd1931e52ce6450c0c7b949bc0215f",
".git/objects/1c/9b74bcc6cd7680a76cedd5b7abce94eb873ed9": "9b51fdece54c93f37346e5e16dd7c5ee",
".git/objects/1e/33b921ea1c9ad220b27cf6275ae3bf9115b01f": "d1206f053c477db6abf76a78bae43918",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/76dd7fbf8a645a05e663f2f4d41607c2bea560": "732ccf4793dd8ba6c694c294e55e396a",
".git/objects/24/c69c9cef01fbb0eef82e519567bf373e222d2e": "479cd0e32f7cd3d6f1c593e097643230",
".git/objects/25/3862de61af4ce8b4569be1b67bfc27e656bf35": "c37f0a2cda130e1721a6e30fd5f49dbd",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/b719ca4fda80f79523895ef527c0546df8bc90": "d91c1a0a9877166ee280b5b05617ae02",
".git/objects/26/b75f86f89b25c05b51e68a975957d54abe4bfe": "be730bf7c9a4ce241a8d9622c795aaa8",
".git/objects/27/bd9e7c572a58ad911e1a77acb313551f49b38d": "b24c337f2b73df5156f944668780feb0",
".git/objects/28/10e10aa8c5b1c0c0b645945664a42713ccfe77": "4149c79797910b3468ff18514363540d",
".git/objects/29/6eef8c509f53a87c454a8299bb17cae6f44e26": "2a50094d41fb34471b46d3e4ad6713a2",
".git/objects/2c/944b2cc301f6d9593aa376a7c73e52c1734ae7": "0b218b4c8df14f347184e8e760dfc2f6",
".git/objects/2d/adfee13d524e7caa7a8ebccdc8402545f61ea1": "ca639b95044ba19cfc21846577fa3483",
".git/objects/30/f1b5e355af1b7b76833518784704b001600911": "822760d2767e5da9531be30ceb466bf1",
".git/objects/33/10df149a70a3903fa517297d5633b57ea0d05e": "c8285944c65e08fc02b5fc31c4b7609c",
".git/objects/35/754435e6cd958f1cb7b53d2ae7bbf65476a2cd": "58e6a50ad472289d8e752cbe695b87e8",
".git/objects/37/ae79789387c01f2718543fa3de496407b8f189": "1697bbdd6d27746083e4473c0a23cd51",
".git/objects/37/c3ab4688d7fa6325af58811496f40e890dcc62": "a155df6e846a03490c742f186ec9967d",
<<<<<<< HEAD
=======
".git/objects/38/854f00c1b9a5ff70366711125335fc42888dc9": "6e980cb1b2e494e0fa3a7ac6775dab3a",
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
".git/objects/38/db4e96158087e103c3ce13d7b5361537b1e27d": "56470d27753ee799d9b4a3ebd3e4a40f",
".git/objects/38/e0c23234cd0e759f72c75dba31cf1daf8aecca": "0f1caff755de7b3fee7c9c0c59b6a1f8",
".git/objects/3a/7941bf7bdff08c212d355532161987bc645e2f": "d202f28a4bd8ce52970a94bf7afedee9",
".git/objects/3b/abb9dbda5b5ec2e911e0e056187a03b58fb54d": "60c03ba605f1e64cf5f24c7ce39357eb",
".git/objects/3b/c4ae73dbb0b41351eef436988afd20042f11a7": "24a6be0146caa0c1c7b579d2843d61e9",
".git/objects/3f/9061f68e2ab027a833bf03ed03cb9b8dc199f1": "7319208445095ee21b39c93d5a8f7af3",
".git/objects/3f/a0ce71225ac94232d0902bfd95104a6725b567": "06564f5ee2483f17dd14cedbeaab2f1d",
".git/objects/42/ae7015d667fe9304630aedaa6ea69039874b14": "17f55ea4e77ca47aaa4aa921a27d6472",
".git/objects/43/6faac1908ca6d1fac2df6d2a1fc68168317294": "7778c047944c6f04aa79e1fa3e43cbc2",
<<<<<<< HEAD
=======
".git/objects/43/9e747d9ee6f660864ab1076ea0906da5045a23": "cb48d97f8dfb095882320d494dc968a5",
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/f18cf3b2e51305efd4ab56afcdc5e088cdd1e2": "c4b99e707be9bb7a75b567b0e70bedba",
".git/objects/49/4ce6e5af327c05f93ddc9788c9315e3e935658": "669a70174792ee774498f4b4a51b6465",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4e/efa804b5a790a4ec0201e23fc86dfdb3ec55b9": "5e215ea2ae09e196f7f552fd0d005ef2",
".git/objects/52/92fa24f85bbb7eba8dd7f3e29cf3f0b5c9796f": "47b1981182177ec1f14dad9c108d5762",
".git/objects/53/4606ca8cd58068c3d9e477c37f37e0142c74dd": "3e7ffa4395c889904acf882138449b6d",
".git/objects/54/99ec35c356b2688773888a8ad56ffa1e6c1186": "2e2599e65b0c7a16056696bb17ce43c1",
".git/objects/55/5ba9371389ca4661dbbb2dcc2256b46c3cd250": "aa6b2aca43c6219f97ca660c27b36540",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/ab3ebff913f1f762219e835faf63e1a087ea65": "9a0e01fd2275ee9fbde3338584c07264",
".git/objects/5d/c2db58e12c4db814874328ccf2799ad1168522": "c12e113560094204e63589bc12937727",
".git/objects/5d/cd8be8ffa83f801e3bb9b2ad24c0c72ce9b24d": "84f68a27d5665dc861fd662f6b2aca74",
".git/objects/5f/aa2fcf0001c77d9f2a0c9986b603ffdfad9cb7": "fee9517564bf04fe7d35336f01550637",
".git/objects/5f/f554dc6cd4da2d4f08d86959938d18311c6f9a": "1e1a9bbc06016eabc3edfe055fef9d9d",
".git/objects/61/3570d040d8a75b5dce1b386777a1be8ed15402": "9f4ab6f4047b50acf751bd4e34f310a5",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/aba6d12f1904838965f10fff3e6c998beefdaf": "9d85c6c2c0b0e5ba7aa05c45657e4d23",
".git/objects/66/5df616bc3ce8ab31225484fbaeea62d86f2cd0": "a4308a27e72bb6fb3717907fbf5ce63d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/dbd4101a2c71fe0949d7d98695e2f97f0c9af4": "b8638806eeda5b1dfbd09fa8848b9d14",
".git/objects/6e/6abd9d979727249dc3743f4d095ed70a29ab80": "400b4142cba9a2957db850aaf40b6db9",
".git/objects/6f/ad918c3df8f22ac59c2fc3508018301f205d71": "a6bb26edc5fa13995afcdf5efdfa5f0f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/6e3cb8d7401bedb62c885a5572df84e85ff352": "e1ef7fc80b5b4692c4e5afaea32c220e",
".git/objects/71/713613a03f4e488b8907cd220e2cc1e04f728f": "2e639ae9d4571657d4bbb0ecc9f8a5af",
".git/objects/71/a30fd317936feb6f850d5f455b344a99ff4734": "e7bf8050a75d08c4c25deb6d6d665388",
".git/objects/72/23c8526e6f0005134a2fec02afb0cc99571500": "2826deb59d2584d637c4c9a47524dd95",
".git/objects/72/4b57fecd262da7b222921875077e51ab510676": "aea1f6f9f9588a8b20211c3496dfdeb3",
".git/objects/75/885388d70a053f6fcbfe9f4fd343167f53b0f6": "fa2eab9af7f6fdfa4182c737351c1669",
".git/objects/77/2f0ef801369a6b1bc9f55412962bf04e196ac9": "0895aa59efac8abd8b47ff3c11206ce7",
".git/objects/7a/ec8311553b99db719030f88bf8861da695b256": "992abf115fd2c02eb66efca372c1f607",
".git/objects/7b/18b4d855bbc31af36eb28f75f466a91fa67a1d": "e70e39714cfa918a29cc795559a7e146",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/8679e503ca529b62559e94f7a4372f577ee605": "46506425fb7bc629c638aa6bbf483cc7",
".git/objects/7d/8756a64f50b47d3da44617f4074767d50de4c0": "9a4a35861f95863339b767d2072b41e4",
".git/objects/7d/c13d669579b7ab5bf6c98f1682f12697f812de": "b242230420b7688946263f6eebfdf01a",
".git/objects/7d/e55f91e2b7760a27d8ebfa3d713dd3ed89ff19": "82b5957ff2055e75ca109eb7438262b6",
".git/objects/7e/a29588b1bd01d8d0315b3a75c60bbe3768f268": "e2865ab1eef557ddee03ef1008931168",
".git/objects/7f/f765ed6fe83b4a401ae62517504d8dd75ecaf7": "de1b51b3bdbe2f78e76288abeba88dc6",
".git/objects/80/80929f289464b78dedbf40a46fa5d4afccf933": "e8e83f39c3544f8b66c101a95c75ebbf",
".git/objects/81/7182c4dc1f9471f4b44332b2aa604ce3e07800": "4d9e5258adb8f576c0669559bb260e3e",
".git/objects/83/788000784afdaafd2e5e821306a212343161e8": "9449f7c33c53dcf2ff67d003e28f76f0",
".git/objects/83/7b6e1e03bd48ffaa787529018abd4bbbc8e7e3": "6ef4da4a098ac872d17b775838323ecb",
".git/objects/85/0d6585425a47f674d7b8a0b9a68bd9b855ba04": "01db93ca047008b4ec3d4c1d21030d78",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/9bfc1dac7be80ccf0dfaef3e88b9a49b8f0427": "0c87a04ae72834038ade9a27a6eca5dc",
".git/objects/88/7b5918ccaa0a5c52d530ed06d3276871dd9f6f": "a18d4bac52a6d58ceca7ef21cfaa34d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f3936d67cbfb467c276337c2ad1b785aa93f53": "3e061a15e2e006a06a872260c0b83b95",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/e471107452e1d83810a3dd05372b77b2687325": "263a60d18a7560bde3d207a03d86627b",
".git/objects/90/f606330db00a9307d1c919db2d6e9cc8bb733e": "f5085cfe1c9645487afbb09330f19d38",
".git/objects/93/3e055631f21d544f52c383e05891c46de5b073": "3aa690d1bb0b2583e51c47cc98f43903",
".git/objects/94/bb0f7b03439faa53f2705b6365e5a014874db1": "0d9b8e64ba00c248090899115db5c4d9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/492e7626a7971b5100e14e70202b53d5d14115": "a4b365f5c81fe08f80476522f4ec870a",
".git/objects/97/3cb530b11a1397fab6f81c66e9d687c363a977": "8ecd0bc5a66a56596e7f444827cebc9c",
".git/objects/9b/99c5a2d60ea6ca60afd07a935ecb3b9127618b": "fbd63893fed5d726e6ce88b1c8435d1a",
".git/objects/9f/6815e901307c1681cf33d5993098795ca5bd08": "e21decb8a8da8e8b1723a6463e56f8b1",
".git/objects/a5/aae28d3b8740d2edbd36d21682f83c24bbfdc9": "21247d3567b06d00c140bbed7171b6ef",
".git/objects/a8/cf1e9d4ac2009883be423aa989c698ebf5f6d8": "6243ad39e50c2e24f9d230f7626aca7a",
".git/objects/b2/eeb4c527c286ff097aea9f0a64d7e8ab32efc8": "f526d92edacbc4df5d2743522d6ce44a",
".git/objects/b3/ad36a16d98909fd9d321ec71033efd1344d88b": "64a94ec1c8a129cc93d80124065e2920",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/13030da1fe936a25a5bf72bba13696d6e6d95b": "0b05e46d76896eba9d494779e0ecdbab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9b421aaaae02c7e7161c91a5c3b62543024282": "14d9bf3a5720e76cfad6d257b516967b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/156904383f835b854c89509a239fbc73d0344d": "f8abe8606ae7b86545882ca1a41fc38a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/97797194e53589f12abcebc9398837a172f59e": "2c5b0236a6e8026200a6c80ded158454",
".git/objects/bd/b8c4d4c5d6eba46f43ffd9b9472c92f2e2eda1": "24fa2e8919d698e7e7c37f48d78821cc",
".git/objects/be/231703a62f28d6d5cd21481e0f23cb41f3cb07": "0ec3120355fdb02da5ea114c7c946a21",
".git/objects/bf/b493de31ba2135e93ef7e2e003cd97e7dd19b9": "bd96e3aaadd6969bd1fcbf31087833ea",
".git/objects/c1/71726963fcac0d05e04dcfcb6fccf110a5dca9": "872a1772aec5d7931f6ac9bf0ed98d2f",
".git/objects/c3/7e903b12ae9fb9629320804c62763436ece182": "b460c3bde12ef43028d0c5554a24a87f",
<<<<<<< HEAD
".git/objects/c4/0385789af89622f2465d4fbcc1962e9bc08299": "a8a19d16e01de3a419e5ab5a16db8043",
=======
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
".git/objects/c7/6ddcf14bb3bc9d3f1e5fbc7959acbd221c7f10": "a895f16ff8bd2577a92691deca9d77a7",
".git/objects/c7/941d2dce2ed3f3509e5cc5e1b14497439940a7": "30580483c8048790265ddb1639949ebe",
".git/objects/c8/32e13939f4b73927d76f473fda672b9bdb69ca": "c29894dd484feba5580725264af3cbcd",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/eaf680abe6f4975defb8554b4bfb3b46c44aa1": "8202ebc2b99bcf7b4d150b4c12f5e073",
".git/objects/cf/d3c2f2b499fdb88188e3a31e5031fc32bad127": "85fc4ce8d13b6949da86d5bd275950ca",
".git/objects/d0/90c3e4199c1c1b5aab269851884f4f6f36156a": "963bf286da7985a4c0e6a5b59cd31101",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
<<<<<<< HEAD
".git/objects/d1/303627bc7a85bc56a360aac2271854b49e0c1f": "7487aa39a4e9ef5d889250ad48c919d3",
".git/objects/d1/78d8b19fb6ddab2ec43fbbcf5bed7ce36523b5": "1b751ad35a2dc233953fbab4f0576335",
".git/objects/d2/2510358f40a2146ec0381311fc7623eff78a0a": "14b85cfd4529de154b12e521deb756b3",
=======
".git/objects/d1/78d8b19fb6ddab2ec43fbbcf5bed7ce36523b5": "1b751ad35a2dc233953fbab4f0576335",
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
".git/objects/d4/0696ed4ae8df29c2add11e4f7b0ac5bd2ca0d8": "d6cf8c175c652b53cdf18c03d5f34ba2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/620731926d90b1c80e69a0e0172af78ad02672": "fb3c64008f733ebd77579ccf6c6629bd",
".git/objects/dc/680295e2f9135176593b09ec3c929c6bcd1c54": "1049ce7a0e8decce4d13d8de86b1d294",
".git/objects/de/2f605c9d04e7868a82dee9b074bdcc7ee1e8c8": "cf0d162312459b360ad061eb9f27479a",
".git/objects/de/92f0622cc48f316952c52cd6c0b20017a2eb57": "272ea130933515c0faefac89184c5038",
".git/objects/de/d70939afdb6540913138fb79a0334f26f79654": "e3731499d9e8d9976b1d2518b6dcaa00",
".git/objects/e0/84b8eb7ec62d0cd174515a53e8b011b1e5f74c": "9cfe536c0fd4189c223c9b5602cf0954",
".git/objects/e5/e88197813ac11a256b61f015bc2416a6c4a022": "e4c05f2784205bfd50827c424ec5ba23",
".git/objects/e6/c1045a9f9b9ee97a717badf71ddcb3d0afff66": "3dc949a9b0db76351dde9f2b0815c60d",
".git/objects/e7/e248c54338848bad897e699fed8fcdef67f1e8": "ce1e973b639ea1fd178e5de420aecac6",
".git/objects/e8/7a61daff1f435dff50afaf73b0d084e97c68d2": "69530a61e1c8820e4158e0f8c1668e9c",
".git/objects/e8/9a437158178d1cffc0f163a92f247cbf8ccb6d": "c81ed9603214222b29a2037e6606ad7c",
".git/objects/e8/b9566e5c546284a3359e2fbd14fb1ab06d68db": "b16baa6d323553b9b531ff54e8acc19d",
".git/objects/e9/58489ace203c0c243f0a2d12002cbfbda84307": "fd42bee5072d754e3c49a0ac5b5f90bf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5c45b4a0a58f6b14df4dc2b244dec08e4aab6f": "fc0cec9a6bc836f68a3a6fdc94bf1558",
".git/objects/ec/d67b0d97f8f4915a759dd955db9d74c9099e73": "01dbd61dc0abed3bfc810cd7c6d67f13",
".git/objects/ec/e310eddd3abf29842c7d32b47a159f3c528007": "d33b9578deb7f9038085e244af4909a4",
".git/objects/ed/7ded488537cf8f7b670e8b3a661ea1dc41e6e2": "253cd266cbe0164ae22ed00504af6660",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/2bd059cca732201f9cd047220b3f74d074e5e8": "bb990a8767416da39690d35b99512a2c",
".git/objects/f5/92b9da643e45828d248f1b4965e145b6f2202f": "1f512e26ec90cceb808a47d17ab14454",
<<<<<<< HEAD
".git/objects/f6/d1de8dc8465fa2e78de730d5a43af59d5fd31b": "0b99affa6b1f5d4efbfd51b38ff8da05",
".git/objects/f8/6371db15ec9ee69786cd19499d2a4d2cc21da0": "5a5a0d7fc56f49fe6d251c97cb0c3e2f",
".git/objects/fa/ebeb486aaaebaaa0ae0086b7afa0715ad02ff4": "e4af74505bad46df9e92e829f5cfe2ea",
".git/objects/fc/ddcdda3a211eb98344953d3262a7094350036d": "2840899390f744a968cdc3b97b2d961a",
".git/objects/fd/9827729beef6d588336a37dcc4d1a958eb0c24": "3d0fde6081dea1339ebfc15b083444e5",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/ORIG_HEAD": "07a433d155999459629e2b2a9c12b4e9",
".git/refs/heads/main": "3a46f34017b7c7a633edbfa159810b01",
".git/refs/remotes/origin/main": "3a46f34017b7c7a633edbfa159810b01",
=======
".git/objects/pack/pack-cc588f874627379cc89e3a239aac0f308cc65703.idx": "2b9f7247cb60d5c4edbf4bfe1cc6863f",
".git/objects/pack/pack-cc588f874627379cc89e3a239aac0f308cc65703.pack": "0871f704ea20cdf498aa1cb721559216",
".git/objects/pack/pack-cc588f874627379cc89e3a239aac0f308cc65703.rev": "809d48be6e99a1b4b1b2d851a0a254c2",
".git/ORIG_HEAD": "344d1cdc360940fbe88fd2a15fc0fcd9",
".git/refs/heads/main": "344d1cdc360940fbe88fd2a15fc0fcd9",
".git/refs/heads/master": "5e473c969a61d906e1354f5149f06f6c",
".git/refs/remotes/origin/main": "344d1cdc360940fbe88fd2a15fc0fcd9",
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
".git/refs/remotes/origin/master": "5e473c969a61d906e1354f5149f06f6c",
".idea/dbnavigator.xml": "e8a6272f743731a22901a6dfa8bf89a2",
".idea/git_toolbox_blame.xml": "c06710f59256b34263fdec8a7a0843b8",
".idea/git_toolbox_prj.xml": "c1d4e80c01c6e1686f52f749b1e52982",
".idea/misc.xml": "fb08e1193f9d4cf3ea6de67632fae509",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/other.xml": "2eae2a5b0af88827eaaddc32de34f6bd",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "002a4bd99b8722cfd94059ee6b5a364b",
".idea/workspace.xml": "2628122cd73a2e06405418c5a6d3ae5a",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "5953397b7aa3e0f26340e9882c300872",
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
<<<<<<< HEAD
"flutter_bootstrap.js": "64e767da7c9b89655d2cdb27524fd20c",
=======
"flutter_bootstrap.js": "3810e48990e1db40521b62938c7443fc",
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24a212d97af609cb259c3473d4d0be65",
"/": "24a212d97af609cb259c3473d4d0be65",
<<<<<<< HEAD
"main.dart.js": "f308dc587d9bc8aeaf735cf452d862e7",
=======
"main.dart.js": "9f4cd9a7e44f92e43b210c0e81f00d7a",
>>>>>>> 5a9a64362c72c5a8a481d23d7637d1013d254c66
"manifest.json": "1334a48c008ace3728e4f9c1a5daaee8",
"version.json": "e6ed361d07de72aa2a9abc227f807fcf"};
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
