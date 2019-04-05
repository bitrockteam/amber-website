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
    "revision": "23cde67832022a145efcecabb619339e"
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
    "url": "assets/css/0.styles.c87fcc55.css",
    "revision": "eb05b961e68ff4f4b28c91bb0721c145"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dbc1529b.js",
    "revision": "0bf8843c1db60e4b9febb92718ec99b7"
  },
  {
    "url": "assets/js/11.b9558fcb.js",
    "revision": "dc02c31af997fe543a5ae500c5a04775"
  },
  {
    "url": "assets/js/12.081cbf3b.js",
    "revision": "66b1e009516f2c3d2883fd349f01a003"
  },
  {
    "url": "assets/js/13.2d119cf7.js",
    "revision": "a13f06521b24d5ff9ed804f459a70397"
  },
  {
    "url": "assets/js/14.4011e5e8.js",
    "revision": "20749fb622ae22a6f9c86622aca56cad"
  },
  {
    "url": "assets/js/15.96cb8946.js",
    "revision": "b06c834c217d1aaabf7bf7ca05af422b"
  },
  {
    "url": "assets/js/16.cd279614.js",
    "revision": "61be08bf24ece491c3d69a667b727c84"
  },
  {
    "url": "assets/js/17.2c192892.js",
    "revision": "e92ae0319d8c9bef174236674734c595"
  },
  {
    "url": "assets/js/18.e4499339.js",
    "revision": "867d47c2ecdcf13af70f8a403c60db59"
  },
  {
    "url": "assets/js/19.e448dea5.js",
    "revision": "2618b87b5edcf7dbe0b7a6f677ec4901"
  },
  {
    "url": "assets/js/2.9f3d7f6b.js",
    "revision": "575a75705dc4dbf04427f633e89c040f"
  },
  {
    "url": "assets/js/20.fab1a5f9.js",
    "revision": "25f4adbd04f24f8d7198a775924098aa"
  },
  {
    "url": "assets/js/21.7c8e2139.js",
    "revision": "db0e95389a9abe9bcddf4ea57d594c18"
  },
  {
    "url": "assets/js/22.4bbaa722.js",
    "revision": "935f5b0901bea62e2cfdb0ad1ec55180"
  },
  {
    "url": "assets/js/23.6e179dfd.js",
    "revision": "c12da6c1053f1395a77c230f407f6572"
  },
  {
    "url": "assets/js/24.c0711b15.js",
    "revision": "51ee1dfbd12cebb6ac6a98e886377569"
  },
  {
    "url": "assets/js/25.c1ceae1c.js",
    "revision": "6d4908cca346be1bcd9383cdda8331cb"
  },
  {
    "url": "assets/js/26.78a4f653.js",
    "revision": "3fc27f9aed074bbedddecbeda501eb62"
  },
  {
    "url": "assets/js/27.025363f6.js",
    "revision": "ab395848f48737b90f50d569e1f8315d"
  },
  {
    "url": "assets/js/28.71086e5f.js",
    "revision": "7e28ddac8caf26f2c57beb9b03a15b66"
  },
  {
    "url": "assets/js/29.305b7454.js",
    "revision": "b5f2c13aaa7ff18ca7d6c4aa6f772f60"
  },
  {
    "url": "assets/js/3.826341a1.js",
    "revision": "6ad1388ec247b4303481e02b42c11580"
  },
  {
    "url": "assets/js/30.5940537b.js",
    "revision": "81eeaea713d435307a055317309dad0f"
  },
  {
    "url": "assets/js/31.d26ec5af.js",
    "revision": "98690737e791aace217a805148de00b3"
  },
  {
    "url": "assets/js/32.a261715d.js",
    "revision": "cd45f76ac0faf0b32ad52954925e5288"
  },
  {
    "url": "assets/js/33.00933974.js",
    "revision": "29498f12b03249e57209d21c912e0683"
  },
  {
    "url": "assets/js/34.60f44c6f.js",
    "revision": "016ad0b2e90c47101af29dc9b530ca12"
  },
  {
    "url": "assets/js/4.42edfde9.js",
    "revision": "329a1b6bac1ae79920fd4e86c0487351"
  },
  {
    "url": "assets/js/5.c65ac2a6.js",
    "revision": "7d2dc4d993a624f558992723832a354e"
  },
  {
    "url": "assets/js/6.aa50093e.js",
    "revision": "ec87b68bbd838784451cc86607b022bf"
  },
  {
    "url": "assets/js/7.16c07564.js",
    "revision": "bc36014ef99969af9320ed07ea1f5933"
  },
  {
    "url": "assets/js/8.04b7298c.js",
    "revision": "f50cb09f147ebcfdc4ee061b66e62fb4"
  },
  {
    "url": "assets/js/9.9a06c2be.js",
    "revision": "5c5cd6706c0e7ca6b3a2e2f64cf6bd30"
  },
  {
    "url": "assets/js/app.afcea367.js",
    "revision": "87bc2061f415ef1a2dbf876f5fe24f36"
  },
  {
    "url": "components/banner/index.html",
    "revision": "70c27cfa101d1ed089c6d0f10774e9c4"
  },
  {
    "url": "components/button/index.html",
    "revision": "ce5f762f1dee0aa2297e1aed20b0706f"
  },
  {
    "url": "components/card/index.html",
    "revision": "8b064e9baf44861c4eb1a106521109fc"
  },
  {
    "url": "components/code/index.html",
    "revision": "db01dd4e291601332dd9f52b86752ebf"
  },
  {
    "url": "components/date/index.html",
    "revision": "879d59d8573c150f366b6dea34829cef"
  },
  {
    "url": "components/index.html",
    "revision": "3996a3ab947a0555c863ac125af47bc9"
  },
  {
    "url": "components/modal/index.html",
    "revision": "f372093cf6c020c6b6f41a62c01c2f4f"
  },
  {
    "url": "components/overview/index.html",
    "revision": "f9c49643921250267a7e92bbf2b38ae4"
  },
  {
    "url": "components/progress/index.html",
    "revision": "68f535c10fd9c5386b6953f6527b4eb2"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "cd6689a61b3f40668584eddc3f9ecc9c"
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
    "revision": "e68c51cec7687e503797861d8462f70a"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "a0d59ddbf8809772e7bb897b28b52984"
  },
  {
    "url": "introduction/index.html",
    "revision": "4ae6873918d6df3b50515ca7690680ff"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "5516e0324b4a7111b7e6553880aa9ee6"
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
    "revision": "580b660907589c34c5a4eeefaef89ed7"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "6801c287dc7784512e8c0361f1660d61"
  },
  {
    "url": "resources/download/index.html",
    "revision": "0f41c528c6c3c9de7a1fdac97507d5c9"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "1039f6627ec601bad6a3f21792d9ff2e"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "163318bbe55096bb65b3d0ca05eb6b36"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "6cdec52a668f7984c79852fcce483901"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "0ca40ffb822639149a259276a88e6261"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "16a2424b91f2dc19826bbe20dab16b7a"
  },
  {
    "url": "visual/index.html",
    "revision": "95bf9207e0a57946393ef6e066152712"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "607e802f950f4b02954fc3e631346158"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "92f818cfc190a0c4ba4a4031ba54d389"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "70241d30da757aba520985472498f2a4"
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
