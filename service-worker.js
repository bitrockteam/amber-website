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
    "revision": "e706a9acff1f8b752bedfbc1d5ab4707"
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
    "url": "assets/css/0.styles.2d9d4d7b.css",
    "revision": "3e59b01403fc84959bdc4b8fd1a41eb0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d6c4355.js",
    "revision": "1458bf18dec2540bb8705cb08348bd23"
  },
  {
    "url": "assets/js/11.882cb1e9.js",
    "revision": "d9944bc4b3c3cdb8d51cad0af1ae92c5"
  },
  {
    "url": "assets/js/12.c8ddb4b7.js",
    "revision": "67bf6b2a6d7c98c681b027cc7983f1d3"
  },
  {
    "url": "assets/js/13.15b0bd00.js",
    "revision": "97293feffaa609cd189642f86fd860d3"
  },
  {
    "url": "assets/js/14.92b48cc7.js",
    "revision": "97362ea96ded0bb8693a2fc19051e2b9"
  },
  {
    "url": "assets/js/15.f07af4df.js",
    "revision": "a1b06c12eac233d80f448e1b4286c849"
  },
  {
    "url": "assets/js/16.52fa7114.js",
    "revision": "40d108e4daa60989cc2645904bb140c0"
  },
  {
    "url": "assets/js/17.8dfeb99c.js",
    "revision": "5b8f3697741335383eb341173ed75b46"
  },
  {
    "url": "assets/js/18.60daad2c.js",
    "revision": "01ec05703a1dd60d85ac7a973f28df8a"
  },
  {
    "url": "assets/js/19.02ddde7c.js",
    "revision": "18ec9ea1fea1b09e61ed86c8d9b340ef"
  },
  {
    "url": "assets/js/2.3e096557.js",
    "revision": "4e9a40ef52015c2c35e941096cccbb63"
  },
  {
    "url": "assets/js/20.629b182d.js",
    "revision": "94150b69f25074d65a8b0f203b96c7ae"
  },
  {
    "url": "assets/js/21.bcae64d3.js",
    "revision": "dad906e8b0f8c25bf750c0d9ac9b0fb9"
  },
  {
    "url": "assets/js/22.d74422cc.js",
    "revision": "f702e323cc724b512540a829a1df9777"
  },
  {
    "url": "assets/js/23.2f99fcfc.js",
    "revision": "97264cb3aaeb84f040e64b28b10a081c"
  },
  {
    "url": "assets/js/24.914fdf04.js",
    "revision": "64bfba4cbe4c1391bc6074a1d35ad1d3"
  },
  {
    "url": "assets/js/25.485b1e8d.js",
    "revision": "cb63227c7651b35784aa79779081a9de"
  },
  {
    "url": "assets/js/26.2efcd67b.js",
    "revision": "c3e67a74a843e6558221a46b6840263e"
  },
  {
    "url": "assets/js/27.38b35d6a.js",
    "revision": "8816a5553c24835ce3de812bce2f6f30"
  },
  {
    "url": "assets/js/28.21ae744a.js",
    "revision": "e2390b0dc1a24edfc0d6e6dbb28750fe"
  },
  {
    "url": "assets/js/29.bfa5b6aa.js",
    "revision": "c6d58a9d706d7d2a1c7312ad173fbcea"
  },
  {
    "url": "assets/js/3.ed222723.js",
    "revision": "68da32274c665b094a0bd0d78f947610"
  },
  {
    "url": "assets/js/30.0a25db8f.js",
    "revision": "c76ab1af042ad22d5733c25cc7d09955"
  },
  {
    "url": "assets/js/31.363f16d7.js",
    "revision": "0b167fce85eb8a6fd579f1e51d259a86"
  },
  {
    "url": "assets/js/32.5f9e740e.js",
    "revision": "69aa0b8c21108a5baae2654644b13b9c"
  },
  {
    "url": "assets/js/33.edd008ea.js",
    "revision": "9dcf9840614ff85120379c225301d105"
  },
  {
    "url": "assets/js/34.156b8492.js",
    "revision": "d55ba8b12424d4314f947b754a1a3d1a"
  },
  {
    "url": "assets/js/4.a9b97e68.js",
    "revision": "379e87e0c11d493532ca634cdeb627db"
  },
  {
    "url": "assets/js/5.fbfc54c0.js",
    "revision": "7414a1f0e9bfcca0e3474151d4228303"
  },
  {
    "url": "assets/js/6.e0022371.js",
    "revision": "9f30331666cf347e856fa083d1c23eda"
  },
  {
    "url": "assets/js/7.2063dbd3.js",
    "revision": "f7056d4168400c1e35e05d5ebec53575"
  },
  {
    "url": "assets/js/8.baf1b6cc.js",
    "revision": "2554971af70d94524a70a57b9bcae5e4"
  },
  {
    "url": "assets/js/9.1446e0b5.js",
    "revision": "aa0258ea331f6649509093425651004a"
  },
  {
    "url": "assets/js/app.895f4e70.js",
    "revision": "813ad953f8ab02cb93a5a2a7abb9ef8b"
  },
  {
    "url": "components/banner/index.html",
    "revision": "555948941363cb750946cd4a235b87bf"
  },
  {
    "url": "components/button/index.html",
    "revision": "140530396a50cb3eee5d8380d26b0884"
  },
  {
    "url": "components/card/index.html",
    "revision": "5c9b72e8272037c2a98dd385d06da151"
  },
  {
    "url": "components/code/index.html",
    "revision": "b47c38d3f3fc2c8c8e27397e9a7ae92b"
  },
  {
    "url": "components/date/index.html",
    "revision": "3312077602089dfce594b1dd42013f8d"
  },
  {
    "url": "components/index.html",
    "revision": "f7035164a062fa6f84d82bfdfd0174f6"
  },
  {
    "url": "components/modal/index.html",
    "revision": "b6257e8308dd818937adc02d4c6c973c"
  },
  {
    "url": "components/overview/index.html",
    "revision": "32889cdfe0bdb133c68681481614e91f"
  },
  {
    "url": "components/progress/index.html",
    "revision": "9649ac8e0014d511a42a663db117b035"
  },
  {
    "url": "components/tabs/index.html",
    "revision": "a4774b4955682c85e4c50d975d7fd04c"
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
    "revision": "827828a15023d6ad237602938c81721c"
  },
  {
    "url": "introduction/design-system/index.html",
    "revision": "0c95e04bc760ed0de96a39e785933156"
  },
  {
    "url": "introduction/index.html",
    "revision": "7f4535c8d0745def985b6f19985996db"
  },
  {
    "url": "introduction/install/index.html",
    "revision": "5c496029c4dd6f4892255881c17a8e82"
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
    "revision": "54d2fd2ea67ec1a6bb14ad1ac4c93708"
  },
  {
    "url": "resources/compatibility/index.html",
    "revision": "ba505bca73e2c120ce47ede7497d3944"
  },
  {
    "url": "resources/download/index.html",
    "revision": "c4247c45c49dbc891466487b6050fcab"
  },
  {
    "url": "resources/examples/index.html",
    "revision": "bfa6d6e458345844d76ec8c5a9a2abae"
  },
  {
    "url": "resources/faq/index.html",
    "revision": "c886a822d56903b27d877350e821adb3"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2f882b2f4ed36322895cb02fd504eb58"
  },
  {
    "url": "visual/color/index.html",
    "revision": "bf5094a7b5fa7c40cf57076bbd0adcad"
  },
  {
    "url": "visual/forms/index.html",
    "revision": "7404f02604fd7e0bbc7d56ff394018f0"
  },
  {
    "url": "visual/grid/index.html",
    "revision": "36395b5e0273c935b1b3379308183972"
  },
  {
    "url": "visual/index.html",
    "revision": "c64f029e401d926e863340c715d0bb3b"
  },
  {
    "url": "visual/layout/index.html",
    "revision": "f687038885578df9f64ba606439dfc68"
  },
  {
    "url": "visual/spacing/index.html",
    "revision": "396012ba4160f29a6465d511f50c8cfc"
  },
  {
    "url": "visual/typography/index.html",
    "revision": "929ccf4c26d14594cdb96d0b5af0174b"
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
