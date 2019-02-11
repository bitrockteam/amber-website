---
title: F.A.Q.
---

# Frequently Asked Questions
You *may* have some questions, and we *may* have already answered them...

## Any example available?
Not at the moment. We are working on setting up a repository with some code examples and boilerplate stuff.

## There is a roadmap?
We do not have a mid/long term roadmap, at the moment we are focused on adding features and polishing the code based on our needs, following quick and atomic releases. But you can check the `issues` and `milestones` on each repository to learn our short term intents.

## What's the difference between attributes and properties?
To make it short, `attributes` are the ones that you sets **mainly via HTML**, and they always contains simple data (*strings, numbers, boolean*) while `properties` are accessible **only via Javascript** and the value can by of *any* type.

```html
<!-- "value" here is an attribute -->
<amber-date value="2028-12-01">
</amber-date>
```

The `lit-element` class that we are using as a base library, reflects automatically `attributes` values to `properties` with the same name.

```javascript
const amberDate = document.querySelector('amber-date');

amberDate.value // is a property that is inheriting its value from the attribute
amberDate.config // this is a "complex" object accessible only via JS
```

Our components are based on the Custom Elements specification which extends regular HTML elements, and in regular HTML you can't pass or manipulate complex data such as arrays or objects as attributes.

## Why I can't customize the components appearance with my CSS?
Because this components are based on **Shadow DOM**, which encapsulate the styles of each component and "protects" them from the main DOM cascading styles (*not every, but most of them...*). This is a nice fit for a Design System use case which is **very different** from a CSS framework or widgets library.

In a next release we will introduce [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) to expose a sort of "CSS APIs" that will let you customize **some aspects** of the components, but by design they will never be fully customizable.

Since Amber is an Open Source project, you are always free to fork it and modify the source to make a customized copy based on your needs.