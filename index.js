//player details
var readlineSync = require("readline-sync")
console.log("Hi! This is Naveen")
var playerName = readlineSync.question("What's your name ? ");
console.log(`Welcome ${playerName} let's see how well you know me`);

//Score data
var playerScore = 0;

var highscores=[
  {
    name :"Snehit",
    score :3,
  
  },
  {
    name :"Anudeep",
    score:4,
  },
  {
    name :"Nikhil",
    score:3,
  },
{
    name: "Jashwanth",
    score:2,
  }
]

//questions data
var questions = [{
    question: "Where do I live? \n A) Chennai \n B)  Warangal \n C) Hyderabad \n",
    answer: "b"
  },
  {
    question: "What's my fav series?\n A) GOT \n B) Dark \n C) Peaky Blinders \n ",
    answer: "c"
  },
  {
    question: "What's my fav dish?\n A) Shawarma \n B) Chicken Biryani \n C) Mandi \n ",
    answer: "c"
  },
  {
  question: "What's my fav pastime? \n A) Reading \n B) Running \n C) Painting \n ",
  answer: "a"
  },
  {question: "What's my favorite car? \n A) Ciaz \n B) Civic \n C) craet \n",
  answer: "b"
  }
];

//Play Function
function play(question, answer){
  var userAnswer=readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Your answer is correct ✅")
    playerScore=playerScore+1
    
  }
  else
  {
    console.log("Bzzztt Wrong Answer ❌");
  }
  console.log( "Your current score is "+ playerScore);
}

//Passing  questions to function
for (var i=0;i<questions.length;i++){
play(questions[i].question,questions[i].answer)
  }
console.log("-------------");
console.log(`You scored ${playerScore} points`);

let maxScore=0;
//calc highest score currently

highscores.forEach(player => {
             maxScore = player.score>maxScore? player.score : maxScore 
               }
             )
console.log("Currently the highest score on this quiz is " + maxScore);

 
if(playerScore>=maxScore){
    console.log("Congratulations! You have achieved new high score 🔥")
    console.log("Please send me a screen shot!")
  }

  else{
    console.log("You missed it by " + (maxScore-playerScore) + " points 😔")
  }
