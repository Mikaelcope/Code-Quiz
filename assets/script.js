var startbtn = document.querySelector("#start")
var startScreen = document.querySelector("#start-screen")
var questionshtml = document.querySelector("#questions")
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
var score = 0;


function startQuiz(event){
    event.preventDefault()
    startScreen.classList.remove('start')
    startScreen.classList.add('start', 'hide')

    questionshtml.classList.remove('hide')
    questionshtml.classList.add('show')

    let questiondiv = document.createElement('div')
    let questionpara = document.createElement('p')
    questiondiv.setAttribute("id", "question-title")
    questionpara.textContent = questions[0].question
    questiondiv.appendChild(questionpara)
    questionshtml.appendChild(questiondiv)

    let choicesdiv = document.createElement('div')
    let choices = questions[0].choices
    for (var i=0; i<choices.length; i++){
        let choiceBTN = document.createElement('button')
        choiceBTN.textContent = choices[i]
        choicesdiv.appendChild(choiceBTN)
    }
    questionshtml.appendChild(choicesdiv)

    // let userResponse = choiceBTN.addEventListener("click")
    // if (userResponse === questions[0].answer) {
    //     score++;
    // }
    // console.log(score)

}

startbtn.addEventListener('click', startQuiz)


// for(var i=0; i, questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response== questions[i].answer){
//         score++;
//     }
//     alert("You got " + score + "/" + questions.length)
// }
