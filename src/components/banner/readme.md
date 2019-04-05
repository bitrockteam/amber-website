---
title: Banner
---

# Banner
Notify the user without blocking the interaction on the UI.

### Import
```javascript
import '@amber-ds/components/banner';
```

### Markup
```html
<amber-banner>
  Content here
</amber-banner>
```


### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `active` | `Boolean` | `false` | If the element is visible |
| `title` | `String` | `Title` | Title of the banner, if empty the header will not be rendered |
| `labels` | `String` | `'First,Second'` | Comma-separated button labels |
| `state` | `String` | `''` | Visual state, options are: empty, `success`, `error`, `warning`, `info` |

### Methods
| Name | Arguments | Return | Description |
|------|-----------|--------|-------------|
| `.show()` | N/A | N/A | Display the banner and set the `active` attribute to `true` |
| `.hide()` | N/A | N/A | Hide the banner and set the `active` attribute to `false`|

### Events
| Name | Detail | Description |
|------|--------|-------------|
| `confirm` | N/A| User has clicked the primary button of the banner |
| `cancel` | N/A| User has clicked the secondary button of the banner |


### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?path=/story/banner--playground"></iframe>