
let players = JSON.parse(localStorage.getItem('players')) || [];
function displayPlayers() {
  const playerListElement = document.getElementById('playerList');
  playerListElement.innerHTML = '';
  players.forEach(player => {
    const listItem = document.createElement('li');
    listItem.textContent = player;
    playerListElement.appendChild(listItem);
  });
}
function addPlayer() {
  const playerNameInput = document.getElementById('playerName');
  const playerName = playerNameInput.value.trim();
  if (playerName !== '') {
    players.push(playerName);
    localStorage.setItem('players', JSON.stringify(players));
    displayPlayers();
    playerNameInput.value = '';
  }
}
displayPlayers();




