
let playerName = "شما";
const names = ["فرزاد", "نیما", "سارا", "آرمین", "نازنین", "پویا", "رضا", "مهسا", "شاهین", "نرگس"];
let aiPlayers = [];

function startGame() {
  const input = document.getElementById('playerName');
  if (input.value.trim() !== "") {
    playerName = input.value.trim();
  }

  aiPlayers = [];
  for (let i = 0; i < 4; i++) {
    let name = names[Math.floor(Math.random() * names.length)];
    aiPlayers.push({ name, avatar: `🤖`, hand: [] });
  }

  document.getElementById('player-name-input').style.display = 'none';
  initTable();
}

function initTable() {
  const canvas = document.getElementById('poker-table');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw table
  ctx.fillStyle = "#14532d";
  ctx.beginPath();
  ctx.ellipse(400, 300, 300, 150, 0, 0, Math.PI * 2);
  ctx.fill();

  // Draw player names
  ctx.fillStyle = "#fff";
  ctx.font = "16px Tahoma";
  ctx.fillText(playerName, 370, 500);

  const positions = [
    [100, 100], [700, 100], [100, 500], [700, 500]
  ];
  aiPlayers.forEach((p, i) => {
    ctx.fillText(`${p.avatar} ${p.name}`, positions[i][0], positions[i][1]);
  });

  // Play card sound
  document.getElementById('card-sound').play();
  document.getElementById('dialog-box').innerText = "بازی شروع شد!";
}
