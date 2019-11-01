# Typography

<div class="typography">

## Font stack

Amber uses a font stack that adapts to the operating system it runs on, like Windows, iOS, or Android. For example:

* Apple devices will display [San Francisco](https://developer.apple.com/fonts/)
* Android devices will display [Roboto]()
* Devices running Windows will display [Segoe UI](https://docs.microsoft.com/en-us/typography/font-list/segoe-ui)
* Machines running Linux will display the default sans-serif font

### Sans-serif

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

### Monospace

```css
font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

## Type scale

Font sizes are smaller on mobile and scale up at the medium breakpoint to be larger on desktop.

### Display 1

<div class="type-container">

<h1 class="display-1">What does it take to look beyond?</h1>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h1 class="display-1"></h1>` | 48px              | 56px               | 80px              | 88px                |

### Display 2

<div class="type-container">

<h1 class="display-2">What does it take to look beyond?</h1>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h1 class="display-2"></h1>` | 40px              | 48px               | 64px              | 72px                |

### Display 3

<div class="type-container">

<h1 class="display-3">What does it take to look beyond?</h1>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h1 class="display-3"></h1>` | 32px              | 40px               | 48px              | 56px                |

### Heading 1

<div class="type-container">

<h1>What does it take to look beyond?</h1>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h1></h1>`                   | 28px              | 36px               | 40px              | 48px                |

### Heading 2

<div class="type-container">

<h2>What does it take to look beyond?</h2>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h2></h2>`                   | 24px              | 32px               | 32px              | 40px                |

### Heading 3

<div class="type-container">

<h3>What does it take to look beyond?</h3>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h3></h3>`                   | 20px              | 28px               | 24px              | 32px                |

### Heading 4

<div class="type-container">

<h4>What does it take to look beyond?</h4>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h4></h4>`                   | 18px              | 28px               | 20px              | 28px                |

### Heading 5

<div class="type-container">

<h5>What does it take to look beyond?</h5>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h5></h5>`                   | 16px              | 24px               | 16px              | 24px                |

### Heading 6

<div class="type-container">

<h6>What does it take to look beyond?</h6>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<h6></h6>`                   | 14px              | 20px               | 14px              | 20px                |

### Paragraph

<div class="type-container">

<p>What does it take to look beyond?</p>

</div>

| Selector                      | Mobile Font Size  | Mobile Line height | Desktop Font Size | Desktop Line height |
| ----------------------------- | ----------------- | ------------------ | ----------------- | ------------------- |
| `<p></p>`                   | 16px              | 24px               | 16px              | 24px                |

## Kitchen sink

<p>Lorem ipsum <code>code</code> dolor sit amet, consectetur adipiscing <a href="#">link</a> elit. Fusce bibendum <i>italic</i> eu nisl eu dignissim. Cras malesuada <b>bold</b> nunc in vestibulum ullamcorper.</p>

### Code

<pre><code>.bitrock {
  color: #bada55;
}</code></pre>

### Horizontal rule

<hr>

### Unordered list

<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
</ul>

### Ordered list

<ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
</ol>

### Blockquote

<blockquote>
    <p>Yeah!! Bitrock is amazing.</p>
</blockquote>

</div>
