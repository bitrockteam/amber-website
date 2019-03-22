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
    "revision": "ddd70a5d39ce4454573a11cc897dea33"
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
    "url": "assets/css/0.styles.96bd971a.css",
    "revision": "6ebff7b603a3fe33c52e62ddf162fe35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.726eb297.js",
    "revision": "4cc37ed4752dfb39d03c3ff26cef881b"
  },
  {
    "url": "assets/js/11.f349ccec.js",
    "revision": "7d095f070303b2c2adaaa910df875b13"
  },
  {
    "url": "assets/js/12.537fa151.js",
    "revision": "b87abbc13af4084dd9757de2e8e14621"
  },
  {
    "url": "assets/js/13.863dfd48.js",
    "revision": "4015e9015683d2681b4e281e8c5a68f1"
  },
  {
    "url": "assets/js/14.67752e14.js",
    "revision": "20749fb622ae22a6f9c86622aca56cad"
  },
  {
    "url": "assets/js/15.ae47bf9d.js",
    "revision": "1ee7b196827127fe61f68c47290c6851"
  },
  {
    "url": "assets/js/16.21c1816a.js",
    "revision": "61be08bf24ece491c3d69a667b727c84"
  },
  {
    "url": "assets/js/17.4c8121ae.js",
    "revision": "7b7cdadd598107ae24fb283a309dfb02"
  },
  {
    "url": "assets/js/18.e74cce19.js",
    "revision": "867d47c2ecdcf13af70f8a403c60db59"
  },
  {
    "url": "assets/js/19.d5a71243.js",
    "revision": "47f1d3168e91d0d97f2879cd8f59c12b"
  },
  {
    "url": "assets/js/2.48ca84a2.js",
    "revision": "575a75705dc4dbf04427f633e89c040f"
  },
  {
    "url": "assets/js/20.a97050ec.js",
    "revision": "25f4adbd04f24f8d7198a775924098aa"
  },
  {
    "url": "assets/js/21.d09b1ef0.js",
    "revision": "db0e95389a9abe9bcddf4ea57d594c18"
  },
  {
    "url": "assets/js/22.a05e81fc.js",
    "revision": "935f5b0901bea62e2cfdb0ad1ec55180"
  },
  {
    "url": "assets/js/23.7c2bb6f0.js",
    "revision": "c12da6c1053f1395a77c230f407f6572"
  },
  {
    "url": "assets/js/24.63f9e795.js",
    "revision": "51ee1dfbd12cebb6ac6a98e886377569"
  },
  {
    "url": "assets/js/25.051c9a91.js",
    "revision": "6d4908cca346be1bcd9383cdda8331cb"
  },
  {
    "url": "assets/js/26.5abc0baa.js",
    "revision": "3fc27f9aed074bbedddecbeda501eb62"
  },
  {
    "url": "assets/js/27.532bed68.js",
    "revision": "ab395848f48737b90f50d569e1f8315d"
  },
  {
    "url": "assets/js/28.342cf28b.js",
    "revision": "7e28ddac8caf26f2c57beb9b03a15b66"
  },
  {
    "url": "assets/js/29.28355eb2.js",
    "revision": "b5f2c13aaa7ff18ca7d6c4aa6f772f60"
  },
  {
    "url": "assets/js/3.323fa1be.js",
    "revision": "6ad1388ec247b4303481e02b42c11580"
  },
  {
    "url": "assets/js/30.1689fbe8.js",
    "revision": "81eeaea713d435307a055317309dad0f"
  },
  {
    "url": "assets/js/31.4016b43c.js",
    "revision": "98690737e791aace217a805148de00b3"
  },
  {
    "url": "assets/js/32.41fe2be3.js",
    "revision": "cd45f76ac0faf0b32ad52954925e5288"
  },
  {
    "url": "assets/js/33.efb988e0.js",
    "revision": "29498f12b03249e57209d21c912e0683"
  },
  {
    "url": "assets/js/34.60f44c6f.js",
    "revision": "016ad0b2e90c47101af29dc9b530ca12"
  },
  {
    "url": "assets/js/4.32ccb898.js",
    "revision": "f5684e95cdd08f3da10b0778c79768e5"
  },
  {
    "url": "assets/js/5.295ef125.js",
    "revision": "80f3a3258e95b458bf086bed2114537b"
  },
  {
    "url": "assets/js/6.aa50093e.js",
    "revision": "ec87b68bbd838784451cc86607b022bf"
  },
  {
    "url": "assets/js/7.04c0a464.js",
    "revision": "bc36014ef99969af9320ed07ea1f5933"
  },
  {
    "url": "assets/js/8.6608e6de.js",
    "revision": "adf989d1b878964e5e9202cf97ab3830"
  },
  {
    "url": "assets/js/9.efe08d2a.js",
    "revision": "b8679b9d2a40e03bf100e74d2e9515ad"
  },
  {
    "url": "assets/js/app.be19956b.js",
    "revision": "89d85d5e11888f2be1f1b3bf1cfee0dc"
  },
  {
    "url": "components/banner/index.html",
    "revision": "40ed4df0fed7c33265a0cfe252159eda"
  },
  {
    "url": "components/button/index.html",
    "revision": "6b148bed68452a61ab3e1e9c59e862fd"
  },
  {
    "url": "components/card/index.html",
    "revision": "0a52723fe61691ab5d3bddab638b5e9f"
  },
  {
    "url": "components/code/index.html",
    "revision": "2a46a11556caa65a757eb3579099ea73"
  },
  {
    "url": "components/date/index.html",
    "revision": "72d55872c0635c600285dff14e907337"
  },
  {
    "url": "components/index.html",
    "revision": "e6a6dd21b9ddee9bc51017f5d6ac572b"
  },
  {
    "url": "components/modal/index.html",
    "revision": "31c83007bde798d965dc1ca15eb75cff"
  },
  {
    "url": "components/overview/index.html",
    "revision": "a6ca58bf548bfa12956ba422d53ad7cd"
  },
  {
    "url": "components/progress/index.html",
    "revision": "0d0628ae81011cad0e60682ea59b9a4b"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "b261dc2309cec8c7d2e55b847791d8a7"
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
    "revision": "1ed7e4679ef2771a17beb70415bffe77"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "9c21ef0e7b3ae3853696e1606830d735"
  },
  {
    "url": "introduction/index.html",
    "revision": "4b3ac4e9461bcc1205f385812d81852a"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "4e4ec08d687116fba0ba95341c3bc7e0"
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
    "revision": "99f6aab05f2cfa22729cc1389b659f31"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "b2acd939815d8a61d1b7deb81b7cf1f3"
  },
  {
    "url": "resources/download/index.html",
    "revision": "c11fec804ef6b26f277a129be2184e56"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "9138a808faa31f99a0e524b56d881742"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "871df1210e5ace27ef85650a73da5af7"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "161b67d34575a6b38506835fafede5cf"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "d53aa6e3a3fe81e180e042394314be30"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "b358c7c8ff03535a2e54b40363f9344a"
  },
  {
    "url": "visual/index.html",
    "revision": "61bff86fa7dc96bc2db5ab34b074a7ac"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "3f47859684a7d6e9d8985a6f828f1391"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "018baa8aee7e749faba149ee0621306d"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "cbdff11d883465adfd259c66973e9ce5"
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
