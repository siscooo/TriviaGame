var questions = [{
    ques: "Which city does Batman love in?",
    ans: ["New York", "Chicago", "Gotham", "Metropolis"],
    name: "batman",
    correct: "Gotham",
    divClass: ".batman"
},
{
    ques: "In which sport do you perform the Fosbury Flop?",
    ans: ["Diving", "Soccer", "Basketball", "High Jump"],
    name: "flop",
    correct: "High Jump",
    divClass: ".flop"
},
{
    ques: "Spinach is high in which mineral?",
    ans: ["Iron", "Protein", "Zinc", "Calcium"],
    name: "spinach",
    correct: "Iron",
    divClass: ".spinach"
},
{
    ques: "What is a Geigar Counter used to detect?",
    ans: ["Puppies", "Lies", "Metal", "Radiation"],
    name: "geigar",
    correct: "Radiation",
    divClass: ".geigar"
},
{
    ques: "In the film Babe, what kind of animal is Babe?",
    ans: ["dog", "cat", "pig", "cow"],
    name: "babe",
    correct: "pig",
    divClass: ".babe"
},

] 

var labels = ["first", "second", "third", "forth"];


var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(30);
    questionDisplay();
    });


var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
 
for (var j = 0; j < 5; j++) {
    $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$   (questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}



var countdown = function(seconds) {

var timer = setInterval(function() {
    seconds = seconds - 1;
    $("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

  
    clearInterval(timer);
    return;
}
}, 1000);


$('#sub-but').on('click', function() {
    clearInterval(timer);
})
}; 



var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();

$('.container').fadeOut(500);

$('#answerScreen').show();

$('#correctScreen').append(correctAnswers);

$('#wrongScreen').append(wrongAnswers);

}); 