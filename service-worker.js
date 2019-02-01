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
    "revision": "c0e59b7a76c8d3419fdc496edcca16cf"
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
    "url": "assets/css/0.styles.7867ea34.css",
    "revision": "d0198bc82ecf38639cea260fb7521e88"
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
    "url": "assets/js/17.e25d89a1.js",
    "revision": "df1195f09ff8185546edd14e32937c80"
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
    "url": "assets/js/3.0f1713cf.js",
    "revision": "a0dc8c729afdd77a84636ca5b606aad9"
  },
  {
    "url": "assets/js/30.73a19618.js",
    "revision": "2ee4137af4d85cbef670b1661ad592fe"
  },
  {
    "url": "assets/js/31.0f8137e2.js",
    "revision": "06e1e048d3e459ab3098a2e84292b906"
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
    "url": "assets/js/app.fcd4b66e.js",
    "revision": "786baeaf28374d5b5e049a06f9c1d2a8"
  },
  {
    "url": "components/banner/index.html",
    "revision": "5cbe6e8531f7bf0c474ed1fc4cd72426"
  },
  {
    "url": "components/button/index.html",
    "revision": "48d19413090a716cb831b4fb2cfbf1d6"
  },
  {
    "url": "components/card/index.html",
    "revision": "4d7357156ec26b57b0aeeddb4f685a08"
  },
  {
    "url": "components/code/index.html",
    "revision": "60a0137a593ed6f6608b3e28a26a317f"
  },
  {
    "url": "components/date/index.html",
    "revision": "b8b27848e86ac51d92875b65115e72e5"
  },
  {
    "url": "components/index.html",
    "revision": "ddae59cb1642bf1e0ad455f020f3d3ec"
  },
  {
    "url": "components/modal/index.html",
    "revision": "3896b1d38ec9d8a9843b455a701d1af0"
  },
  {
    "url": "components/overview/index.html",
    "revision": "85d6f7cbc15af63fb404b03929a7c77e"
  },
  {
    "url": "components/progress/index.html",
    "revision": "e6313f2c78d7ff678c50806919f455cb"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "83975c8e50a6b29d117315451a066cb0"
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
    "revision": "850f98fcdde74f98b76fdab1f889df6d"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "1ac2f4fe61092ca76038308365be1ef1"
  },
  {
    "url": "introduction/index.html",
    "revision": "bd9cae88ab4ccc400fc2ac03839302f3"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "18bb560af83296ed2088b482fdcd4a6f"
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
    "revision": "f8b93c7ddc236c4f28be94702de36a1b"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "6a3b20b08ecfef9f62c094d7944715e3"
  },
  {
    "url": "resources/download/index.html",
    "revision": "92ae9325d8b063120bc189854c1aedf1"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "56c48acb21b3ec78d82ce8378a944b3d"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "568dd5082e2696190bcfb1d7e5345531"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "cfa14daed62e6c7bb0a6791d597fed4b"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "122db17fc8a371a509b034abd479f8eb"
  },
  {
    "url": "visual/index.html",
    "revision": "9ebb1b7fc2b2a7dff4aa4755a2643208"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "378cdcfe73f049e65f55758f29697cb8"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "f11761d555a858a24217f393d8d93a90"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "1137b5c80386214f75fb8a6d0d89a413"
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
