let sbmt = document.querySelector(".submit");
let ratingNums = document.querySelector(".rating-nums");
let finalRate = document.querySelector(".rate");
let ratingEnd = document.querySelector(".rating-end");
let ratingStart = document.querySelector(".rating-st");

ratingNums.addEventListener("click", (e) => {
  finalRate.textContent = e.target.value;
});

sbmt.addEventListener("click", () => {
  ratingEnd.classList.remove("hide");
  ratingStart.style.display = "none";
});
