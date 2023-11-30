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
    if(a && b >0){
        let divideVar = a / b
    }else{
        console.log("se introdujo dos 00")
    }
    return divideVar
};

let display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button =>{

    if(button.id === "ce"){
        display.textContent = 0;
        return
    }

    button.addEventListener("click",()=>{
        let pushedBtn = button.textContent;
        if(display.textContent == 0){
            display.textContent = pushedBtn;
        }else{
            display.textContent += pushedBtn;
        }
        
    })
    
});