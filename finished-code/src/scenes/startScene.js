export function startScene() {
  add([
    text("PONG", { size: 50 }),
    pos(center().x, center().y - 150),
    anchor("center"),
  ]);

  add([text("Press space to play"), pos(center()), anchor("center")]);

  onButtonPress("play", () => go("game"));
}
