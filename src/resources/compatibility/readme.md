---
title: Compatibility
---

# Compatibility
Both the `Visual` and `Components` packages of the Amber Design System take advantages of specifics browser features, you may want to check them first **before** use it in you projects:

* `amber-visual`: [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* `amber-components`: [ES2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript), [Web Components v1](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Browsers
The library targets the *evergreen* (Chrome, Firefox, Safari, Edge) browsers out of the box, you may need some polyfills and/or transpiling especially for IE11.

| Feature | Browser support | Polyfill | Transpile? |
|---------|-----------------|----------|------------------|
| CSS Grid Layout | [CanIUse?](https://caniuse.com/#feat=css-grid) | N/A | N/A |
| ES 2015 | [Compat-table](https://kangax.github.io/compat-table/es6/) | N/A | [Babel](https://babeljs.io/) / [Typescript](https://www.typescriptlang.org/index.html) |
| Web Components v1 | [CanIUse?](https://caniuse.com/#feat=shadowdomv1) | [Google](https://github.com/webcomponents/webcomponentsjs)| N/A |

## JS frameworks/libraries
As the `amber-components` are based on the *Web Components v1* specification they are compatible with almost every Javascript framework or library. You can find an exhaustive list on [Custom Elementss Everywhere](https://custom-elements-everywhere.com/) website.

Following you will find a set of small examples demonstrating the `amber-tabs` component interacting with properties and events on differente JS frameworks/libraries.

### Vue

### React
You can easily pass props down from a React component to a Web Component, but on the other hand events must be attached directly to the node reference.

<iframe height="319" style="width: 100%;" scrolling="no" title="Amber-React" src="//codepen.io/bitrock/embed/QYLJyj/?height=319&theme-id=0&default-tab=js,resultundefined" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bitrock/pen/QYLJyj/'>Amber-React</a> by Bitrock
  (<a href='https://codepen.io/bitrock'>@bitrock</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Angular 2+

### Lit-HTML

---

> **Side note:** We are planning to add some examples soon.