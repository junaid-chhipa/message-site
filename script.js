const messageWrapper = document.getElementById("messageWrapper");
const messageImg = document.getElementById("messageImage");
const messageBtn = document.getElementById("messageBtn");
const closeBtn = document.getElementById("closeBtn");

messageBtn.addEventListener("click", () => {
  messageWrapper.hidden = false;
  messageWrapper.classList.remove("fade-out");
  messageWrapper.classList.add("fade-in");
});

closeBtn.addEventListener("click", () => {
  messageWrapper.classList.remove("fade-in");
  messageWrapper.classList.add("fade-out");

  setTimeout(() => {
    messageWrapper.hidden = true;
  }, 500); // This matches the CSS animation duration
});
