const button = document.querySelector(".navbar-toggler");

function checkButtonState() {
  if (button.classList.contains("collapsed")) {
    document.querySelector("header").classList.remove("mobile");
    document.querySelector("#navbarSupportedContent").classList.add("d-none");
  } else {
    document.querySelector("header").classList.add("mobile");
    document.querySelector("#navbarSupportedContent").classList.remove("d-none");
  }
  setTimeout(function () {
    document
      .querySelector("#navbarSupportedContent")
      .classList.remove("d-none");
  }, 0);
}

button.addEventListener("click", checkButtonState);
