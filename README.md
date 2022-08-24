# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

This project was really challenging especially creating the logic for the rating buttons. Written a crappy code but still somehow managed to make it work.

```js
function setDefault() {
  val = 0;
  r1Selected = false;
  r2Selected = false;
  r3Selected = false;
  r4Selected = false;
  r5Selected = false;
  r1El.style.background = iBg;
  r2El.style.background = iBg;
  r3El.style.background = iBg;
  r4El.style.background = iBg;
  r5El.style.background = iBg;
  r1El.style.color = iColor;
  r2El.style.color = iColor;
  r3El.style.color = iColor;
  r4El.style.color = iColor;
  r5El.style.color = iColor;
}

function render(El) {
  setDefault();
  El.style.background = selectBg;
  El.style.color = selectColor;
  val = El.value;
}
```

### Continued development

Really need to learn advanced topics of javascript and maybe a framework such as react or angular.

### Useful resources

- [w3schools](https://www.w3schools.com/) - w3schools is awesome. It helped out in many ways.
- [stackoverflow](https://www.stackoverflow.com) - Stackoverflow is really wonderful. Stack gods saved me specifically when i was facing a problem where css hover pseudo element was overrided by js.

## Author

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
