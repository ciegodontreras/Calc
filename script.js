const numbers = document.querySelectorAll('.num'); 
const display = document.querySelector('.display'); 
const numbersArray = [...numbers] 
const operations = document.querySelectorAll('.functions');
const operationsArray = [...operations];  
const clear = document.querySelector('.clear'); 
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal'); 
const percent = document.querySelector('.percent'); 
const positiveNegative = document.querySelector('.positiveNegative');

numbersArray.forEach(number => {
    number.addEventListener('click', () => { 
        let num = number.textContent; 
        display.value += num;
    })
});

operationsArray.forEach(operation => {
    operation.addEventListener('click', () => {
        let opp = operation.textContent; 
        display.value += opp; 
    })
})

clear.addEventListener('click', () => {
    display.value = ''; 
})

equals.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    }
    catch (error){      
        display.value = 'Error'
    }
})

decimal.addEventListener('click', () => {
    let deci = decimal.textContent;
    display.value += deci; 
})

percent.addEventListener('click', () => {
    display.value /= 100; 
})

positiveNegative.addEventListener('click', () => {
    display.value *= -1; 
})