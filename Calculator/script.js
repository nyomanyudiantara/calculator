const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	// alert(calculatorScreen);
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll('.number')
// console.log(numbers)

numbers.forEach((number) => {
	number.addEventListener('click', (event) => {
		// alert(updateScreen);
		updateScreen(event.target.value)
		// alert(event.target.value)
	})
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	if(currentNumber === '0') {
		currentNumber = number
	} else {
	currentNumber += number
	}
}

numbers.forEach((number) => {
	number.addEventListener('click', (even) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

const operators = document.querySelectorAll('.operator')

operators.forEach((operator) => {
	operator.addEventListener('click', (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	if(calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	// alert(calculate);
	// console.log('equalSign is pressed')
	updateScreen(currentNumber)
	// alert(updateScreen(currentNumber));
})

const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case "+":
		result = parseFloat(prevNumber) + parseFloat(currentNumber);
		break;
		case "-":
		result = parseInt(prevNumber) - parseInt(currentNumber);
		break;
		case "*":
		result = parseInt(prevNumber) * parseInt(currentNumber);
		break;
		case "/":
		result = parseInt(prevNumber) / parseInt(currentNumber);
		break;
		default:
		break;
	}
	// alert(result);
	currentNumber = result;
	calculationOperator = '';
	document.getElementById("equal-sign").value = result;
}
// alert(calculate);

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	// console.log('pressed')
	clearAll()
	updateScreen(currentNumber)
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', () => {
	// console.log(event.target.value)
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}