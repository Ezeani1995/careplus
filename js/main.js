const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("clicked");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("clicked");
});
