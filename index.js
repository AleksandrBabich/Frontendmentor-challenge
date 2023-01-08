const container = document.querySelector(".container");
const secondContainer = document.querySelector(".second-container");
const btn = document.querySelector(".btn-submit");
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

btn.addEventListener("click", () => {
  secondContainer.classList.remove("hidden")
  container.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})