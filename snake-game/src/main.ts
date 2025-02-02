import { IFood } from "../@types";

document.addEventListener("DOMContentLoaded", () => {
  const gameArena = document.getElementsByClassName("game-arena")[0];
  const body = document.getElementsByTagName("body");
  const arenaSize = 600;
  const cellSize = 20;

  let score = 0;
  let gameStarted = false;
  let food: IFood = {
    x: 300,
    y: 200,
  };

  let snake = [
    { x: 160, y: 200 },
    { x: 140, y: 200 },
    { x: 120, y: 200 },
  ];

  let dx = cellSize;
  let dy = 0;

  function drawScoreBoard() {
    const scoreBoard = document.getElementById("score-board");
    if (!scoreBoard) {
      throw new Error("Score board element is not present");
    }

    scoreBoard.textContent = `Score: ${score} `;
  }

  function drawDiv(x, y, className) {
    const div = document.createElement("div");
    div.classList.add(className);
    div.style.top = `${y}px`;
    div.style.left = `${x}px`;
    return div;
  }

  function drawFoodAndSnake() {
    gameArena.innerHTML = ""; // if previously something is drawn then remove it

    snake.forEach((snakeCell) => {
      const element = drawDiv(snakeCell.x, snakeCell.y, "snake");
      gameArena.appendChild(element);
    });

    const foodElement = drawDiv(food.x, food.y, "food");
    gameArena.appendChild(foodElement);
  }

  function gameLoop() {
    setInterval(() => {
      drawScoreBoard();
      drawFoodAndSnake();
    }, 1000);
  }
  function runGame() {
    gameStarted = true;
    gameLoop();
  }

  (function initGame() {
    const scoreBoard = document.createElement("div");
    scoreBoard.id = "score-board";
    scoreBoard.textContent = "10";
    document.body.insertBefore(scoreBoard, gameArena);

    const startButton = document.createElement("button");
    startButton.textContent = "Start Game";
    startButton.className = "start-button";
    body[0].appendChild(startButton);

    startButton.addEventListener("click", () => {
      startButton.style.display = "none";
      runGame();
    });
  })();
});
