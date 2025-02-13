
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


function registerClick(event){
  if (event.target.classList.contains("cell") && gameStage) {
    console.log("Clicked cell ID:", event.target.id);
    changeCellColor(event.target);
    checkWinCondition();
  }
}

function cellById(id){
  return document.getElementById(""+id);
}

function CellColor(ind){
  return cellById(ind).style.backgroundColor;
}

function checkWinRow(){
  for (let i = 0; i<9; i+=3){
    if(CellColor(i) === CellColor(i+1) && CellColor(i+1) === CellColor(i+2)){
      if(CellColor(i) !== "White") {
        return CellColor(i);
      }
    }
  }
  return 0;
}

function checkWinColumn(){
  for (let i = 0; i<3; i++){
    if(CellColor(i) === CellColor(i+3) && CellColor(i+3) === CellColor(i+6)){
      if(CellColor(i) !== "White") {
        return CellColor(i);
      }
    }
  }
  return 0;
}


function checkWinDiagonal(){
  if ((CellColor(0) === CellColor(4) && CellColor(4) === CellColor(8))
      || (CellColor(2) === CellColor(4) && CellColor(4) === CellColor(6))){
    if (CellColor(4) !== "White"){
      return CellColor(4)
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

document.getElementById("Board").addEventListener("click", registerClick)



//document.getElementById("Board").addEventListener("click", registerClick);
