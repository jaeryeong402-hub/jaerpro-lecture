const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const numbersContainer = document.getElementById('numbers-container');
const body = document.body;

// Generate Lotto Numbers
generateBtn.addEventListener('click', () => {
  numbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  for (const number of sortedNumbers) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = number;
    numbersContainer.appendChild(numberDiv);
  }
});

// Theme Toggle logic
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});
