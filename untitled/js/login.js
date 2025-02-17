

// Passwort anzeigen/ausblenden
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');
const icon = document.getElementById('icon');

toggleButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.className = 'bx bxs-lock-open-alt';
  } else {
    passwordInput.type = 'password';
    icon.className = 'bx bxs-lock-alt';
  }
});

// Login-Funktion
function proceedLogin(){
  console.log("Login successful!");
  window.location.href = "../html/minigame.html";
}

function showError(){
  alert("Incorrect username or password!");
  //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

}



function checkLoginData(userNameIn, userPassIn, users) {
  const user = users.find(user => user.userName === userNameIn);
  if (user) {
    if (user.userPass === userPassIn) {
      proceedLogin();
    } else {
      showError();
    }
  } else {
    showError();
  }
}


function loadJson(userNameIn, userPassIn) {
  fetch("../json/Logins.json")
    .then(response => response.json())
    .then(users => checkLoginData(userNameIn, userPassIn, users))
    .catch(error => console.error("Error loading JSON:", error));
}


function attemptLogin() {
  let userNameIn = document.getElementById("userName").value;
  let userPassIn = document.getElementById("userPass").value;
  loadJson(userNameIn, userPassIn);
}

