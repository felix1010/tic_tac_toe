function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom plyer names for both please!");
    return;
  }
  gameAreaElement.style.display = "block";
}
