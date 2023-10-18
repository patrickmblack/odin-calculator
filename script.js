let firstDigit, secondDigit = 0
let operator;
let currentNumber, previousNumber;

let displayValue = document.querySelector("#display-value")
const buttons = document.querySelectorAll('.btn')
const buttonDigit = document.querySelectorAll(".digit")
const buttonEqual = document.querySelector('.equal')
const buttonDecimal = document.querySelector('.decimal')
const buttonOperate = document.querySelectorAll('.operate')
const buttonClear = document.querySelector('.clear')
const buttonBack = document.querySelector('.back')






function main(){
    displayValue.textContent = " "

    manageButtons()
}

function manageButtons(){
// buttons.forEach((button) => {
//     button.addEventListener('click', () =>{
//         console.log(button.id)
//     })
// })

    buttonDigit.forEach((btn) => {
        btn.addEventListener('click', () => {
            addToDisplay(btn.id)
        })
    })

    buttonOperate.forEach((btn) => {
        btn.addEventListener('click', () => {
            addToDisplay(` ${btn.id} `)
        })
    })    
    
    buttonDecimal.addEventListener('click',() =>{
        addToDisplay(buttonDecimal.id)
    })

    buttonClear.addEventListener('click',() =>{
        clearMemory()
    })

    buttonEqual.addEventListener('click',() =>{
        operate(displayValue.textContent)
    })

    buttonBack.addEventListener('click',() =>{
        backspaceDisplay()
    })

}

function backspaceDisplay(){
    displayValue.textContent = displayValue.textContent.slice(0, -1)
}

function addToDisplay(str){
    displayValue.textContent += str
}

function updateDisplay(str){
    displayValue.textContent = str
}


function operate(string){

    string = string.trim()
    let [firstDigit, operator, secondDigit] = string.split(" ")

    switch(operator){
        case "+":
            updateDisplay(add(firstDigit, secondDigit))
            break;
        case "-":
            updateDisplay(subtract(firstDigit,secondDigit))
            break;
        case "*":
            updateDisplay(multiply(firstDigit, secondDigit))
            break;
        case "/":
            updateDisplay(divide(firstDigit, secondDigit))
            break;
    }


}

function clearMemory(){
    displayValue.textContent = " "
    previousNumber = null
    currentNumber = null

}

function add(a, b){
    return +a + +b
}


function subtract(a, b){
    return +a - +b
}


function multiply(a, b){
    return +a * +b
}


function divide(a, b){
    return +a / +b
}

main()