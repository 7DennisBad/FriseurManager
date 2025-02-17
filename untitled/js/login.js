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
const userName = "Owner";
const userPass = "AdminPass";

function checkLogin() {
  let userNameIn = document.getElementById("Username")?.value;
  let userPassIn = document.getElementById("password").value;

  if (userNameIn !== userName || userPassIn !== userPass) {
    alert("Username or password incorrect!");
  } else {
    alert("Successful login! Waiting for database integration.\nEnjoy the mini-games in the meantime :)");
    window.location.href = "../html/minigame.html";
  }
}
