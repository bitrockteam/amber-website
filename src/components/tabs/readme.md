---
title: Tabs
---

# Tabs
Switch between different contents.

### Import
```javascript
import '@amber-ds/components/tabs';
```

### Markup
```html
<amber-tabs labels="One,Two,Three">
  <amber-tab-content>Content one</amber-tab-content>
  <amber-tab-content>Content two</amber-tab-content>
  <amber-tab-content>Content three</amber-tab-content>
</amber-tabs>
```

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `labels` | `String` | `'First,Second'` | Comma-separated tabs labels |
| `active` | `Number` | `0` | Index of the active tab |
| `fitted` | `Boolean` | `false` | If the tabs needs to fit the available space |

### Events
| Name | Detail | Description |
|------|--------|-------------|
|`change`|`{ active: Number }`| Fired each time a tab label is clicked and returns the current active tab index. **Not fired** on programmatic change of the `active` attribute |

### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?path=/story/tabs--playground"></iframe>