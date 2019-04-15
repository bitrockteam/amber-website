---
title: Button
---

# Button
Simple wrapper for the `<button>` element.

### Import
```javascript
import '@amber-ds/components/button';
```

### Markup
```html
<amber-button>
  Button label here
</amber-button>
```

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `priority` | `String` | `'secondary'` | The visual priority of the element, options are: `'primary'`, `'secondary'` and `'tertiary'` |
| `state` | `String` | `''` | Visual state, options are: empty, `success`, `error`, `warning`, `info` |
| `disabled` | `Boolean` | `false` | If the element is disabled |
| `fitted` | `Boolean` | `false` | If the element will fit all the available space in width |
| `nooutline` | `Boolean` | `false` | Remove the default light blue outline |
| `progress` | `String` | `''` | Switch content to progress states, available options: empty, `'pending'`, `'error'` and `'success'` |

### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?path=/story/button--playground"></iframe>