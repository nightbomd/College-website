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

