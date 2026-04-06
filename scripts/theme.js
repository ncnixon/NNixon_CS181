// Select the theme toggle button
const themeToggleButton = document.querySelector("#theme-toggle");


/// DOM Manipulation - select the element you want to update- message paragraph should be "message- h1" id= change_message_button class = "button-primary"///
const message_paragraph = document.querySelector("#message-paragraph");


/// Create a function that will run when the button is called -  ///
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  // Optionally update button text
  if (document.body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = 'Switch to Light Mode';
  } else {
    themeToggleButton.textContent = 'Switch to Dark Mode';
  }
}

// Add the event listener
themeToggleButton.addEventListener("click", toggleDarkMode);
