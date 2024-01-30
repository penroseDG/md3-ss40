let players = [
    {"id": 1, "name": "Cầu thủ 1"},
    {"id": 2, "name": "Cầu thủ 2"},
  ];
  function deletePlayer() {
    let playerId = document.getElementById("playerId").value;
    for (let i = 0; i < players.length; i++) {
      if (players[i].id == playerId) {
  
        players.splice(i, 1);
        alert("Đã xóa cầu thủ có id " + playerId);
        return;
      }
    }
    alert("Không tìm thấy cầu thủ có id " + playerId);
  }
