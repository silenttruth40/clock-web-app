/*

#Counter 

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
*/

/*

#Random Number Generator

const rollBtn = document.getElementById("rollBtn");
const myLabel = document.getElementById("myLabel");
const max = 6;
const min = 1;
let randomnumber;

rollBtn.onclick = function(){
    randomnumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomnumber;
}
*/

/*

#Age Checker

let age;

const AgeLabel = document.getElementById("AgeLabel");
const AgeInput = document.getElementById("AgeInput");
const AgeSubmit = document.getElementById("AgeSubmit");
const ResultElement = document.getElementById("ResultElement");

AgeSubmit.onclick = function(){

    age = AgeInput.value;
    age = Number(age);

    if( age >= 18){
        ResultElement.textContent = "You are allowed to enter the site ";
    }

    else if( age <= 0){
        ResultElement.textContent = "Not a valid age! ";
    }

    else{
        ResultElement.textContent = "You are not allowed to enter the site ";
    }
}

*/

/*

#Temperature Converter

const myh1 = document.getElementById("myh1")
const myinput = document.getElementById("myinput")
const mybtn = document.getElementById("mybtn")
const CF = document.getElementById("CF")
const FC = document.getElementById("FC")
const myresult = document.getElementById("myresult")
mybtn.addEventListener("click", convert);


let temp;


function convert(){
    
    if(CF.checked){
        temp = Number(myinput.value);
        temp = ((temp * 9/5) + 32);
        myresult.textContent = temp + "°F";
    }
    else if(FC.checked){
        temp = Number(myinput.value);
        myresult.textContent = ((temp - 32) * 5/9) + "°C";
    }
    else{
        myresult.textContent = "Select one of the above";
    }
}
    
*/
 
/*Digital Clock*/
function fadeTo(event, url) {
  event.preventDefault();
  document.body.classList.remove("loaded");
  setTimeout(() => {
    window.location.href = url;
  }, 150);
}

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});


function Updateclock() {
  const now = new Date();
  let hours = now.getHours();
  const merediam = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds} ${merediam}`;
  document.getElementById("clock").textContent = time;
}

Updateclock();
setInterval(Updateclock, 1000); // use setInterval for real-time update
