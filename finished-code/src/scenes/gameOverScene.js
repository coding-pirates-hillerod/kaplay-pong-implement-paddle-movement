export function gameOverScene() {
  add([
    text(getData("winner"), { size: 50 }),
    pos(center().x, center().y - 150),
    anchor("center"),
  ]);

  add([text("Press space to play again .."), pos(center()), anchor("center")]);

  onButtonPress("play", () => go("game"));
}
