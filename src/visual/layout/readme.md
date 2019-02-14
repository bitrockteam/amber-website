# Layout

<div class="layout">

## Containers

### Container

`.container` is the default box wrapper. It's responsive and has a 1120px `max-width` that allows it to adapt to our [Grid](/visual/grid/).

```html
<div class="container">
  ...
</div>
```

### Fluid Container

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.

```html
<div class="container-fluid">
  ...
</div>
```

## Responsive breakpoints

Since Amber is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

Amber shares the same Bootstrap breakpoints:

```css
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```

</div>