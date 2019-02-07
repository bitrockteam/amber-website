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