const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");
display.textContent = "0";

buttons.forEach(button => {
 button.addEventListener("click",()=>{
    pushedBtn = button.textContent;
   
    if(button.id === "c"){
        display.textContent = "0";
        return;
    }

    if(button.id === "ce"){
        if(display.textContent.length === 1 || display.textContent === "Syntax Error"){
            display.textContent = "0";
        }else{
            display.textContent = display.textContent.slice(0, -1);
        }
        return;
    }

    if(button.id === "equals"){
        try{
            display.textContent = eval(display.textContent);
        }catch{
            display.textContent = "Syntax Error"
        }
        return;
    }

    if(display.textContent === "0"|| display.textContent === "Syntax Error" ){
        display.textContent = pushedBtn;
    }else{
        display.textContent += pushedBtn;
    };


 });

});