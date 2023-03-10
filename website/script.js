/*buttons*/

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-ac]')
const cButton = document.querySelector('[data-c]')

/*display*/

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

function newDigit (digit) {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay !== null) {
    if (currentCalcDisplay.textContent === '0') {
      currentCalcDisplay.textContent = digit;
    } else {
      currentCalcDisplay.textContent += digit;
    }
  };
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    newDigit(number);
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    newDigit(number);
  });
});
