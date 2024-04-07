
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
      { category: 'Sports', value: 100, question: "What sport uses a bat and a mit?", answer: "baseball" },
      {category: 'Sports', value: 200, question: "when is baseball season", answer: "spring" },
      {category: 'Sports', value: 300, question: "what play is made when a player gets hit by a ball", answer: "walk"},
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


      {category: "Spanish", value: 100, question: "whats the english translation of 'Hola'", answer:"Hello"},
      {category: "Spanish", value: 200, question: "whats the english translation of 'Cómo estás'", answer:"how are you"},
      {category: "Spanish", value: 300, question: "whats the english translation of 'manzana", answer:"apple"},
      {category: "Spanish", value: 400, question: "whats the english translation of 'vaso'", answer:"glass"},
      {category: "Spanish", value: 500, question: "whats the english translation of 'trabaja mañana'", answer:"work tommorw"},

 {category: "Religion", value: 100, question:"whats the name of christian religion", answer:"christianity"},
 {category: "Religion", value: 200, question:"whats the name of jewish religion", answer:"judaism"},
 {category: "Religion", value: 300, question:"what religion is native to napal, india, ", answer:"hinduism"},
 {category: "Religion", value: 400, question:"what religion is native to africa, egypt, and west africa ", answer:"islam"},
 {category: "Religion", value: 500, question:"what religion is native to east asia", answer:"buddhism"},

 {category: "Comedy", value: 100, question:"which comedian played a role in the movie 'Scary Movie'", answer:"kevin hart "},
 {category: "Comedy", value: 200, question:"which comedian was born in  Philadelphia", answer:"kevin hart "},
 {category: "Comedy", value: 300, question:"which comedian is a ufc commentator", answer:"joe rogan "},
 {category: "Comedy", value: 400, question:"which comedian is african american, accomplished six emmy awards, five grammys, and starts with a D", answer:"dave chappelle "},
 {category: "Comedy", value: 500, question:"which comedian signed a $20 million dollar deal with netflix per episode", answer:"dave chappelle "}

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
for100.addEventListener('click', (e)=>{
points = 100; selectedCardId = for100.id
let currentQuestion = questions.find(q=> q.value === points).question
for100.textContent = currentQuestion
enablesButtons()
}),

  for200.addEventListener('click', (e)=>{
     points = 200; selectedCardId = for200.id //points per card and change selected card ID based on selected card
    let currentQuestion = questions.find(q=> q.value === points).question
      for200.textContent = currentQuestion
      enablesButtons()
  }),
  for300.addEventListener('click', (e)=>{
    points = 300; selcetedCardId = for300.id
    let currentQuestion = questions.find(q=> q.value === points).question
    for300.textContent = currentQuestion
    enablesButtons()
  }),
  for400.addEventListener('click', (e)=>{
    points = 400; selectedCardId = for400.id
    let currentQuestion = questions.find(q=> q.value === points).question
    for400.textContent = currentQuestion
    enablesButtons()
  })
  for500.addEventListener('click', (e)=>{
points = 500; selectedCardId = for500.id
let currentQuestion = questions.find(q=> q.value === points).question
for500.textContent = currentQuestion
enablesButtons()
    
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
div100.addEventListener('click', (e)=>{
  points = 100; selectedCardId = div100.id
  let categoryQuestions = questions.filter(q=>q.category === "Spanish")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  div100.textContent = currentQuestion
  enablesButtons()
})
div200.addEventListener("click", (e)=>{
  points = 200; selectedCardId = div200.id
  let categoryQuestions = questions.filter(q=>q.category === "Spanish")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  div200.textContent = currentQuestion
  enablesButtons()
})
div300.addEventListener("click", (e)=>{
  points = 300; selectedCardId = div300.id
  let categoryQuestions = questions.filter(q=>q.category === "Spanish")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  div300.textContent = currentQuestion
  enablesButtons()
})
div400.addEventListener("click", () =>{
  points = 400; selectedCardId = div400.id
  let categoryQuestions = questions.filter(q=>q.category === "Spanish")
  let currentQuestion = categoryQuestions.find(q=> q.value === points).question
  div400.textContent = currentQuestion
  enablesButtons()
})
  div500.addEventListener("click", (e)=>{
    points = 500; selectedCardId = div500.id
    let categoryQuestions = questions.filter(q=>q.category === "Spanish")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    div500.textContent = currentQuestion
    enablesButtons()
  })
  ca100.addEventListener('click', (e)=>{
    points = 100; selectedCardId = ca100.id
    let categoryQuestions = questions.filter(q=>q.category === "Religion")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    ca100.textContent = currentQuestion
    enablesButtons()
  })
  ca200.addEventListener('click', (e)=>{
    points = 200; selectedCardId = ca200.id
    let categoryQuestions = questions.filter(q=>q.category === "Religion")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    ca200.textContent = currentQuestion
    enablesButtons()
  })
  ca300.addEventListener('click', (e)=>{
    points = 300; selectedCardId = ca300.id
    let categoryQuestions = questions.filter(q=>q.category === "Religion")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    ca300.textContent = currentQuestion
    enablesButtons()
  })
  ca400.addEventListener('click', (e)=>{
    points = 400; selectedCardId = ca400.id
    let categoryQuestions = questions.filter(q=>q.category === "Religion")
    let currentQuestion = categoryQuestions.find(q=> q.value === points).question
    ca400.textContent = currentQuestion
    enablesButtons()
  })
  ca500.addEventListener('click', (e)=>{
   points = 500; selectedCardId = ca500.id
   let categoryQuestions = questions.filter(q=>q.category === "Religion")
   let currentQuestion = categoryQuestions.find(q=> q.value === points).question
   ca500.textContent = currentQuestion
   enablesButtons()  
  })
 
  
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
 