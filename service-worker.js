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
    "revision": "818d2e108fa7a1d36d74bc639ff22803"
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
    "url": "assets/css/0.styles.7e18ccaf.css",
    "revision": "d1543e209f30aa9c18212ddfb3e058da"
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
    "url": "assets/js/app.b4043a53.js",
    "revision": "4276fe7f0d787e2871dbca5bd312e02c"
  },
  {
    "url": "components/banner/index.html",
    "revision": "cbeb5dff8a25b7fb48f9cf9a79697692"
  },
  {
    "url": "components/button/index.html",
    "revision": "5106fdcd5f8f95afb54e59a1230392b0"
  },
  {
    "url": "components/card/index.html",
    "revision": "b43f8acc87241597fc9e959cad969e5e"
  },
  {
    "url": "components/code/index.html",
    "revision": "d7a31d33f15690dfe3bc1e063636bfb3"
  },
  {
    "url": "components/date/index.html",
    "revision": "ca6991771860609de15518163298725b"
  },
  {
    "url": "components/index.html",
    "revision": "a28c99c2ce58373f749dc42c90a2d411"
  },
  {
    "url": "components/modal/index.html",
    "revision": "85eb389cf575cef114eaacb71ea6be0b"
  },
  {
    "url": "components/overview/index.html",
    "revision": "673bc37c5e524b137364f72a5fe31c1c"
  },
  {
    "url": "components/progress/index.html",
    "revision": "a81e112d3444d7ec92fb7a182c2ebf47"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "e5afccbc34dfef9fe5f3b1fd5cd58be5"
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
    "revision": "9012d0bd2f1beb532ee9efe9058ea4c3"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "ca95e1c731a24743b75f4fb7bf7a42bb"
  },
  {
    "url": "introduction/index.html",
    "revision": "757ff60ab0f69a3fcee64d0ca2f6dd1c"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "cb0822afde03101f8e97eb719e5d954a"
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
    "revision": "f881a3251139629e53bbfe3a3de96006"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "c0469ae20dd85bac5741efdafcbf9423"
  },
  {
    "url": "resources/download/index.html",
    "revision": "5b35245e7abb9aa291600bd63e493988"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "8928a4e7a8891a232d9d1ca0767a592b"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "cf9ed36096caa2cd1a4f982157c7e9c6"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "eb5fdfb030c017de851d167bcd4c45fb"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "e2aeb737c97a96d089f4d3c688f7c4ff"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "1d00a3b9f13644e0027e616b873b9331"
  },
  {
    "url": "visual/index.html",
    "revision": "1832c6ec9754bd17c181e9282a98d88d"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "9ca034b38edef78dda56904f9d16d540"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "2490cdf97ef7e95bf4e1d350ed87e4f7"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "1bd31ddf3f79d5ed2f8a797dc5b01eca"
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
