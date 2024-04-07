// // let guessButton2 = document.getElementById('guessButton2');
// // let passButton2 = document.getElementById('passButton2');
// // let nextRound2 = document.getElementById('next-Round2');
// // let switchingPlayers2 = document.getElementById('switchPlayers2')
// // const question2 = [
// //     {category: "Comedy", value: 100, question:"which comedian played a role in the movie 'Scary Movie'", answer:"kevin hart "},
// //     {category: "Comedy", value: 200, question:"which comedian was born in  Philadelphia", answer:"kevin hart "},
// //     {category: "Comedy", value: 300, question:"which comedian is a ufc commentator", answer:"joe rogan "},
// //     {category: "Comedy", value: 400, question:"which comedian is african american, accomplished six emmy awards, five grammys, and starts with a D", answer:"dave chappelle "},
// // ]

// // let currentPlayer = 1
// // let scores = { player1: 0, player2: 0 }
// // let selectedCardId;

// // function submitAnswer() {
// //     // grab the user's answer
// //     const userAnswer2 = document.getElementById('answer2').value.toLowerCase();
  
  
// //     const correctAnswer2 = questions.find(q => q.question.toLowerCase() === document.getElementById(selectedCardId).textContent.toLowerCase()).answer.toLowerCase();
// //   selectedCardId = " ";
  
// //     // check if the user's answer matches the correct answer
// //     if (userAnswer2 === correctAnswer2) {
// //         // give an alert for a correct answer
// //         alert('Correct Answer');
  
// //         // increment the score of the current player
// //         scores[`player${currentPlayer}`] += points;
  
// //         // update the displayed score
// //         document.getElementById("player" + currentPlayer  + "-score").textContent = scores["player" + currentPlayer]; //change html Id's to be player1-score and player2-score using the same format
     
  
  
// //         //  switchPlayers();
// //     } else {
// //         // give alert for an incorrect answer
// //         scores[`player${currentPlayer}`] - points
// //         document.getElementById("player" + currentPlayer + "-score").textContent = scores["player" + currentPlayer]
// //         alert('Incorrect Answer');
// //         switchPlayers()
        
// //     }
// //   }
// //   function switchPlayers2(){
// //     if(currentPlayer === 1) {
// //       currentPlayer = 2
  
// //     }else{
// //       currentPlayer = 1
      
// //     }
// // }
  
// //   function correctAnswerScoring(){
// //     if(currentPlayer == 1) {
// //       playerOneScore += 1
// //     }else{
// //       playerTwoScore += 1
// //     }
// //   }
  

// // comedy100.addEventListener('click', (e)=>{
// //     points = 100; selectedCardId = comedy100.id;
// //     let currentQuestion = question2.find(q=> q.value === points).question
// //     comedy100.textContent = currentQuestion
// //     // enablesButtons()
// //   })
// //   comedy200.addEventListener('click', (e)=>{
// //     points = 200; selectedCardId = comedy200.id;
// //     let currentQuestion = question2.find(q=> q.value === points).question
// //     comedy200.textContent = currentQuestion
// //     // enablesButtons()
// //   })
// //   comedy300.addEventListener('click', (e)=>{
// //     points = 300; selectedCardId = comedy300.id;
// //     let currentQuestion = question2.find(q=> q.value === points).question
// //     comedy300.textContent = currentQuestion
// //     // enablesButtons()
// //   })
// //   comedy400.addEventListener('click', (e)=>{
// //     points = 400; selectedCardId = comedy400.id;
// //     let currentQuestion = question2.find(q=> q.value === points).question
// //     comedy400.textContent = currentQuestion
// //     // enablesButtons()
// //   })
// //   comedy500.addEventListener('click', (e)=>{
// //     points = 500; selectedCardId = comedy500.id;
// //     let currentQuestion = question2.find(q=> q.value === points).question
// //     comedy500.textContent = currentQuestion
// //     // enablesButtons()
// //   })

// // let guessButton = document.getElementById('guessButton2')
//  let passButton2 = document.getElementById('pass-Button2')
// let nextRound2 = document.getElementById('next-Round2')
// let answerText = document.getElementById('answer2')
// let switchPlayers2 = document.getElementById('switchPlayers2')
// let guessButton2 = document.getElementById('guessButton2')
// let pointsRd2;
// //state machine to keep track of if were adding points to on or another
// const questions2 = [//questions [q].questions.find(q=>q.question)
    
//  {category: "Comedy", value: 100, question:"which comedian played a role in the movie 'Scary Movie'", answer:"kevin hart "},
//  {category: "Comedy", value: 200, question:"which comedian was born in  Philadelphia", answer:"kevin hart "},
//  {category: "Comedy", value: 300, question:"which comedian is a ufc commentator", answer:"joe rogan "},
//  {category: "Comedy", value: 400, question:"which comedian is african american, accomplished six emmy awards, five grammys, and starts with a D", answer:"dave chappelle "},
//  {category: "Comedy", value: 500, question:"which comedian signed a $20 million dollar deal with netflix per episode", answer:"dave chappelle "}

//   ]

// //create variables of the current player and the starting scores
// let currentPlayerRd2 = 1
// let scores = { player1Rd2: 0, player2Rd2: 0 }
// let selectedCardId;

// // console.log(questions.find(q => q.question.toLowerCase() === document.getElementById("for200").innerText.toLowerCase()).answer.toLowerCase())


// function submitAnswer2() {
//   // grab the user's answer
//   const userAnswer = document.getElementById('answer2').value.toLowerCase();


//   const correctAnswer = questions.find(q => q.question.toLowerCase() === document.getElementById(selectedCardIdRd2).textContent.toLowerCase()).answer.toLowerCase();
// selectedCardIdRd2 = " ";

//   // check if the user's answer matches the correct answer
//   if (userAnswer === correctAnswer) {
//       // give an alert for a correct answer
//       alert('Correct Answer');

//       // increment the score of the current player
//       scores[`player${currentPlayerRd2}`] += pointsRd2;

//       // update the displayed score
//       document.getElementById("increment" + currentPlayerRd2  + "-score").textContent = scores["player" + currentPlayerRd2]; //change html Id's to be player1-score and player2-score using the same format
   


//       //  switchPlayers();
//   } else {
//       // give alert for an incorrect answer
//       scores[`player${currentPlayerRd2}`] +- pointsRd2
//       document.getElementById("player" + currentPlayerRd2 + "-score").textContent = scores["player" + currentPlayerRd2]
//       alert('Incorrect Answer');
//       switchPlayers()
      
//   }
// }

// // guessButton2.addEventListener('click', function(e){
// //  e.preventDefault()
// //  disableButtons2()
// //     submitAnswer()
// //  })

// // passButton2.addEventListener('click', function(e){
// //   e.preventDefault()
// //   disableButtons2()
// //     submitAnswer2()
// //   })
// function switchPlayersRd2(){
//   if(currentPlayerRd2 === 1) {
//     currentPlayerRd2 = 2

//   }else{
//     currentPlayerRd2 = 1
    
//   }
//   scores[`player${currentPlayer}`] += points;

//       // update the displayed score
//       document.getElementById("player" + currentPlayerRd2  + "-score").textContent = scores["player" + currentPlayerRd2];

//   switchPlayers2.textContent = "Player " + currentPlayerRd2 + " Please pick a card";
//     guessButton2.disabled = true;
//     passButton2.disabled = true;
//     nextRound2.disabled = true;
// }




// // function correctAnswerScoring(){
// //   if(currentPlayer == 1) {
// //     playerOneScore += 1
// //   }else{
// //     playerTwoScore += 1
// //   }
// // }
// // correctAnswerScoring()


// document.addEventListener("DOMContentLoaded", function() {
//     // Retrieve references to HTML elements
//     let guessButton2 = document.getElementById("guessButton2");
//     let passButton2 = document.getElementById("pass-Button2");
//     let nextRound = document.getElementById("next-Round2");
  
//     // Check if elements exist before accessing their properties
//     if (guessButton2 && passButton2 && nextRound2) {
//       // Disable buttons
//       guessButton2.disabled = true;
//       passButton2.disabled = true;
//       nextRound.disabled = true;
//     } else {
//       console.error("One or more elements not found.");
//     }
//   });
// function disableButtons2(){
//    guessButton2.disabled = true;
//   passButton2.disabled = true;
//   nextRound2.disabled = true;
  
// }
//  disableButtons2()
// function enablesButtons2(){
//   guessButton2.disabled = false;
//   passButton2.disabled = false;
//   nextRound2.disabled = false;
//   guessButton2.disabled = false;
// }
 
// //  passButton2.addEventListener('click', (e)=>{
// //    e.preventDefault()
  
// //   switchPlayers2.textContent = "player" + "please pick a card"
// //     nextRound.disabled = false;
// //  })
// // // })
// // }

//  //TODO: remove commented code, add a function that disables submit and pass, add function that enables submit and pass. add empty event listeners for each card, addEventListener for submit and pass, fill out logic for each card very similar to below, test to see if it works, then add next round functionality with next round button(perhaps query params), add final jeopardy

//   comedy100.addEventListener("click", (e)=>{
//     console.log("listening for" + comedy100)
//     points = 100; selectedCardId = comedy100.id
//     let categoryQuestions = questions2.filter(q=>q.category === "Comedy")
//     let currentQuestion = categoryQuestions.find(q=> q.value === points).question
//     comedy100.textContent = currentQuestion
//     enablesButtons2()
//   })
//   comedy200.addEventListener("click", (e)=>{
//     points = 200; selectedCardId = comedy200.id
//     let categoryQuestions = questions2.filter(q=>q.category === "Comedy")
//     let currentQuestion = categoryQuestions.find(q=> q.value === points).question
//     comedy200.textContent = currentQuestion
//     enablesButtons2()
//   })
//   comedy300.addEventListener("click", (e)=>{
//     points = 300; selectedCardId = comedy300.id
//     let categoryQuestions = questions2.filter(q=>q.category === "Comedy")
//     let currentQuestion = categoryQuestions.find(q=> q.value === points).question
//     comedy300.textContent = currentQuestion
//     enablesButtons2()
//   })
 


let startButton= document.getElementById('start-Btn')
let guessButton = document.getElementById('guess-Button')
let passButton = document.getElementById('pass-Button')
let nextRound = document.getElementById('next-Round')
const cards = document.getElementById('interact-cards')
let answerTextr = document.getElementById('answerText')
let switchPlayers1 = document.getElementById('switchPlayers1')
let playerOnesScore = document.getElementById('playerOneScore')
let PlayerTwosPersonalScore = document.getElementById('playerTwoScore')
let guessButton2 = document.getElementById('guessButton2')


let points;
//state machine to keep track of if were adding points to on or another
const questions = [//questions [q].questions.find(q=>q.question)
     
 {category: "Comedy", value: 100, question:"which comedian played a role in the movie 'Scary Movie'?", answer:"kevin hart"},
 {category: "Comedy", value: 200, question:"which comedian was born in  Philadelphia?", answer:"kevin hart"},
 {category: "Comedy", value: 300, question:"which comedian is a ufc commentator?", answer:"joe rogan"},
 {category: "Comedy", value: 400, question:"which comedian is african american, accomplished six emmy awards, five grammys, and starts with a D?", answer:"dave chappelle "},
 {category: "Comedy", value: 500, question:"which comedian signed a $20 million dollar deal with netflix per episode?", answer:"dave chappelle"},

 {category: "States", value: 100, question:"is the size of vermont small or big", answer:"small"},
 {category: "States", value: 200, question:"true or false, vermonts known as the state of beauty", answer:"true"},
 {category: "States", value: 300, question:"the captial of vermont is where", answer:"montpelier"},
 {category: "States", value: 400, question:"", answer:""},
 {category: "States", value: 500, question:"", answer:""},
  ]

//create variables of the current player and the starting scores
let currentPlayer = 1
let scores = { player1: 0, player2: 0 }
let selectedCardId;

// console.log(questions.find(q => q.question.toLowerCase() === document.getElementById("for200").innerText.toLowerCase()).answer.toLowerCase())


function submitAnswer() {
  // grab the user's answer
  const userAnswer = document.getElementById('answer').value.toLowerCase();


  const correctAnswer = questions.find(q => q.question.toLowerCase() === document.getElementById(selectedCardId).textContent.toLowerCase()).answer.toLowerCase();
selectedCardId = " ";

  // check if the user's answer matches the correct answer
  if (userAnswer === correctAnswer) {
      // give an alert for a correct answer
      alert('Correct Answer');

      // increment the score of the current player
      scores[`player${currentPlayer}`] += points;

      // update the displayed score
      document.getElementById("player" + currentPlayer  + "-score").textContent = scores["player" + currentPlayer]; //change html Id's to be player1-score and player2-score using the same format
   


      //  switchPlayers();
  } else {
      // give alert for an incorrect answer
      scores[`player${currentPlayer}`] -= points
      document.getElementById("player" + currentPlayer + "-score").textContent = scores["player" + currentPlayer]
      alert('Incorrect Answer');
      switchPlayers()
      
  }
}

guessButton.addEventListener('click', function(e){
e.preventDefault()
disableButtons()
   submitAnswer()
})
function switchPlayers(){
  if(currentPlayer === 1) {
    currentPlayer = 2

  }else{
    currentPlayer = 1
    
  }
  // scores[`player${currentPlayer}`] += points;

  //     // update the displayed score
  //     document.getElementById("player" + currentPlayer  + "-score").textContent = scores["player" + currentPlayer];

  switchPlayers1.textContent = "Player " + currentPlayer + " Please pick a card";
    guessButton.disabled = true;
    passButton.disabled = true;
    nextRound.disabled = true;
}



//  function correctAnswerScoring(){
//    if(currentPlayer == 1) {
//      playerOneScore += 1
//    }else{
//      playerTwoScore += 1
//    }
//  }

function disableButtons(){
  guessButton.disabled = true;
  passButton.disabled = true;
  nextRound.disabled = true;
  
}

disableButtons()
function enablesButtons(){
  guessButton.disabled = false;
  passButton.disabled = false;
  nextRound.disabled = false;
  guessButton2.disabled = false;
}
 function disableNonSelectedCards(){

 }
 passButton.addEventListener('click', (e)=>{
   e.preventDefault()
  
  switchPlayers1.textContent = "player2 " + "please pick a card"
   nextRound.disabled = false;
 })
// // })
// }

 //TODO: remove commented code, add a function that disables submit and pass, add function that enables submit and pass. add empty event listeners for each card, addEventListener for submit and pass, fill out logic for each card very similar to below, test to see if it works, then add next round functionality with next round button(perhaps query params), add final jeopardy

  comedy100.addEventListener("click", (e)=>{
    points = 100; selectedCardId = comedy100.id
    let categoryQuestions = questions.filter(q=>q.category === "Comedy")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    comedy100.textContent = currentQuestion
    enablesButtons()
  })
  comedy200.addEventListener("click", (e)=>{
    points = 200; selectedCardId = comedy200.id
    let categoryQuestions = questions.filter(q=>q.category === "Comedy")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    comedy200.textContent = currentQuestion
    enablesButtons()
  })
  comedy300.addEventListener("click", (e)=>{
    points = 300; selectedCardId = comedy300.id
    let categoryQuestions = questions.filter(q=>q.category === "Comedy")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    comedy300.textContent = currentQuestion
    enablesButtons()
  })
  comedy400.addEventListener("click", (e)=>{
    points = 400; selectedCardId = comedy400.id
    let categoryQuestions = questions.filter(q=>q.category === "Comedy")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    comedy400.textContent = currentQuestion
    enablesButtons()
  })
  comedy500.addEventListener("click", (e)=>{
    points = 500; selectedCardId = comedy500.id
    let categoryQuestions = questions.filter(q=>q.category === "Comedy")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    comedy500.textContent = currentQuestion
    enablesButtons()
  })
 
 