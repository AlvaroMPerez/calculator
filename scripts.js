function add(a,b){
    let sumVAr = a + b;
    return sumVAr;
};

function subtract(a,b){
    let ressVar = a - b;
    return ressVar
};

function multiply(a,b){
    let multiplyVar = a * b;
    return multiplyVar;
};

function divide(a,b){
    if(a || b >0){
        let divideVar = a / b
    }else{
        console.log&("se introdujo dos 00")
    }
    return divideVar
};


const ceBtn = document.getElementById("ce");
const cBtn = document.getElementById("c");
const addBtn = document.getElementById("add");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const subtractBtn = document.getElementById("substract");
const zeroBtn = document.getElementById("0");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");