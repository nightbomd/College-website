const buttons = document.querySelectorAll(".usc-tab");
const panels = document.querySelectorAll(".usc-panel");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetPanel = button.dataset.panel;

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    panels.forEach((panel) => {
      panel.classList.remove("active");
      panel.hidden = true; // Hide all panels 
    });

    button.classList.add("active");
    const panelToShow = document.getElementById(targetPanel);
    if (panelToShow) {
      panelToShow.hidden = false; // Show the selected panel
      panelToShow.classList.add("active");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    }
  });
});

const elements = document.querySelectorAll(".fade-element");

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  observer.observe(el);
});

const secondObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.style.transform = "translateX(0)";
      el.style.opacity = "1";

    }
    else {
      el.style.transform = "translateX(-30px)";
      el.style.opacity = "0";
    }
  })
}) 

const secondElements = document.querySelectorAll(".translate-element");

secondElements.forEach(el => {
  el.style.transform = "translateX(-20px)";
  el.style.transition = "transform 0.6s ease";
  el.style.opacity = "0"
  secondObserver.observe(el);
});

const thirdObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      el.style.transform = "scale(1)";
      el.style.opacity = "1";
    } else {
      el.style.transform = "scale(0.9)";
      el.style.opacity = "0";
    }
  });
});

const scaleElements = document.querySelectorAll(".scale-element");

scaleElements.forEach(el => {
  el.style.transform = "scale(0.9)";
  el.style.opacity = "0";
  el.style.transition = "transform 0.6s ease, opacity 0.6s ease";

  thirdObserver.observe(el);
});