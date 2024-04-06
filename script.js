
let startButton = document.getElementById('start-Btn')
let guessButton = document.getElementById('guess-Button')
let passButton = document.getElementById('pass-Button')
let nextRound = document.getElementById('next-Round')
const cards = document.getElementById('interact-cards')
let answerText = document.getElementById('answerText')
let switchPlayers1 = document.getElementById('switchPlayers1')
let playerOnesScore = document.getElementById('playerOneScore')
let PlayerTwosPersonalScore = document.getElementById('playerTwoScore')


let points;
//state machine to keep track of if were adding points to on or another
const questions = [//questions [q].questions.find(q=>q.question)
      { category: 'Sports', value: 100, question: "What sport uses a bat and a mit?", answer: "baseball" },
      {category: 'Sports', value: 200, question: "when is baseball season", answer: "spring" },
      {category: 'Sports', value: 300, question: "what play is made when a player gets hit by a ball", answer: "a walk"},
      {category: 'Sports', value: 400, question: "what is the biggesat sports fan rivalry in baseball", answer: "redsox vs yankees"},
      {category: 'Sports', value: 500, question:"what is david ortiz's nickname everyone called him", answer: "bigpoppy"},


      {category: 'When', value: 100, question: "when is the month of christmas", answer: "december" },
      {category: 'When', value: 200, question: "what day is christmas on", answer: "december 25th" },
      {category: 'When', value: 300, question: "when does santa eat the cookies and drink the milk", answer: "christmas eve"},
      {category: 'When', value: 400, question: "when is the month of valentines day", answer:"spring"},
      {category: 'When', value: 500, question:"what day is valentines day"},

      {category: 'Video games', value: 100, question: "What does CSGO stand for ", answer: "counter strik global offensive" },
      {category: 'Video games', value: 200, question: "Minecraft is now owned by which major tech company", answer: "microsoft" },
      {category: 'Video games', value: 300, question: "skyrim costs how much to develope", answer: "100 million"},
      {category: 'Video games', value: 400, question: "whats the most anticpated game in 2026", answer:"gta6"},
      {category: 'Video games', value: 500, question:"Faze clan competes most in what game", answer:"CSGO"},
 
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
      document.getElementById("player" + currentPlayer + "-score").textContent = scores["player" + currentPlayer]; //change html Id's to be player1-score and player2-score using the same format
    
      switchPlayers();
  } else {
      // give alert for an incorrect answer
      alert('Incorrect Answer');
  }
}
guessButton.addEventListener('click', function(e){
e.preventDefault()
disableButtons()
  submitAnswer()
})
function switchPlayers(){
  if(currentPlayer == 1) {
    currentPlayer = 2
  }else{
    currentPlayer = 1
  }
  switchPlayers1.textContent = "Player " + currentPlayer + " Please pick a card";
  guessButton.disabled = true;
  passButton.disabled = true;
  nextRound.disabled = true;
}
// function addGuess(){
//   let guess = document.getElementById('answerText').value.toLowerCase();
//   console.log(guess)
//   if(guess == questions[currentPlayer-1].questions[0].answer){
//     correctAnswerScoring()
//   }else{
//     incorrectAnswerScoring()
//   }
// }


function correctAnswerScoring(){
  if(currentPlayer == 1) {
    playerOneScore += 1
  }else{
    playerTwoScore += 1
  }
}






// let testing = questions[0].questions[0].text
// console.log(testing)


// // Function to add card for Sports category, value 100
// for100.addEventListener('click', () => {
//     addCard();
//      currentPlayer = 1
//  currentScore = 0
//  currentScore1 = questions[0].questions[0].value
// console.log(currentScore1)

// });

// passButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     switchPlayers();
// });


// // //starts the first QUESTION LOGIC WITH ENABLING BUTTONS
// async function addCard(){
// for100.innerHTML = "what sport competes for the furthest hit with a bat and mit"
// guessButton.disabled = false;
// passButton.disabled = false; 
// switchPlayers1.innerHTML = "player 1 picked sports 100";
// // for100.removeEventListener('click', (e)=>{//I wrapped the divs, and then applied a remove event listener to to the div containing all the cards in a failed attempt to lock all cards
// // //what code will prevent those functions
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
}
function disableNonSelectedCards(){

}
// // })
// }

 //TODO: remove commented code, add a function that disables submit and pass, add function that enables submit and pass. add empty event listeners for each card, addEventListener for submit and pass, fill out logic for each card very similar to below, test to see if it works, then add next round functionality with next round button(perhaps query params), add final jeopardy
for100.addEventListener('click', (e)=>{
points = 100; selectedCardId = for100.id
let currentQuestion = questions.find(q=> q.value === points).question
for100.textContent = currentQuestion
enablesButtons()
console.log("im listening..." + currentQuestion )
})

  for200.addEventListener('click', (e)=>{
     points = 200; selectedCardId = for200.id //points per card and change selected card ID based on selected card
    let currentQuestion = questions.find(q=> q.value === points).question
      for200.textContent = currentQuestion
      enablesButtons()
  console.log("im listening..." + currentQuestion)
  })
  for300.addEventListener('click', (e)=>{
    points = 300; selcetedCardId = for300.id
    let currentQuestion = questions.find(q=> q.value === points).question
    for300.textContent = currentQuestion
    enablesButtons()
    console.log("im listening..." + currentQuestion)
  })
  for400.addEventListener('click', (e)=>{
    points = 400; selectedCardId = for400.id
    let currentQuestion = questions.find(q=> q.value === points).question
    for400.textContent = currentQuestion
    enablesButtons()
    console.log("im listening..." + currentQuestion)
  })
  for500.addEventListener('click', (e)=>{
points = 500; selectedCardId = for500.id
let currentQuestion = questions.find(q=> q.value === points).question
for500.textContent = currentQuestion
enablesButtons()
    console.log("im listening..." + currentQuestion)
  })
  score100.addEventListener('click', (e)=>{
    points = 100; selectedCardId = score100.id
    let categoryQuestions = questions.filter(q=>q.category === "When")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    score100.textContent = currentQuestion
    enablesButtons()
  })
  score200.addEventListener('click', (e)=>{
points = 200; selectedCardId = score200.id
let categoryQuestions = questions.filter(q=>q.category === "When")
let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    score200.textContent = currentQuestion
    enablesButtons()
  })
  score300.addEventListener('click', (e)=>{
    points = 300; selectedCardId = score300.id
    let categoryQuestions = questions.filter(q=>q.category === "When")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
   
    score300.textContent = currentQuestion
    enablesButtons()
  })
  score400.addEventListener('click', (e)=>{
    points = 400; selectedCardId = score400.id
    let categoryQuestions = questions.filter(q=>q.category === "When")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    score400.textContent = currentQuestion
    enablesButtons()
  })
  score500.addEventListener('click', (e)=>{
    points = 500; selectedCardId = score500.id
    let currentQuestion = questions.find(q=> q.value === points).question
    score500.textContent = currentQuestion
    enablesButtons()
  })
C100.addEventListener('click', (e)=>{
  points = 100; selectedCardId = C100.id
  let categoryQuestions = questions.filter(q=>q.category === "Video games")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  C100.textContent = currentQuestion
  enablesButtons()
  console.log("im listening..." + currentQuestion)
})
C200.addEventListener("click", (e)=>{
  points = 200; selectedCardId = C200.id
  let categoryQuestions = questions.filter(q=>q.category === "Video games")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  C200.textContent = currentQuestion
  enablesButtons()
  console.log("im listening..." + currentQuestion)
})
C300.addEventListener('click', (e)=>{
  points = 300; selectedCardId = C300.id
  let categoryQuestions = questions.filter(q=>q.category === "Video games")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  C300.textContent = currentQuestion
  enablesButtons()
  console.log("im listening..." + currentQuestion)
})
C400.addEventListener("click", (e)=>{
  points = 400; selectedCardId = C400.id
  let categoryQuestions = questions.filter(q=>q.category === "Video games")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  C400.textContent = currentQuestion
  enablesButtons()
  console.log("im listening..." + currentQuestion)
})
C500.addEventListener("click", (e)=>{
  points = 500; selectedCardId = C500.id
  let categoryQuestions = questions.filter(q=>q.category === "Video games")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  C500.textContent = currentQuestion
  enablesButtons()
  console.log("im listening..." + currentQuestion)
})
  
// for300.addEventListener('click', (e)=>{
//     addCard3()
//     currentScore1 = questions[2].questions[2].value
//      console.log(currentScore1)
// })
// function addCard3(){
//     for300.innerHTML = "what happens when the batter gets hit by a ball"
//     document.getElementById('guess-Button').disabled = false;
// document.getElementById('pass-Button').disabled = false;
// switchPlayers1.innerHTML = "player 1 picked sports 300";
// let randodando = questions[2].value
// console.log(randodando)
// }
// for400.addEventListener('click', (e)=>{
//     addCard4()
//     // currentScore1 = questions[3].questions[3].value
//     //   console.log(currentScore1)
// })
//  function addCard4(){
// document.getElementById('for400').innerHTML = 'What was the biggest fan rivalry between baseball teams'
// guessButton.disabled = false;
// passButton.disabled = false;
// switchPlayers1.innerHTML = "player 1 picked sports 400";


// }


// for500.addEventListener('click', (e)=>{
//    addCard5()
// })

//   function addCard5(){
//     document.getElementById('for500').innerHTML = "what was david ortiz nickname, that all the fans refered to him as"
//     guessButton.disabled = false;
//     passButton.disabled = false;
// switchPlayers1.innerHTML = "player 1 picked sports 500";
// currentScore = 100


// }

// score100.addEventListener('click', (e)=>{
//   addCard7()
// })
// function addCard6(){
//   document.getElementById('score100').innerHTML = "when is the month of christmas"
//   guessButton.disabled = false;
//   passButton.disabled = false;
// }
// score200.addEventListener('click', (e)=>{
//   addCard7()
// })
// function addCard7(){
//   document.getElementById('score200').innerHTML = "when is christmas day"
//   guessButton.disabled = false;
//   passButton.disabled = false;
// }
// score300.addEventListener('click', (e)=>{
//   addCard8()
// })
// function addCard8(){
//   document.getElementById('score300').innerHTML = "santa claus real name"
//   guessButton.disabled = false;
//   passButton.disabled = false;
// }
// score400.addEventListener('click', (e)=>{
// addCard9()
// })
// function addCard9(){
// document.getElementById('score400').innerHTML = "when is valentines day"
// guessButton.disabled =false;
// passButton.disabled = false;
// }
// // stner that handles all the 
// //as long as the question is false no other question can be clickedif true all the questions can be clicked

//  async function switchPlayers(){
//      currentPlayer = currentPlayer === 1 ? 2 : 1;

//    document.getElementById('switchPlayers1').innerHTML = "it is now player twos turn to answer"
  
//     //  questions.forEach(value, ()=>{
//     //  })
    
//     //  console.log(switchPlayers())

// //how do i  implement that question must be slected to switch        
// //add in funcitonality for player two to answer questions
// }


 

// questionSelected = false;
// currentPlayer = 1
// // form.addEventListener(){

// // }//when wee start to think about other categories we should use the same fucntion for player1 but  a diff functrion for player 2 invoked with the button
// //
//   async function addGuess(){

//     //  let currentScore = currentPlayer === 1 ? playerOnesPersonalScore : PlayerTwosPersonalScore;
//      let form = document.getElementById('answer-form')
    
//      let test;
   
//      let test2 = for200    
//      test2 = answerText.value
//      let test3 = for300.value //Logic for reassigning variables to the DIVS and getting their values
//      test3 = answerText.value
//      let test4 = for400.value
//      test4 = answerText.value
//      test = answerText.value
//      let test5 = document.getElementById('for500').value
//      test5 = answerText.value
//      let test6 = score100.value
//      test6 = answerText.value
//      let test7 = score200.value
//      test7 = answerText.value
//      let test8 = score300.value
//      test8 = answerText.value
//      let test9 = score400.value
//      test9 = answerText.value
//      let test10 = score500.value
//      test10 = answerText.value
     
    
//     //  let test20 = answerText.value
//     //  test20 = for200
//     //  let testagain =  answerText
//     //  testagain = for100
   
    
//      //original idea was if test is question one and test2 is question 2
   
//    if(test === 'baseball'){  //essentially allowing input for all questions
//       form.addEventListener('submit', (e)=>{
//           e.preventDefault()
//           addGuess()
//       })
//       alert("you got it right!!")
//       guessButton.addEventListener('click', (e)=>{
//       currentScore + 100
        
//         // playerOnesPersonalScore.textContent = `your total score is = ${currentScore}`
//      })
//       currentScore = currentScore + 100
   
//     //   currentScore1 = questions[0].questions[0].value
//     //   console.log(currentScore1)
//      console.log(`your total score is = ${currentScore}`)
//          playerOnesScore.innerHTML = `your total score is = ${currentScore}`
//           for100.innerHTML = "X"
        
//  } 

 

//  else if(test2 === 'spring'){
//         //  form.addEventListener('submit', (e)=>{
//         //      e.preventDefault()
//         //     addGuess()
//         //  })
//          guessButton.addEventListener('click', (e)=>{
//             let total2 = currentScore + 200
//             console.log("your total score is" + total2)
//             // console.log("your total score is" + total2)
//             // playerOnesPersonalScore.textContent = `Player 1 score ` + total2
//             currentScore = currentScore + 200
//             playerOnesScore.textContent = `your total score is = ${total2}`
//           })
         
//           playerOnesScore.innerHTML = `your total score is = 200`
//         for200.innerHTML = "X"
        
// //     }else if(test2 = testagain){     
// //              playerOnesPersonalScore.innerHTML =" Player 1 score 300"
// //              console.log('cheese')
       
//  }
// else if(test3 === "a walk" || test3 === "walk"){
//  form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     addGuess()
//  });
//  guessButton.addEventListener('click', (e)=>{
// //logic does increment but technically might skip 100 points //april 4th: make the sum of the firt category first three questions = 600 not 500 
// let total3= currentScore + 200 
// console.log("your total score is" + total3)

// playerOnesScore.textContent = `your total score is = ${total3}`
//   });

 
//  for300.innerHTML = "X"
//       }else if(test4 === "yankees vs redsox"){
//          form.addEventListener('submit', (e)=>{
//  e.preventDefault()
//  addGuess()
//  })
//  guessButton.addEventListener('click', (req, res)=>{
//     let total4 = currentScore + 200
//     console.log('your total score is' + total4)
//     currentScore = currentScore + 300
//     playerOnesScore.textContent = `your tota; score is = ${total4}`
//  })
//  playerOnesScore.textContent = `your tota; score is = ${total4}`
//  currentScore = currentScore + 400
//  console.log(`your total score is = ${currentScore}`)
// //  playerOnesPersonalScore.innerHTML = "player 1 scire = 400"
//  for400.innerHTML = "X"
//          }
     
//          else if(test5.trim().toLowerCase() === "bigpoppy"){
//          form.addEventListener('submit', (e)=> {
//              e.preventDefault()
//              addGuess()
//          })
//          currentScore = 500
//         //  currentScore1 = questions[4].questions[4].value
//         //  console.log(currentScore1)
//  console.log(`your total score is = ${currentScore}`)
//     playerOnesScore.textContent = "Player 1 Score = 500"
//    for500.innerHTML = "X"
    
//     }else if(test6.trim().toLowerCase() === "december"){
//       form.addEventListener('submit', (e)=> {
//           e.preventDefault()
//           addGuess()
//       })
//       guessButton.addEventListener('click', (e)=>{
//          let total5 = currentScore + 100
//          console.log("your total score is" + total5)
//          // console.log("your total score is" + total5)
//          // playerOnesPersonalScore.textContent = `Player 1 score ` + total5
//          currentScore = currentScore + 100
//          playerOnesScore.textContent = `your total score is = ${total5}`
 
//       })
//       currentScore = 100
//      //  currentScore1 = questions[4].questions[4].value
//      //  console.log(currentScore1)
// console.log(`your total score is = ${currentScore}`)
//  playerOnesScore.textContent = `player 1 score = ${currentScore}`
// score100.innerHTML = "X"
 
//  }else if(test7 === "december 25th" || "25th"){
//      form.addEventListener('submit', (e)=> {
//          e.preventDefault()
//          addGuess()
//      })
//      guessButton.addEventListener('click', (e)=>{
//         let total6 = currentScore = 200
//         console.log("your total score is" + 200)
//         // console.log("your total score is" + total6)
//         // playerOnesPersonalScore.textContent = `Player 1 score ` + total6
       
//         playerOnesScore.textContent = `your total score is = ${currentScore}`
//      })
   
//     //  currentScore1 = questions[4].questions[4].value
//     //  console.log(currentScore1)
//  }else if(test8 === "saint nick"){
// form.addEventListener('submit', (e)=>{
//    e.preventDefault()
//    addGuess()
// })
// guessButton.addEventListener('click', (e)=>{
//    let total7 = currentScore = 300
//    console.log("your total score is" + total7)
//    // console.log("your total score is" + total7)
//    // playerOnesPersonalScore.textContent = `Player 1 score ` + total7
//    currentScore = 300
//    playerOnesScore.textContent = `your total score is = ${total7}`
//  })
//  }else if(test9 === "febuary"){
//   form.addEventListener('submit', (e)=> {
//       e.preventDefault()
//       addGuess()
//   })
//   guessButton.addEventListener('click', (e)=>{
//      let total8 = currentScore = 400
//      console.log("your total score is" + total8)
//      // console.log("your total score is" + total8)
//      // playerOnesPersonalScore.textContent = `Player 1 score ` + total8
//      currentScore = 400
//      playerOnesScore.textContent = `your total score is = ${total8}`
//   })
//  }

//  else{
//   switchPlayers()
//   addGuess()
//  }
// }
 
//    //possible function for adding up all scores is
//    function calculateScore(){
// if(test = test2){
//      currentScore1 = questions[0].questions[0].value
//       console.log(currentScore1)
//      console.log(`your total score is = ${currentScore}`)
//          playerOnesScore.innerHTML = `your total score is = ${currentScore}`
//           for100.innerHTML = "X"
        
//  }
// }
// calculateScore()   //} 

// // //questions for Dante= how can I simplify this logic so I dont have to write 50 functions
// // // -
// // //flow chart
// // //make cards interactable onclick = addTask()
// // //each score in html will need its own similar ID with diff text content
// // //if question is wrong subtract points and then its player two turn
// // //if answer is correct add the score and pick again
// //after we add score, to increment depeding on the value copy and paste and repeat for player twos score, because player 2 score has its own ID

// let currentPlayertest = 1
// let player1score = {player:0, player2: 0}

// function displayCategory(){
// const categoryContainer = document.getElementById('categories')
// console.log(categoryContainer)
// placeholderquestions.forEach((item, index)=>{
//   const categoryBox = document.getElementById('div')
//   categoryBox.className = 'category-box'
//   categoryBox.onclick = () => displayQuestion(index);
//   categoryBox.innerHTML = item.category

//   categoryContainer.appendChild(categoryBox)

// })
// }
// function displayQuestion(index){
// const questiontest = placeholderquestions[index]
// document.getElementById('question-container').style.display = 'block'
// document.getElementById('question').innerText = question.question;

// document.getElementById('categorys').style.display = 'none'

// document.getElementsByClassName('category')[index].disabled = true
// document.getElementByIdClassName('category-box')[index].style.opacity = "0.5"
// }

// function passingQuestions(){

// }
// function switchingPlayers(){
//   currentPlayer = currentPlayer === 1? 2 : 1;

// }
// function submitAnswer(){
//   const userAnswer = document.getElementById('answer').value.toLowerCase();
//   const correctAnswer = placeholderQuestion.find(q => q.question === document.getElementById('question).innerText
// }












// displayCategory()