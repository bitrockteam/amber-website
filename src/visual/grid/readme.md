# Grid

<div class="grid">

## Basic grid

Amber features a 12-column grid system that uses a series of containers, rows, and columns to layout and align content. It’s built with CSS Grid and is fully responsive.

It shares the same Bootstrap semantic. You can create a basic grid system by placing all the elements inside a `.row`.

<article class="grid-card-container row">

<div class="grid-card col-4" style="background-color: #F5F5F5">
<span>.col-4</span>
</div>

<div class="grid-card col-4" style="background-color: #F5F5F5">
<span>.col-4</span>
</div>

<div class="grid-card col-4" style="background-color: #F5F5F5">
<span>.col-4</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-4">.col-4</div>
    <div class="col-4">.col-4</div>
    <div class="col-4">.col-4</div>
  </div>
</div>
```

## Grid sizes

### .col-12

<article class="grid-card-container row">

<div class="grid-card col-12" style="background-color: #F5F5F5">
<span>.col-12</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-12">.col-12</div>
  </div>
</div>
```

### .col-6

<article class="grid-card-container row">

<div class="grid-card col-6" style="background-color: #F5F5F5">
<span>.col-6</span>
</div>

<div class="grid-card col-6" style="background-color: #F5F5F5">
<span>.col-6</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
```

### .col-4

<article class="grid-card-container row">

<div class="grid-card col-4" style="background-color: #F5F5F5">
<span>.col-4</span>
</div>

<div class="grid-card col-4" style="background-color: #F5F5F5">
<span>.col-4</span>
</div>

<div class="grid-card col-4" style="background-color: #F5F5F5">
<span>.col-4</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-4">.col-4</div>
    <div class="col-4">.col-4</div>
    <div class="col-4">.col-4</div>
  </div>
</div>
```

### .col-3
  
<article class="grid-card-container row">

<div class="grid-card col-3" style="background-color: #F5F5F5">
<span>.col-3</span>
</div>

<div class="grid-card col-3" style="background-color: #F5F5F5">
<span>.col-3</span>
</div>

<div class="grid-card col-3" style="background-color: #F5F5F5">
<span>.col-3</span>
</div>

<div class="grid-card col-3" style="background-color: #F5F5F5">
<span>.col-3</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
  </div>
</div>
```

### .col-2

<article class="grid-card-container row">

<div class="grid-card col-2" style="background-color: #F5F5F5">
<span>.col-2</span>
</div>

<div class="grid-card col-2" style="background-color: #F5F5F5">
<span>.col-2</span>
</div>

<div class="grid-card col-2" style="background-color: #F5F5F5">
<span>.col-2</span>
</div>

<div class="grid-card col-2" style="background-color: #F5F5F5">
<span>.col-2</span>
</div>

<div class="grid-card col-2" style="background-color: #F5F5F5">
<span>.col-2</span>
</div>

<div class="grid-card col-2" style="background-color: #F5F5F5">
<span>.col-2</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-2">.col-2</div>
    <div class="col-2">.col-2</div>
    <div class="col-2">.col-2</div>
    <div class="col-2">.col-2</div>
  </div>
</div>
```

## Grid gutter

Gutter = gaps between column content. For devices with a screen width less than 768px, the column padding is 1rem (16px). For devices with a screen width greater than 768px, the column padding is 2rem (32px).

Screen width < 768px = 16px gutters (1rem)

Screen width ≥ 768px = 32px gutters (2rem)

You can override this value using CSS Variables:

```css
--gutter: 0
```

## Mixed grid

The grid layout is easily extended by nesting and mixing different column sizes.

<article class="grid-card-container row">

<div class="grid-card col-6" style="background-color: #F5F5F5">
<span>.col-6</span>
</div>

<div class="grid-card col-3" style="background-color: #F5F5F5">
<span>.col-3</span>
</div>

<div class="grid-card col-3" style="background-color: #F5F5F5">
<span>.col-3</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
  </div>
</div>
```

## Responsive classes
Amber’s grid includes five set of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices.

For grids that are the same from the smallest of devices to the largest, use the `.col-*` classes. Specify a different class when you need a particularly sized column.

| Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | Extra large ≥1200px |
|--------------------|--------------|--------------|--------------|---------------------|
| `.col-*`           | `.col-sm-*`  | `.col-md-*`  | `.col-lg-*`  | `.col-xl-*`         |

<article class="grid-card-container row">

<div class="grid-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="background-color: #F5F5F5">
<span>1</span>
</div>

<div class="grid-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="background-color: #F5F5F5">
<span>2</span>
</div>

<div class="grid-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="background-color: #F5F5F5">
<span>3</span>
</div>

<div class="grid-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="background-color: #F5F5F5">
<span>4</span>
</div>

<div class="grid-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="background-color: #F5F5F5">
<span>5</span>
</div>

<div class="grid-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="background-color: #F5F5F5">
<span>6</span>
</div>

</article>

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-">1</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-">2</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-">3</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-">4</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-">5</div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-">6</div>
  </div>
</div>
```
  
</div>