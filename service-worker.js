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
    "revision": "a50c6d57cb015ac093e62f9ae55ee1b6"
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
    "url": "assets/css/0.styles.ef9c680b.css",
    "revision": "b04d414dce2f14f9891a26e7f7675f58"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d2cbbd96.js",
    "revision": "7e6078c5d6304edb8072d6ad623d7d56"
  },
  {
    "url": "assets/js/11.e75db2ce.js",
    "revision": "dd4fa1a0bc18a03ddfc25e04a8e2323a"
  },
  {
    "url": "assets/js/12.f61c0303.js",
    "revision": "82b7010f0dba2b31b4a237d0f3533ba6"
  },
  {
    "url": "assets/js/13.503f6cf6.js",
    "revision": "3f4979aec842b21701ab79dcd2622688"
  },
  {
    "url": "assets/js/14.616bb2b9.js",
    "revision": "9087f5fe5df5b8dd5f386f3f4d4e32b5"
  },
  {
    "url": "assets/js/15.635b22f0.js",
    "revision": "fab857fa51884a0b5dcf6d771050b5db"
  },
  {
    "url": "assets/js/16.3bcf867d.js",
    "revision": "849cab457c837663b7d12bf5bc502ee5"
  },
  {
    "url": "assets/js/17.ebfc23a2.js",
    "revision": "c358e91e9e1258338d26b1494cf0d94f"
  },
  {
    "url": "assets/js/18.2aba7d8e.js",
    "revision": "0a50f4399090d3ff163fe0a2bce8869a"
  },
  {
    "url": "assets/js/19.3d132ca4.js",
    "revision": "ad2fa1105c16972404e6c483889e2b8f"
  },
  {
    "url": "assets/js/2.102ad1cb.js",
    "revision": "4e840830ffaa2b07f64464532d6b1b2b"
  },
  {
    "url": "assets/js/20.5361c32a.js",
    "revision": "464435a37000a30362c948374968063e"
  },
  {
    "url": "assets/js/21.7b232e58.js",
    "revision": "de405304e610772be0ac3a1e9016d304"
  },
  {
    "url": "assets/js/22.abdf1bc5.js",
    "revision": "15061947c1317297775f34148c37acd3"
  },
  {
    "url": "assets/js/23.d2a85c1f.js",
    "revision": "920b8a3f98bcc864673e59c0d4c039c5"
  },
  {
    "url": "assets/js/24.7e1c9cd8.js",
    "revision": "b0c2cec37cb8528bd7a04b0e0e6b5187"
  },
  {
    "url": "assets/js/25.5aa36f9a.js",
    "revision": "223f20a5a51f50b9f0862bfc399aaa85"
  },
  {
    "url": "assets/js/26.8fa2fa1f.js",
    "revision": "e2c4d6510a35d74611ad94b94b2ee2d5"
  },
  {
    "url": "assets/js/27.06fed5e3.js",
    "revision": "2ee43aa0228fb303f84aee400e66ffec"
  },
  {
    "url": "assets/js/28.e38d1e6b.js",
    "revision": "e2c6ca0db5bf2176d17b4fc3d9d40798"
  },
  {
    "url": "assets/js/29.6efe33d2.js",
    "revision": "ceb7db75c03fc0b6b8b63a8680a36e14"
  },
  {
    "url": "assets/js/3.7e4ecca1.js",
    "revision": "b4f1432735fb34fef7d94c148c7367ff"
  },
  {
    "url": "assets/js/30.f466f60e.js",
    "revision": "a3216f75d4db3144a5cb5724540c946b"
  },
  {
    "url": "assets/js/31.55ad2b9c.js",
    "revision": "d778811d28d909635177e88dabf4e589"
  },
  {
    "url": "assets/js/32.10d64c49.js",
    "revision": "08ac1c6dd8bcbffe800a80a656e8d3a8"
  },
  {
    "url": "assets/js/33.b38617e2.js",
    "revision": "4c4ae3c63c3ae27da33225e6fc21140e"
  },
  {
    "url": "assets/js/4.379b43fe.js",
    "revision": "ad9d20645786c42f5ab0628a9d613170"
  },
  {
    "url": "assets/js/5.8cf08c2d.js",
    "revision": "5ed2da9e4d38a4a516904819c16ec322"
  },
  {
    "url": "assets/js/6.2a415a93.js",
    "revision": "17ae6a9e7a26fa97f954b18b19449bb9"
  },
  {
    "url": "assets/js/7.47dd98e6.js",
    "revision": "57a47e670e57178286614d9b0d97b1a5"
  },
  {
    "url": "assets/js/8.39c289aa.js",
    "revision": "2dc82673d7bc6cfdf5a7d227f6fae999"
  },
  {
    "url": "assets/js/9.1da1643e.js",
    "revision": "47e864d88b05950f9bb37d72493b8603"
  },
  {
    "url": "assets/js/app.aa5eb44f.js",
    "revision": "94bbe644c03ee5582af387e26c6443a7"
  },
  {
    "url": "components/banner/index.html",
    "revision": "3b42610fe496213ff055ebe1772eb8e7"
  },
  {
    "url": "components/button/index.html",
    "revision": "b73b4d3c7c3ec89ee8115f234dd64723"
  },
  {
    "url": "components/card/index.html",
    "revision": "fd6df8ce7770f8b1b413b3d34102d044"
  },
  {
    "url": "components/code/index.html",
    "revision": "4af2856e5f94c840d5827d2df930e697"
  },
  {
    "url": "components/date/index.html",
    "revision": "9c42c777f6d0c161847a55cd97f08e9f"
  },
  {
    "url": "components/index.html",
    "revision": "8ccfd9af53138f81f43d27a34793c37d"
  },
  {
    "url": "components/modal/index.html",
    "revision": "19d08544e893a70827679f47c12faa11"
  },
  {
    "url": "components/overview/index.html",
    "revision": "7c685ff0f9de2407d3ecbd71ad5fa63d"
  },
  {
    "url": "components/progress/index.html",
    "revision": "d8149050b0e5790752251ffaa057d8ea"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "6d7498c854df88b5aa51cd3d9f7f7aa7"
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
    "revision": "3bff78d2e107b8fe6f6225f7b1e70e39"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "0cab16c26dc66e05219387482910d4e4"
  },
  {
    "url": "introduction/index.html",
    "revision": "f4b1779fff18f024b9222417ec12761f"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "521bf4c16cf1feb6f52ed4090614c47b"
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
    "revision": "2eaa5214f8656daa55a8f570745efe1e"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "20c23ebb2d8dccfd7c1bebc62243fb85"
  },
  {
    "url": "resources/download/index.html",
    "revision": "67d4aebea4891753ad5a0be8d49c84d5"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "2a2a16474a361fd1a0a53eb164403a97"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "05204523b8b4b1602ecbf090a96b9f75"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "be56cc244070b15c9f90aa225d1348bc"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "dc40d85601dc80a1144df698b966be66"
  },
  {
    "url": "visual/index.html",
    "revision": "81e775c0f2546d0e3e0f4f1dacc0a446"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "56bce60b4891e76ac82b1c0f774ea6c4"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "f2f56016fe469bb4ea22b4269c0abee0"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "a66b18f031fa88884156d8035b68d945"
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
