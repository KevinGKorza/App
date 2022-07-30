// remember to create your variables, go back to html and remember what you named them
//also added 'click' option that call functions when sed button is clicked, otherwise nothing would happen if you clicked it
const restartBtn = document.getElementById('click',restart);
const prevBtn = document.getElementById('click',prev);
const nextBtn = document.getElementById('click',next);
const submitBtn = document.getElementById('click',submit);
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;
let questions =[
{
    question: "What does LIFO stand for?",
    answers: [
        {option:"Last In First Out",answer:true},
        {option:"Luke I'm Finally Out",answer:false}
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

//created a function beginQuiz() that will begin when the page loads and the java script starts working, REMEMBER YOUR FUNCTIONS
function beginQuiz(){
currentQuestion = 0;
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
trueBtn.onclick = () => {
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
falseBtn.innerHTML = questions[currentQuestion].answer[1].option;
falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<3){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
        next();
    }

prevBtn.classList.add('hide');

}

beginQuiz();

//Creating a function restart will reser score 
function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

//next function will make it so the user could jump to the next question 
function next(){
    currentQuestion++;
    if(currentQuestion>=2){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
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
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
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
    prevBtn.classList.remove('hide');
}

//Prev function will allow the user to go back
function prev(){
    currentQuestion--;
    if(currentQuestion<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.inerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
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
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
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
    nextBtn.classList.remove('hide');
}

//The submit button 
function submit(){
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML = "Yay! You did it!";
}


]

