let display = document.getElementById("result");

// function deleteLasrChar() {
//     display = display.onselectionchange(0,-1);
//     display.innerText = display;
// }





// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 1
// })   
// document.getElementById("btn2").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 2
// })   
// document.getElementById("btn3").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 3
// })   
// document.getElementById("btn4").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 4
// })   
// document.getElementById("btn5").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 5
// })   
// document.getElementById("btn6").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 6
// })   
// document.getElementById("btn7").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 7
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 8
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 9
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + 0
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + "+"
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + "-"
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + "/"
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + "*"
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + "."
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + "%"
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     display.innerHTML=display.innerHTML + "00"
// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
//     // display.innerHTML==display.innerHTML + "="
//     display.innerHTML= eval(display.innerHTML)

// })   
// document.getElementById("btn1").addEventListener("click", ()=>{
    
// })   


const addToScreen = (value)=>{
   if(display.innerHTML==="0"){
    display.innerHTML = value;
   }   else {
    display.innerHTML += value;
}
}

function calculate(){
    try{
        display.innerHTML=eval(display.innerHTML);
}catch (error){
    display.innerHTML="Error";
}
}
 function reset(){
    display.innerHTML="0";
}

function backspace(){
    if (display.innerHTML.length > 1){
        display.innerHTML = display.innerHTML.slice(0,-1);
    }  else {
        display.innerHTML= "0";
    }
}


