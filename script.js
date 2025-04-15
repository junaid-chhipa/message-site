const messageWrapper = document.getElementById("messageWrapper");
const messageContainer = document.getElementById("messageContainer");
const messageBtn = document.getElementById("messageBtn");
const closeBtn = document.getElementById("closeBtn");

messageBtn.addEventListener("click", () => {
  messageWrapper.classList.remove("hidden");
  messageWrapper.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  messageWrapper.classList.add("fading-out");
  setTimeout(() => {
    messageWrapper.classList.remove("visible", "fading-out");
    messageWrapper.classList.add("hidden");
  }, 500);
});
