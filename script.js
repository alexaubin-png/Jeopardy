  // const express = require('express')
// const app = express()
// const port = 3000;
// app.get('/', (req, res) => {
//     res.send('testing')
    
// })
// app.listen(port, (req, res) => {
//     console.log(`example listening on port ${port}`)
// })
//above is potential logic for transfering score between pages using query paramms
// import data from "./questions.json" assert {type: 'json'} couldnt use import becauser youre mixing client side and server side info
//questions for dante is why do my cards cross out 300 everytime
console.log('hi')
let currentScore = 0


let startButton = document.getElementById('start-Btn')
let guessButton = document.getElementById('guess-Button')
let passButton = document.getElementById('pass-Button')
let nextRound = document.getElementById('next-Round')
//  const card1 = document.getElementById('for100')
//  const card3 = document.getElementById('for300')
// const cards4 = document.getElementById('for400')
// // const cards5 = document.getElementById('for500')
let answerText = document.getElementById('answerText')
let switchPlayers1 = document.getElementById('switchPlayers1')
let for100 = document.getElementById('for100')
let for200 = document.getElementById('for200')
let for300 = document.getElementById('for300')
let for400 = document.getElementById('for400')
let for500 = document.getElementById('for500')
let playerOnesPersonalScore = document.getElementById('playerOneScore')
let PlayerTwosPersonalScore = document.getElementById('playerTwoScore')
let cards6 = document.getElementById('score100')
guessButton.addEventListener('click', (e)=>{
    e.preventDefault()
})
const questions = [
//jeopardyGameBoard[i].questions[x].text <= where I is what category and x is what value of points
    { catergory: "when", questions:[
{value: 100, text: "when is 4th of july"}, //4th of july
{value: 200, text: "when is the month of christmas"},//december
{value: 300, text: "when is the day of christmas"},//25th
{value: 400, text: "when is the month of haloween"}, //october
{value: 500, text: "when is the season of the solar eclipse most prolific at"}, //spring
{level: "easy"}


    ]},
    { category: 'Sports', questions: [
      { value: 100, text: "What sport uses a bat and a mit?", answer: "baseball" },
      { value: 200, text: "Which popular baseball team starts with R?", answer: "redsox" },
      {value: 300, text: "what play is made when a player gets hit by a ball"},
      {value: 400, text: "what is the biggesat sports fan rivalry in baseball"},
      {value: 500, text:"what is david ortiz's nickname everyone called him"},
      {level: "hard",}
    ]},
]


window.onload = function () {
    switchPlayers1.textContent = "Player 1 Please pick a card";
    guessButton.disabled = true;
    passButton.disabled = true;
   nextRound.disabled = true;
  
}


// Function to add card for Sports category, value 100
for100.addEventListener('click', () => {
    addCard();
});
function addCard() {
    for100.innerHTML = "which sport uses a bat and mit and competes for the furthest hit";
    guessButton.disabled = false;
    passButton.disabled = false;
    switchPlayers1.innerHTML = "player 1 picked sports 100";
}

// Event listener for Sports category, value 100


// Event listener for guess button
// guessButton.addEventListener('click', () => {
//     handleCorrectAnswer(100); // Assuming correct answer for this example question
//     switchPlayers();
// });

// Event listener for pass button
passButton.addEventListener('click', () => {
    switchPlayers();
});


// //starts the first QUESTION LOGIC WITH ENABLING BUTTONS
function addCard(){
for100.innerHTML = "which sport uses a bat and mit and competes for the furthest hit";
guessButton.disabled = false;
passButton.disabled = false; 
switchPlayers1.innerHTML = "player 1 picked sports 100";

}


 for200.addEventListener('click', (e)=>{
     addCard2()
     
 })

function addCard2(){
    for200.innerHTML = "when is baseball season"
    document.getElementById('guess-Button').disabled = false;
    document.getElementById('pass-Button').disabled = false;
    switchPlayers1.innerHTML = "player 1 picked sports 200";
}
for300.addEventListener('click', (e)=>{
    addCard3()
})
function addCard3(){
    for300.innerHTML = "what happens when the batter gets hit by a ball"
    document.getElementById('guess-Button').disabled = false;
document.getElementById('pass-Button').disabled = false;
switchPlayers1.innerHTML = "player 1 picked sports 300";
}
for400.addEventListener('click', (e)=>{
    addCard4()
})
 function addCard4(){
document.getElementById('for400').innerHTML = 'What was the biggest fan rivalry between baseball teams'
guessButton.disabled = false
passButton.disdabled = false
switchPlayers1.innerHTML = "player 1 picked sports 400";


}


for500.addEventListener('click', (e)=>{
   addCard5()
})

  function addCard5(){
    document.getElementById('for500').innerHTML = "what was david ortiz nickname, that all the fans refered to him as"
    guessButton.disabled = false;
    passButton.disabled = false;
switchPlayers1.innerHTML = "player 1 picked sports 500";

}

async function switchPlayers(){

   //if switch players make dynamic with variables
document.getElementById('switchPlayers1').innerHTML = "it is now player twos turn"

}//add in funcitonality for player two to answer questions

//to summarize all this code is that the if else statements dynamically allow for any inputs passed to their params, that input is then entered by user 
let form = document.getElementById('answer-form')

//essentially allowing input for all questions
playerOneScores = 0;
playerTwoScores = 0;
 function addGuess(){
    let form = document.getElementById('answer-form')
    let test;
  let test2 = for200.value     
  test2 = document.getElementById('answerText').value
let test3 = for300.value 
test3 = document.getElementById('answerText').value
// = document.getElementById('answerText').value
    let test4 = for400.value
    test4 = document.getElementById('answerText').value
  test = document.getElementById('answerText').value
 let test5 = document.getElementById('for500').value
  test5 = document.getElementById('answerText').value
  if(test === 'baseball'){
     form.addEventListener('submit', (e)=>{
         e.preventDefault()
         addGuess()
     })
         playerOnesPersonalScore.textContent = "Player 1 score = 100"
         for100.innerHTML = "X"
     }else if(test2 === 'spring'){
     form.addEventListener('submit', (e)=>{
         e.preventDefault()
    
         addGuess()
     })
     playerOnesPersonalScore.innerHTML = "Player 1 score = 200"//make this also correspond with palyer twos score by creating another variable called PlayerTwosPersonalScore
     //perhaps the amount of copies of the same ID is messing up the stuff
     for200.innerHTML = "X"
     }else if(test3 === "a walk" || test3 === "walk"){
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    addGuess()
});
for300.innerHTML = "x"
playerOnesPersonalScore.innerHTML = "player 1 score is now 300";
     }else if(test4 === "yankees vs redsox"){
        form.addEventListener('submit', (e)=>{
e.preventDefault()
addGuess()
})
playerOnesPersonalScore.innerHTML = "player 1 scire = 400"
for400.innerHTML = "x"
        }
     
        else if(test5.trim().toLowerCase() === "bigpoppy"){
        form.addEventListener('submit', (e)=> {
            e.preventDefault()
            addGuess()
        })
    playerOnesPersonalScore.textContent = "Player 1 Score = 500"
    for500.innerHTML = "X"
    
    }else{
     switchPlayers()
    }
    
}
    

// //questions for Dante= how can I simplify this logic so I dont have to write 50 functions
// // -
// //flow chart
// //make cards interactable onclick = addTask()
// //each score in html will need its own similar ID with diff text content
// //if question is wrong subtract points and then its player two turn
// //if answer is correct add the score and pick again


