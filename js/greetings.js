// 로그인 기능
const loginForm = document.getElementById("login-form");
const logoutForm = document.getElementById("logout-form");
const loginInput = document.getElementById("loginInput");
const greeting = document.getElementById("greeting");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(TODOS_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = '';
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null || savedUsername === "") {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  
} else {
  console.log('sdfdsfds');
  paintGreetings(savedUsername);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

logoutForm.addEventListener("click", onLogoutClick);