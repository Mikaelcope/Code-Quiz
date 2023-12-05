var startbtn = document.querySelector("#start")
var startScreen = document.querySelector("#start-screen")
var timeStart = 50;
var timerID = 0;
var timeEl = document.querySelector("#time")
var questionshtml = document.querySelector("#questions")
var score = 0;
var userResponse;


//Questions//
var questions = [
    {question: "What does a bird do?",
    choices: ['Fly', 'Swim', 'Crawl'],
    answer: "Fly"
    },
    {question: "What does a dolphin do?",
    choices: ['Fly', 'Swim', 'Crawl'],
    answer: "Swim"
    },
    {question: "What does a crocodile do?",
    choices: ['Fly', 'Swim', 'Crawl'],
    answer: "Crawl"
    },
    {question: "What does a lizzard do?",
    choices: ['Fly', 'Swim', 'Crawl'],
    answer: "Crawl"
    }
];

//Countdown Timer//
function timerCount() {
    timeStart--;
    timeEl.textContent = + timeStart;
    if (timeStart <= 0) {
        saveScore();
    }
}

//Start the quiz//
function startQuiz(event){
    timerID = setInterval(timerCount, 1000);
    event.preventDefault()
    startScreen.classList.remove('start')
    startScreen.classList.add('start', 'hide')

    questionshtml.classList.remove('hide')
    questionshtml.classList.add('show')

    timerCount();

        var i = 0
        function renderQuestion() {
        let questiondiv = document.createElement('div')
        let questionpara = document.createElement('p')
        questiondiv.setAttribute("id", "question-title")
        questionpara.textContent = questions[i].question
        questiondiv.appendChild(questionpara)
        questionshtml.textContent = ''
        questionshtml.appendChild(questiondiv)
    
        let choicesdiv = document.createElement('div')
        let choices = questions[i].choices

        var currentQuestion = questions[i]
        console.log(questions[i])
            for (var j=0; j<currentQuestion.choices.length; j++){
                let choiceBTN = document.createElement('button')
                choiceBTN.textContent = choices[j]
                choiceBTN.addEventListener('click', function(event){
                    if (event.target.textContent === currentQuestion.answer) {
                        console.log("Correct")
                    } else console.log ("Incorrect")
                    //if i = length of question array -1 save score dont move to next question//
                    i++
                    renderQuestion()
                    
                } 
                )
                
                choicesdiv.appendChild(choiceBTN)
            }
            questionshtml.appendChild(choicesdiv)
            
        }
        renderQuestion()

}

// Create a loop that loops through all the questions and answers//






startbtn.addEventListener('click', startQuiz)


// for(var i=0; i, questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response== questions[i].answer){
//         score++;
//     }
//     alert("You got " + score + "/" + questions.length)
// }




//Clear Local Storage//
// clearScoreButton.addEventListener("click", function () {
//     localStorage.clear();
//     document.getElementById("highscore").innerHTML = "";
// });