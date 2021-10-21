let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav");
let moon = document.querySelector("#moon");
let html = document.querySelector("#html");
let bulb = document.querySelector("#bulb");
let darkMode = document.querySelector("#darkMode");
burger.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    nav.classList.add("top-16");
    nav.classList.add("bottom-0");
  } else {
    nav.classList.add("hidden");
  }
});
darkMode.addEventListener("click", () => {
  setTimeout(() => {
    if (moon.classList.contains("f")) {
      moon.classList.add("hidden");
      moon.classList.remove("f");
      bulb.classList.remove("hidden");
      html.classList.add("dark");
    } else {
      moon.classList.add("f");
      moon.classList.remove("hidden");
      bulb.classList.add("hidden");
      html.classList.remove("dark");
    }
  }, 100);
});
