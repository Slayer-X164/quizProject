const quizData = [
    // part 5
    {
        question:`Question on Part V <br> What does Part V of the Indian Constitution primarily address?`,
        answers:[
            { opt:"Fundamental Rights" ,correct: false},
            { opt:"The Union government" ,correct: true},
            { opt:"State governments" ,correct: false},
            { opt:"Local governance" ,correct: false},
        ]
    },
    {
        question: `Question on Part V <br>Which article of the Constitution establishes the office of the President of India?`,
        answers: [
            { opt: "Article 52", correct: true },
            { opt: "Article 53", correct: false },
            { opt: "Article 54", correct: false },
            { opt: "Article 55", correct: false }
        ]
    },
    {
        question: `Question on Part V <br>Who can be the Vice President of India according to the Constitution?`,
        answers: [
            { opt: "Any citizen of India", correct: false },
            { opt: "A person above the age of 35", correct: false },
            { opt: "A member of Rajya Sabha", correct: false },
            { opt: "Both B and C", correct: true }
        ]
    },
    {
        question: `Question on Part V <br>Which article provides for the election of the President of India?`,
        answers: [
            { opt: "Article 54", correct: true },
            { opt: "Article 55", correct: false },
            { opt: "Article 56", correct: false },
            { opt: "Article 57", correct: false }
        ]
    },
    {
        question: `Question on Part V <br>The Prime Minister of India is appointed by whom?`,
        answers: [
            { opt: "The President", correct: true },
            { opt: "The Chief Justice", correct: false },
            { opt: "The Parliament", correct: false },
            { opt: "The Election Commission", correct: false }
        ]
    },
    {
        question: `Question on Part V <br>What is the maximum number of ministers that can be appointed in the Council of Ministers?`,
        answers: [
            { opt: "15% of Lok Sabha strength", correct: true },
            { opt: "20% of Rajya Sabha strength", correct: false },
            { opt: "10% of total population", correct: false },
            { opt: "No limit", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>Which article of the Constitution discusses the composition of the Council of Ministers?`,
        answers: [
            { opt: "Article 74", correct: false },
            { opt: "Article 75", correct: true },
            { opt: "Article 76", correct: false },
            { opt: "Article 77", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>What is the term of the President of India?`,
        answers: [
            { opt: "4 years", correct: false },
            { opt: "5 years", correct: true },
            { opt: "6 years", correct: false },
            { opt: "7 years", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>Which article provides for the establishment of the Union Public Service Commission (UPSC)?`,
        answers: [
            { opt: "Article 315", correct: true },
            { opt: "Article 320", correct: false },
            { opt: "Article 330", correct: false },
            { opt: "Article 335", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>In the event of a disagreement between the two Houses of Parliament, which House has the final say?`,
        answers: [
            { opt: "Lok Sabha", correct: true },
            { opt: "Rajya Sabha", correct: false },
            { opt: "Both Houses", correct: false },
            { opt: "The President", correct: false }
        ]
    },

    // part 6
    {
        question: `Question on Part VI <br>What does Part VI of the Indian Constitution primarily deal with?`,
        answers: [
            { opt: "Fundamental Rights", correct: false },
            { opt: "Union Government", correct: false },
            { opt: "State Government", correct: true },
            { opt: "Amendment Procedures", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>Which article of Part VI specifies the establishment of Legislative Assemblies in the states?`,
        answers: [
            { opt: "Article 169", correct: false },
            { opt: "Article 168", correct: true },
            { opt: "Article 170", correct: false },
            { opt: "Article 172", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>What is the maximum strength of a Legislative Assembly as per Article 170?`,
        answers: [
            { opt: "500", correct: false },
            { opt: "600", correct: true },
            { opt: "750", correct: false },
            { opt: "800", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>Who has the authority to dissolve the Legislative Assembly in a state?`,
        answers: [
            { opt: "Chief Justice of the High Court", correct: false },
            { opt: "Governor", correct: true },
            { opt: "President of India", correct: false },
            { opt: "Prime Minister", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>Which article provides for the appointment of a Governor for each state?`,
        answers: [
            { opt: "Article 152", correct: false },
            { opt: "Article 153", correct: true },
            { opt: "Article 154", correct: false },
            { opt: "Article 155", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>Which body is responsible for making laws in a state?`,
        answers: [
            { opt: "Parliament", correct: false },
            { opt: "State Legislative Assembly", correct: true },
            { opt: "Municipal Corporation", correct: false },
            { opt: "Panchayat", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>What is the term of a member of the State Legislative Assembly?`,
        answers: [
            { opt: "3 years", correct: false },
            { opt: "5 years", correct: true },
            { opt: "6 years", correct: false },
            { opt: "7 years", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>Which article mentions the procedure for the impeachment of the Governor?`,
        answers: [
            { opt: "Article 155", correct: false },
            { opt: "Article 156", correct: true },
            { opt: "Article 157", correct: false },
            { opt: "Article 158", correct: false }
        ]
    },
    {
        question: `Question on Part VI <br>What is the role of the Governor in the state legislature?`,
        answers: [
            { opt: "Preside over the sessions", correct: false },
            { opt: "Appoint members to the Assembly", correct: false },
            { opt: "Veto bills", correct: false },
            { opt: "All of the above", correct: true }
        ]
    },
    {
        question: `Question on Part VI <br>Which of the following articles is concerned with the powers of the Governor?`,
        answers: [
            { opt: "Article 200", correct: false },
            { opt: "Article 201", correct: false },
            { opt: "Article 202", correct: false },
            { opt: "All of the above", correct: true }
        ]
    }

]

const questionEl = document.getElementById("question")
const answerBtn = document.getElementById("answer-btns")
const nextBtn = document.getElementById("nextbtn")

let currentQuestionIndex = 0
let score = 0

function initializeQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = "Next"
    desplayQuestions()

}

function desplayQuestions(){
    resetPreviousQNA()
    let currentQuestion = quizData[currentQuestionIndex]
    let QuestionNumber = currentQuestionIndex + 1
    questionEl.innerHTML = QuestionNumber +". "+ currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.opt
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectOpt)
    })
}
function resetPreviousQNA() {
    nextBtn.style.display = "none"
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
function selectOpt(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextBtn.style.display = "block"


}
function handleNextBtn(){
    currentQuestionIndex++
    if(currentQuestionIndex < quizData.length){
        desplayQuestions()
    }else{
        showScore()
    }
}
function showScore(){
    resetPreviousQNA()
    questionEl.innerHTML = `You're Score is ${score} out of ${quizData.length}`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block"
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < quizData.length){
        handleNextBtn()
    }else{
        initializeQuiz()
    }
})
initializeQuiz()
