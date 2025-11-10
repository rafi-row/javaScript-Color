// ------------------Task-1------------------
const button = document.querySelector('button')
const h1 = document.querySelector('h1')


document.addEventListener('click',()=>{
    console.log('click hoice')
    h1.innerHTML ='Rafi'
    h1.style ='color:purple;'
})


// ----------------Task-2---------------------
// ------------------dom-----------------
let main_box = document.querySelector('div#main_box')
let yellow = document.querySelector('button#yellowbutton')
let green = document.querySelector('button#greenbutton')
let purple = document.querySelector('button#purplebutton')
let pink = document.querySelector('button#pinkbutton')


yellowbutton.addEventListener('click' , ()=>{
    main_box.style ='background-color:yellow;'
})
greenbutton.addEventListener('click' , ()=>{
    main_box.style ='background-color:green;'
})
purplebutton.addEventListener('click' , ()=>{
    main_box.style ='background-color:purple;'
})
pinkbutton.addEventListener('click' , ()=>{
    main_box.style ='background-color:pink;'
})

// -----------------Task-3--------------------
let quantityDisplay = document.getElementById('quantityNumber')
let quantityNumber = Number(document.getElementById('quantityNumber').innerText)
let addButton = document.getElementById('addButton')
let minusButton = document.getElementById('minusButton')

addButton.addEventListener('click', ()=>{
    quantityNumber++
    quantityDisplay.innerText = quantityNumber
})

minusButton.addEventListener('click', ()=>{
    if(quantityNumber >= 1){
        quantityNumber--
        quantityDisplay.innerText = quantityNumber
    }
})
