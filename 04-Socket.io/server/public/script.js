const socket = io("ws://localhost:3000");
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
  socket.emit("message", input.value);
  input.value = "";
  input.focus();
});

socket.on("message", (data) => {
  const li = document.createElement("li");
  li.textContent = data;
  ul.appendChild(li);
});
