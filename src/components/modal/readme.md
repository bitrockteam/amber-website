---
title: Modal
---

# Modal
An overlay element requiring a user action, based on the native `<dialog>` element with an almost identical APIs.

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

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `open` | `Boolean` | `false` | If the element is displayed |
| `nosubmit` | `Boolean` | `false` | If primary button needs to be disabled |
| `labels` | `String` | `'First,Second'` | Comma-separated button labels |
| `state` | `String` | `''` | Visual state, options are: empty, `success`, `error`, `warning`, `info` |
| `title` | `String` | `'Title'` | Title of the modal, the modal header is removed if the attribute is undefined |

### Methods
| Name | Arguments | Return | Description |
|------|-----------|--------|-------------|
| `.showModal()` | N/A | N/A | Display the modal and set the `open` attribute to `true` |
| `.close()` | `closedBy: String` | N/A | Hide the modal and set the `open` attribute to `false`, also trigger the `closed` event. You can specify a close "invoker" as a parameter |

### Events
| Name | Detail | Description |
|------|--------|-------------|
| `closed` |`{ closedBy: String}`| Fired each time the modal is closed. If closed by a button it will return the invoker button type |


> **Known issue:** on Firefox the `.showModal()` method of native `<dialog>` element [it's still not supported](https://bugzilla.mozilla.org/show_bug.cgi?id=840640#c33) and the official polyfill can't be implemented on Shadow DOM. In that case the component will only switch the open attribute true or false showing the modal, [but **not** the backdrop](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#Usage_notes).

> **Known issue:** clicking the backdrop will **not** close the modal, due to the native implementation, we are looking to apply a workaround in the next releases.

### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?path=/story/modal--playground"></iframe>