let quizForm = document.querySelector('.quiz-form')
let submitAnswerBtn = document.querySelector('.submit')
let output = document.querySelector('.output')

// array of correct answers 
const correctAnswers = ["15cm","16cm","1.5cm","4:1","16:625"];

// adding event listener to button
submitAnswerBtn.addEventListener('click',calculateScore); 

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm); 
    //FormData is an API
    for(let entry of formResults.entries()){
        console.log(entry) }
    // entry will contain name(question number which we entered in html part) and value in array and that value will be answer entered by client
        
    for(let value of formResults.values()){ 
        // console.log(value) 
        if(value===correctAnswers[index]){
            score = score + 1 
            // console.log(value) 
        }
        index = index + 1
    }
    
    // console.log(score) 
    output.innerText = "Your score is: "  + score + "/5"
}