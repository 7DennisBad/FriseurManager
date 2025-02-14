const userName = "Owner";
const userPass = "AdminPass";

function checkLogin(){
  let userNameIn = document.getElementById("userName").value;
  let userPassIn = document.getElementById("userPass").value;
  if (userNameIn !== userName || userPassIn !== userPass){
    alert("username or password incorrect!");
  } else {
    window.location.href = "../html/minigame.html";
    alert("succesfull login! waiting for DataBase integration!\nEnjoy the mini-games in the meantime :)");

  }
}
