# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [CODE](https://github.com/AngelDev2001/Advice-generator-app-solution---AngelDev2001)
- Live Site URL: [DEMO](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- Flexbox
- CSS
- Mobile-first workflow

### What I learned

To see how you can add code snippets, see below:

```html
<p class="advice__title">
  Advice #<span class="advice__title-id"></span>
</p>
```
```css
.advice__dice:hover{
    box-shadow: 0 0 30px 1px var(--NeonGreen);
    cursor: pointer;
}
```
```js
if(window.innerWidth <= 375){
  adviceDivider.src = "../images/pattern-divider-mobile.svg";
  adviceDivider.style.width = "100%";
}
```

## Author

- Frontend Mentor - [@AngelDev2001](https://www.frontendmentor.io/profile/AngelDev2001)