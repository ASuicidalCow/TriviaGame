//Final Fantasy quiz game

// global variables 
var correcAnswers = 0;
var timer;

$(document).ready(function(){
    $("#quiz").hide()
});

$(".quizStart").on("click", function(){
    $(this).hide(1500)
    $("3quiz").show(3000)
    time()
});

// if the time runs out before you can submit it will stop the timer.
function failed(){
    clearInterval(timerId);
    submitAnswers()
    return;
};  

// THe timer starts on 95 seconds
function time(){
    timer = 95;
    timerId = setInterval(decrement, 1000);

};

function decrement (){
    timer--;
    $(".timer").html("<h3>Time Remaining " + timer + "</h3>");
    if (timer === 0){
        failed()
        return;
    }
}

function submitAnswers(){

    clearInterval(timerId)

    for(var i = 1; i < 7; i++){
        
        var radios = document.getElementsByName('Question' + i);
        for (var x = 0; x < radios.length; x++) {
            var radio = radios[x];
            
            if (radio.value == "correct" && radio.checked) {

                correctAnswers++;
            }
        }
    }

}
