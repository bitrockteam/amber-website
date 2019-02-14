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
    "revision": "c4a69e4bae07a05e5ea7a4c27d7fb25c"
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
    "url": "assets/css/0.styles.2d9d4d7b.css",
    "revision": "3e59b01403fc84959bdc4b8fd1a41eb0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b7a1e091.js",
    "revision": "f261e740cd1b25cf15fa97ddc71344c0"
  },
  {
    "url": "assets/js/11.552ae51a.js",
    "revision": "4673384532d62edea84f67c290f1e9e3"
  },
  {
    "url": "assets/js/12.64b31b2b.js",
    "revision": "dd1d5a8dbe3ee017c72a2989190ab1ac"
  },
  {
    "url": "assets/js/13.281a87b7.js",
    "revision": "0914d13c2ded1af3b644fd9994689b47"
  },
  {
    "url": "assets/js/14.06c460b5.js",
    "revision": "3d7e4a81bbbe8a693345579f67023d96"
  },
  {
    "url": "assets/js/15.9bee3a7b.js",
    "revision": "25ecc68582ccb9a51a08fe71298c66f6"
  },
  {
    "url": "assets/js/16.eb83f557.js",
    "revision": "53ef7c38527de51205ab69f512c37f15"
  },
  {
    "url": "assets/js/17.c9e47cc9.js",
    "revision": "e733c52fb65687425304d5a5074485a4"
  },
  {
    "url": "assets/js/18.b8f870bb.js",
    "revision": "f3437d631d140d775f809d4725f276cd"
  },
  {
    "url": "assets/js/19.b54326e0.js",
    "revision": "be6b7b39b9320d8133c9952c8d8df561"
  },
  {
    "url": "assets/js/2.64d19422.js",
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
    "url": "assets/js/23.088f55e3.js",
    "revision": "6660e23380367b60c61c11a65d480dcf"
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
    "url": "assets/js/28.90f6766d.js",
    "revision": "afd2f835ecf568ceec7657b180f4497d"
  },
  {
    "url": "assets/js/29.43c105dd.js",
    "revision": "e03b3e88174448ee0cf12287bf8c7191"
  },
  {
    "url": "assets/js/3.c674a998.js",
    "revision": "1a9f36b8ae9a3578a5b11034b9b0e6f6"
  },
  {
    "url": "assets/js/30.b3aa2553.js",
    "revision": "fd67469752848da1e1360a9b70a50cbf"
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
    "url": "assets/js/8.cba2d064.js",
    "revision": "df9afaf20efaf5c14ac81180633ccf7e"
  },
  {
    "url": "assets/js/9.d3d94956.js",
    "revision": "d281f0d262a5d5c6342c7bfad30ac675"
  },
  {
    "url": "assets/js/app.ebb10758.js",
    "revision": "79e3e6e1dd7efc117362c699f497c07f"
  },
  {
    "url": "components/banner/index.html",
    "revision": "fbf69f9ff57aa31194e3ee77b956545d"
  },
  {
    "url": "components/button/index.html",
    "revision": "4724211f4476b789e79b9a757fb72d15"
  },
  {
    "url": "components/card/index.html",
    "revision": "759fe1204456c13b9b351805eacb2b65"
  },
  {
    "url": "components/code/index.html",
    "revision": "05962226020554be9ea81a7d17ae6a6a"
  },
  {
    "url": "components/date/index.html",
    "revision": "34bf4cea88bc55885e6a8fb97f4471b8"
  },
  {
    "url": "components/index.html",
    "revision": "5fa45b9cab4ff391acf22ac8187f9f6d"
  },
  {
    "url": "components/modal/index.html",
    "revision": "cd2b934042f87ace284152045bac863a"
  },
  {
    "url": "components/overview/index.html",
    "revision": "512d75347e0d98e9bda1656e3726e2a4"
  },
  {
    "url": "components/progress/index.html",
    "revision": "444516febc5bcef9a78bf81ec262d91c"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "7a722314c8a90672d6d80633a602a6b4"
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
    "revision": "1715268c0b9f674ea2d738c8630182ba"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "f4944866d0519c1c8a98a91db4bedaca"
  },
  {
    "url": "introduction/index.html",
    "revision": "d0b46abc97ad9bdfe8d4e9b23a366312"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "ff764df4af619fe81a2d21b5cb07d011"
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
    "revision": "2acb35824b7911ad197e0a7ec7cb62d8"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "4d07234f25ac25ed4e701819079bba90"
  },
  {
    "url": "resources/download/index.html",
    "revision": "51b2d6a7c11a73d95e63881d886708d2"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "7e76c26dc5fadf9912d80e5d6c2278a6"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "bc9483f048117832e51ed300b5e168fe"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "cdc97b068c2091929c4640a0ee5cad0e"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "4ea126e3cbedab75280910443399d2ff"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "4d070a57e07ae6f9021d9260b1bf1611"
  },
  {
    "url": "visual/index.html",
    "revision": "68141268fc280425a0e81b6baeecf580"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "4d68d1bfd44db7a6075e054e67406da0"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "e26b255fefb278ebcdf0d1082ff284cd"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "b324168bc686d49a691528c01f83e693"
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
