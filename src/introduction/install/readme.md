---
title: Install
---

# Install the libraries

## Visual

You can install the `@amber-ds/visual` with your favourite package manager
<amber-tabs labels="NPM,Yarn">
  <amber-tab-content><div class="language- extra-class"><pre class="language-text"><code>$ npm install @amber-ds/visual</code></pre></div></amber-tab-content>
  <amber-tab-content><div class="language- extra-class"><pre class="language-text"><code>$ yarn add @amber-ds/visual</code></pre></div></amber-tab-content>
</amber-tabs>

Then you can import the styles on the main `.html` file or from a `.css` file.
<amber-tabs labels="HTML,CSS,CSS (Webpack), SCSS (Webpack)">
  <amber-tab-content><div class="language-html extra-class"><pre class="language-html"><code>&lt;link href="./node_modules/@amber-ds/visual/dist/index.css" rel="stylesheet"&gt;</code></pre></div></amber-tab-content>
  <amber-tab-content><div class="language-css extra-class"><pre class="language-css"><code>@import "./node_modules/@amber-ds/visual/dist/index.css"</code></pre></div></amber-tab-content>
  <amber-tab-content><div class="language-css extra-class"><pre class="language-css"><code>@import "~@amber-ds/visual/dist/index.css"</code></pre></div></amber-tab-content>
  <amber-tab-content><div class="language-css extra-class"><pre class="language-css"><code>@import "~@amber-ds/visual/src/amber.scss"</code></pre></div></amber-tab-content>
</amber-tabs>

Alternatively you can import the package from the Unpkg CDN at the following url:

```
https://unpkg.com/@amber-ds/visual@1.0.1/dist/index.css
```

You should see the page updated with the new styles, you can now follow the [related documentation](/visual/color/) to learn how to use it.


## Components

You can install the `@amber-ds/components` with your favourite package manager
<amber-tabs labels="NPM,Yarn">
  <amber-tab-content><div class="language- extra-class"><pre class="language-text"><code>$ npm install @amber-ds/components</code></pre></div></amber-tab-content>
  <amber-tab-content><div class="language- extra-class"><pre class="language-text"><code>$ yarn add @amber-ds/components</code></pre></div></amber-tab-content>
</amber-tabs>

Then you can import the styles on the main `.html` file or from a `.js` file.
<amber-tabs labels="HTML,JS,JS (Webpack)">
  <amber-tab-content><div class="language-html extra-class"><pre class="language-html"><code>&lt;script href="./node_modules/@amber-ds/components/index.js" script&gt;&lt;/script&gt</code></pre></div></amber-tab-content>
  <amber-tab-content><div class="language-js extra-class"><pre class="language-js"><code>import './node_modules/@amber-ds/components/index.js'</code></pre></div></amber-tab-content>
  <amber-tab-content><div class="language-js extra-class"><pre class="language-js"><code>import '@amber-ds/components'</code></pre></div></amber-tab-content>
</amber-tabs>

Alternatively you can import the package from the Unpkg CDN at the following url:

```
https://unpkg.com/@amber-ds/components@1.2.0/index.js
```

then in your HTML file or Javascript template you can instantiate every component you need from this library, follow the [related documentation](/components/overview/) to learn how to use them. 

> **Side note:** by installing the `@amber-ds/components` package from NPM, the `@amber-ds/visual` get also installed as a dependency! 

<!-- # Resources

## Hello VuePress!

_How are you doing?_
> **I'm doing fine, thanks!**

_Great, I was wondering what `49 + 32` is?_
> **{{49 + 32}}**

_Could you repeat that a few times?_

> **Sigh...**
<p v-for="i of 3">{{49 + 32}}</p> -->