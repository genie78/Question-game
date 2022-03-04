// vars
var startButton = document.querySelector('.start-btn');
var closeButton = document.querySelector('.close-btn');
var question = document.querySelector(".question");
var answersList  = [document.querySelector(".A"), document.querySelector(".B"), document.querySelector('.C')];

// button answers 
var buttonA = document.querySelector('.button-a');
var buttonB = document.querySelector('.button-b');
var buttonC = document.querySelector('.button-c');

// main divs
var gamePlayDiv = document.querySelector('.game-play-div');
var questionDiv = document.querySelector('.question-div');

const closePage = function (){
    window.close();
}
closeButton.addEventListener('click', closePage);

const seeQuestions = function() {
    gamePlayDiv.remove();
    questionDiv.style.visibility = 'visible';
}
startButton.addEventListener('click', seeQuestions);


// question object

var questionObj = {
    q1: ['What do you call people who are 18+ ?', 'Adult'],
    q2: ['What color is the tree?', 'Green'],
    q3: ['What do you call someone who has a wife?', 'Married'],
    q4: ['Which is the most us level in English?', 'C2'],
    q5: ['What color is the sky?', 'Blue']
}

var randomAnswer;
function writeAnswers(qstn){
    randomAnswer = answersList[Math.floor(Math.random()*answersList.length)];
    randomAnswer.innerHTML = questionObj[qstn][1];
    answersList.splice(answersList.indexOf(randomAnswer), 1);
    if (qstn == 'q1'){
        answersList[0].innerHTML = 'Children';
        answersList[1].innerHTML = 'Person';    
    }else if (qstn == 'q2'){
        answersList[0].innerHTML = 'Red';
        answersList[1].innerHTML = 'Brown';    
    }else if (qstn == 'q3'){
        answersList[0].innerHTML = 'Wife';
        answersList[1].innerHTML = 'Husband';    
    }else if (qstn == 'q4'){
        answersList[0].innerHTML = 'B1';
        answersList[1].innerHTML = 'A1';    
    }else if (qstn == 'q5'){
        answersList[0].innerHTML = 'Yellow';
        answersList[1].innerHTML = 'White';    
    }
    answersList = [document.querySelector(".A"), document.querySelector(".B"), document.querySelector('.C')];
}


var listOfQuestions = [];
function createListOfQuestions (obj){
    for (let i in obj){
        listOfQuestions.push(i);
    }
}
var randomQuestion;
function getRandomQuestion () {
    randomQuestion = listOfQuestions[Math.floor(Math.random()*listOfQuestions.length)];
    question.innerHTML = questionObj[randomQuestion][0];
    writeAnswers(randomQuestion);
}

createListOfQuestions(questionObj);
getRandomQuestion();
