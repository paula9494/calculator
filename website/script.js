//to do:
//double-check string limit
//change 'white' and 'grey' colors to css variables
//prevent 0 to be first digit in whole numbers
//if last characters which are not numbers after clicking "equal" button - prom
//to prevCalc should be added result not whole string
//light and dark mode (depends of time), dynamic
//after equalsButton is clicked values are not going to lastCharacters

//buttons
const numberButtons = document.querySelectorAll('[data-number]')
const symbolButtons = document.querySelectorAll('[data-symbol]')
const dotButton = document.querySelector('[data-dot]')
const minusButton = document.querySelector('[data-minus]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-ac]')
const cButton = document.querySelector('[data-c]')

//last values
let lastCharacters = []; // declare an empty array to store the lastNumbers

//functions
function between (character, min, max) {
  console.log('works')
  return character > min && character <= max
};

//display
function defaultDisplay () {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay !== null) {
    currentCalcDisplay.textContent = '0'; //defalut value on the display
  };
  const prevCalcDisplay = document.getElementById('data-prev-calc');
  if (prevCalcDisplay !== null) {
    prevCalcDisplay.textContent = '0'; //defalut value on the display
  };
};

defaultDisplay(); //limit number of displayed elements

//current display
function limitDisplay () {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  //if number of elements is grater than 30 => extract the first 30 characters of the text content
  if (currentCalcDisplay.textContent.length > 30) {
    currentCalcDisplay.textContent = currentCalcDisplay.textContent.substring(0, 30);
  }
}


function newDigit (digit) {
  const currentCalcDisplay = document.getElementById("data-current-calc");
  const currentDisplayValue = currentCalcDisplay.textContent;

  if (currentDisplayValue === '0' && digit !== '.') {
    currentCalcDisplay.textContent = digit;
  }
  else {
    currentCalcDisplay.textContent = currentDisplayValue + digit;
  }
}

//number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    //const currentCalcDisplay = document.getElementById("data-current-calc");
    const buttonNumber = button.textContent;
    const lastNumber = buttonNumber;
    lastCharacters.push(lastNumber);
    const lastCharacter = lastCharacters[lastCharacters.length - 1];//last typed character

    console.log(lastCharacter);

    //digits other than "0"
    if (buttonNumber !== "0") {
      newDigit(buttonNumber)
    }

    //"0" after whole numbers
    else if (buttonNumber === "0" && between(lastCharacter, 1, 9)) {
      newDigit('0');
      console.log('this too')//doesn't work for now
    }

    //other cases
    //else if (buttonNumber === "0" && lastCharacters[lastCharacters.length - 1] === "0") { console.log('there will be more code') }
  });
});

//butons with symbols
symbolButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentCalcDisplay = document.getElementById('data-current-calc');
    const operator = button.textContent;
    const lastOperator = operator;
    lastCharacters.push(lastOperator);
    if (currentCalcDisplay.textContent === '0') {
      newDigit("0" + operator);
    } else if (currentCalcDisplay.textContent.slice(-1) === '-') {
      return; //prevent multiple hyphens being clicked
    } else if (!/[\+\*\/\.]/.test(currentCalcDisplay.textContent.slice(-1))) {
      newDigit(operator); //prevent operators being clicked multiple times in a row
    }
  });
});

//minus button
minusButton.addEventListener('click', () => {
  const lastOperator = minusButton.textContent;
  lastCharacters.push(lastOperator);
  const currentCalcDisplay = document.getElementById('data-current-calc');
  let currentCalcValue = currentCalcDisplay.textContent;

  if (currentCalcValue === null || currentCalcValue === "0") {
    currentCalcDisplay.textContent = "-";
    return;  //replace null or "0" with "-"
  }

  //when "-" is allowed:
  let allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "+"];

  let lastChar = currentCalcValue.slice(-1);//stores the last character
  if (allowed.includes(lastChar)) {
    currentCalcValue += "-";
    currentCalcDisplay.textContent = currentCalcValue;//let "-" be added to display if it's allowed
  }
});

//dot button
dotButton.addEventListener('click', () => {
  const lastOperator = dotButton.textContent;
  lastCharacters.push(lastOperator);

  const currentCalcDisplay = document.getElementById('data-current-calc');

  const numbers = currentCalcDisplay.textContent.split(/[\-\+\*\/]/);
  const currentNumber = numbers[numbers.length - 1]; //reconizes the current number being entered

  //check if the number already contains a decimal point and the last digit is between 0 and 9
  if (currentNumber.indexOf('.') === -1 && /[0-9]$/.test(currentNumber)) {
    //if first is false and second add a decimal point to the end of the number
    currentCalcDisplay.textContent += '.';
  }
});

//clean display
cButton.addEventListener('click', () => {
  const currentCalcDisplay = document.getElementById('data-current-calc');
  lastCharacters = [''];
  if (currentCalcDisplay !== null) {
    currentCalcDisplay.textContent = '0';
  }
});

//delete last digit 

deleteButton.addEventListener('click', () => {
  lastCharacters = lastCharacters.slice(0, -1);
  const currentCalcDisplay = document.getElementById('data-current-calc');
  if (currentCalcDisplay !== null && currentCalcDisplay.textContent.length > 1) {
    currentCalcDisplay.textContent = currentCalcDisplay.textContent.substring(0, currentCalcDisplay.textContent.length - 1);
  } else {
    currentCalcDisplay.textContent = '0';
  }
});

//all clear
acButton.addEventListener('click', () => {
  defaultDisplay()
  lastCharacters = [''];
  const whiteDisplay = document.querySelector('.output #data-prev-calc');
  whiteDisplay.style.color = 'white';
  whiteDisplay.style.setProperty('color', 'white', 'important')
})
limitDisplay();

//equal button
equalsButton.addEventListener('click', () => {
  lastCharacters = '';
  const currentCalcDisplay = document.getElementById('data-current-calc');
  const prevCalcDisplay = document.getElementById('data-prev-calc');

  if (currentCalcDisplay !== null) {
    const result = eval(currentCalcDisplay.textContent);
    prevCalcDisplay.textContent = result;
    currentCalcDisplay.textContent = result;
  }

  const changeDisplay = document.querySelector('.output #data-prev-calc');
  changeDisplay.style.color = 'grey';
  changeDisplay.style.setProperty('color', 'grey', 'important');
});

// new equation

//if new button is clicked right after equalsButton, currentCalcDisplay is erased and new value appears 


