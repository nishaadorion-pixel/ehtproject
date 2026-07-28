const updateButton = document.querySelector("#update-view");
const targetSelect = document.querySelector("#target");
const observationTime = document.querySelector("#observation-time");
const message = document.querySelector("#view-message");

updateButton.addEventListener("click", () => {
  const targetName = targetSelect.options[targetSelect.selectedIndex].text;
  const time = observationTime.value.replace("T", " ");

  message.textContent = `${targetName} selected for ${time} UTC. Add the translated baseline calculation here next.`;
});

