import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const label = document.getElementById("theme-switch-label");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
    label.textContent = "Light Mode";
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      label.textContent = "Light Mode";
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      label.textContent = "Dark Mode";
    }
  });
});

document.addEventListener("DOMContentLoaded", initTaskBoard);
