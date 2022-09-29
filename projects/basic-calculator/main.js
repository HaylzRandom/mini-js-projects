const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const previousOperandEle = document.querySelector('[data-previous-operand]');
const currentOperandEle = document.querySelector('[data-current-operand]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');

class Calculator {
	constructor(previousOperandEle, currentOperandEle) {
		this.previousOperandEle = previousOperandEle;
		this.currentOperandEle = currentOperandEle;
		this.clear();
	}

	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	apppendNumber(number) {
		if (number === '.' && this.currentOperand.includes('.')) return;
		this.currentOperand = this.currentOperand.toString() + number.toString();
	}

	chooseOperation(operation) {
		if (this.currentOperand === '') return;
		if (this.previousOperand !== '') {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	compute() {
		let computation;
		const previous = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);

		if (isNaN(previous) || isNaN(current)) return;

		switch (this.operation) {
			case '+':
				computation = previous + current;
				break;
			case '-':
				computation = previous - current;
				break;
			case '*':
				computation = previous * current;
				break;
			case '÷':
				computation = previous / current;
				break;
			default:
				return;
		}

		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = '';
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split('.')[0]);
		const decimalDigits = stringNumber.split('.')[1];

		let integerDisplay;

		if (isNaN(integerDigits)) {
			integerDisplay = '';
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {
				maximumFractionDigits: 0,
			});
		}

		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

	updateDisplay() {
		this.currentOperandEle.innerText = this.getDisplayNumber(
			this.currentOperand
		);

		if (this.operation != null) {
			this.previousOperandEle.innerText = `${this.getDisplayNumber(
				this.previousOperand
			)} ${this.operation}`;
		} else {
			this.previousOperandEle.innerText = '';
		}
	}
}

const calculator = new Calculator(previousOperandEle, currentOperandEle);

numberBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		calculator.apppendNumber(btn.innerText);
		calculator.updateDisplay();
	});
});

operationBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		calculator.chooseOperation(btn.innerText);
		calculator.updateDisplay();
	});
});

equalsBtn.addEventListener('click', () => {
	calculator.compute();
	calculator.updateDisplay();
});

allClearBtn.addEventListener('click', () => {
	calculator.clear();
	calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
	calculator.delete();
	calculator.updateDisplay();
});
