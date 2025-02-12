/*
let playerSelect = 0;

function changePlayerSelection(player){
  playerSelect = player^1;
}


function changeColor(element) {
  // Toggle between black and grey
  if (element.style.backgroundColor === "black" ) {
    console.log("no can do bro")
  } else {
    element.style.backgroundColor = "black";
  }
}

function checkValidGameMove(element){
  if (element.style.backgroundColor === "black" || element.style.backgroundColor === "grey"){
    console.log("invalid move")
  } else {
    changeColor(element)
  }
}

function selectCell(index) {
  let cell = document.querySelector(`.cell[data-index="${index}"]`);
  if (cell) {
    checkValidGameMove(cell);
  }
}

function gameTick(){
  document.querySelector(".board").addEventListener("click", function (event){
    if (event.target.classList.contains("cell")){
      let index = event.target.dataset.index;
      selectCell(index);
    }
  }
  )
}
requestAnimationFrame(gameTick);

 */
let playerSelect = 0;

function changePlayerSelection() {
  playerSelect = playerSelect ^ 1; // Toggle between 0 and 1
}

function changeColor(element) {
  if (element.style.backgroundColor === "black" || element.style.backgroundColor === "grey") {
    console.log("no can do bro");
  } else {
    element.style.backgroundColor = playerSelect === 0 ? "black" : "grey"; // Assign color based on player
    changePlayerSelection(); // Switch player
  }
}

function checkValidGameMove(element) {
  if (element.style.backgroundColor === "black" || element.style.backgroundColor === "grey") {
    console.log("invalid move");
  } else {
    changeColor(element);
  }
}

function selectCell(index) {
  let cell = document.querySelector(`.cell[data-index="${index}"]`);
  if (cell) {
    checkValidGameMove(cell);
  }
}

// Set up event listener when the DOM loads
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".board").addEventListener("click", function (event) {
    if (event.target.classList.contains("cell")) {
      let index = event.target.dataset.index;
      selectCell(index);
    }
  });
});
