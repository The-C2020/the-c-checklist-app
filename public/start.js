const saveButton = document.querySelector(".savePlayerButton");
const playerContainer = document.querySelector(".player-container");

let players = [];

playerContainer.addEventListener("click", (e) => {
  // If add-button was clicked, add a new fieldset with a player name
  if (e.target.classList.contains("btnAddPlayer")) {
    playerContainer.insertAdjacentHTML(
      "beforeend",
      `<fieldset class="player-line">
    <input type="text" class="player-name" id="player" name="player" placeholder="Enter a Name..." />
    <button type="button" class="btnAddPlayer">+</button>
    <button type="button" class="btnRemovePlayer">-</button>
  </fieldset>`
    );
    // If remove-button was clicked, remove the clicked fieldset
  } else if (e.target.classList.contains("btnRemovePlayer")) {
    const fieldset = e.target.closest("fieldset");
    fieldset.remove();
  }
});

function sendData() {
  document.querySelectorAll(".player-name").forEach((element) => players.push(element.value));
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ players }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Error sending data");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
