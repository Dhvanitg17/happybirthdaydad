function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  // Random horizontal position
  balloon.style.left = Math.random() * window.innerWidth + "px";

  // Random delay and duration
  balloon.style.animationDuration = (8 + Math.random() * 5) + "s";

  document.getElementById("balloon-container").appendChild(balloon);

  // Remove balloon after animation
  setTimeout(() => {
    balloon.remove();
  }, 13000);
}

// Launch balloons every 500ms
setInterval(createBalloon, 500);
