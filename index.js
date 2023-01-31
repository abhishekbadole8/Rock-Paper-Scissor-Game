
var imgT = document.getElementsByClassName('even')

var myScore = [];
var compScore = [];


function newfunction() {
  document.querySelector(".downContainer").style.display = "block";
  document.querySelector(".picked").style.display = "none";
}

// var rulesvar = document.getElementById('#rules')
// rulesvar.addEventListener('click', () => {
//   document.querySelector(".popUpContainer").style.display = "block";
// })

function myfun() {
  // document.querySelector(".popUpContainer").style.display = "block"
  var popup = document.querySelector(".popUpContainer")
  popup.classList.toggle("show");
}

for (i = 0; i < imgT.length; i++) {
  var button = imgT[i];
  // console.log(button)

  button.addEventListener('click', function (event) {

    var a = ['rock', 'paper', 'scissor']

    var compPick = a[Math.floor(Math.random() * 3)];    // Computer Selection
    // console.log(compPick)

    var scoreVal1 = event.target;          // Tag selection
    // console.log(scoreVal1)

    var inputValue = scoreVal1.id         // My Selection 
    // console.log(inputValue)

    var message = 'Tie, Play again';
    var tryAgainDisplyNone = document.querySelector(".tryAgain").style.display = "none";

    // downContainer 
    function winPage() {
      document.querySelector(".downContainer").style.display = "none";
    }

    // Try Again Btn
    function tryPage() {
      document.querySelector(".tryAgain").style.display = "block";
    }

    // youWin page
    function youWinPage() {
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
      document.querySelector(".picked").style.display = "flex";
      document.querySelector(".pWin").style.display = "none";
      document.querySelector("#bigCP3").style.display = "none";

    }

    function pcWinPage() {
      if (compPick == "rock") {
        document.getElementById("scissorP2").src = "img/Rock.png";
        document.getElementById("pCircleP2").src = "img/YellowCircle.png";
      }
      else if (compPick == "paper") {
        document.getElementById("scissorP2").src = "img/Paper.png";
        document.getElementById("pCircleP2").src = "img/PinkCircle.png";
      }
      else if (compPick == "scissor") {
        document.getElementById("scissorP2").src = "img/Scissor.png";
        document.getElementById("pCircleP2").src = "img/PurpleCircle.png";
      }
      document.querySelector(".picked").style.display = "flex";
      document.querySelector(".uWin").style.display = "none";
      document.querySelector(".pWin").style.display = "block";
      document.querySelector("#bigCP2").style.display = "none";
    }

    // Rock

    if (compPick == 'rock' && inputValue == 'rock') {
      tryPage()                  // Tie
      console.log('tie')
    }
    else if (compPick == 'rock' && inputValue == 'scissor') {
      compScore.push('win')       //compWin
      winPage()
      tryAgainDisplyNone
      pcWinPage()
      
    }
    else if (compPick == 'rock' && inputValue == 'paper') {
      myScore.push('win')           // meWin
      winPage()
      tryAgainDisplyNone
      youWinPage()
    }

    // Paper

    else if (compPick == "paper" && inputValue == "paper") {
      tryPage()                      // Tie
      console.log('tie')

    }
    else if (compPick == "paper" && inputValue == "scissor") {
      myScore.push('win')        // meWin
      winPage()
      tryAgainDisplyNone
      youWinPage()
    }

    else if (compPick == "paper" && inputValue == "rock") {
      compScore.push('win')          //compWin

      winPage()
      tryAgainDisplyNone
      pcWinPage()
    }

    // Scissor

    else if (compPick == "scissor" && inputValue == "scissor") {
      tryPage()                  // Tie
      console.log('tie')

    }
    else if (compPick == "scissor" && inputValue == "paper") {
      compScore.push('win')              //compWin

      winPage()
      tryAgainDisplyNone
      pcWinPage()
    }
    else if (compPick == "scissor" && inputValue == "rock") {
      myScore.push('win')              // meWin
      winPage()
      tryAgainDisplyNone
      youWinPage()
    }
    else {
      alert('Error')
    }

    var length1 = myScore.length
    // console.log(length1)

    document.querySelector(".scoreTag").innerHTML = length1;

    // var addVariable = myScore.length
    // console.log(addVariable)

    // console.log(scoreVal)

    // var newValue = parseInt(inputValue) + 1
  })
}
// console.log(myScore.length)





// Rules Popup Effect:



