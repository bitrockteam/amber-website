---
title: Date picker
---

# Date picker
Easily select dates and time, based on the [flatpickr](https://flatpickr.js.org/) library.

### Import
```javascript
import '@amber-ds/components/date';
```

### Markup
```html
<amber-date
  value="2028-12-01"
>
</amber-date>
```

### Attributes

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `inline` | `Boolean` | `false` | If the datepicker will be shown inline within the content |
| `disabled` | `Boolean` | `false` | If input element is disabled |
| `time` | `Boolean` | `false` | Shortcut for the [Flatpicker `enableTime` option](https://flatpickr.js.org/options/) |
| `mode` | `String` | `single` | Shortcut for the [Flatpickr `mode` option](https://flatpickr.js.org/options/), options: `'single'`, `'multiple'` or `'range` |
| `value` | `String` | N/A | Starting value in the `YYYY-MM-DD` format |

### Properties

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| `config` | `Object` | {} | A [Flatpickr option object](https://flatpickr.js.org/options/) |
| `flatpickr` | `Function` | N/A | A reference to the Flatpickr instance |

### Methods
| Name | Arguments | Return | Description |
|------|-----------|--------|-------------|
| `.open()` | N/A | N/A | Show the datepicker widget |
| `.close()` | N/A | N/A | Hide the datepicker widget |

### Events
| Name | Detail | Description |
|------|--------|-------------|
|`change`|`{ dateStr: String,` `selectedDates: Array<String>,` `instance: Object }`| Fired each the user select a date from the widget, it returns the values in string and array format and also a reference to the Flatpickr instance |


### Storybook

<amber-tabs 
  labels="Default,Inline,Modes,Time"
>
<amber-tab-content>
<iframe width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?selectedKind=Date%20Picker&selectedStory=Playground&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>
</amber-tab-content>
<amber-tab-content>
<iframe width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?selectedKind=Date%20Picker&selectedStory=Inline&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>
</amber-tab-content>
<amber-tab-content>
<iframe width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?selectedKind=Date%20Picker&selectedStory=Modes&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>
</amber-tab-content>
<amber-tab-content>
<iframe width="100%" height="500px" src="https://bitrockteam.github.io/amber-components/?selectedKind=Date%20Picker&selectedStory=Time&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>
</amber-tab-content>
</amber-tabs>

> **Note:** this component read the attributes values **only** on the datepicker setup, which occurs during the component initialization. For instance, you can't change from `default` view to `inline` after the datepicker has been rendered.