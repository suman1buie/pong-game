ball = document.querySelector(".ball");
board = document.querySelector(".board");
leftPaddel = document.querySelector(".left");
rightPaddel = document.querySelector(".right");
l1 = document.querySelector(".l1");
l2 = document.querySelector(".l2");
l3 = document.querySelector(".l3");
r1 = document.querySelector(".r1");
r2 = document.querySelector(".r2");
r3 = document.querySelector(".r3");

fill = 1;
jill = 1;
leftPaddelCordinate = leftPaddel.getBoundingClientRect();
rightPaddelCordinate = rightPaddel.getBoundingClientRect();
leftLife = 3;
rightLife = 3;

document.addEventListener("keyup", function keyPress(e) {
  if (e.key === "w") {
    if (
      leftPaddel.getBoundingClientRect().top - 20 >
      board.getBoundingClientRect().top
    ) {
      leftPaddel.style.top = leftPaddel.getBoundingClientRect().top - 25 + "px";
    }
  }
  if (e.key === "s") {
    if (
      leftPaddel.getBoundingClientRect().bottom + 15 <
      board.getBoundingClientRect().bottom
    ) {
      leftPaddel.style.top = leftPaddel.getBoundingClientRect().top + 25 + "px";
    }
  }
  if (e.key === "ArrowDown") {
    if (
      rightPaddel.getBoundingClientRect().bottom + 15 <
      board.getBoundingClientRect().bottom
    ) {
      rightPaddel.style.top =
        rightPaddel.getBoundingClientRect().top + 25 + "px";
    }
  }
  if (e.key === "ArrowUp") {
    if (
      rightPaddel.getBoundingClientRect().top - 20 >
      board.getBoundingClientRect().top
    ) {
      rightPaddel.style.top =
        rightPaddel.getBoundingClientRect().top - 25 + "px";
    }
  }
});

function changePossition() {
  let ballCordinate = ball.getBoundingClientRect();
  let boardCordinate = board.getBoundingClientRect();
  //ball
  ballTop = ballCordinate.top;
  ballBottom = ballCordinate.bottom;
  ballLeft = ballCordinate.left;
  ballRight = ballCordinate.right;
  //board
  boardTop = boardCordinate.top;
  boardBottom = boardCordinate.bottom;
  boardLeft = boardCordinate.left;
  boardRight = boardCordinate.right;
  //left paddel
  LPtop = leftPaddel.getBoundingClientRect().top;
  LPbottom = leftPaddel.getBoundingClientRect().bottom;
  LPleft = leftPaddel.getBoundingClientRect().left;
  LPright = leftPaddel.getBoundingClientRect().right;
  //right paddel
  RPtop = rightPaddel.getBoundingClientRect().top;
  RPbottom = rightPaddel.getBoundingClientRect().bottom;
  RPleft = rightPaddel.getBoundingClientRect().left;
  RPright = rightPaddel.getBoundingClientRect().right;

  if (
    ballTop >= LPtop - 20 &&
    ballBottom <= LPbottom + 20 &&
    ballLeft <= LPright
  ) {
    jill = 1;
  } else if (ballLeft <= boardLeft) {
    jill = 1;
    leftLife -= 1;
    if (leftLife === 2) {
      l1.style.backgroundColor = "red";
    }
    if (leftLife === 1) {
      l2.style.backgroundColor = "red";
    }
  }

  if (ballBottom >= boardBottom) {
    fill = -1;
  }

  if (
    ballTop >= RPtop - 20 &&
    ballBottom <= RPbottom - 20 &&
    ballRight >= RPleft
  ) {
    jill = -1;
  } else if (ballRight >= boardRight) {
    jill = -1;
    rightLife -= 1;
    if (rightLife === 2) {
      r1.style.backgroundColor = "red";
    }
    if (rightLife === 1) {
      r2.style.backgroundColor = "red";
    }
  }

  if (ballTop <= boardTop) {
    fill = 1;
  }

  ball.style.top = ballTop + 4 * fill + "px";
  ball.style.left = ballLeft + 4 * jill + "px";

  if (leftLife === 0) {
    l3.style.backgroundColor = "red";
    alert("Right won");
    reSetGame();
  }
  if (rightLife === 0) {
    r3.style.backgroundColor = "red";
    alert("Left won");
    reSetGame();
  }

  requestAnimationFrame(changePossition);
}

function reSetGame() {
  ball.style.top = 45 + "vh";
  ball.style.left = 45 + "vw";
  rightLife = 3;
  leftLife = 3;
  l1.style.backgroundColor = "#b4d61c";
  l2.style.backgroundColor = "#b4d61c";
  l3.style.backgroundColor = "#b4d61c";
  r1.style.backgroundColor = "#b4d61c";
  r2.style.backgroundColor = "#b4d61c";
  r3.style.backgroundColor = "#b4d61c";
}

requestAnimationFrame(changePossition);
