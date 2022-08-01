// remember to create your variables, go back to html and remember what you named them
//also added 'click' option that calls functions when sed button is clicked, otherwise nothing would happen if you clicked it
//remember to define variables, doing so will let JavaScript know which question the user is answering by either incrementation or decrementation
//remember a score counter, with every correct answer the score will go up
//remember the questions, should be in an Array
//remember snake style


const buttonRestart = document.getElementById('click',restart);
const buttonPrevious = document.getElementById('click',previous);
const buttonNext = document.getElementById('click',next);
const buttonSubmit = document.getElementById('click',submit);
const buttonTrue = document.getElementById('True');
const buttonFalse = document.getElementById('False');
const yourScore = document.getElementById('yourscore');
const questionText = document.getElementById('questiontext');


// The time option when user is playing game
var Timer;
var ele = document.getElementById('Timer');
(function (){
    var sec =0;
    Timer = setInterval(()=>{
    ele.innerHTML = '00:' +sec;
    sec ++;
    }, 1000)
})()



let currentQuestion = 0;
var score = 0;
let questions =[
{
    question: "A Boolean can have multiple conditionals",
    answers: [
        {option:"No, it can only have values of true or false",answer:true},
        {option:"Yes",answer:false}
    ]
},
{
    question: "What is HTML short for?",
    answers: [
        {option:"Hold The Mattress Lois",answer:false},
        {option:"Hyper Text Multi Language",answer:true}
    ]
},
{
    question: "Who is the Father of computers?",
    answers: [
        {option:"Bill Gates",answer:false},
        {option:"Charles Babbage",answer:true}
    ]
}

//The beginQuiz() function that will start when the page is activated and the javascript begins, once an answer is selected the page will automatically go to the next question, REMEMBER YOUR FUNCTIONS
,function beginQuiz() {
currentQuestion = 0;
questionText.innerHTML = questions[currentQuestion].question;
buttonTrue.innerHTML = questions[currentQuestion].answers[0].option;
buttonTrue.onclick = () => {
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<3){
            score++;
        }
    }
    yourScore.innerHTML = score;
    if(currentQuestion<2){
        next();
    }
}
buttonFalse.innerHTML = questions[currentQuestion].answer[1].option;
buttonFalse.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<3){
            score++;
        }
    }
    yourScore.innerHTML = score;
    if(currentQuestion<2){
        next();
    }
}
buttonPrevious.classList.add('hide');

beginQuiz();

}



//Creating a restart function will reset your score, and your current question
,function restart() {
    currentQuestion = 0;
    buttonPrevious.classList.remove('hide');
    buttonNext.classList.remove('hide');
    buttonSubmit.classList.remove('hide');
    buttonTrue.classList.remove('hide');
    buttonFalse.classList.remove('hide');
    score = 0;
    yourScore.innerHTML = score;
    beginQuiz();
}

//The next function will make it so the user could jump to the next question, currently the "currentQuestion" will be incremented but that could change depending on how the user answers the question 
,function next() {
    currentQuestion++;
    if(currentQuestion>=2){
        buttonNext.classList.add('hide');
        buttonPrevious.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    buttonTrue.innerHTML = questions[currentQuestion].answers[0].option;
    buttonTrue.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    buttonFalse.innerHTML = questions[currentQuestion].answers[1].option;
    buttonFalse.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        yourScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    buttonPrevious.classList.remove('hide');
}

//Prev function will allow the user to go back, currently the "currentQuestion" will be decremented but that could change due to the users answer
,function prev() {
    currentQuestion--;
    if(currentQuestion<=0){
        buttonPrevious.classList.add('hide');
        buttonNext.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    buttonTrue.inerHTML = questions[currentQuestion].answers[0].option;
    buttonTrue.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        yourScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    buttonFalse.innerHTML = questions[currentQuestion].answers[1].option;
    buttonFalse.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        yourScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    buttonNext.classList.remove('hide');
}

//The submit button, after your done with the quiz submit it to see how you did and you will get a congratulatory text saying that you finished the quiz
,function submit() {
    buttonPrevious.add('hide');
    buttonNext.classList.add('hide');
    buttonSubmit.classList.add('hide');
    buttonTrue.classList.add('hide');
    buttonFalse.classList.add('hide');
    questionText.innerHTML = "Yay! You did it!";
}

//scorebord/leaderboard 




];
