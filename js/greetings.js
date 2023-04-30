const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const userOnly = document.querySelector('#useronly');
const logoutbtn = document.querySelector('#logout_btn');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  userOnly.classList.remove(HIDDEN_CLASSNAME);
  logoutbtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername == null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  //show the greeting
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

function logout() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  userOnly.classList.add(HIDDEN_CLASSNAME);
  logoutbtn.classList.add(HIDDEN_CLASSNAME);
}
