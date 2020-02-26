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
    "revision": "c577eab46ff3df0087fa34d872740635"
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
    "url": "assets/js/10.82415429.js",
    "revision": "9fa15afe6645edc5ecf75b71ea6a6e95"
  },
  {
    "url": "assets/js/11.cc2b437a.js",
    "revision": "efb59e302da7be079e1c9cea61b4f622"
  },
  {
    "url": "assets/js/12.11f787a8.js",
    "revision": "d8f7e784bcf0ff5c08cbbe748acf5dce"
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
    "url": "assets/js/15.188721d9.js",
    "revision": "ecf25811e857ebe581c750d166000ece"
  },
  {
    "url": "assets/js/16.714d56ab.js",
    "revision": "4c6fbb26943fb1015286868f10f46653"
  },
  {
    "url": "assets/js/17.51dcb562.js",
    "revision": "6d248a6485a481ac422839171fa1f3a0"
  },
  {
    "url": "assets/js/18.24c8e27e.js",
    "revision": "05f44779fed5459df117185a16385c7c"
  },
  {
    "url": "assets/js/19.94bf169e.js",
    "revision": "14af3ed68edffafaf580d0aed875a965"
  },
  {
    "url": "assets/js/2.9f3d7f6b.js",
    "revision": "575a75705dc4dbf04427f633e89c040f"
  },
  {
    "url": "assets/js/20.3920a9df.js",
    "revision": "5cd887a135274620cbea5ce11fb4958a"
  },
  {
    "url": "assets/js/21.0f8a85ac.js",
    "revision": "686aa19153dfe9dcaeb096e331b47eeb"
  },
  {
    "url": "assets/js/22.73c10c3d.js",
    "revision": "9be67810821edec98afd1b4a625568d6"
  },
  {
    "url": "assets/js/23.60bfd09a.js",
    "revision": "0fbcfd6996144b9f45f29a855fa6a7d6"
  },
  {
    "url": "assets/js/24.6ad90d25.js",
    "revision": "a3ee85d09e1d591166c1c1d29501b202"
  },
  {
    "url": "assets/js/25.67bb721e.js",
    "revision": "b4f8ab30836101449f9b1d3db241aaeb"
  },
  {
    "url": "assets/js/26.528b4b7e.js",
    "revision": "84168c8b52ccdc40fd90e510b3247913"
  },
  {
    "url": "assets/js/27.7af1673a.js",
    "revision": "fde08c902bf3bf44e3967c553ce783f0"
  },
  {
    "url": "assets/js/28.afdef4c2.js",
    "revision": "532f1ad5cc05c6fdb0274d66a3d650d9"
  },
  {
    "url": "assets/js/29.ac934c0f.js",
    "revision": "0db2b660d0f7e60c5aab3889ad0a89b6"
  },
  {
    "url": "assets/js/3.826341a1.js",
    "revision": "6ad1388ec247b4303481e02b42c11580"
  },
  {
    "url": "assets/js/30.57f11703.js",
    "revision": "25bccd77a3ad377ad1a7172625fb3645"
  },
  {
    "url": "assets/js/31.93844472.js",
    "revision": "8bfe7c9d8f734f4c216cc9f6903d6052"
  },
  {
    "url": "assets/js/32.6fea2e0d.js",
    "revision": "a31a9a3a75b65e8b05e9065f7277ba1a"
  },
  {
    "url": "assets/js/33.4c1547fe.js",
    "revision": "4c3d544c2c36136be0abc540c7fe3b68"
  },
  {
    "url": "assets/js/34.fda29897.js",
    "revision": "07f1791b2c4ecfbc43d5a9fc336a7391"
  },
  {
    "url": "assets/js/35.e1f0bd0b.js",
    "revision": "43f94a042183e5ed3a4eb4c3b3f33ca3"
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
    "url": "assets/js/6.0b11c65d.js",
    "revision": "368247bc6db06c80ac14f0ea852199ea"
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
    "url": "assets/js/9.adf49f4b.js",
    "revision": "8bfb66cd826ccd7f23c20e149eceb99c"
  },
  {
    "url": "assets/js/app.257bac91.js",
    "revision": "70631bef4aecf0239820edac57f76eb0"
  },
  {
    "url": "components/banner/index.html",
    "revision": "4f1a710cfe910de659f4ac11213adc2a"
  },
  {
    "url": "components/button/index.html",
    "revision": "78a2c6748bfe3eed273fc4deabfcf0c5"
  },
  {
    "url": "components/card/index.html",
    "revision": "00e10aef490c0ebdc847eeb344f27f2b"
  },
  {
    "url": "components/code/index.html",
    "revision": "3268e155023c35433a153c3035ab849f"
  },
  {
    "url": "components/date/index.html",
    "revision": "6dd16aa91f86d619dd0ed033695b2c76"
  },
  {
    "url": "components/index.html",
    "revision": "cfd3530f415eab00c9923006de9b76a9"
  },
  {
    "url": "components/modal/index.html",
    "revision": "16cef7dc421efc9dc74fd49bc612e53c"
  },
  {
    "url": "components/overview/index.html",
    "revision": "ab2388759b821a801f09c011b2969a0a"
  },
  {
    "url": "components/progress-bar/index.html",
    "revision": "89a6ba141b416a4cd24225f7b86c63fc"
  },
  {
    "url": "components/progress/index.html",
    "revision": "63aa18aa311e6273b43dba197c240956"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "0305cf8903e803ec3be5f5d26950cb80"
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
    "revision": "17459435e246c06d5b3595374b30bb6c"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "2b6878065f5cfc97450bf675cd658cb2"
  },
  {
    "url": "introduction/index.html",
    "revision": "ef9c24d913a63bd9f50174b12f80f5f7"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "1a2f10cec0e940e5bad42431ca5aa469"
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
    "revision": "dc2e18226d11e112c638297636ee4c97"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "09912658a9e7b0eb07e0854ba6440907"
  },
  {
    "url": "resources/download/index.html",
    "revision": "1f8a4b065e3c4bec4724794949904c1e"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "2d1d637d337c1b1c9604ec67d6a7b23f"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "865dd93cb2409be6d6b6aa2d284160dc"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "0597cc124d86856960ad86b182c1a5b6"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "fa82d039a0b3356582fb4d375b1f3017"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "068f3e77bd5fc2eccbce2b3758c376e9"
  },
  {
    "url": "visual/index.html",
    "revision": "c045c7e402ee31b31f7e4b4ee91a94dc"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "f2db84742288dda9645b3cd5c4e328dc"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "553f5d6f1364214717f2d2f54e70cc57"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "73f0407cd7674464a212aeedf04c0b98"
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
