//buttons
const deleteButton = document.querySelector('[del]')
const acButton = document.querySelector('[ac]')
const cButton = document.querySelector('[c]')
const btns = document.querySelectorAll('[btn]');
const equals = document.querySelector('[equals]')
const digitValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operatorValues = ['/', '*', '+', '-'];


Array.from(btns).forEach(function (btn) {
  btn.addEventListener('click', function () {
    isOperatorValid(btn)
    isNumberValid(btn)
  });
});

//variables
const currentCalcDisplay = document.getElementById('data-current-calc');
const currentDisplayValue = currentCalcDisplay.textContent;
const prevCalcDisplay = document.getElementById('data-prev-calc');
let display = [];
let numbers = [];
let newNumber = [];

//functions
function between (character, min, max) {
  return character > min && character <= max
};

// function splitToNumber (btn) {
//   if (operatorValues.includes(btn.textContent) || (currentCalcDisplay.textContent).length < 2) {
//     if ((currentCalcDisplay.textContent).length > 1) {
//       numbers = currentCalcDisplay.textContent.split(/[\-\+\*\/]/)
//       newNumber = numbers[numbers.length - 2];
//     }
//   }
//   else { newNumber = numbers[numbers.length - 2]; }
// };

function isOperatorValid (btn) {
  if (operatorValues.includes(btn.textContent)) {
    display.push(btn.textContent)
    currentCalcDisplay.textContent = display.join('');
  }
};

function isNumberValid (btn) {
  if (digitValues.includes(btn.textContent)) {
    display.push(btn.textContent)
    currentCalcDisplay.textContent = display.join('');
  }
};

//default display
function defaultDisplay () {
  if (currentCalcDisplay !== null) {
    currentCalcDisplay.textContent = '0'; //defalut value on the display
  };
  if (prevCalcDisplay !== null) {
    prevCalcDisplay.textContent = '0'; //defalut value on the display
  };
  const whiteDisplay = document.querySelector('.output #data-prev-calc');
  whiteDisplay.style.color = 'white';
  whiteDisplay.style.setProperty('color', 'white', 'important')
};

defaultDisplay();

//current display
function limitDisplay () {

  //if number of elements is grater than 30 => extract the first 30 characters of the text content
  if (currentCalcDisplay.textContent.length > 30) {
    currentCalcDisplay.textContent = currentCalcDisplay.textContent.substring(0, 30);
  }
}

//clean display
cButton.addEventListener('click', () => {
  display = [''];
  if (currentCalcDisplay !== null) {
    currentCalcDisplay.textContent = '0';
  }
});

//all clear
acButton.addEventListener('click', () => {
  defaultDisplay()
  display = [''];
});

//delete last digit 
deleteButton.addEventListener('click', () => {
  display = display.slice(0, -1);
  if (currentCalcDisplay !== null && currentCalcDisplay.textContent.length > 1) {
    currentCalcDisplay.textContent = currentCalcDisplay.textContent.substring(0, currentCalcDisplay.textContent.length - 1);
  } else {
    currentCalcDisplay.textContent = '0';
  }
});

//equals button
equals.addEventListener('click', () => {
  if (currentCalcDisplay !== null) {
    const result = eval(currentCalcDisplay.textContent);
    prevCalcDisplay.textContent = result;
    currentCalcDisplay.textContent = result;
    display = [];
  }
  const changeDisplay = document.querySelector('.output #data-prev-calc');
  changeDisplay.style.color = 'grey';
  changeDisplay.style.setProperty('color', 'grey', 'important');
});




