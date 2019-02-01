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
    "revision": "21135802398788dcfbcae657484a2b0f"
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
    "url": "assets/js/app.22286d7b.js",
    "revision": "a2ddfdf179311166eefb713c6b12b49e"
  },
  {
    "url": "components/banner/index.html",
    "revision": "414b7d6fc87a21718c5b5efc42b83b6d"
  },
  {
    "url": "components/button/index.html",
    "revision": "817ebdaeaa54a11aa32b81f97d97551c"
  },
  {
    "url": "components/card/index.html",
    "revision": "7af5800d9eca18f82b209d443c30d05d"
  },
  {
    "url": "components/code/index.html",
    "revision": "61d7daf3e2183a989504b1277cea49be"
  },
  {
    "url": "components/date/index.html",
    "revision": "88ee6333e7864663537f8079aea206c2"
  },
  {
    "url": "components/index.html",
    "revision": "933961d33dac68078f4682731ec6b26c"
  },
  {
    "url": "components/modal/index.html",
    "revision": "d8fd81da9bc6b6363f96f9de35a683e4"
  },
  {
    "url": "components/overview/index.html",
    "revision": "8f8336ca172ac466a5d8bd653057e453"
  },
  {
    "url": "components/progress/index.html",
    "revision": "cf99922debaa9615d046be50a4312298"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "42f3fcee48a8021c079bd50b61b69344"
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
    "revision": "9188a7c4e271072d3394b7df5f779d1b"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "fda547ed549739d182093333c6234f6f"
  },
  {
    "url": "introduction/index.html",
    "revision": "401caa9ddc2d925832fc74902c947275"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "98f45dc665e07b6079fdfd8cde4358fe"
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
    "revision": "4668194aaa5f0bd7b8005919b791188e"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "1cbe9fa2ada9e3db83943e0a00a3aecf"
  },
  {
    "url": "resources/download/index.html",
    "revision": "bb04348de92b509e188e64e08d93060a"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "54b762d0d5d5e4bfd793cc17196bbce1"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "9b6d390525d1dfa1396b99bdc059c885"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "2f8582a1314d20fe0618232351238142"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "3642ab02ec9304f0867005d02b4e0224"
  },
  {
    "url": "visual/index.html",
    "revision": "4d840a70d49d725ce49aaec0e18a3dbb"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "13c98c7f124b88dd2cc00326a72fb25b"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "7c45bea01537ae53f56a3e7de7229d6b"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "58fbb79472551dfce35bf4cd56f3a60e"
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
