const btn = document.querySelector(".btn");
const display_chat = document.querySelector(".screen-messages");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const msg = document.querySelector(".message");

  let txt_msg = msg.value;

  console.log(txt_msg);

  const box_msg = document.createElement("span");
  const paragraph = document.createElement("p");

  box_msg.classList.add("client-chat");
  box_msg.innerHTML += "Client:";

  paragraph.innerHTML += txt_msg;

  box_msg.appendChild(paragraph);

  display_chat.appendChild(box_msg);

  msg.value = " ";
});
