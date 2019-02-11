/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8687cbe9b9e59e1bba19272ab162f88b"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "243b425f1b587a3b1587649d248ae177"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "0d1f802a807b863d2b465901115e0f6e"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "382861947cad1fa56318c3990b557ca8"
  },
  {
    "url": "assets/css/0.styles.5e489928.css",
    "revision": "77ea2419e22cd05b02af07e477cac8c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6565ee39.js",
    "revision": "9e1667323ba88388f2edb1117a1c9b71"
  },
  {
    "url": "assets/js/11.6cf8a90b.js",
    "revision": "af58515bc420503cc9c3e79315bd5240"
  },
  {
    "url": "assets/js/12.a30578e0.js",
    "revision": "7fc42fc3ca4ec85919de06b621799a76"
  },
  {
    "url": "assets/js/13.8135655c.js",
    "revision": "cd3cf37a026e1e0e3634665e5fb58d8f"
  },
  {
    "url": "assets/js/14.60f35a21.js",
    "revision": "1722bae033cc45b7395beb7cfbc9c1ca"
  },
  {
    "url": "assets/js/15.1278375d.js",
    "revision": "087dbbd876a109b6ee8c9c3cd2f60f29"
  },
  {
    "url": "assets/js/16.eb83f557.js",
    "revision": "53ef7c38527de51205ab69f512c37f15"
  },
  {
    "url": "assets/js/17.a6cc49b2.js",
    "revision": "3fb98ab81ae85d1cbe19967cf2f9b524"
  },
  {
    "url": "assets/js/18.b8f870bb.js",
    "revision": "f3437d631d140d775f809d4725f276cd"
  },
  {
    "url": "assets/js/19.ba2dbe8d.js",
    "revision": "2da7dabba6cb3912c8f8131bab4f35f9"
  },
  {
    "url": "assets/js/2.de9ffe58.js",
    "revision": "9a60536cd07833be7430484fa016cb8f"
  },
  {
    "url": "assets/js/20.a6c4dc2c.js",
    "revision": "b828b10345f053d31d27c3fb68b9e6c6"
  },
  {
    "url": "assets/js/21.862cb893.js",
    "revision": "1bdbdfb2a48088c2ac525877a55313c9"
  },
  {
    "url": "assets/js/22.1ecddbe4.js",
    "revision": "36523c49af0d7b63b9cf787f751d00e2"
  },
  {
    "url": "assets/js/23.3ea2fce2.js",
    "revision": "7d3451bbb197eff889a8eebf3a979511"
  },
  {
    "url": "assets/js/24.7941f8cb.js",
    "revision": "2ac055a06fc7b416c74a38c13a0ffeca"
  },
  {
    "url": "assets/js/25.f40ce242.js",
    "revision": "ff774aa86d4d4baba343b87eefc64646"
  },
  {
    "url": "assets/js/26.404ce98a.js",
    "revision": "9fd0886510b5610a26a6ad759089792a"
  },
  {
    "url": "assets/js/27.99ce9cd2.js",
    "revision": "12b6b24d1091cffd5a07b8e80093bfcc"
  },
  {
    "url": "assets/js/28.f4fc3e85.js",
    "revision": "f682ccc744bd2de3e91855a841ce5ad1"
  },
  {
    "url": "assets/js/29.33bed803.js",
    "revision": "061d53ddfa0efb8ebd79b16e7fea0490"
  },
  {
    "url": "assets/js/3.c674a998.js",
    "revision": "1a9f36b8ae9a3578a5b11034b9b0e6f6"
  },
  {
    "url": "assets/js/30.e24911bf.js",
    "revision": "3088b69103416a5279dd558a17a800e3"
  },
  {
    "url": "assets/js/31.179d51d5.js",
    "revision": "f376402fbdb8aad388c6c2fe2b06bb7a"
  },
  {
    "url": "assets/js/32.4d346d5b.js",
    "revision": "acc100ce36e7f3c3cb3f4a5f3a497b55"
  },
  {
    "url": "assets/js/33.f58bf10d.js",
    "revision": "d20b96ec37849bf290b22cbe706b5fda"
  },
  {
    "url": "assets/js/34.eb440df8.js",
    "revision": "cd0d5de1f682f6d6efb0e87d53e4918d"
  },
  {
    "url": "assets/js/4.311572a7.js",
    "revision": "4d5398b03f301215d39c7f141ae1bba6"
  },
  {
    "url": "assets/js/5.4cc76ff8.js",
    "revision": "f96e3e506d0758fe0d881360d31cdf2a"
  },
  {
    "url": "assets/js/6.dcb99329.js",
    "revision": "a418b5026a612682c8d4537d861acfc2"
  },
  {
    "url": "assets/js/7.c0f7f41b.js",
    "revision": "89eab8dee007df88907490b38bd94b47"
  },
  {
    "url": "assets/js/8.bd56c2e3.js",
    "revision": "0fecd857081ae5fd37091d65a56e7956"
  },
  {
    "url": "assets/js/9.0109c12b.js",
    "revision": "0f70d762b1633b8a1f43ead870ae10aa"
  },
  {
    "url": "assets/js/app.da5cd5ad.js",
    "revision": "a8fcf5c401282d296a02ab5273202f54"
  },
  {
    "url": "components/banner/index.html",
    "revision": "9e1983817c9122d24722b020c72e94d5"
  },
  {
    "url": "components/button/index.html",
    "revision": "e242528e89661816eba439f20f639db6"
  },
  {
    "url": "components/card/index.html",
    "revision": "0f8bf24cc764cb640dc89873dea31603"
  },
  {
    "url": "components/code/index.html",
    "revision": "17424802d4bfd9a3e289829bae2e90e1"
  },
  {
    "url": "components/date/index.html",
    "revision": "e019a8279cd860cb067e770e6de279a9"
  },
  {
    "url": "components/index.html",
    "revision": "5bdcbca7401f7d2000ea41f1b9e00439"
  },
  {
    "url": "components/modal/index.html",
    "revision": "6b143452e8f4ca945cc3e24040faff12"
  },
  {
    "url": "components/overview/index.html",
    "revision": "b053e6d308d0fcb766d4fb941b5b573a"
  },
  {
    "url": "components/progress/index.html",
    "revision": "333117e546830149fb0b92e104e644d1"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "5434768d89d48662e7eaac77f6334e19"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "4cf2c70358ccecc1e633f43657135cdf"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b586357b1eaa14d94c9b8bdfc00c5e3f"
  },
  {
    "url": "img/components.png",
    "revision": "a1510c9661e7ed742d646339acf11757"
  },
  {
    "url": "img/cover.png",
    "revision": "6189b98b4f3190c9e7653cb3dc38f086"
  },
  {
    "url": "index.html",
    "revision": "87d4ddec6c9f389868e353fd5cb48929"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "8fdc556259a53ecc0e7afabc4c7362bc"
  },
  {
    "url": "introduction/index.html",
    "revision": "aaf27bd344b51dad1d5be4fc1d553453"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "fe818b013fa1013440089600393bb71b"
  },
  {
    "url": "logo.svg",
    "revision": "dee2e9ad92a7cde1d6607b23627819de"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "9f6dfdee6760b8da34ca56c457df8c8a"
  },
  {
    "url": "resources/changelog/index.html",
    "revision": "0a9297e0e5120c3d8ac48c04db7e21db"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "725810a0ea869142eceab9cc4410d56c"
  },
  {
    "url": "resources/download/index.html",
    "revision": "ba6fd00fabfef939c61757a030a5c558"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "5a6f5fe124840a5920ee2e4a7670906e"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "d1d38be97eeeb3835f6c54a711178bdd"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "06e6f1f1c9135c579571392b9dc3da85"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "b66c3a3773a9bda303fbb98813fcec2d"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "0171edf4554c459435aabd05fb1652ef"
  },
  {
    "url": "visual/index.html",
    "revision": "61d50465ebcd293e56ef100114d5e442"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "0d7d02b003a9f40e9619fcdab95dfbd9"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "c33dd5da106e7df13b02d9cd5b4e0685"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "5c171da5906cfd1fa6343b02c5955a78"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
