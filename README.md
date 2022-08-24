# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

![desktop-preview](https://user-images.githubusercontent.com/94350356/186406511-0cb15837-e024-47e7-a924-6eacda2f57d0.jpg)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Design:

![2022-08-24 (3)](https://user-images.githubusercontent.com/94350356/186406649-a398e289-8d23-4f28-9f8d-14acbdb001e3.png)

![2022-08-24 (4)](https://user-images.githubusercontent.com/94350356/186406699-e6e8c4ee-9eea-4596-9643-1a4278decbbf.png)

![2022-08-24 (6)](https://user-images.githubusercontent.com/94350356/186406762-11e9841c-610d-447c-9a7c-978da78e378f.png)


### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/interactive-rating-card-using-css-grid-and-js-ccY2GJ8ktQ)
- Live Site URL: [Live site](https://deepak-tech40-rating-card.netlify.app/)

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
