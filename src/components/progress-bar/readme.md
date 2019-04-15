---
title: Progress Bar
---

# Progress
An animated horizontal progress bar that keeps the user informed regarding a pending operation.

### Import
```javascript
import '@amber-ds/components/progress-bar';
```

### Markup
```html
<amber-progress-bar
  label="My label"
  value="50"
></amber-progress-bar>
```

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `label` | `String` | `Label` | Text to display above the progress bar |
| `value` | `Number` | `25` | Percent of the color covering the element |

### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?path=/story/progress-bar--playground"></iframe>