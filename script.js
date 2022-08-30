const container = document.getElementById("container");
const submitBtn = document.getElementById("submit-button");
const rateBtn = document.querySelectorAll(".rating");

function getRating() {
  let n = 0;
  rateBtn.forEach((btn) => {
    if (btn.classList.contains("highlight")) n = Number(btn.innerText);
  });
  return n;
}

function unhighlightAll() {
  rateBtn.forEach((btn) => btn.classList.remove("highlight"));
}

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

function highlight(e) {
  e.srcElement.classList.add("highlight");
}
rateBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    unhighlightAll();
    highlight(e);
  })
);
