document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("index-hero-lg")) {
    new Vivus("index-hero-lg", { start: "inViewport", duration: 200 });
  }

  if (document.getElementById("index-hero-sm")) {
    new Vivus("index-hero-sm", { start: "inViewport", duration: 200 });
  }

  if (document.getElementById("about-decor-bg")) {
    new Vivus("about-decor-bg", { start: "inViewport", duration: 200 });
  }
});
