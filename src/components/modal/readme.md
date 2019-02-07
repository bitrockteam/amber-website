---
title: Modal
---

# Modal
An overlay element requiring a user action, based on the native `<dialog>` element.

### Import
```javascript
import '@amber-ds/components/modal';
```

### Markup
```html
<amber-modal title="Modal title">
  <p>Content here</p>
</amber-modal>
```

> **Known issue:** on Firefox the `.showModal()` method of native `<dialog>` element [it's still not supported](https://bugzilla.mozilla.org/show_bug.cgi?id=840640#c33) and the official polyfill can't be implemented on Shadow DOM. In that case the component will only switch the open attribute true or false showing the modal, [but **not** the backdrop](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#Usage_notes).

> **Known issue:** clicking the backdrop will **not** close the modal, due to the native implementation, we are looking to apply a workaround in the next releases.

### Storybook
<iframe width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?selectedKind=Modal&selectedStory=Playground&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>