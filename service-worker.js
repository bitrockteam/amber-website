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
    "revision": "26a061daa001b966eff1e84eeb0fb626"
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
    "url": "assets/js/15.12d83ab3.js",
    "revision": "adbf3ad9a16c4eb87ac663f6c45d9096"
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
    "url": "assets/js/34.66d7f6c3.js",
    "revision": "5edfa3f1789da145509e1d61e5c84c2f"
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
    "url": "assets/js/9.9b8e1a45.js",
    "revision": "5735c2328584d5dc85190255ddff4552"
  },
  {
    "url": "assets/js/app.78b0aecb.js",
    "revision": "9246af1a314063f97dae7603debb1673"
  },
  {
    "url": "components/banner/index.html",
    "revision": "0513bf2c4a4b1b57cad7fe87a480bdfe"
  },
  {
    "url": "components/button/index.html",
    "revision": "b2a8c84db44830cf597b2f2dcf58a757"
  },
  {
    "url": "components/card/index.html",
    "revision": "5203d387eb6cc80a321025f4fdd048f4"
  },
  {
    "url": "components/code/index.html",
    "revision": "3e24cd3c4037190433d2f05fac4c9e5a"
  },
  {
    "url": "components/date/index.html",
    "revision": "d1ed83f779419fd5b1e452b6b4653286"
  },
  {
    "url": "components/index.html",
    "revision": "772b0f9f8d0790b6bb59cd4cfb921bc9"
  },
  {
    "url": "components/modal/index.html",
    "revision": "69464e57603789ac93524a49f203a629"
  },
  {
    "url": "components/overview/index.html",
    "revision": "5534e6f2669822f242b4dc9e4d09006f"
  },
  {
    "url": "components/progress-bar/index.html",
    "revision": "6c103d762ca71c2e2a88b96275db75bb"
  },
  {
    "url": "components/progress/index.html",
    "revision": "e40360239827a2aa2a3cc0ab66f64014"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "3efc67aeeb2730889220257df03748a5"
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
    "revision": "6a6771aa784556be14e4fc2b2813e74f"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "652776ef6e97738334a8307a335641c8"
  },
  {
    "url": "introduction/index.html",
    "revision": "6226f7a1a1ecfa536678c7d4cbedcff2"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "fac91a4c9923cab56cac37cbed3ff822"
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
    "revision": "c8f92e315cced7d85b9a61e48761c779"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "6a25ebeeb9524ed00721d040f368fa3c"
  },
  {
    "url": "resources/download/index.html",
    "revision": "d0d6f1ff020a10446e2439ca8e6b22b2"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "69a9277b9a65f126c6764b882e4e5640"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "d38ae6995e7b97e8f1097caea4bd78af"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "c064eef7c927eeb0b2e287499a9a982b"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "315c2f93869b3396bb2a58fd4eba058d"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "9dd57360758f311835d88afa659127e2"
  },
  {
    "url": "visual/index.html",
    "revision": "b8627dc85f3def2639df81c9f25d7f4a"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "06f1bec88a43d5036fa497aa104dff29"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "8af2f8fe0b97c8ba9a6b98a50ad9927c"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "b55e81c9e9da760c8a2c893b8c1b2db7"
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
