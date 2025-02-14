
let playerSelection = 0;
let gameStage = 1;

function changeCellColor(cell){
  if (playerSelection === 1 && cell.style.backgroundColor !== "Grey"){
    cell.style.backgroundColor = "BLack";
  } else if (playerSelection === 0 && cell.style.backgroundColor !== "Black"){
    cell.style.backgroundColor = "Grey";
  }

  playerSelection = playerSelection ^ 1;
  console.log(playerSelection);
}


function cellById(id){
  return document.getElementById(""+id);
}

function CellColor(ind){
  return cellById(ind).style.backgroundColor;
}

function checkWinRow() {
  for (let i = 0; i < 9; i += 3) {
    let first = CellColor(i);
    let second = CellColor(i + 1);
    let third = CellColor(i + 2);

    if (first && first !== "White" && first === second && second === third) {
      console.log("Win row:", first);
      return first;
    }
  }
  return 0;
}


function checkWinColumn() {
  for (let i = 0; i < 3; i++) {
    let first = CellColor(i);
    let second = CellColor(i + 3);
    let third = CellColor(i + 6);

    if (first && first !== "White" && first === second && second === third) {
      console.log("Win column:", first);
      return first;
    }
  }
  return 0;
}


function checkWinDiagonal() {
  let center = CellColor(4);

  if (center && center !== "White") {
    if ((CellColor(0) === center && CellColor(8) === center) ||
      (CellColor(2) === center && CellColor(6) === center)) {
      console.log("Win diagonal:", center);
      return center;
    }
  }
  return 0;
}

function createWinMessage(PlayerColor){
  let winMsg = document.createElement("p");
  winMsg.textContent = "Color " + PlayerColor + " has Won!";
  winMsg.style.fontSize = "40px";
  winMsg.style.fontStyle = "oblique"
  winMsg.style.color = PlayerColor;
  document.getElementById("winDisplay").appendChild(winMsg);

}

function checkWinCondition(){
  if (checkWinRow()){
    createWinMessage(checkWinRow());
    gameStage = 0;
  }
  if (checkWinColumn()){
    createWinMessage(checkWinColumn());
    gameStage = 0;
  }
  if(checkWinDiagonal()){
    createWinMessage(checkWinDiagonal());
    gameStage = 0;
  }
}

function registerClick(event){
  if (event.target.classList.contains("cell") && gameStage) {
    console.log("Clicked cell ID:", event.target.id);
    changeCellColor(event.target);
    checkWinCondition();
  }
}

document.getElementById("Board").addEventListener("click", registerClick)



//document.getElementById("Board").addEventListener("click", registerClick);
