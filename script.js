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
//     { catergory: "when", questions:[
// {value: 100, text: "when is 4th of july"}, //4th of july
// {value: 200, text: "when is the month of christmas"},//december
// {value: 300, text: "when is the day of christmas"},//25th
// {value: 400, text: "when is the month of haloween"}, //october
// {value: 500, text: "when is the season of the solar eclipse most prolific at"}, //spring
// {level: "easy"}


//     ]},


    { category: 'Sports', questions: [
      { value: 100, text: "What sport uses a bat and a mit?", answer: "baseball" },
      { value: 200, text: "Which popular baseball team starts with R?", answer: "redsox" },
      {value: 300, text: "what play is made when a player gets hit by a ball"},
      {value: 400, text: "what is the biggesat sports fan rivalry in baseball"},
      {value: 500, text:"what is david ortiz's nickname everyone called him"},
      {level: "hard",},
      {sums: "300"}
    ]},
    { category: 'when', questions: [
        { value: 100, text: "when is the month of christmas", answer: "december" },
        { value: 200, text: "what day is christmas on", answer: "december 25th" },
        {value: 300, text: "santa claus real name", answer: "saint nick"},
        {value: 400, text: "when is the month of valentines day", answer:"spring"},
        {value: 500, text:"what day is valentines day"},
        {level: "medium",}
      ]},
      { category: 'video games', questions: [
        { value: 100, text: "What does CSGO stand for ", answer: "counter strik global offensive" },
        { value: 200, text: "Minecraft is now owned by which major tech company", answer: "microsoft" },
        {value: 300, text: "skyrim costs how much to develope", answer: "100 million"},
        {value: 400, text: "whats the most anticpated game in 2026", answer:"gta6"},
        {value: 500, text:"Faze clan competes most in what game", answer:"CSGO"},
        {level: "slightly hard",}
      ]},
  
  ]

let currentPlayer = 1
let playerOneScore = 0
let playerTwoScore = 0



window.onload = function () {
    currentPlayer = 1
    switchPlayers1.textContent = "Player 1 Please pick a card";
    guessButton.disabled = true;
    passButton.disabled = true;
   nextRound.disabled = true;
  
}
let testing = questions[0].questions[0].text
console.log(testing)


// Function to add card for Sports category, value 100
for100.addEventListener('click', () => {
    addCard();
     currentPlayer = 1
 currentScore = 0
 currentScore1 = questions[0].questions[0].value
console.log(currentScore1)

});
// function addCard() {
    

//     console.log(testing2)
//     for100.innerHTML = "which sport uses a bat and mit and competes for the furthest hit";
//     guessButton.disabled = false;
//     passButton.disabled = false;
//     switchPlayers1.innerHTML = "player 1 picked sports 100";
// }

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
async function addCard(){
for100.innerHTML = "what sport competes for the furthest hit with a bat and mit"
guessButton.disabled = false;
passButton.disabled = false; 
switchPlayers1.innerHTML = "player 1 picked sports 100";

}


 for200.addEventListener('click', (e)=>{
     addCard2()
     currentScore1 = questions[1].questions[1].value
     console.log(currentScore1)
     
 })

function addCard2(){
    for200.innerHTML = "when is baseball season"
    document.getElementById('guess-Button').disabled = false;
    document.getElementById('pass-Button').disabled = false;
    switchPlayers1.innerHTML = "player 1 picked sports 200";
}
for300.addEventListener('click', (e)=>{
    addCard3()
    currentScore1 = questions[2].questions[2].value
     console.log(currentScore1)
})
function addCard3(){
    for300.innerHTML = "what happens when the batter gets hit by a ball"
    document.getElementById('guess-Button').disabled = false;
document.getElementById('pass-Button').disabled = false;
switchPlayers1.innerHTML = "player 1 picked sports 300";
}
for400.addEventListener('click', (e)=>{
    addCard4()
    currentScore1 = questions[3].questions[3].value
      console.log(currentScore1)
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
currentScore = 100


}

async function switchPlayers(){
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('switchPlayers1').innerHTML = "it is now player twos turn to answer"
    
//question must be slected to switch        
//add in funcitonality for player two to answer questions
}


 
let form = document.getElementById('answer-form')


playerOneScores = 0;
playerTwoScores = 0;
 function addGuess(){
    let currentScore = currentPlayer === 1 ? playerOneScore : playerTwoScore;
    let form = document.getElementById('answer-form')
    let test;
    let test2 = for200.value     
    test2 = answerText.value
    let test3 = for300.value //Logic for reassigning variables to the DIVS and getting their values
    test3 = answerText.value
    let test4 = for400.value
    test4 = answerText.value
    test = answerText.value
    let test5 = document.getElementById('for500').value
    test5 = answerText.value
    //original idea was if test is question one and test2 is question 2
    // else if( test = test2){
        // form.addEventListener('submit', (e)=>{
        //     e.preventDefault()
        //     addGuess()
        // })
    //     let sumOfOneTwo = questions[0].questions[6]
    // console.log(sumOfOneTwo)
    // playerOneScore.textContent = "youre score is 300"
    // }
  if(test === 'baseball'){  //essentially allowing input for all questions
     form.addEventListener('submit', (e)=>{
         e.preventDefault()
         addGuess()
     })
      currentScore1
     
     currentScore1 = questions[0].questions[0].value
     console.log(currentScore1)
    console.log(`your total score is = ${currentScore1}`)
         playerOnesPersonalScore.textContent = `your total score is = ${currentScore1}`
         for100.innerHTML = "X"
         
         
         
     }
     else if(test2 === 'spring'){
     form.addEventListener('submit', (e)=>{
         e.preventDefault()
    
         addGuess()
     })
     currentScore1 = questions[1].questions[1].value
     currentScore = 200
     console.log(`your total score is = ${currentScore1}`)
 
     playerOnesPersonalScore.innerHTML = "Player 1 score = 200"//make this also correspond with palyer twos score by creating another variable called PlayerTwosPersonalScore
     //perhaps the amount of copies of the same ID is messing up the stuff
     for200.innerHTML = "X"
     }else if(test3 === "a walk" || test3 === "walk"){
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    addGuess()
});
currentScore1 = questions[2].questions[2].value
console.log(currentScore1)
console.log(`your total score is = ${currentScore1}`)
for300.innerHTML = "x"
playerOnesPersonalScore.innerHTML = "player 1 score is now 300";
     }else if(test4 === "yankees vs redsox"){
        form.addEventListener('submit', (e)=>{
e.preventDefault()
addGuess()
})
currentScore1 = questions[3].questions[3].value
console.log(currentScore1)
console.log(`your total score is = ${currentScore1}`)
playerOnesPersonalScore.innerHTML = "player 1 scire = 400"
for400.innerHTML = "x"
        }
     
        else if(test5.trim().toLowerCase() === "bigpoppy"){
        form.addEventListener('submit', (e)=> {
            e.preventDefault()
            addGuess()
        })
        currentScore1 = questions[4].questions[4].value
        console.log(currentScore1)
console.log(`your total score is = ${currentScore1}`)
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
//after we add score, to increment depeding on the value copy and paste and repeat for player twos score, because player 2 score has its own ID

