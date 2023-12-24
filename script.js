let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let resetNutton = document.querySelector(".reset");
// console.log(resetNutton);
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector(".reset");
let turnO = true; //PlayerO, PlayerX

// winning logi - 8 possibilites
const winPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  // Add Event listener for each box for click event})
  box.addEventListener("click", () => {
    // console.log("box was clicked.");

    turnO
      ? ((box.innerText = "O"), (turnO = false))
      : ((box.innerText = "X"), (turnO = true));

    //   Once clicked disable the box so that no further clicking is allowed.
    box.disabled = true;

    // check the winner on every click
    checkWinner();
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = "Congratulations,Winner is " + winner;
  msgContainer.classList.remove("hide");
  //   once we got winner disable all boxes.
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatters) {
    // console.log(pattern);
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner is " + pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
