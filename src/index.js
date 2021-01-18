import Cleave from "cleave.js";

//  HOME

// tabs
const tabsContainer = document.querySelectorAll(".hero-tabs-head button");

tabsContainer.forEach((el) =>
  el.addEventListener("click", () => {
    tabsContainer.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
  })
);

const dropdown = document.querySelector(".hero-dropdown-list");

const packButton = document.querySelector(".hero-dropdown-selected");
packButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.setAttribute("style", "display: block;");
});

const cleave = new Cleave(".hero-phone-input input", {
  delimiter: " ",
  blocks: [3, 3, 3],
});