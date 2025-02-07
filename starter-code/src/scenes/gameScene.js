export function gameScene() {
  const paddleWidth = 20;
  const paddleHeight = 200;
  let paddleSpeed = 200;
  let isBallMovingDown;
  let isBallMovingRight;
  let ballSpeed = 400;
  let playerOneScore = 0;
  let playerTwoScore = 0;

  onLoad(() => {
    isBallMovingDown = Math.round(rand(0, 1)) ? true : false;
    isBallMovingRight = Math.round(rand(0, 1)) ? true : false;
  });

  loop(2.5, () => {
    ballSpeed += 50;
    paddleSpeed += 10;
  });

  onUpdate(() => {
    if (playerOneScore === 3 || playerTwoScore === 3) {
      let whoWins =
        playerOneScore > playerTwoScore
          ? "Player 1 wins!!!"
          : "Player 2 wins!!!";
      setData("winner", whoWins);
      go("gameover");
    }
  });

  const playerOne = add([
    text("Player 1: 0"),
    opacity(0.5),
    pos(center().x - 350, 50),
    anchor("center"),
  ]);
  const playerTwo = add([
    text("Player 2: 0"),
    opacity(0.5),
    pos(center().x + 350, 50),
    anchor("center"),
  ]);

  const paddle1 = add([
    rect(paddleWidth, paddleHeight),
    pos(paddleWidth, center().y - paddleHeight / 2),
    area(),
  ]);

  // paddle1.onKeyDown("w", () => {
  //   if (paddle1.pos.y >= 0) {
  //     paddle1.moveTo(paddle1.pos.x, paddle1.pos.y - paddleSpeed, paddleSpeed);
  //   }
  // });

  // paddle1.onKeyDown("s", () => {
  //   if (paddle1.pos.y <= height() - paddleHeight) {
  //     paddle1.moveTo(paddle1.pos.x, paddle1.pos.y + paddleSpeed, paddleSpeed);
  //   }
  // });

  paddle1.onCollide("ball", () => {
    isBallMovingRight = !isBallMovingRight;
  });

  const paddle2 = add([
    rect(paddleWidth, paddleHeight),
    pos(width() - paddleWidth * 2, center().y - paddleHeight / 2),
    area(),
  ]);

  // paddle2.onKeyDown("up", () => {
  //   if (paddle2.pos.y >= 0) {
  //     paddle2.moveTo(paddle2.pos.x, paddle2.pos.y - paddleSpeed, paddleSpeed);
  //   }
  // });

  // paddle2.onKeyDown("down", () => {
  //   if (paddle2.pos.y <= height() - paddleHeight) {
  //     paddle2.moveTo(paddle2.pos.x, paddle2.pos.y + paddleSpeed, paddleSpeed);
  //   }
  // });

  paddle2.onCollide("ball", () => {
    isBallMovingRight = !isBallMovingRight;
  });

  const ball = add([circle(15), pos(center()), area(), offscreen(), "ball"]);

  ball.onUpdate(() => {
    if (isBallMovingDown && isBallMovingRight) {
      if (ball.pos.y <= height() - ball.radius) {
        ball.moveTo(ball.pos.x + ballSpeed, ball.pos.y + ballSpeed, ballSpeed);
      } else {
        isBallMovingDown = !isBallMovingDown;
      }
    } else if (!isBallMovingDown && isBallMovingRight) {
      if (ball.pos.y >= ball.radius) {
        ball.moveTo(ball.pos.x + ballSpeed, ball.pos.y - ballSpeed, ballSpeed);
      } else {
        isBallMovingDown = !isBallMovingDown;
      }
    } else if (isBallMovingDown && !isBallMovingRight) {
      if (ball.pos.y <= height() - ball.radius) {
        ball.moveTo(ball.pos.x - ballSpeed, ball.pos.y + ballSpeed, ballSpeed);
      } else {
        isBallMovingDown = !isBallMovingDown;
      }
    } else {
      if (ball.pos.y >= ball.radius) {
        ball.moveTo(ball.pos.x - ballSpeed, ball.pos.y - ballSpeed, ballSpeed);
      } else {
        isBallMovingDown = !isBallMovingDown;
      }
    }
  });

  ball.onExitScreen(() => {
    if (ball.pos.x < 0) {
      playerTwoScore++;
      isBallMovingRight = true;
      playerTwo.text = `Player 2: ${playerTwoScore}`;
    } else {
      playerOneScore++;
      isBallMovingRight = false;
      playerOne.text = `Player 1: ${playerOneScore}`;
    }

    ball.moveTo(center());
    isBallMovingDown = Math.round(rand(0, 1)) ? true : false;
    paddleSpeed = 200;
    ballSpeed = 300;
  });
}
