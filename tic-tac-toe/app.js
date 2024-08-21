const game = {
  currentPlayer: "X",
  isOver: false,
  winSlots: [],
  slots: [null, null, null, null, null, null, null, null, null],
};

startGame();

function startGame() {
  const $btn = document.querySelector(".btn");
  $btn.style.display = game.isOver ? "block" : "none";

  $btn.onclick = () => {
    game.isOver = false;
    game.slots.fill(null);
    game.currentPlayer = "X";
    game.winSlots = [];
    startGame();
  };

  const $currentPlayer = document.querySelector(".current-player");
  $currentPlayer.style.display = game.isOver ? "none" : "block";
  const $player = document.querySelector("#player");
  $player.textContent = game.currentPlayer;

  const $winnerPlayer = document.querySelector(".winner-player");
  $winnerPlayer.style.display = game.isOver ? "block" : "none";
  const $winner = document.querySelector("#winner");
  $winner.textContent = game.winSlots.length ? game.currentPlayer : "DRAW";

  const $field = document.querySelector(".field");
  $field.innerHTML = "";
  for (let i = 0; i < game.slots.length; i++) {
    const slot = makeSlot(game.slots[i], game.winSlots.includes(i + 1));
    $field.append(slot);
    slot.onclick = () => {
      if (game.slots[i] || game.isOver) return;

      game.slots[i] = game.currentPlayer;

      if (gameIsWin() || game.slots.every((x) => x)) game.isOver = true;
      else game.currentPlayer = game.currentPlayer === "X" ? "O" : "X";

      startGame();
    };
  }
}

function makeSlot(slotContent, isWin) {
  const div = document.createElement("div");
  div.className = "slot";
  if (slotContent) {
    div.append(makeImage(slotContent));
  }
  if (isWin) {
    div.style.backgroundColor = "gold";
  }
  return div;
}

function makeImage(slotContent) {
  const img = document.createElement("img");
  img.setAttribute("src", `images/${slotContent.toLowerCase()}.png`);
  return img;
}

function gameIsWin() {
  if (game.slots.filter((x) => x).length < 4) return false;

  const winSlotsCases = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const winSlotsCase of winSlotsCases) {
    const tempWinSlots = game.slots.filter((_, i) =>
      winSlotsCase.includes(i + 1)
    );

    if (
      tempWinSlots.every((x) => x === "X") ||
      tempWinSlots.every((x) => x === "O")
    ) {
      game.winSlots = winSlotsCase;
      return true;
    }
  }
  return false;
}
