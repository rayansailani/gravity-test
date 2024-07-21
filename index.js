document.body.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.closest(".controls")) {
    return;
  }
  // Get the selected gravity value
  const gravitySelect = document.getElementById("gravity-select");
  const gravity = parseFloat(gravitySelect.value);

  // Create a new ball element
  const ball = document.createElement("div");
  ball.className = "ball";
  ball.style.backgroundColor = getRandomColor();
  ball.style.left = `${event.clientX}px`;
  ball.style.top = `${event.clientY}px`;
  document.body.appendChild(ball);

  // Calculate the time to fall to the bottom
  const startY = event.clientY;
  const endY = window.innerHeight;
  const heightInPixels = endY - startY;
  const timeToFall = Math.sqrt((2 * heightInPixels) / gravity); // in seconds

  // Animate the ball to fall to the bottom
  ball.style.transition = `top ${timeToFall}s linear`;
  requestAnimationFrame(() => {
    ball.style.top = `${endY - ball.clientHeight}px`;
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
