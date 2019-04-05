---
title: Card
---

# Card
Simple card content layout.

### Import
```javascript
import '@amber-ds/components/card';
```

### Markup
```html
<amber-card>
  <p>Content here</p>
</amber-card>
```

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `title` | `String` | `''` | The title of the card, the card header is not rendered if empty |
| `taxonomy` | `String` | `''` | The text of the taxonomy of the card, it will not be rendered if empty |
| `media` | `String` | `''` | The url of an image for the card cover, the figure will not be rendered if empty |
| `background` | `String` | `'white'` | The background color of the card, options: `'white'` and `'light'` |

### Storybook
<iframe title="storybook" width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?path=/story/card--playground"></iframe>