import kaplay from "kaplay";
import "kaplay/global";

import { startScene } from "./scenes/startScene";
import { gameScene } from "./scenes/gameScene";
import { gameOverScene } from "./scenes/gameOverScene";

kaplay({
  background: [0, 0, 0],
  buttons: {
    play: {
      keyboard: ["space"],
    },
  },
  debugKey: "d",
  debug: true,
});

scene("start", startScene);
scene("game", gameScene);
scene("gameover", gameOverScene);

go("start");
