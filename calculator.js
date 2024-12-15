
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let result = document.getElementById("result");



function add_fun(){
    let answer = parseInt("num1.value") + parseInt("num2.value");
    result.innerText = answer;
}




