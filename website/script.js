const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteLast = document.querySelector('[data-delete-last]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousCalcElement = document.querySelector('[data-previous-calc]')
const currentCalcElement = document.querySelector('[data-current-calc]')

class Calculator {
  constructor (previousCalcElement, currentCalcElement) {
    this.previousCalcElement = previousCalcElement
    this.currentCalcElement = currentCalcElement
    this.clear()
    this.clearAll()
  }
}
