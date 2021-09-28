var readlineSync = require('readline-sync');
var userInput = readlineSync.question("Enter your name !" );
console.log("Welcome ! " + userInput.toUpperCase());
var score = 1;

function play(question,answer){
  var userAns=readlineSync.question(question);
  if (userAns === answer){
    score =1+score;
    console.log("right!");
    
  }
    else {
      console.log("wrong!");
    
  }
  console.log("your score is : " + score);
}

var array=[{
  "ques":"what is my name? \n a-arpit \n b-anubhav \n c-arsh \n d-none ", 
  "ans": "b"},

  {
  "ques":"what is my Age?" , 
  "ans":"25"
},{
  "ques":"what is my Last name?" , 
  "ans":"saraswat"
}];

for (var i=0; i<array.length; i++){
  var currentQues =array[i];

  play(currentQues.ques,currentQues.ans);
}