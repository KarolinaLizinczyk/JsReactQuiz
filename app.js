/**
 * Created by Jacob on 2018-01-08.
 */

function populate() {
    if(quiz.isEnded()){
        showScores();
    }else{
        let element = document.querySelector('#question');
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(let i= 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which language is used for web apps", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ______.", ["Language", "Library", "Framework", "All"], "Framework")
];

function guess (id, guess) {
    const button = document.getElementById(id);

    button.onclick = function () {
       quiz.guess(guess);
       populate();
    };
}

function showProgress() {
    const currentQuestion = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestion + " of " + quiz.question.length;
}

function showScores() {
    let gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}

var quiz = new Quiz(questions);


populate();
