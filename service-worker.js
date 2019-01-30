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
    "revision": "0e6ccfd212ed6d03b140e030faadf38c"
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
    "url": "assets/js/app.33a484eb.js",
    "revision": "8de45046516da7a8ea38f9bf118f6332"
  },
  {
    "url": "components/banner/index.html",
    "revision": "3a792f9472385d24732f1c5437c3453f"
  },
  {
    "url": "components/button/index.html",
    "revision": "884fa71a5832273c17176606eaddfa89"
  },
  {
    "url": "components/card/index.html",
    "revision": "86fef09fc11888b96d4ee2aae9d5cbcb"
  },
  {
    "url": "components/code/index.html",
    "revision": "b6e2af858e5732b83c42b22e1c99ab5e"
  },
  {
    "url": "components/date/index.html",
    "revision": "c08a58f3efc0db7be5c10e302e3b78ce"
  },
  {
    "url": "components/index.html",
    "revision": "c553b8652df10e2a4841c7b7b99719a1"
  },
  {
    "url": "components/modal/index.html",
    "revision": "742e7c0bc51a6d0c3427c008a4d021ff"
  },
  {
    "url": "components/overview/index.html",
    "revision": "19f7ca7113199c03a18f5a49f7613ba6"
  },
  {
    "url": "components/progress/index.html",
    "revision": "4a51377a8d11fb41a865acd4d13fdef4"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "d8dbbcbb525367047f4cfb959d35a373"
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
    "revision": "21d64db240687e56640732186339320d"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "8985b88a9bf059011427503b8113c046"
  },
  {
    "url": "introduction/index.html",
    "revision": "3d0de706085c1391f78b620166eef8f8"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "766ae5d4b9966d1875f6eb7ae5d59391"
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
    "revision": "3753fb70c4f0b8f905894c04fbe11a49"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "51768886bdefad0794b47bb524acdf30"
  },
  {
    "url": "resources/download/index.html",
    "revision": "b137e96d75fe97dff64086593a6bba89"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "b1e09004ca8e2fce40151d6581af2dfc"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "cadc7516cc46f3bf5e8c0f4369e7dc8e"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "2d9a454e50131bd27c3ae1d92c655c6b"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "62bd99a32ed5b5e3ea114215418eb058"
  },
  {
    "url": "visual/index.html",
    "revision": "19beeaeb9ee3804af041ca0ef645f85a"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "3e08e0af3f1eb3d16db0ceeb11f65a28"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "e414df8cfde139aabd8c1e75b32d30a3"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "958256df43a16fdf514dce9b90093439"
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
