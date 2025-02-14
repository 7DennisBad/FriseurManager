const userName = "Owner";
const userPass = "AdminPass";

function checkLogin(){
  let userNameIn = document.getElementById("userName").value;
  let userPassIn = document.getElementById("userPass").value;
  if (userNameIn !== userName || userPassIn !== userPass){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    alert("username or password incorrect!");
  } else {
    window.location.href = "../html/minigame.html";
    alert("succesfull login! waiting for DataBase integration!\nEnjoy the mini-games in the meantime :)");
  }
}
