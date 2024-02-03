
    

let isFirstTime=true;
var  userClickedPattern=[]
var gamePattern=[]
var buttonColors=["red", "blue", "green", "yellow"]
let Level=0
//Detecing which button got clicked 

$(".btn").on("click", function() {
    var userChossenColor = (this.id);
    //Adding animation to users clicks
    $("#"+userChossenColor).addClass("pressed")
    setTimeout(function(){
        $("#"+userChossenColor).removeClass("pressed")
    },100);

    userClickedPattern.push(userChossenColor)
    playSound(userChossenColor)
    CheckAnswer(userClickedPattern.length-1)

})
//game starting
$(document).keydown(function() {
    

    if (isFirstTime){
    $("#level-title").html("Level "+Level)
    nextSequence()
    }
    isFirstTime=false;
})

function nextSequence() {
    userClickedPattern=[]
    Level++
    var randomNumber=Math.floor(Math.random()*4)
    var randomChossenColor=buttonColors[randomNumber]
    gamePattern.push(randomChossenColor)
//Using Animations in Random Buttons.
    $("#"+ randomChossenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

//Playing Sound Based on The Buttons.
    var audio=new Audio("sounds/"+randomChossenColor+".mp3");
    audio.play();
   $("#level-title").html("Level "+Level)
    }


//Creating a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();

}

//Checking the user answer against the game
function CheckAnswer(currentLevel) {
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if (gamePattern.length===userClickedPattern.length){
            setTimeout(function() {
                nextSequence()
            },1000)
        }
    }else{
        var gameOver=new Audio("/home/hamza/WEB_PROGRAMMING/SimonGameChallenge/Simon+Game+Challenge+Starting+Files/Simon Game Challenge Starting Files/sounds/wrong.mp3")
        gameOver.play()
        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over")
        },200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    
    }
    
}
function startOver() {
    Level=0
    gamePattern=[]
    isFirstTime=true;
}



