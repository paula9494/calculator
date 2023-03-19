// key elements
const delBtn = document.querySelector('[del]');
const acButton = document.querySelector('[ac]');
const cButton = document.querySelector('[c]');
const eqBtn = document.querySelector('[equals]');

const pointBtn = document.querySelector('.btn-point');

const digitBtns = document.querySelectorAll('.btn-digit');
const mathOpBtns = document.querySelectorAll('.btn-math-operator');

const currDisplay = document.getElementById('data-current-calc');
const prevDisplay = document.getElementById('data-prev-calc');
const defaultDisplay = document.getElementById('data-prefilled-value');

const digitVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const opVals = ['/', '*', '+', '-'];


const updateCurrentDisplay = (text) => {
  defaultDisplay.style.display = "none";
  currDisplay.textContent = text;
}


// clear display
cButton.addEventListener('click', () => {
  updateCurrentDisplay('0');
});


// all clear
acButton.addEventListener('click', () => {
  defaultDisplay.style.display = "block";
  currDisplay.textContent = '';
  prevDisplay.textContent = '';
});


// delete last digit 
delBtn.addEventListener('click', () => {
  if (currDisplay.textContent.length > 1) {
    updateCurrentDisplay(currDisplay.textContent.substring(0, currDisplay.textContent.length - 1));
  } else {
    updateCurrentDisplay('0');
  }
});


// equals button
eqBtn.addEventListener('click', () => {
  if (currDisplay !== null) {
    const result = eval(currDisplay.textContent);
    prevDisplay.textContent = result;
    updateCurrentDisplay(result);
  }
  const changeDisplay = document.querySelector('.output #data-prev-calc');
  changeDisplay.style.color = 'grey';
  changeDisplay.style.setProperty('color', 'grey', 'important');
});


const getLastChar = () => {
  return currDisplay.textContent.charAt(currDisplay.textContent.length - 1);
}


const getLastNumber = () => {
  return currDisplay.textContent.split(/[\-\+\*\/]/).at(-1);
}


// add click handlers for decimal point
pointBtn.addEventListener('click', () => {
  const lastChar = getLastChar();
  const lastNumber = getLastNumber();
  if (lastChar === '.' || lastNumber.includes('.')) {
    return;
  } else if (opVals.includes(lastChar) || lastChar === '' || lastNumber === '') {
    updateCurrentDisplay(currDisplay.textContent + '0.');
  } else {
    updateCurrentDisplay(currDisplay.textContent + '.');
  }
});


// add click handlers for digit buttons
Array.from(digitBtns).forEach((btn) => {
  btn.addEventListener('click', () => {
    const lastNumber = getLastNumber();
    if (currDisplay.textContent === '0') {
      updateCurrentDisplay(btn.textContent);
    } else if (lastNumber === '0') {
      updateCurrentDisplay(currDisplay.textContent.slice(0, -1) + btn.textContent);
    } else {
      updateCurrentDisplay(currDisplay.textContent + btn.textContent);
    }
  });
});


// add click handlers for math operator buttons
Array.from(mathOpBtns).forEach((btn) => {
  btn.addEventListener('click', () => {
    const lastChar = getLastChar();
    if (opVals.includes(lastChar) || lastChar === '.') {
      return;
    } else if (lastChar === '' && (btn.textContent === '*' || btn.textContent === '/')) {
      return;
    }
    updateCurrentDisplay(currDisplay.textContent + btn.textContent);
  });
});

