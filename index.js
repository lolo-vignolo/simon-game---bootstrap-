var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var start = false;

var level = 0;



$(document).keydown(function() {
  if (!start) {
    $("#level-title").text("Level "+ level);
    nextSequence();
    start = true;
}
});



// .......this function using (this) wil go to btn and the using attr will get
// the name of this Id, then those names will go to the new variable...........

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern .push(userChosenColour);
  // var audio1 = new  Audio("sounds/" + userChosenColour +".mp3");
  // audio1.play();
  playSound(userChosenColour );
  animatePress(userChosenColour);
});

// .................fucntion to make a sound and a flash........................
function nextSequence(){
  level++;

  $("#level-title").text("level "+ level);
  var randomNamber = Math.round((Math.random()) * 3);
  var randomChosenColour = buttonColours[randomNamber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

//
// ......function sound, it has an attribute where I will use the color gotten
//  with the variables created in the another functions.........
function playSound(name){
  var audio = new  Audio("sounds/" + name +".mp3");
  audio.play();
}


function animatePress(currentColor){

 $("#" + currentColor).addClass("pressed");

 setTimeout(function(){
  $("#" + currentColor).removeClass("pressed");
}, 100);
}
