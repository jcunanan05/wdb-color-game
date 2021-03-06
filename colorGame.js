var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    removeClass("selected", modeButtons);
    this.classList.add("selected");

    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    // switch(this.textContent) {
    //   case "Easy":
    //     numSquares = 3;
    //     break;
    //   case "Hard":
    //     numSquares = 6;
    //     break;
    // }

    reset();
  });
}


function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random colors 
  pickedColor = pickColor();  
  //change colors  of squares
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  for(var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }

  h1.style.backgroundColor = "steelblue";
  
}


function removeClass(className, list){
  for(var i = 0; i < list.length; i++) {
    list[i].classList.remove(className);
  }
}


resetButton.addEventListener("click", function() {
  reset();
});

for(var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    //compare to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      
      h1.style.backgroundColor = pickedColor;

      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}


function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < colors.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}


function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to the array
  for(var i = 0; i < num; i++) {
    //get random color and push in array 
    arr.push(randomColor()); 
  }
  //return the array
  return arr;
}


function randomColor() {
  //pick red green and blue 0 - 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}