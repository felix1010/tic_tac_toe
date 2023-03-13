function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom plyer names for both please!");
    return;
  }
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  console.log(activePlayer);
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  switchPlayer();
}
