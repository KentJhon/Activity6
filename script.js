window.addEventListener("scroll", function () {
  var header = document.getElementById("navbar");
  if (window.scrollY > 50) {
    header.style.backgroundImage = "none";
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    header.style.backgroundImage =
      "linear-gradient(to right, #93a5cf, #e4efe9)";
    header.style.backgroundColor = "transparent";
  }
});
