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
    "revision": "db84314ebf9bc21ef8dce03b4bbd9a44"
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
    "revision": "c0c3ddcdca2ce82a9108690714f3532f"
  },
  {
    "url": "assets/css/0.styles.942d9200.css",
    "revision": "07754c4169be89c555e512d585381fa9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b530ebf6.js",
    "revision": "ea0cc14af62afbc4d2fc064834270335"
  },
  {
    "url": "assets/js/11.a1aadd4e.js",
    "revision": "fac87c88535e665b0ff210611cd011d6"
  },
  {
    "url": "assets/js/12.84515921.js",
    "revision": "47253bd9f0707aef7cf5e4e92da70a72"
  },
  {
    "url": "assets/js/13.f944ee48.js",
    "revision": "79497efd07532e9727c5c5dd18e249f5"
  },
  {
    "url": "assets/js/14.266ce5bd.js",
    "revision": "e3e71bd761c156184f9472af3ac711b6"
  },
  {
    "url": "assets/js/15.040ba2ce.js",
    "revision": "bb0b70ebe49183f3c5e007bb39b2f19f"
  },
  {
    "url": "assets/js/16.24f268ad.js",
    "revision": "fb753d9765361a403c5b5836d63d272e"
  },
  {
    "url": "assets/js/17.c2370e72.js",
    "revision": "a8caf7f7106ab8627dbe33c0cd3824a5"
  },
  {
    "url": "assets/js/18.a9ce9be1.js",
    "revision": "b1b9a743e9cdfa7bbfd82b0f599bf93d"
  },
  {
    "url": "assets/js/19.098936bc.js",
    "revision": "9575b538578577347faea12f7b407124"
  },
  {
    "url": "assets/js/2.1183511f.js",
    "revision": "c265360e8146962eff605f634d197db5"
  },
  {
    "url": "assets/js/20.4318464c.js",
    "revision": "92d7f5774b6b403fe46c691f87fa5dab"
  },
  {
    "url": "assets/js/21.45c88624.js",
    "revision": "f741d571a1ae09d98662f786bd2127ba"
  },
  {
    "url": "assets/js/22.4b0f7cef.js",
    "revision": "85b9cf5e70fdce7edcbe3e2d2b68202b"
  },
  {
    "url": "assets/js/23.32b450b4.js",
    "revision": "010b2d65d8af0f026aa35bee7a48cadd"
  },
  {
    "url": "assets/js/24.78bffe10.js",
    "revision": "53728f98dc19221232319c2c5382f09b"
  },
  {
    "url": "assets/js/25.14a3bf2a.js",
    "revision": "d0326cb2766879a829d680d6cc7f117a"
  },
  {
    "url": "assets/js/26.281f6556.js",
    "revision": "3ddc8eca38563f6e09abad141f5ed3cc"
  },
  {
    "url": "assets/js/27.43183bbe.js",
    "revision": "29d1cb01ae54bbfb89310abfde91d78e"
  },
  {
    "url": "assets/js/28.46ad0858.js",
    "revision": "cc17a24d8638434f4577f64e46861ee2"
  },
  {
    "url": "assets/js/29.a9259bbf.js",
    "revision": "71edf54e87ae18c13f3b14f58dff8370"
  },
  {
    "url": "assets/js/3.e5a48d8c.js",
    "revision": "0c1d7fb58762d78e7823f1279617567f"
  },
  {
    "url": "assets/js/30.73a19618.js",
    "revision": "2ee4137af4d85cbef670b1661ad592fe"
  },
  {
    "url": "assets/js/31.647e0553.js",
    "revision": "241f3640e9fae05864d7d9a44d31c655"
  },
  {
    "url": "assets/js/32.989866c5.js",
    "revision": "91db9bae0e4a215f8f724b200a6239a3"
  },
  {
    "url": "assets/js/4.715b2b4d.js",
    "revision": "b0cb6b91403bb66b9c44e1e706d4cd97"
  },
  {
    "url": "assets/js/5.34c47d76.js",
    "revision": "0638369bd2617aa2791590a063460aa2"
  },
  {
    "url": "assets/js/6.5a949dde.js",
    "revision": "031eebb84dd7f84c8ce04acb5b373f6b"
  },
  {
    "url": "assets/js/7.076ae5c8.js",
    "revision": "1313d6c31a43fa5b3c9afde7df7cecf7"
  },
  {
    "url": "assets/js/8.5f5ceb20.js",
    "revision": "643d74d5cf6afef0bb3f62c897d1eb10"
  },
  {
    "url": "assets/js/9.5b80694a.js",
    "revision": "d56afce5cdb0a20edde1e556ff5a638a"
  },
  {
    "url": "assets/js/app.88564251.js",
    "revision": "86a5ddcfc6a80fecc2da4050e670ec9b"
  },
  {
    "url": "components/banner/index.html",
    "revision": "a16b83dcaeb0cb6f9e75d9744abc0d4e"
  },
  {
    "url": "components/button/index.html",
    "revision": "c81e6fbbc32b34415e1dd64e77280125"
  },
  {
    "url": "components/card/index.html",
    "revision": "99921ef2fd8583c9643f1ea3918c86da"
  },
  {
    "url": "components/code/index.html",
    "revision": "2ce2005c7e68abb6e9f63230258ecab8"
  },
  {
    "url": "components/date/index.html",
    "revision": "f1ae7e1c423f6e75fafaaee92f2e1572"
  },
  {
    "url": "components/index.html",
    "revision": "0562b0efa2b0701594175e5638241f0e"
  },
  {
    "url": "components/modal/index.html",
    "revision": "d6e14d62495fd4dcbf749d56b659e29b"
  },
  {
    "url": "components/overview/index.html",
    "revision": "60a77e4b6c8181826fb9d7c4055d044a"
  },
  {
    "url": "components/progress/index.html",
    "revision": "1f5f3ebe3286199cda99279f288d86c1"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "0564140447ffc32cd3ae2fd1c724e479"
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
    "revision": "f67fc7b2974ef89fa2445778be52fdc0"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "c831092645a56df87e08239d6ded8360"
  },
  {
    "url": "introduction/index.html",
    "revision": "306741cb2d83ff96ad00be74849ca7ae"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "e080dbcc62b24559ac54bf5bb2d7c63c"
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
    "revision": "65fc65af93d65bd88f73b95281c41b31"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "f7ec7c598232bf1c9e16362469e181f9"
  },
  {
    "url": "resources/download/index.html",
    "revision": "75fc0855106e275009c5c42f8b300fd6"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "33b483e7c8018161be9fb98f1b2a692b"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "9158341bf07e6f9324950243cc89a41d"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "ae31bb46e2bf0ae2abe80dae20bcee40"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "299a9a0490a3c0ac6f46752e9f507204"
  },
  {
    "url": "visual/index.html",
    "revision": "c7a9e5eae3fb24a2f796b7d132ecb20e"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "ff6a87ca391d4b833130a938ccb10e0d"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "4d0626e637b85373d7c21d9af7d7be29"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "dcce3ec6351fcd5fcc68d7416d9200e6"
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
