enum AVAILABLE_CHOICES {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSOR = "SCISSOR",
}

enum IMG_SRCS {
  ROCK = "https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg",
  PAPER = "https://oryzafibers.com/wp-content/uploads/2023/12/Cotton-paper-img-Oryza-fiber-scaled.webp",
  SCISSOR = "https://media.istockphoto.com/id/496410586/vector/scissors-icon.jpg?s=612x612&w=0&k=20&c=R7IFNICVpXRWM0UUaYDGu_Qp-P88jesWQYCZggJyGLM=",
}

const playButton = document.getElementById("play-btn");
const firstPlayer = document.getElementById("player-1");
const secondPlayer = document.getElementById("player-2");

function makeChoice(numberChoosed: number) {
  if (numberChoosed === 1) {
    return AVAILABLE_CHOICES.PAPER;
  } else if (numberChoosed === 2) {
    return AVAILABLE_CHOICES.ROCK;
  } else if (numberChoosed === 3) {
    return AVAILABLE_CHOICES.SCISSOR;
  } else {
    alert("Invalid choice");
    return null;
  }
}

function createPlayerDiv(choice: AVAILABLE_CHOICES): HTMLDivElement {
  const newDiv = document.createElement("div");
  const imgTag = document.createElement("img");
  imgTag.classList.add("w-full", "h-full", "object-contain");
  if (choice === AVAILABLE_CHOICES.SCISSOR) {
    imgTag.src = IMG_SRCS.SCISSOR;
    imgTag.alt = "Scissor";
  } else if (choice === AVAILABLE_CHOICES.ROCK) {
    imgTag.src = IMG_SRCS.ROCK;
    imgTag.alt = "Rock";
  } else if (choice === AVAILABLE_CHOICES.PAPER) {
    imgTag.src = IMG_SRCS.PAPER;
    imgTag.alt = "Paper";
  } else {
    imgTag.src = "";
    imgTag.alt = "Invalid img";
  }
  newDiv.appendChild(imgTag);

  return newDiv;
}

if (playButton) {
  playButton.addEventListener("click", function () {
    const randomNumberForPlayerOne = parseInt(
      ((Math.random() * 10) / 4 + 1).toString()
    );
    const radomNumberForPlayerTwo = Math.floor((Math.random() * 10) / 4 + 1);

    let firstPlayerChoice = makeChoice(randomNumberForPlayerOne);
    let secondPlayerChoice = makeChoice(radomNumberForPlayerTwo);

    console.log("first player choice", firstPlayerChoice);
    console.log("second player choice", secondPlayerChoice);

    if (firstPlayerChoice === null || secondPlayerChoice === null) {
      return;
    }

    let firstPlayerDiv = createPlayerDiv(firstPlayerChoice);
    let secondPlayerDiv = createPlayerDiv(secondPlayerChoice);

    if (firstPlayer) {
      firstPlayer.innerHTML = "";
    }

    if (secondPlayer) {
      secondPlayer.innerHTML = "";
    }
    firstPlayer?.appendChild(firstPlayerDiv);
    secondPlayer?.appendChild(secondPlayerDiv);

    if (firstPlayerChoice === secondPlayerChoice) {
      alert("Match draw");
      return;
    } else if (
      (firstPlayerChoice === AVAILABLE_CHOICES.PAPER &&
        secondPlayerChoice === AVAILABLE_CHOICES.ROCK) ||
      (firstPlayerChoice === AVAILABLE_CHOICES.ROCK &&
        secondPlayerChoice === AVAILABLE_CHOICES.SCISSOR) ||
      (firstPlayerChoice === AVAILABLE_CHOICES.SCISSOR &&
        secondPlayerChoice === AVAILABLE_CHOICES.PAPER)
    ) {
      alert("Player 1 wins");
      return;
    } else {
      alert("Player 2 wins");
      return;
    }
  });
}
