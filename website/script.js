//buttons

const numberButtons = document.querySelectorAll('[data-number]')
const symbolButtons = document.querySelectorAll('[data-symbol]')
const dotButton = document.querySelector('[data-dot]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-ac]')
const cButton = document.querySelector('[data-c]')

//display

function defaultDisplay () {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay !== null) {
    currentCalcDisplay.textContent = '0';
  };
  const prevCalcDisplay = document.getElementById('data-prev-calc');
  if (prevCalcDisplay !== null) {
    prevCalcDisplay.textContent = '0';
  };
};

defaultDisplay();

//current display

function limitDisplay () {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay.textContent.length > 30) {
    currentCalcDisplay.textContent = currentCalcDisplay.textContent.substring(0, 30);
  }
}

function newDigit (digit) {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay !== null) {
    if (currentCalcDisplay.textContent === '0') {
      currentCalcDisplay.textContent = digit;
    } else {
      currentCalcDisplay.textContent += digit;
    }
    limitDisplay();
  };
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    newDigit(number);
  });
});

symbolButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    const currentCalcDisplay = document.getElementById('data-current-calc');
    if (currentCalcDisplay.textContent === '0') {
      return;
    } else if (!/[\+\-\*\/]/.test(currentCalcDisplay.textContent.slice(-1))) {
      newDigit(operator);
    }
    limitDisplay();
  });
});

//clean display

cButton.addEventListener('click', () => {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay !== null) {
    currentCalcDisplay.textContent = '0';
  }
});

//delete last digit 

deleteButton.addEventListener('click', () => {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay !== null && currentCalcDisplay.textContent.length > 1) {
    currentCalcDisplay.textContent = currentCalcDisplay.textContent.substring(0, currentCalcDisplay.textContent.length - 1);
  } else {
    currentCalcDisplay.textContent = '0';
  }
  limitDisplay();
});

//all clear
acButton.addEventListener('click', () => { defaultDisplay() });

//equal button
equalsButton.addEventListener('click', () => {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  const prevCalcDisplay = document.getElementById('data-prev-calc');

  if (currentCalcDisplay !== null) {
    const result = eval(currentCalcDisplay.textContent);
    prevCalcDisplay.textContent = currentCalcDisplay.textContent;
    currentCalcDisplay.textContent = result;
  }
});
