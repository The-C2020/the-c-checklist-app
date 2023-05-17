const playerList = players.split(",");
const tasks = [
  "Kill one Enemy",
  "Kill something else, doesn´t matter what",
  "Do whatever the fuck you want. I Don't care at all!",
];

// DOM
const selectPlayer = document.querySelector("#select-player");
const gridContainer = document.querySelector(".grid-container");

// Populate Select
for (const player of playerList) {
  selectPlayer.insertAdjacentHTML("beforeend", `<option value="${player}">${player}</option>`);
}
// Populate List
// Create Header
// First Cell is empty
gridContainer.insertAdjacentHTML(
  "beforeend",
  `<div class="grid-item grid-header">
<div class="first-cell"></div>
</div>`
);
// Next cells contain the names of the players
for (const player of playerList) {
  gridContainer.insertAdjacentHTML("beforeend", `<div class="grid-item grid-header">${player}</div>`);
}
// Create tasks
for (let i = 0; i < tasks.length; i++) {
  gridContainer.insertAdjacentHTML(
    "beforeend",
    `<!-- Row Start -->
    <div class="grid-item">
  <div class="grid-task">${tasks[i]}</div>
</div>`
  );
  for (const player of playerList) {
    gridContainer.insertAdjacentHTML(
      "beforeend",
      `      <div class="grid-item">
    <div class="grid-checkbox">
      <input data-row="${i + 1}" data-column="${player}" type="checkbox" />
    </div>
  </div>`
    );
  }
  gridContainer.insertAdjacentHTML("beforeend", `<!-- Row End -->`);
}
// Adjust the Grid columns
console.log(gridContainer);
gridContainer.setAttribute("style", `grid-template-columns: repeat(${playerList.length + 1}, auto);`);
