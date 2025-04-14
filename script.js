const messageWrapper = document.getElementById("messageWrapper");
const messageBtn = document.getElementById("messageBtn");
const closeBtn = document.getElementById("closeBtn");

messageBtn.addEventListener("click", () => {
  messageWrapper.classList.remove("hidden");
  messageWrapper.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  messageWrapper.classList.remove("visible");
  messageWrapper.classList.add("hidden");
});
