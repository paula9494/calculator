//calculator class

class Calculator {
  constructor (previousCalcElement, currentCalcElement) {
    this.previousCalcElement = previousCalcElement;
    this.currentCalcElement = currentCalcElement;
    this.currentCalc = '';
    this.prevCalc = '';
    this.operation = undefined;
  }

  //operations

  //display updates
  updateDisplay () {

  }

  //cleaning current operation
  clear () {
    this.currentCalc = ''
    this.prevCalc = 'last calculation or 0'
    this.opperation = undefined
  }

  //clearnig both display lines
  clearAll () {

  }

  //deleting
  delete () {

  }



  //appending number
  appendNumber () {
    console.log(number)
  }



  //chosing operation
  chooseOperation (operation) {

  }

  //computing
  compute () {

  }




}

/*buttons*/

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-ac]')
const cButton = document.querySelector('[data-c]')

/*display*/

const previousCalcElement = document.querySelector('[data-prev-calc]');
const currentCalcElement = document.querySelector('[data-current-calc]');

//changing previous operation color
window.addEventListener('load', function () {
  const outputElement = document.querySelector('.data-prev-calc');
  outputElement.style.color = 'var(--color-7)';
}
);

const calculator = new Calculator(previousCalcElement, currentCalcElement);

//eventListeners

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    console.log(number)
  });
});
