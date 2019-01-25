setTimeout(fifteenSeconds, 1000 * 15);
setTimeout(fiveSeconds, 1000 * 25);
setTimeout(timeUp, 1000 * 30);

// Set up variables for Question answers???

var Question1answer = 0;
var Question2answer = 0;
var Question3answer = 0;
var currentScore = 0;

function fifteenSeconds() {

  $("#time-left").append("<h2>About 15 Seconds Left!</h2>");
}

function fiveSeconds() {
 
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
}

function timeUp() {

  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");

}


// if statements for correct answers to Questions

// else statement for incorrect answers

// on click event to grab answer submissions
$("#submit").click(function(){
  alert("The paragraph was clicked.");
});

// Add to the Score if win

var checkWin = function() {
  
  
 if (Question1answer === "true") {
    currentScore++;
    $("#score").text(currentScore);
    

   }
}



// End game at timer stop