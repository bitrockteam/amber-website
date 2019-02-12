---
title: Progress
---

# Progress
An animated element that keeps the user informed regarding a pending operation.

### Import
```javascript
import '@amber-ds/components/progress';
```

### Markup
```html
<amber-progress
  size="48"
  stroke="4"
  value="25"
></amber-progress>
```

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `size` | `Number` | `48` | Width of the element |
| `stroke` | `Number` | `4` | Width of the stroke overlay color |
| `value` | `Number` | `25` | Percent of the color covering the element |
| `determinate` | `Boolean` | `false` | If it displays a determinate spinner or an infinite one |

### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?selectedKind=Progress&selectedStory=Playground&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>