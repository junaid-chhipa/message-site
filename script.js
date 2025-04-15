const messageContainer = document.getElementById("messageContainer");
const messageBtn = document.getElementById("messageBtn");
const closeBtn = document.getElementById("closeBtn");

messageBtn.addEventListener("click", () => {
  messageContainer.classList.remove("hidden");
  messageContainer.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  messageContainer.classList.remove("visible");
  setTimeout(() => {
    messageContainer.classList.add("hidden");
  }, 500); // match CSS transition
});
