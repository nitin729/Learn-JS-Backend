const socket = new WebSocket("ws://localhost:3000");
socket.protocol;

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  if (!input.value) {
    alert("Please enter a message");
    input.focus();
  }
  socket.send(input.value);
  input.value = "";
  input.focus();
});

socket.addEventListener("message", (event) => {
  console.log(event);
  const li = document.createElement("li");
  li.textContent = event.data;
  ul.appendChild(li);
});
