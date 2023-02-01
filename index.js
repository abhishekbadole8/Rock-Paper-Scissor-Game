var myScore = [];
var compScore = [];

var imgT = document.getElementsByClassName('even')

function newfunction() {
  document.querySelector(".downContainer").style.display = "block";
  document.querySelector(".picked").style.display = "none";
}

function rulesfunction() {
  var popup = document.querySelector(".popUpContainer")
  popup.classList.add("showRulesContainer");
}

function popUpClose(){
  var element = document.querySelector('.popUpContainer')
  element.classList.remove("showRulesContainer");
}

function showCircle(winnerType){
  if (winnerType == 'playerWin') {
        document.querySelector(".picked").style.display = "flex";
        document.querySelector(".uWin").style.display = "block";
        document.querySelector(".pWin").style.display = "none";
        document.querySelector("#bigCP3").style.visibility='visible';
      }

      else {
        document.querySelector(".picked").style.display = "flex";
        document.querySelector(".uWin").style.display = "none";
        document.querySelector(".pWin").style.display = "block";
        document.querySelector("#bigCP2").style.visibility='visible';
      }
}



for (i = 0; i < imgT.length; i++) {
  var button = imgT[i];

  button.addEventListener('click', function (event) {

    var a = ['rock', 'paper', 'scissor']

    var compPick = a[Math.floor(Math.random() * 3)];    // Computer Selection
    // console.log(compPick)

    var scoreVal1 = event.target;          // Tag selection
    // console.log(scoreVal1)

    var inputValue = scoreVal1.id         // My Selection 
    console.log('Me choose ' + inputValue, ', Comp choose ' + compPick)

    var message = 'Tie, Play again';
    var tryAgainDisplyNone = document.querySelector(".tryAgain").style.display = "none";

    // downContainer 
    function winPage() {
      document.querySelector(".downContainer").style.display = "none";
    }

    // Try Again btn
    function tryPage() {
      document.querySelector(".tryAgain").style.display = "block";
    }

    // winnerPage 
        function winnerPage(winnerType) {

      if (inputValue == "rock") {
        document.getElementById("scissorP2").src = "img/Rock.png";
        document.getElementById("pCircleP2").src = "img/YellowCircle.png";
      }

      else if (inputValue == "paper") {
        document.getElementById("scissorP2").src = "img/Paper.png";
        document.getElementById("pCircleP2").src = "img/PinkCircle.png";
      }

      else if (inputValue == "scissor") {
        document.getElementById("scissorP2").src = "img/Scissor.png";
        document.getElementById("pCircleP2").src = "img/PurpleCircle.png";
      }

      if (compPick == "rock") {
        document.getElementById("scissorP3").src = "img/Rock.png";
        document.getElementById("pCircleP3").src = "img/YellowCircle.png";
      }

      else if (compPick == "paper") {
        document.getElementById("scissorP3").src = "img/Paper.png";
        document.getElementById("pCircleP3").src = "img/PinkCircle.png";
      }

      else if (compPick == "scissor") {
        document.getElementById("scissorP3").src = "img/Scissor.png";
        document.getElementById("pCircleP3").src = "img/PurpleCircle.png";
      }

      
      
    }


    // Rock

    if (compPick == 'rock' && inputValue == 'rock') {
      tryPage()                      // Tie
    }

    else if (compPick == 'rock' && inputValue == 'scissor') {
      compScore.push('win')         //compWin
      winPage()
      tryAgainDisplyNone
      winnerPage('pcWin')
      showCircle('pcWin')
    }

    else if (compPick == 'rock' && inputValue == 'paper') {
      myScore.push('win')           // meWin 
      winPage()
      tryAgainDisplyNone
      winnerPage('playerWin')
      showCircle('playerWin')
    }

    // Paper

    else if (compPick == "paper" && inputValue == "paper") {
      tryPage()                      // Tie
      // console.log('tie')
    }

    else if (compPick == "paper" && inputValue == "scissor") {
      myScore.push('win')          // meWin
      winPage()
      tryAgainDisplyNone
      winnerPage('playerWin')
      showCircle('playerWin')
    }

    else if (compPick == "paper" && inputValue == "rock") {
      compScore.push('win')          //compWin
      winPage()
      tryAgainDisplyNone
      winnerPage('pcWin')
      showCircle('pcWin')
    }

    // Scissor

    else if (compPick == "scissor" && inputValue == "scissor") {
      tryPage()                       // Tie
    }

    else if (compPick == "scissor" && inputValue == "paper") {
      compScore.push('win')              //compWin
      winPage()
      tryAgainDisplyNone
      winnerPage('pcWin')
      showCircle('pcWin')
    }

    else if (compPick == "scissor" && inputValue == "rock") {
      myScore.push('win')              // meWin
      winPage()
      tryAgainDisplyNone
      winnerPage('playerWin')
      showCircle('playerWin')
    }

    else {
      alert('Error')
    }

    var length1 = myScore.length
    document.querySelector(".scoreTag").innerHTML = length1;

    // var addVariable = myScore.length
    // console.log(addVariable)

    // console.log(scoreVal)

    // var newValue = parseInt(inputValue) + 1
  })
}
// console.log(myScore.length)





