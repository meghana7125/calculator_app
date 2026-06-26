const display = document.getElementById("display");

// Add values
function appendValue(value){
    display.value += value;
}

// Clear display
function clearDisplay(){
    display.value = "";
}

// Delete last character
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

// Calculate and save history
function calculate(){

try{

let expression=display.value;

let answer=eval(expression);

display.value=answer;

let history=document.getElementById("history");

history.innerHTML+=expression+" = "+answer+"<br>";

localStorage.setItem("history",history.innerHTML);

}

catch{

display.value="Error";

}

}

// Keyboard Support
document.addEventListener("keydown", function(event){

    const key = event.key;

    if(!isNaN(key) || "+-*/.%".includes(key)){
        appendValue(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }

});

// Dark Mode
function toggleTheme(){

    document.body.classList.toggle("dark");

}

// Scientific Functions

function square(){
    display.value = Math.pow(Number(display.value),2);
}

function sqrt(){
    display.value = Math.sqrt(Number(display.value));
}

function sin(){
    display.value = Math.sin(Number(display.value));
}

function cos(){
    display.value = Math.cos(Number(display.value));
}

function tan(){
    display.value = Math.tan(Number(display.value));
}

function log(){
    display.value = Math.log10(Number(display.value));
}
// Clear History
function clearHistory(){

document.getElementById("history").innerHTML="";

localStorage.removeItem("history");

}

// Copy Result
function copyResult(){

    navigator.clipboard.writeText(display.value);

    alert("Result copied!");

}
window.onload=function(){

document.getElementById("history").innerHTML=
localStorage.getItem("history") || "";

}