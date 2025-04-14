const messageWrapper = document.getElementById("messageWrapper");
const messageBtn = document.getElementById("messageBtn");
const closeBtn = document.getElementById("closeBtn");

messageBtn.addEventListener("click", () => {
  messageWrapper.classList.remove("hidden");
  messageWrapper.classList.add("visible");
  messageWrapper.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  messageWrapper.classList.remove("visible");
  messageWrapper.classList.add("hidden");

  // Only hide after fade-out finishes
  setTimeout(() => {
    messageWrapper.style.display = "none";
  }, 500);
});
