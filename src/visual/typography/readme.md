# Typography

<div class="typography">

## Font stack

The Shopify admin uses a font stack that adapts to the operating system it runs on, like Windows, iOS, or Android. For example:

* Apple devices will display San Francisco
* Android devices will display Roboto
* Devices running Windows will display Segoe UI
* Machines running Linux will display the default sans-serif font for any running distribution

The following font-stack ensures all browsers can load platform-specific fonts:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

## Type Scale

Font sizes are smaller on mobile and scale up at the md breakpoint to be larger on desktop.

| Scale | Font size: Mobile | Line height: Mobile | Font size: Desktop | Line height: Desktop |
| ----- | ----------------- | ------------------- | ------------------ | -------------------- |
| d1    | 48px              | 56px                | 80px               | 88px                 |
| d2    | 40px              | 48px                | 64px               | 72px                 |
| d3    | 32px              | 40px                | 48px               | 56px                 |
| h1    | 28px              | 36px                | 40px               | 48px                 |
| h2    | 24px              | 32px                | 32px               | 40px                 |
| h3    | 20px              | 28px                | 24px               | 32px                 |
| h4    | 18px              | 28px                | 20px               | 28px                 |
| h5    | 16px              | 24px                | 16px               | 24px                 |
| h6    | 14px              | 20px                | 14px               | 20px                 |
| p     | 16px              | 24px                | 16px               | 24px                 |

## Display title

<h1 class="display-1">d1 - What does it take to look beyond?</h1>

```html
<h1 class="display-1">d1 - What does it take to look beyond?</h1>
```

<h1 class="display-2">d2 - What does it take to look beyond?</h1>

```html
<h1 class="display-2">d2 - What does it take to look beyond?</h1>
```

<h1 class="display-3">d3 - What does it take to look beyond?</h1>

```html
<h1 class="display-3">d3 - What does it take to look beyond?</h1>
```

## Heading

<h1>h1 - What does it take to look beyond?</h1>

```html
<h1>h1 - What does it take to look beyond?</h1>
```

<h2>h2 - What does it take to look beyond?</h2>

```html
<h2>h2 - What does it take to look beyond?</h2>
```

<h3>h3 - What does it take to look beyond?</h3>

```html
<h3>h3 - What does it take to look beyond?</h3>
```

<h4>h4 - What does it take to look beyond?</h4>

```html
<h4>h4 - What does it take to look beyond?</h4>
```

<h5>h5 - What does it take to look beyond?</h5>

```html
<h5>h5 - What does it take to look beyond?</h5>
```

<h6>h6 - What does it take to look beyond?</h6>

```html
<h6>h6 - What does it take to look beyond?</h6>
```

<p>p - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum eu nisl eu dignissim. Cras malesuada nunc in vestibulum ullamcorper. Aliquam sit amet magna consequat, aliquam velit a, scelerisque lacus.</p>

```html
<p>p - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum eu nisl eu dignissim. Cras malesuada nunc in vestibulum ullamcorper. Aliquam sit amet magna consequat, aliquam velit a, scelerisque lacus.</p>
```

</div>