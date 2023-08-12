const button = document.querySelector(".navbar-toggler");

function checkButtonState() {
  if (button.classList.contains("collapsed")) {
    document.querySelector("header").classList.remove("mobile");
    document.querySelector("#navbarScroll").classList.add("d-none");
  } else {
    document.querySelector("header").classList.add("mobile");
    document.querySelector("#navbarScroll").classList.remove("d-none");
  }
  setTimeout(function () {
    document
      .querySelector("#navbarScroll")
      .classList.remove("d-none");
  }, 0);
}

button.addEventListener("click", checkButtonState);
