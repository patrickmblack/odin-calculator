let firstDigit, secondDigit = 0
let operator;

function operate(string){

    let [firstDigit, operator, secondDigit] = string.split(" ")

    switch(operator){
        case "+":
            console.log(add(firstDigit, secondDigit))
            break;
        case "-":
            console.log(subtract(firstDigit,secondDigit))
            break;
        case "*":
            console.log(multiply(firstDigit, secondDigit))
            break;
        case "/":
            console.log(divide(firstDigit, secondDigit))
            break;
    }
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