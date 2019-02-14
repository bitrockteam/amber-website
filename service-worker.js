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
    "revision": "59ccb59caa99f2cb41d739bc30b85775"
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
    "url": "assets/css/0.styles.d911869e.css",
    "revision": "78c1dda4f7fe533e646588e1ebcbac02"
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
    "url": "assets/js/28.90f6766d.js",
    "revision": "afd2f835ecf568ceec7657b180f4497d"
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
    "url": "assets/js/8.cba2d064.js",
    "revision": "df9afaf20efaf5c14ac81180633ccf7e"
  },
  {
    "url": "assets/js/9.d3d94956.js",
    "revision": "d281f0d262a5d5c6342c7bfad30ac675"
  },
  {
    "url": "assets/js/app.4fbbc0ea.js",
    "revision": "aa8677a905aadd82171b84ce3e48584a"
  },
  {
    "url": "components/banner/index.html",
    "revision": "8040780d586f7756eba6ffc7d683dc97"
  },
  {
    "url": "components/button/index.html",
    "revision": "378bf5ae99699cb4b26407e7034c61e3"
  },
  {
    "url": "components/card/index.html",
    "revision": "696bd8a4dd8b87472818dc4f1781d509"
  },
  {
    "url": "components/code/index.html",
    "revision": "bc3e53e64dd81395d3428da1cbfed7d4"
  },
  {
    "url": "components/date/index.html",
    "revision": "be35404181ad965f2d3cfffa32bfbd30"
  },
  {
    "url": "components/index.html",
    "revision": "f268746f44af9f7780f63618de5cb947"
  },
  {
    "url": "components/modal/index.html",
    "revision": "661479d3cc04a23bea01a3f074d527f9"
  },
  {
    "url": "components/overview/index.html",
    "revision": "d67dbcbe550fce8fe8c9781d2aaab5bf"
  },
  {
    "url": "components/progress/index.html",
    "revision": "621918e36e6d3b807789422779c211fe"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "aa733e0d344c493ed4e930d8fc87c505"
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
    "revision": "73eca603743a91806ebce10cbf43eff1"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "ed48c0aac5911c7529501c1707836c71"
  },
  {
    "url": "introduction/index.html",
    "revision": "d757ab62eb43a9aa35d6bf1beae06f27"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "b8050b1cb35554f4409e40c5a78b8d64"
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
    "revision": "b935a83240665e78208ad24b0842f578"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "2d88b82e6aa6e8a6def9718b0218cda7"
  },
  {
    "url": "resources/download/index.html",
    "revision": "0b30e6333786d11b43da7317804319f5"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "28d0e8ce15ad2671743f47351975ddd1"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "8048241d1974a09b1bd194510e5b95e5"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "52d0f1ee38567f0820ab7c2f14d624a7"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "b69918fa01d3d2679e75c80690e84ad0"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "a71f77ae9386a99cf8dc1e526aad4225"
  },
  {
    "url": "visual/index.html",
    "revision": "cbc2ac4db2cd28250a7448079cc1da6b"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "3bd822c2a9608bd413b4cd223a59038c"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "05b087ec269ef87bf43fe14db7add2a9"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "515a33bd040cdbace0de5d0bb3d99b9f"
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
