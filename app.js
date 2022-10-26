// let newCounter = document.querySelector("h2");
// newCounter.innerText = "JASPER";

// let newNumber = document.querySelector("h2");
// newNumber.style.color = "red";

// const button1 = document.querySelector(".res");
// const header1 = document.querySelector("h1");

// function changeText() {
//   let newCounter = document.querySelector("h1");
//   newCounter.innerText = "1";
// }
// button1.addEventListener("click", changeText);


// let btn = document.querySelector('.inc')
// function colored () {
//     let body = document.body
//     body.style.backgroundColor = 'brown'
// }
// btn.addEventListener('click', colored)

// let btn1 = document.querySelector('.res')
// function coloredC () {
//     let body = document.body
//     body.style.backgroundColor = 'green'
// }
// btn1.addEventListener('click', coloredC)

// let btn2 = document.querySelector('.dec')
// function coloredCc () {
//     let body = document.body
//     body.style.backgroundColor = 'white'
// }
// btn2.addEventListener('click', coloredCc)


let heading = document.querySelector('h1')
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')

function DECREASE () {
    heading.innerText--
}
dec.addEventListener('click' , DECREASE)


function RESET () {
    heading.innerText = 0
}
res.addEventListener('click' , RESET)

function INCREASE () {
    heading.innerText++
}
inc.addEventListener('click' , INCREASE)
