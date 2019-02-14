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
As the `amber-components` are based on the *Web Components v1* specification they are compatible with almost every Javascript framework or library. You can find an exhaustive list on [Custom Elements Everywhere](https://custom-elements-everywhere.com/) website.

Following you will find a set of small examples demonstrating the `amber-tabs` component interacting with properties and events on differents JS frameworks/libraries.

### Vue
You can seamlessly use Web Components in Vue template syntax.

<iframe height="265" style="width: 100%;" scrolling="no" title="Amber-Vue" src="//codepen.io/bitrock/embed/MLWxGJ/?height=265&theme-id=0&default-tab=html,resultundefined" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bitrock/pen/MLWxGJ/'>Amber-Vue</a> by Bitrock
  (<a href='https://codepen.io/bitrock'>@bitrock</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### React
You can easily pass data down from a React component to a Web Component attribute, but it's a bit more tricky with the events. Since React use a [*proprietary* `SyntheticEvents` model](https://reactjs.org/docs/events.html) the listeners need to be attached directly to the node reference.

<iframe height="319" style="width: 100%;" scrolling="no" title="Amber-React" src="//codepen.io/bitrock/embed/QYLJyj/?height=319&theme-id=0&default-tab=js,resultundefined" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bitrock/pen/QYLJyj/'>Amber-React</a> by Bitrock
  (<a href='https://codepen.io/bitrock'>@bitrock</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> **Side note:** in [a next release of React](https://github.com/facebook/react/issues/13525), the `SyntheticEvents` system will be removed in favor of native events bubbling. This will drastically simplify the integration between React & Web components and as consequence also the code above.

<!-- ### Angular 2+ -->

### Lit-HTML
Being the templating library for the `amber-components` module itself, you can obviously use Lit-HTML to manipulate Web Components.

<iframe height="265" style="width: 100%;" scrolling="no" title="Amber-Lit" src="//codepen.io/bitrock/embed/pGoBWp/?height=265&theme-id=0&default-tab=js,resultundefined" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bitrock/pen/pGoBWp/'>Amber-Lit</a> by Bitrock
  (<a href='https://codepen.io/bitrock'>@bitrock</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>