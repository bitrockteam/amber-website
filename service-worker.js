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
    "revision": "414b635f2bef4b63dd555bd8355cdf9f"
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
    "url": "assets/js/10.edb48f4e.js",
    "revision": "ea0cc14af62afbc4d2fc064834270335"
  },
  {
    "url": "assets/js/11.63ec7f03.js",
    "revision": "0e611e48ffbde07f275c149fd93a7b32"
  },
  {
    "url": "assets/js/12.c5d27722.js",
    "revision": "e761400c0a29cd7641f75da40660a8ea"
  },
  {
    "url": "assets/js/13.197b3a1d.js",
    "revision": "79497efd07532e9727c5c5dd18e249f5"
  },
  {
    "url": "assets/js/14.3e52435b.js",
    "revision": "e3e71bd761c156184f9472af3ac711b6"
  },
  {
    "url": "assets/js/15.0c4adea5.js",
    "revision": "bb0b70ebe49183f3c5e007bb39b2f19f"
  },
  {
    "url": "assets/js/16.7e21bd4f.js",
    "revision": "fb753d9765361a403c5b5836d63d272e"
  },
  {
    "url": "assets/js/17.83a8e61d.js",
    "revision": "df1195f09ff8185546edd14e32937c80"
  },
  {
    "url": "assets/js/18.12e4136d.js",
    "revision": "b1b9a743e9cdfa7bbfd82b0f599bf93d"
  },
  {
    "url": "assets/js/19.57e7069a.js",
    "revision": "9575b538578577347faea12f7b407124"
  },
  {
    "url": "assets/js/2.a4e7f6b5.js",
    "revision": "c265360e8146962eff605f634d197db5"
  },
  {
    "url": "assets/js/20.52623cc9.js",
    "revision": "92d7f5774b6b403fe46c691f87fa5dab"
  },
  {
    "url": "assets/js/21.94033159.js",
    "revision": "f741d571a1ae09d98662f786bd2127ba"
  },
  {
    "url": "assets/js/22.5ce094bb.js",
    "revision": "85b9cf5e70fdce7edcbe3e2d2b68202b"
  },
  {
    "url": "assets/js/23.c2daa527.js",
    "revision": "010b2d65d8af0f026aa35bee7a48cadd"
  },
  {
    "url": "assets/js/24.0f7838e8.js",
    "revision": "53728f98dc19221232319c2c5382f09b"
  },
  {
    "url": "assets/js/25.8b43a1b3.js",
    "revision": "d0326cb2766879a829d680d6cc7f117a"
  },
  {
    "url": "assets/js/26.f39a1619.js",
    "revision": "3ddc8eca38563f6e09abad141f5ed3cc"
  },
  {
    "url": "assets/js/27.4740df7f.js",
    "revision": "29d1cb01ae54bbfb89310abfde91d78e"
  },
  {
    "url": "assets/js/28.1080b0f0.js",
    "revision": "cc17a24d8638434f4577f64e46861ee2"
  },
  {
    "url": "assets/js/29.dd818a57.js",
    "revision": "71edf54e87ae18c13f3b14f58dff8370"
  },
  {
    "url": "assets/js/3.16b3cb1b.js",
    "revision": "a0dc8c729afdd77a84636ca5b606aad9"
  },
  {
    "url": "assets/js/30.ccd5a40e.js",
    "revision": "2ee4137af4d85cbef670b1661ad592fe"
  },
  {
    "url": "assets/js/31.0795d8d8.js",
    "revision": "06e1e048d3e459ab3098a2e84292b906"
  },
  {
    "url": "assets/js/32.989866c5.js",
    "revision": "91db9bae0e4a215f8f724b200a6239a3"
  },
  {
    "url": "assets/js/4.54dd0c12.js",
    "revision": "b0cb6b91403bb66b9c44e1e706d4cd97"
  },
  {
    "url": "assets/js/5.34c47d76.js",
    "revision": "0638369bd2617aa2791590a063460aa2"
  },
  {
    "url": "assets/js/6.f95168b9.js",
    "revision": "031eebb84dd7f84c8ce04acb5b373f6b"
  },
  {
    "url": "assets/js/7.f56683ee.js",
    "revision": "1313d6c31a43fa5b3c9afde7df7cecf7"
  },
  {
    "url": "assets/js/8.ecaf6033.js",
    "revision": "643d74d5cf6afef0bb3f62c897d1eb10"
  },
  {
    "url": "assets/js/9.412a8776.js",
    "revision": "d56afce5cdb0a20edde1e556ff5a638a"
  },
  {
    "url": "assets/js/app.789186d1.js",
    "revision": "f02214f9dd7bfd9a03745b2a2b7c1741"
  },
  {
    "url": "components/banner/index.html",
    "revision": "325b293a74b9ea8fe07df8941fac4c80"
  },
  {
    "url": "components/button/index.html",
    "revision": "5671de935eb470f1c4792ae95b06fe26"
  },
  {
    "url": "components/card/index.html",
    "revision": "17e7acd0ee66b5ee12fa472bd83fb1cc"
  },
  {
    "url": "components/code/index.html",
    "revision": "b023288153e31f0012913d78648dc66b"
  },
  {
    "url": "components/date/index.html",
    "revision": "2b458d04e7f34b9eb6f2f55a6c77d812"
  },
  {
    "url": "components/index.html",
    "revision": "f049558223d95b41a2e1f84bbf9f5d50"
  },
  {
    "url": "components/modal/index.html",
    "revision": "0f2de443707cdfb55ceb15fcf7f86c98"
  },
  {
    "url": "components/overview/index.html",
    "revision": "771dac354b6cbd7606d387e5d0c7c1ed"
  },
  {
    "url": "components/progress/index.html",
    "revision": "6d8b2160e6c975c50177f5cb03dc4ace"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "92a0098881bd1585cca8811e0b67f12a"
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
    "revision": "22548ceb6178c6db6db0368dafbbebca"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "fac38f84f97195b1b3caf5fa8ce6527e"
  },
  {
    "url": "introduction/index.html",
    "revision": "281423c7cdefa8e6cff6acbc428b2949"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "17c0eec8717f65eae1763ae689e97ccc"
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
    "revision": "56a0edbe151fd3d0d5596c7ffa93f4a5"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "47ef44f05be59d939541992f90a06c67"
  },
  {
    "url": "resources/download/index.html",
    "revision": "795a4dc925d6b8a10062bcaf06092e92"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "3805e73304096adfa4da2197c8a269eb"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "b528f5e47adcf7f8296a5ef81559d81a"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "7228e220c995656507e3d29631c29ca4"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "3505e5f3719cdc220f37429c8641b637"
  },
  {
    "url": "visual/index.html",
    "revision": "c910a74cc284d6c8783d6a3f1c76faaa"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "449113db1cbc5690fa1a952ac13fe516"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "1a40635dcea67e9682d8b0f79a830f7d"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "cdb8706a0984ad7f41ac5462ab1e64a8"
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
