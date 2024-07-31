'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8833bf75a3c54f38944e60fa31f80634",
".git/config": "bb33265fa7b4d6cfc7048e49479938d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c033a08bbe0081be95675907b66ce95f",
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
".git/index": "8dea4b804059b289f97a8633ec7548da",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "277c72006d4d9039eca5e308f224ac47",
".git/logs/refs/heads/main": "743f89a2414daa75a60099547d5557be",
".git/logs/refs/remotes/origin/main": "046044328ead5bf68849c009daf9fe57",
".git/logs/refs/remotes/origin/master": "0ad072b15879d551ada05923d782ca11",
".git/objects/00/5a3a05c85d0fd9f7794d6bfaa8930b97bf85cc": "544fa7a747188480a0d38c9429280b78",
".git/objects/00/e143fb584b1353b6a90c90e286fd1d4b02d350": "3be2cd0d67f83004ea7b7aa52959af66",
".git/objects/01/d79e0421f47c7a593375e5b86002a1f8e9fb58": "aa9aa7d64f103b6aa01143d2be97dfd9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/adc3dd48ebeb9f3d09f1a33d1f00b66f21f816": "7ba01fd01c4587314494b13c5200ee74",
".git/objects/05/bd1f681b15970e0e92e072e004dc93fd73dc86": "e7ba5007ec916ded1cda3bc95e21469b",
".git/objects/0b/6a5d743c878b41cbdc85c38139d69e4d2e391f": "7ba07b3e0dc014a8e947b17054e6ac02",
".git/objects/0b/9461521045991776085ec76045ba506b4135a9": "ad65daa95a4d1a34a607353467d1cc9a",
".git/objects/0d/0c98fa5975f67f7a1544c6681ea1f184a4d366": "ae17f8b5c722346e1042a2923a58213e",
".git/objects/0f/61be80c5a6416d93edf83e6aabad48b8e75610": "58ca57cdb94f2641ce6cf6b949758dee",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/f1f284e787a033c3248e57603f87731220bcbf": "b7fd602b5c560e7b458f90edad8a9cfd",
".git/objects/11/6a2009179310d35ed1166a79ce7b0e3c409b81": "b615f6d5a7f1d689cdbb76b3583e264a",
".git/objects/15/1aefed9d95d6c5b5f499430563c1df2659c8d8": "fd268cf8e10416cb50e2fa977571679a",
".git/objects/15/97beb3ae7cd39605a0f6c913d74879bc88a04c": "11bba05e3fc549fab3c50adcb2e1f3a0",
".git/objects/15/b10c1213673ec0cce74e0c6596797256c8247b": "07b27124d73176bd65b345fa632ea832",
".git/objects/17/d449ce8c1ba502c0146867f70c1443af1385a8": "c0b40e08b0d936c92c97517cbf49139c",
".git/objects/18/0236b61aaf2dd8bc96dd9495ae2f1483b5985b": "7fabb1032e9a226504a87328da813eca",
".git/objects/18/1f473fa8552b18611d511bee90821eccd7253f": "c9592de5541d5218b8ef1c3eb2dc5c50",
".git/objects/18/5705b7679606f0bd00ad0710845804b4daa820": "83754430337e9056ad16f02851d381fc",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/96cc4d0fbc0a87d8acd5c61f36c8476a70c6ed": "468222aad022b7cf0c6efc7b9a0f9729",
".git/objects/19/c9947f8367d6b16a5f348d2ea22f25f2fbc952": "5b3e26a85762b73d73543afe062e72a9",
".git/objects/19/de9b717db209c4e63eeac97dceee87c20cbf7c": "736ce1a4c93296e63ed94a8f4f02c721",
".git/objects/1b/2d65bcf44929b390dc0c5a1ad029ea91f89f3d": "306b04153052a70cb49e706dd63fe6b9",
".git/objects/1b/ba7b87877bfcb19589de28e923c70cdcc55a45": "fdfd1931e52ce6450c0c7b949bc0215f",
".git/objects/1c/9b74bcc6cd7680a76cedd5b7abce94eb873ed9": "9b51fdece54c93f37346e5e16dd7c5ee",
".git/objects/1e/33b921ea1c9ad220b27cf6275ae3bf9115b01f": "d1206f053c477db6abf76a78bae43918",
".git/objects/1e/4a56dba9bd415a2621b5cb354f825f957446bf": "4171b99f99908864204a583c8c93f9ec",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/8211cfcae0392518b1d3ea71baa31d9b7ba697": "709f2e731ef3bdacc1345be93a8a43a6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/c08864025af8948eda0df1b282ef538c13358c": "841476779de96a355ef1c1661e502873",
".git/objects/23/76dd7fbf8a645a05e663f2f4d41607c2bea560": "732ccf4793dd8ba6c694c294e55e396a",
".git/objects/24/c69c9cef01fbb0eef82e519567bf373e222d2e": "479cd0e32f7cd3d6f1c593e097643230",
".git/objects/25/3862de61af4ce8b4569be1b67bfc27e656bf35": "c37f0a2cda130e1721a6e30fd5f49dbd",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/b719ca4fda80f79523895ef527c0546df8bc90": "d91c1a0a9877166ee280b5b05617ae02",
".git/objects/26/b75f86f89b25c05b51e68a975957d54abe4bfe": "be730bf7c9a4ce241a8d9622c795aaa8",
".git/objects/27/bd9e7c572a58ad911e1a77acb313551f49b38d": "b24c337f2b73df5156f944668780feb0",
".git/objects/28/10e10aa8c5b1c0c0b645945664a42713ccfe77": "4149c79797910b3468ff18514363540d",
".git/objects/28/ed0a3ff72a1b29428d0d2afe15c2b1bca93d25": "4bb72c32c0cec9176cefd8d758b9df6f",
".git/objects/29/6eef8c509f53a87c454a8299bb17cae6f44e26": "2a50094d41fb34471b46d3e4ad6713a2",
".git/objects/2b/b9ebe9a8f7ccd1129feb462c4720f611221882": "bc3270ad488e23ae017cc792c96faa63",
".git/objects/2c/6a50d3187f0e6205d452250573f22c8c9bff05": "5abf248c5beac44b599a0747dcd75e91",
".git/objects/2c/834eee096155675589bc0efe92c8bea158d4e1": "e5b0687f2a98898575d9bb44e36eb52d",
".git/objects/2c/944b2cc301f6d9593aa376a7c73e52c1734ae7": "0b218b4c8df14f347184e8e760dfc2f6",
".git/objects/2c/b4316bbb7503e71b4a73dc5c6a53ad29e4170e": "d484302f79f9db6d07344f710c863a24",
".git/objects/2d/adfee13d524e7caa7a8ebccdc8402545f61ea1": "ca639b95044ba19cfc21846577fa3483",
".git/objects/30/f1b5e355af1b7b76833518784704b001600911": "822760d2767e5da9531be30ceb466bf1",
".git/objects/32/2668b289a20290b93894b838853941bd3e682a": "cf3b716bc51b107d2f9f68cae27482b8",
".git/objects/33/10df149a70a3903fa517297d5633b57ea0d05e": "c8285944c65e08fc02b5fc31c4b7609c",
".git/objects/35/754435e6cd958f1cb7b53d2ae7bbf65476a2cd": "58e6a50ad472289d8e752cbe695b87e8",
".git/objects/37/ae79789387c01f2718543fa3de496407b8f189": "1697bbdd6d27746083e4473c0a23cd51",
".git/objects/37/c3ab4688d7fa6325af58811496f40e890dcc62": "a155df6e846a03490c742f186ec9967d",
".git/objects/38/854f00c1b9a5ff70366711125335fc42888dc9": "6e980cb1b2e494e0fa3a7ac6775dab3a",
".git/objects/38/db4e96158087e103c3ce13d7b5361537b1e27d": "56470d27753ee799d9b4a3ebd3e4a40f",
".git/objects/38/e0c23234cd0e759f72c75dba31cf1daf8aecca": "0f1caff755de7b3fee7c9c0c59b6a1f8",
".git/objects/3a/7941bf7bdff08c212d355532161987bc645e2f": "d202f28a4bd8ce52970a94bf7afedee9",
".git/objects/3a/aacaacdaed58f0fdb60143b8bfd5305ce30579": "d2f23c2baeca35cf2b117c26ae515fe5",
".git/objects/3a/aed44660e7508c3b9437e659f447b5a434fd19": "6cf8922660f6adc771f91a5156b65a50",
".git/objects/3b/abb9dbda5b5ec2e911e0e056187a03b58fb54d": "60c03ba605f1e64cf5f24c7ce39357eb",
".git/objects/3b/c4ae73dbb0b41351eef436988afd20042f11a7": "24a6be0146caa0c1c7b579d2843d61e9",
".git/objects/3d/eb718a43a8bc21428a78ea7590dd8fd7ae3baf": "4740ef4ac814b5e52aa3695390c38762",
".git/objects/3f/9061f68e2ab027a833bf03ed03cb9b8dc199f1": "7319208445095ee21b39c93d5a8f7af3",
".git/objects/3f/a0ce71225ac94232d0902bfd95104a6725b567": "06564f5ee2483f17dd14cedbeaab2f1d",
".git/objects/41/42e9fb09997591d486e58d1f71d9c2a663cd69": "6619604deb7901d394302670a5277b56",
".git/objects/42/ae7015d667fe9304630aedaa6ea69039874b14": "17f55ea4e77ca47aaa4aa921a27d6472",
".git/objects/43/11c1e8bb924c7cc56b8d2b3cbbf1ab7e6006b5": "f54da71b17221e087fdf1e34231db446",
".git/objects/43/6faac1908ca6d1fac2df6d2a1fc68168317294": "7778c047944c6f04aa79e1fa3e43cbc2",
".git/objects/43/9e747d9ee6f660864ab1076ea0906da5045a23": "cb48d97f8dfb095882320d494dc968a5",
".git/objects/45/8b8aa993640546ea0a1bb8dc2ed5a77ee26264": "23ca833b3c61a27cca11f004e6089cfc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/4f44b025e8a9ee0f4748144dc11370e80c016c": "861728c639ab93f6c73815be23fc3a0e",
".git/objects/48/f18cf3b2e51305efd4ab56afcdc5e088cdd1e2": "c4b99e707be9bb7a75b567b0e70bedba",
".git/objects/49/4ce6e5af327c05f93ddc9788c9315e3e935658": "669a70174792ee774498f4b4a51b6465",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/c8eb68b0920b132791ed3325b9dec939983cb2": "7471a86eafa591a24721864d4d6ceb05",
".git/objects/4c/337ee26e1f5a87c88071c1ea35f505816b027a": "fed72eed02c0a0d0d35f3f6f6cbec087",
".git/objects/4d/643d83cf13f81b64f3443e2a4604f7b350f651": "33ab67d22eaf2975b55ecc55a0b00f2a",
".git/objects/4d/e4d1f445a9ac8beb06a3b95a5c4513bd2254cc": "bdf9c212307cbf2537f75329e3ea1073",
".git/objects/4e/efa804b5a790a4ec0201e23fc86dfdb3ec55b9": "5e215ea2ae09e196f7f552fd0d005ef2",
".git/objects/4f/0a183ca5ce079e416f67b8453c86410d19da86": "b9757887a973d3cefcbd1410481f7840",
".git/objects/50/cd130152cf2f54e6cd78fd0e8935f00a00dd8e": "a65ad5c40bd191893a12c2294cf10c92",
".git/objects/52/92fa24f85bbb7eba8dd7f3e29cf3f0b5c9796f": "47b1981182177ec1f14dad9c108d5762",
".git/objects/53/4606ca8cd58068c3d9e477c37f37e0142c74dd": "3e7ffa4395c889904acf882138449b6d",
".git/objects/53/b6dfbe227095fa7934e3a7523c3eca49431d49": "a32927c1b9640e0d3ed3525dc1d2f691",
".git/objects/54/27bbba83eb45ebac848f416ffbb529fd167758": "a06c5800a2539f8a07547198e0d39771",
".git/objects/54/99ec35c356b2688773888a8ad56ffa1e6c1186": "2e2599e65b0c7a16056696bb17ce43c1",
".git/objects/55/5ba9371389ca4661dbbb2dcc2256b46c3cd250": "aa6b2aca43c6219f97ca660c27b36540",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/b64b5144b924fe9e0714f93260703e77b936a8": "d482eba29846c195d7131037dfd8451f",
".git/objects/5a/9a64362c72c5a8a481d23d7637d1013d254c66": "f640ec21ba04153ca09db3befaf509a9",
".git/objects/5c/ab3ebff913f1f762219e835faf63e1a087ea65": "9a0e01fd2275ee9fbde3338584c07264",
".git/objects/5d/1a653b0843e8543f5fcec13056cc3056cb32e4": "8ebded5b778409491bab26eee67e27f5",
".git/objects/5d/c2db58e12c4db814874328ccf2799ad1168522": "c12e113560094204e63589bc12937727",
".git/objects/5d/cd8be8ffa83f801e3bb9b2ad24c0c72ce9b24d": "84f68a27d5665dc861fd662f6b2aca74",
".git/objects/5f/6618fc998029a87b0310babec44959666eae6c": "2029085b5998620b0c966b9ee9872739",
".git/objects/5f/aa2fcf0001c77d9f2a0c9986b603ffdfad9cb7": "fee9517564bf04fe7d35336f01550637",
".git/objects/5f/f554dc6cd4da2d4f08d86959938d18311c6f9a": "1e1a9bbc06016eabc3edfe055fef9d9d",
".git/objects/61/3570d040d8a75b5dce1b386777a1be8ed15402": "9f4ab6f4047b50acf751bd4e34f310a5",
".git/objects/61/9464c3cee1855da5d7d2f799d578edcd53dfdf": "3801b77ddb90afdcba7dbbd0709ff9f8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/53c4819847190dba62a5178436608bc0638254": "b69cd2ea7533e2417cb2ff524c49c43d",
".git/objects/63/9ee05980951d81d5c0eb70ec72be1c59c33f7c": "efe714ce75c658086e7d523149fea63c",
".git/objects/64/5ed25a205706499dbf1fe4825b7f868d2f4465": "be9b4e0206ae0c0c8b942745407584e0",
".git/objects/64/aba6d12f1904838965f10fff3e6c998beefdaf": "9d85c6c2c0b0e5ba7aa05c45657e4d23",
".git/objects/66/5df616bc3ce8ab31225484fbaeea62d86f2cd0": "a4308a27e72bb6fb3717907fbf5ce63d",
".git/objects/67/2a7f96d3cf9fabe87106489bd22d00ed1cf321": "516e294feb978227f94e87b06c290a4f",
".git/objects/69/61d5449c83be6d606827dfc1059728dd581e4b": "81db85b0eae526ff4a08d6a97a1db1e3",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/dbd4101a2c71fe0949d7d98695e2f97f0c9af4": "b8638806eeda5b1dfbd09fa8848b9d14",
".git/objects/6e/6abd9d979727249dc3743f4d095ed70a29ab80": "400b4142cba9a2957db850aaf40b6db9",
".git/objects/6e/cf86666bf3018b25be992066fea1a34a3d1e7e": "98d2510d5b73f438aa445ce049407777",
".git/objects/6f/a7c5e9e28b9a4eae411627199fb860bd744912": "c09820878fae805d781bbe71b0505525",
".git/objects/6f/ad918c3df8f22ac59c2fc3508018301f205d71": "a6bb26edc5fa13995afcdf5efdfa5f0f",
".git/objects/6f/e6067fb9ed27bf3a85973446901a65970ba41b": "29788ccd01d6f20f68239e0ef230aa6d",
".git/objects/70/f61d5be524e422a5d2f77d8dc8f451b192e09f": "6feea8182dda07802c5a602624d09831",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/6e3cb8d7401bedb62c885a5572df84e85ff352": "e1ef7fc80b5b4692c4e5afaea32c220e",
".git/objects/71/713613a03f4e488b8907cd220e2cc1e04f728f": "2e639ae9d4571657d4bbb0ecc9f8a5af",
".git/objects/71/7eafd0449fd953b8c7b8521dba8e0dccf93f34": "a84a43482e6562e5c667477abda8f8c3",
".git/objects/71/a30fd317936feb6f850d5f455b344a99ff4734": "e7bf8050a75d08c4c25deb6d6d665388",
".git/objects/72/23c8526e6f0005134a2fec02afb0cc99571500": "2826deb59d2584d637c4c9a47524dd95",
".git/objects/72/4b57fecd262da7b222921875077e51ab510676": "aea1f6f9f9588a8b20211c3496dfdeb3",
".git/objects/75/885388d70a053f6fcbfe9f4fd343167f53b0f6": "fa2eab9af7f6fdfa4182c737351c1669",
".git/objects/77/2f0ef801369a6b1bc9f55412962bf04e196ac9": "0895aa59efac8abd8b47ff3c11206ce7",
".git/objects/77/bbe74229edc2582f21b6a71977832d7c640d47": "74dac0cd9c368ee36ffda74f7060e5c3",
".git/objects/79/d6806e3dce019bc40ccc4403485f841b2ca551": "665d9dbfa4e765c31c66a3f204f32418",
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
".git/objects/81/5c146a71ea1816479d95eaf62843bc2b8f9698": "3de0ceb2b8b8c0835d5a17b7af6a5935",
".git/objects/81/7182c4dc1f9471f4b44332b2aa604ce3e07800": "4d9e5258adb8f576c0669559bb260e3e",
".git/objects/83/70b4aa0040030c1c35705e9472a5009a1cc35d": "23c9ae2a84c74ae6c0a32544eff0b06b",
".git/objects/83/788000784afdaafd2e5e821306a212343161e8": "9449f7c33c53dcf2ff67d003e28f76f0",
".git/objects/83/7b6e1e03bd48ffaa787529018abd4bbbc8e7e3": "6ef4da4a098ac872d17b775838323ecb",
".git/objects/85/0d6585425a47f674d7b8a0b9a68bd9b855ba04": "01db93ca047008b4ec3d4c1d21030d78",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/9bfc1dac7be80ccf0dfaef3e88b9a49b8f0427": "0c87a04ae72834038ade9a27a6eca5dc",
".git/objects/88/7b5918ccaa0a5c52d530ed06d3276871dd9f6f": "a18d4bac52a6d58ceca7ef21cfaa34d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f3936d67cbfb467c276337c2ad1b785aa93f53": "3e061a15e2e006a06a872260c0b83b95",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/34a11f80ad07f2bd55c861c732437b57314299": "0cc193dac403b0d621cc9bf4d38be93f",
".git/objects/8d/b3f7d635430dd4601ae7d224e1b36f0a1ab50a": "de28f8ee1438be4177e9d6bf9589adca",
".git/objects/8e/0e12091ce047427151a4d0467b41f16d7237bc": "0b8bda5e62c15699bf4bd0ba24aa8d9d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/e471107452e1d83810a3dd05372b77b2687325": "263a60d18a7560bde3d207a03d86627b",
".git/objects/90/f606330db00a9307d1c919db2d6e9cc8bb733e": "f5085cfe1c9645487afbb09330f19d38",
".git/objects/91/d7540158e9462a190839c17146ecca75ab6ed1": "7628c4ad778c16b35c6bb24acca5088c",
".git/objects/93/3e055631f21d544f52c383e05891c46de5b073": "3aa690d1bb0b2583e51c47cc98f43903",
".git/objects/93/690fe5220eca3dffe5acaec5611ec267b3a64b": "b5785051fc4362e203ddc63cb02dcb8e",
".git/objects/94/bb0f7b03439faa53f2705b6365e5a014874db1": "0d9b8e64ba00c248090899115db5c4d9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/492e7626a7971b5100e14e70202b53d5d14115": "a4b365f5c81fe08f80476522f4ec870a",
".git/objects/97/3cb530b11a1397fab6f81c66e9d687c363a977": "8ecd0bc5a66a56596e7f444827cebc9c",
".git/objects/9b/99c5a2d60ea6ca60afd07a935ecb3b9127618b": "fbd63893fed5d726e6ce88b1c8435d1a",
".git/objects/9c/917c2e6475d52dbb5819f7f22b30b3ff6ca17c": "6d1207c95671ce32edfe6d41962acd5f",
".git/objects/9e/e1d33bf5a04fc49bdea03891a1a8289f9f5e5c": "4cbaf5f74573e2b04a17e8fc79c4e10f",
".git/objects/9f/6815e901307c1681cf33d5993098795ca5bd08": "e21decb8a8da8e8b1723a6463e56f8b1",
".git/objects/a3/a0992cd8552cb3a9a134e0c75f4d83908ea2bc": "5e6387ed27681a3ff39d548180e14461",
".git/objects/a5/aae28d3b8740d2edbd36d21682f83c24bbfdc9": "21247d3567b06d00c140bbed7171b6ef",
".git/objects/a8/839a0cbf843f908ab168e062edf34e43d95bbf": "28e1e3f839e858b425bf52ec62e49ea3",
".git/objects/a8/cf1e9d4ac2009883be423aa989c698ebf5f6d8": "6243ad39e50c2e24f9d230f7626aca7a",
".git/objects/a9/ec692b6420da765298312de85112d4788f7830": "e511485219513653414b9ec75f60ec11",
".git/objects/aa/ac3d2f8e072fba31c094755efb3d5764b9d843": "04942cdfefd0a00b2efd1cae90d459f1",
".git/objects/aa/e1d1bb4a9f8005f279e9e200468cfb7b891993": "5e0b2c3748ad9114811996e587092b4c",
".git/objects/ab/c85a72f05c1a6ed5579b5a5ae513c2653dc2ec": "f31e169eb1f43b22beb36843b39f1139",
".git/objects/ae/7c2fead047f5c3eff11b975080fd9f4be37cc0": "2f95de5f7942ee6f41ebb614b9e60914",
".git/objects/af/d55107f04256ba1a9b756e439b11c06204aa06": "a335a975499bff6e81f67812dfaf728e",
".git/objects/b2/345f762ed3b6b3cd29f31f7a5bc547ae0116ec": "17acfca753c40828ebec6649f2548200",
".git/objects/b2/eeb4c527c286ff097aea9f0a64d7e8ab32efc8": "f526d92edacbc4df5d2743522d6ce44a",
".git/objects/b3/ad36a16d98909fd9d321ec71033efd1344d88b": "64a94ec1c8a129cc93d80124065e2920",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/157ac822e44dfff89e98bf0a9f9610ff1cd4f1": "2996710275e1f72146067028c933ec3b",
".git/objects/b7/13030da1fe936a25a5bf72bba13696d6e6d95b": "0b05e46d76896eba9d494779e0ecdbab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9b421aaaae02c7e7161c91a5c3b62543024282": "14d9bf3a5720e76cfad6d257b516967b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ab2682d1fe97195c767f0fd4b68c26a24abc81": "26022cf7f4933769f5b068acc9efbeb1",
".git/objects/ba/156904383f835b854c89509a239fbc73d0344d": "f8abe8606ae7b86545882ca1a41fc38a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/f345619b37341e55246da1df706429f1c54ff9": "99da8e3770c8a0d2db9031432d11462a",
".git/objects/bd/97797194e53589f12abcebc9398837a172f59e": "2c5b0236a6e8026200a6c80ded158454",
".git/objects/bd/b8c4d4c5d6eba46f43ffd9b9472c92f2e2eda1": "24fa2e8919d698e7e7c37f48d78821cc",
".git/objects/be/231703a62f28d6d5cd21481e0f23cb41f3cb07": "0ec3120355fdb02da5ea114c7c946a21",
".git/objects/bf/b493de31ba2135e93ef7e2e003cd97e7dd19b9": "bd96e3aaadd6969bd1fcbf31087833ea",
".git/objects/c1/71726963fcac0d05e04dcfcb6fccf110a5dca9": "872a1772aec5d7931f6ac9bf0ed98d2f",
".git/objects/c3/19d9162448b76b1fb9a99d425b94cc5e20bcbb": "894e5287b77d982fad160e218ccf7154",
".git/objects/c3/7e903b12ae9fb9629320804c62763436ece182": "b460c3bde12ef43028d0c5554a24a87f",
".git/objects/c3/7f6738f97819c6315ebd2e332a11baee7b16bd": "1e8be2ce0e7be2839ef910d8d79ef54f",
".git/objects/c4/0385789af89622f2465d4fbcc1962e9bc08299": "a8a19d16e01de3a419e5ab5a16db8043",
".git/objects/c7/06d614fc7cb92760685d28feabc3d8248e9aa6": "ef1512bd5e91f562d65a11546e0c0082",
".git/objects/c7/6ddcf14bb3bc9d3f1e5fbc7959acbd221c7f10": "a895f16ff8bd2577a92691deca9d77a7",
".git/objects/c7/941d2dce2ed3f3509e5cc5e1b14497439940a7": "30580483c8048790265ddb1639949ebe",
".git/objects/c8/32e13939f4b73927d76f473fda672b9bdb69ca": "c29894dd484feba5580725264af3cbcd",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/489f6e2c689be20cc7272659f6e133b26c3df2": "6d77df7a9eee90bbb375c901da6e8f66",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/12ee5adb017b8e46c12e83bf2b506797678391": "20b85df4894c92c5d3781c27ea3518cc",
".git/objects/cc/9e1050890b3e74f7782ecdf3dd8f47ee741e0d": "61caea1e1132b50738a0ba01e008a7e9",
".git/objects/cc/eaf680abe6f4975defb8554b4bfb3b46c44aa1": "8202ebc2b99bcf7b4d150b4c12f5e073",
".git/objects/ce/bc5c58e8149062533cb635bc2f94779da31994": "f29c87ff034b0d67c8f3c049452a7c93",
".git/objects/cf/d3c2f2b499fdb88188e3a31e5031fc32bad127": "85fc4ce8d13b6949da86d5bd275950ca",
".git/objects/d0/90c3e4199c1c1b5aab269851884f4f6f36156a": "963bf286da7985a4c0e6a5b59cd31101",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/303627bc7a85bc56a360aac2271854b49e0c1f": "7487aa39a4e9ef5d889250ad48c919d3",
".git/objects/d1/78d8b19fb6ddab2ec43fbbcf5bed7ce36523b5": "1b751ad35a2dc233953fbab4f0576335",
".git/objects/d2/2510358f40a2146ec0381311fc7623eff78a0a": "14b85cfd4529de154b12e521deb756b3",
".git/objects/d4/0696ed4ae8df29c2add11e4f7b0ac5bd2ca0d8": "d6cf8c175c652b53cdf18c03d5f34ba2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/de9457a19d635446ffeb13af2008419c3c042e": "9098233762dc3fb3c6f9c66189958abd",
".git/objects/d7/502aa0c56b54a65c1f3d1ef927e13d328a1736": "90a39b8e578248b75f4bdd41418ca2ae",
".git/objects/d7/e057ad4dc914157332f1b45a101a952caa0878": "f07a4d8f4c0dfa6681db6d885da8aea6",
".git/objects/dc/620731926d90b1c80e69a0e0172af78ad02672": "fb3c64008f733ebd77579ccf6c6629bd",
".git/objects/dc/680295e2f9135176593b09ec3c929c6bcd1c54": "1049ce7a0e8decce4d13d8de86b1d294",
".git/objects/de/2f605c9d04e7868a82dee9b074bdcc7ee1e8c8": "cf0d162312459b360ad061eb9f27479a",
".git/objects/de/92f0622cc48f316952c52cd6c0b20017a2eb57": "272ea130933515c0faefac89184c5038",
".git/objects/de/d70939afdb6540913138fb79a0334f26f79654": "e3731499d9e8d9976b1d2518b6dcaa00",
".git/objects/df/796de5f49ca5e3722c4c9395756cf5bbe3303d": "75f833b03024c22a4f630e1582b8db1a",
".git/objects/e0/84b8eb7ec62d0cd174515a53e8b011b1e5f74c": "9cfe536c0fd4189c223c9b5602cf0954",
".git/objects/e1/4f540242de35ee887a1d3f4152ee9be2acf8cf": "d3d05d80f86e7111eb24d67d184a6f61",
".git/objects/e4/0feed04196567bb5082faec671aeb61f1ca391": "bfa1c44d45f882f9ebc27a2fd0699546",
".git/objects/e4/6a7390609905737bfd89e84178d2136e947e75": "b7520d5d4955f9342399f2a93ab026ea",
".git/objects/e5/e88197813ac11a256b61f015bc2416a6c4a022": "e4c05f2784205bfd50827c424ec5ba23",
".git/objects/e6/c1045a9f9b9ee97a717badf71ddcb3d0afff66": "3dc949a9b0db76351dde9f2b0815c60d",
".git/objects/e7/05e0920c07a594fe6a90aaae63a5c2679ce354": "a8c5e3b8555ca976a82e8e7bc6d8761c",
".git/objects/e7/1d5fd092a9e73516185386e96bd2821ae4f5fb": "5d2fd826c1e49054840925bf442b9d63",
".git/objects/e7/e248c54338848bad897e699fed8fcdef67f1e8": "ce1e973b639ea1fd178e5de420aecac6",
".git/objects/e8/7a61daff1f435dff50afaf73b0d084e97c68d2": "69530a61e1c8820e4158e0f8c1668e9c",
".git/objects/e8/9a437158178d1cffc0f163a92f247cbf8ccb6d": "c81ed9603214222b29a2037e6606ad7c",
".git/objects/e8/b9566e5c546284a3359e2fbd14fb1ab06d68db": "b16baa6d323553b9b531ff54e8acc19d",
".git/objects/e9/58489ace203c0c243f0a2d12002cbfbda84307": "fd42bee5072d754e3c49a0ac5b5f90bf",
".git/objects/eb/1db381123d5cd14738a54aae87c44a0271ae0a": "e50103b1db7316eae5a6f7198c4ba5a6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f52afc60fe72651140c804436f10ccefbe858c": "94b6c0d31f50b7351abbc0df4d02b337",
".git/objects/ec/5c45b4a0a58f6b14df4dc2b244dec08e4aab6f": "fc0cec9a6bc836f68a3a6fdc94bf1558",
".git/objects/ec/d67b0d97f8f4915a759dd955db9d74c9099e73": "01dbd61dc0abed3bfc810cd7c6d67f13",
".git/objects/ec/e310eddd3abf29842c7d32b47a159f3c528007": "d33b9578deb7f9038085e244af4909a4",
".git/objects/ed/7ded488537cf8f7b670e8b3a661ea1dc41e6e2": "253cd266cbe0164ae22ed00504af6660",
".git/objects/f0/11b5316784d2938e5f6ab9b22811932e768d1a": "89f5d7b779ed586eb95a4c8aab5032b3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/2bd059cca732201f9cd047220b3f74d074e5e8": "bb990a8767416da39690d35b99512a2c",
".git/objects/f5/169b7ed5cc8cdf690b87d539bc291e9c1ba0ff": "17c34e50e30f3f9e1e7b56430f0d72ba",
".git/objects/f5/92b9da643e45828d248f1b4965e145b6f2202f": "1f512e26ec90cceb808a47d17ab14454",
".git/objects/f6/d1de8dc8465fa2e78de730d5a43af59d5fd31b": "0b99affa6b1f5d4efbfd51b38ff8da05",
".git/objects/f8/6371db15ec9ee69786cd19499d2a4d2cc21da0": "5a5a0d7fc56f49fe6d251c97cb0c3e2f",
".git/objects/f8/d49505ece8a40dccfc430624c650d8a158257b": "79c9cd560db36e5861683b411c808249",
".git/objects/fa/ebeb486aaaebaaa0ae0086b7afa0715ad02ff4": "e4af74505bad46df9e92e829f5cfe2ea",
".git/objects/fb/cbc6571a69a3f4257fcf92463d9fd5b4e31d66": "7e316915bc82e3bf6ddc8bf7484a4faa",
".git/objects/fc/bbaf05cdde8027174afdf87dc6d127f7e5ade0": "ee6f8db7b7bed6d13b3b643716d0a3b1",
".git/objects/fc/ddcdda3a211eb98344953d3262a7094350036d": "2840899390f744a968cdc3b97b2d961a",
".git/objects/fd/9827729beef6d588336a37dcc4d1a958eb0c24": "3d0fde6081dea1339ebfc15b083444e5",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/ORIG_HEAD": "0fe8caf3a2db5d0f6141aaaaf63ba8fc",
".git/refs/heads/main": "91fcc0d7abf96035b817f03f9f1aa40a",
".git/refs/remotes/origin/main": "91fcc0d7abf96035b817f03f9f1aa40a",
".git/refs/remotes/origin/master": "5e473c969a61d906e1354f5149f06f6c",
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
"flutter_bootstrap.js": "68d511e1f641f38a704535471bb0fe34",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24a212d97af609cb259c3473d4d0be65",
"/": "24a212d97af609cb259c3473d4d0be65",
"main.dart.js": "76b6d26f3b988128725642d9d9110ecd",
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
