const updateButton = document.querySelector("#update-view");
const targetSelect = document.querySelector("#target");
const observationTime = document.querySelector("#observation-time");
const message = document.querySelector("#view-message");

updateButton.addEventListener("click", () => {
  const targetName = targetSelect.options[targetSelect.selectedIndex].text;
  const time = observationTime.value.replace("T", " ");

  message.textContent = `${targetName} selected for ${time} UTC. Add the translated baseline calculation here next.`;
});

// Migration plan:
// 1. Move the station list from the notebook into a JavaScript data module.
// 2. Translate the coordinate and visibility calculations into pure functions.
// 3. Render the globe and UV plot inside #visualization.
