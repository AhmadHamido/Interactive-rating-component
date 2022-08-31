# Frontend Mentor - Interactive rating component solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

<img width="480" alt="Screenshot 2022-08-30 at 15 44 43" src="https://user-images.githubusercontent.com/97303935/187454655-6e79b152-e11e-42d1-bc20-fd7dea91adf9.png">

<img width="542" alt="Screenshot 2022-08-30 at 15 45 02" src="https://user-images.githubusercontent.com/97303935/187454999-a1f4061c-525e-4a3f-8bd0-0d4def53af4e.png">

<img width="471" alt="Screenshot 2022-08-30 at 15 45 12" src="https://user-images.githubusercontent.com/97303935/187455107-7d2fb03e-078c-498d-8a99-c10191195e7f.png">

### Links

- Solution URL: [https://github.com/AhmadHamido/Interactive-rating-component]
- Live Site URL: [https://630f2db014c7c803a5fb28e7--charming-sprinkles-e83408.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

```js
submitBtn.addEventListener("click", function () {
  container.style.gridTemplate = `2em 1fr 50px 60px 1fr / 1.2em 1fr 1.2em`;
  container.style.gridGap = `0`;
  container.innerHTML = `
      <img class="phone-img" src="/images/illustration-thank-you.svg" alt="a phone with scroll coming out of it">
      <p class="number-selection">You selected ${getRating()} out of 5</p>
      <h2 class="thank-you-title">Thank you!</h2>
      <p class="thank-you-message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  `;
});
```

### Continued development

While getting more confident each day in javascript through practice, I'm already planning on branching out on game and app development.

### Useful resources

- [Resource](https://www.discord.com) - I couldn't find answers on what I need for highlighting the buttons, so I asked on the scrimba community on discord.

## Author

- Website - [Ahmad Hamido] (https://630f2db014c7c803a5fb28e7--charming-sprinkles-e83408.netlify.app/)
- Frontend Mentor - [@AhmadHamido](https://www.frontendmentor.io/profile/AhmadHamido)
- Twitter - [@thereapermma91](https://www.twitter.com/thereapermma91)
