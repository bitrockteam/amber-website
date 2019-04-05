---
title: Code
---

# Code
Wrapper for `<pre>` and `<code>` tags for displaying example code, with a copy to clipboard functionality.

### Import
```javascript
import '@amber-ds/components/code';
```

### Markup
```html
<amber-code-snippet>
  Content here
</amber-code-snippet>
```

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `clipboard` | `Boolean` | `false` | If to show the *'copy to clipboard'* button |
| `label` | `String` | `Copy` | The text of the *'copy to clipboard'* button |

### Events
| Name | Detail | Description |
|------|--------|-------------|
| `copied` |`{ content: String }`| Fired each time the user clicks the *'copy to clipboard'* button and the clipboard has received data, it returns the copied text |

### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?path=/story/code--playground"></iframe>