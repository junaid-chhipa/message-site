const messageImg = document.getElementById("messageImage");
const messageBtn = document.getElementById("messageBtn");
const closeBtn = document.getElementById("closeBtn");

messageBtn.addEventListener("click", () => {
  // Show the message image and close button
  messageImg.hidden = false;
  closeBtn.hidden = false;

  // Play fade-in animation
  messageImg.classList.add("fade-in");
  messageImg.classList.remove("fade-out");
});

closeBtn.addEventListener("click", () => {
  // Play fade-out animation
  messageImg.classList.remove("fade-in");
  messageImg.classList.add("fade-out");

  // Wait for the animation to finish before hiding elements
  setTimeout(() => {
    messageImg.hidden = true;
    closeBtn.hidden = true;
  }, 500); // Match this to your CSS animation duration
});
