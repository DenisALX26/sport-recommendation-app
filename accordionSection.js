document.addEventListener("DOMContentLoaded", function () {
  const panels = document.querySelectorAll(".accordion-body");

  panels.forEach((panel) => {
    const image = panel.querySelector(".label");
    image.addEventListener("click", function () {
      this.classList.toggle("active");
    });
    const header = panel.querySelector(".label");
    const content = panel.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
