// // ------------------Task-1------------------
// const button = document.querySelector('button')
// const h1 = document.querySelector('h1')


// document.addEventListener('click',()=>{
//     console.log('click hoice')
//     h1.innerHTML ='Rafi'
//     h1.style ='color:purple;'
// })


// // ----------------Task-2---------------------
// // ------------------dom-----------------
// let main_box = document.querySelector('div#main_box')
// let yellow = document.querySelector('button#yellowbutton')
// let green = document.querySelector('button#greenbutton')
// let purple = document.querySelector('button#purplebutton')
// let pink = document.querySelector('button#pinkbutton')


// yellowbutton.addEventListener('click' , ()=>{
//     main_box.style ='background-color:yellow;'
// })
// greenbutton.addEventListener('click' , ()=>{
//     main_box.style ='background-color:green;'
// })
// purplebutton.addEventListener('click' , ()=>{
//     main_box.style ='background-color:purple;'
// })
// pinkbutton.addEventListener('click' , ()=>{
//     main_box.style ='background-color:pink;'
// })

// // -----------------Task-3--------------------
// let quantityDisplay = document.getElementById('quantityNumber')
// let quantityNumber = Number(document.getElementById('quantityNumber').innerText)
// let addButton = document.getElementById('addButton')
// let minusButton = document.getElementById('minusButton')

// addButton.addEventListener('click', ()=>{
//     quantityNumber++
//     quantityDisplay.innerText = quantityNumber
// })

// minusButton.addEventListener('click', ()=>{
//     if(quantityNumber >= 1){
//         quantityNumber--
//         quantityDisplay.innerText = quantityNumber
//     }
// })


// const input = document.getElementById("nameInput");
// const message = document.getElementById("message");
// const button = document.getElementById("submitBtn");

// // Add event listener
// button.addEventListener("click", function() {
//   const name = input.value.trim();

//   if (name === "") {
//     message.textContent = "Input can't be empty";
//     message.className = "error";
//   } else {
//     message.textContent = "My name is " + name;
//     message.className = "success";
//   }
// });



// Select elements
const input = document.getElementById("userInput");
const showBtn = document.getElementById("showBtn");
const displayText = document.getElementById("displayText");
const errorMsg = document.getElementById("errorMsg");
const colorButtons = document.getElementById("colorButtons");

// When "Show Text" is clicked
showBtn.addEventListener("click", function() {
  const text = input.value.trim();

  if (text === "") {
    errorMsg.textContent = "Input can't be empty";
    displayText.textContent = "";
    colorButtons.style.display = "none";
  } else {
    displayText.textContent = text;
    errorMsg.textContent = "";
    colorButtons.style.display = "block";
  }
});

// Add color-changing functionality
colorButtons.addEventListener("click", function(e) {
  if (e.target.classList.contains("red")) {
    displayText.style.color = "red";
  } else if (e.target.classList.contains("blue")) {
    displayText.style.color = "blue";
  } else if (e.target.classList.contains("green")) {
    displayText.style.color = "green";
  }
});