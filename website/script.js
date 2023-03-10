//buttons

const numberButtons = document.querySelectorAll('[data-number]')
const symbolButtons = document.querySelectorAll('[data-symbol]')
const dotButton = document.querySelector('[data-dot]')
const minusButton = document.querySelector('[data-minus]')
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

//number buttons

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    newDigit(number);
  });
});

//butons with symbols

symbolButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    const currentCalcDisplay = document.getElementById('data-current-calc');
    if (currentCalcDisplay.textContent === '0') {
      return;
    } else if (currentCalcDisplay.textContent.slice(-1) === '-') {
      return;
    } else if (!/[\+\*\/]/.test(currentCalcDisplay.textContent.slice(-1))) {
      newDigit(operator);
    }
    limitDisplay();
  });
});

//minus button
minusButton.addEventListener('click', () => {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  let currentCalcValue = currentCalcDisplay.textContent;

  // Replace null or "0" with "-"
  if (currentCalcValue === null || currentCalcValue === "0") {
    currentCalcDisplay.textContent = "-";
    return;
  }

  const allowed = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "+"];

  const lastChar = currentCalcValue.slice(-1);
  if (allowed.includes(lastChar)) {
    currentCalcValue += "-";
    currentCalcDisplay.textContent = currentCalcValue;
  }

  limitDisplay();
});

//digits
//there will be function which reconize digits

//dot button
dotButton.addEventListener('click', () => {
  const currentCalcDisplay = document.getElementById('data-current-calc');

  if (currentCalcDisplay.textContent === '0') {
    // If the current display is "0", replace it with "0."
    currentCalcDisplay.textContent = '0.';
  }

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
