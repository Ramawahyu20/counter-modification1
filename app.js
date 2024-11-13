// app.js

// Select elements
const value = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const tensDecreaseBtn = document.querySelector('.tens-decrease');
const resetBtn = document.querySelector('.reset');
const tensIncreaseBtn = document.querySelector('.tens-increase');
const increaseBtn = document.querySelector('.increase');
const doubleBtn = document.querySelector('.double');
const themeToggleBtn = document.getElementById('theme-toggle');

// Set initial counter value
let counter = 0;

// Function to update the displayed value and color based on counter value
function updateDisplay() {
  value.textContent = counter;
  if (counter > 0) {
    value.className = 'positive';
  } else if (counter < 0) {
    value.className = 'negative';
  } else {
    value.className = 'neutral';
  }
}

// Event listeners for each button
decreaseBtn.addEventListener('click', () => {
  counter--;
  updateDisplay();
});

tensDecreaseBtn.addEventListener('click', () => {
  counter -= 10;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateDisplay();
});

tensIncreaseBtn.addEventListener('click', () => {
  counter += 10;
  updateDisplay();
});

increaseBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
});

doubleBtn.addEventListener('click', () => {
  counter *= 2;
  updateDisplay();
});

// Dark mode toggle functionality
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggleBtn.textContent =
    document.body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
});
