//1. Adding addEventListener of a button
// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked!");
// });

// 2. adding addEventListener does the same thing as click the button to all buttons
// var numberOfDrums = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfDrums; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("I got clicked!");
//     });

// }

// 3. How to play sounds on a website
var numberOfDrums = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfDrums; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//       
        
//        this.style.color = 'white'
//     });

// }
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


// 4. How to use switch statemnt in js
// var numberOfDrums = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfDrums; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        
//       var buttonInnerHTML = this.innerHTML;
      
//       switch (buttonInnerHTML) {

// case "w": 
// var tom1 = new Audio('sounds/tom-1.mp3');
//  tom1.play();
// break;

// case "a": 
// var tom2 = new Audio('sounds/tom-2.mp3');
//  tom2.play();
// break;

// case "s": 
// var tom3 = new Audio('sounds/tom-3.mp3');
//  tom3.play();
// break;

// case "d": 
// var tom4 = new Audio('sounds/tom-4.mp3');
//  tom4.play();
// break;

// case "j": 
// var snare = new Audio('sounds/snare.mp3');
//  snare.play();
// break;

// case "k": 
// var crash = new Audio('sounds/crash.mp3');
//  crash.play();
// break;

// case "l": 
// var kick= new Audio('sounds/kick-bass.mp3');
//  kick.play();
// break;

// default: console.log(buttonInnerHTML);

//       }
//     });

// }

//  Using Keyboard Event Listeners to Check for Key Presses (dettect keyboard press)
document.addEventListener('keypress', function(event){
  makeSounds(event.key);
});


// detect button press
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var buttonInnerHTML = this.innerHTML;
      makeSounds(buttonInnerHTML);

    });

  }


function  makeSounds(key) {
switch (key){

case "w": 
var tom1 = new Audio('sounds/tom-1.mp3');
 tom1.play();
break;

case "a": 
var tom2 = new Audio('sounds/tom-2.mp3');
 tom2.play();
break;

case "s": 
var tom3 = new Audio('sounds/tom-3.mp3');
 tom3.play();
break;

case "d": 
var tom4 = new Audio('sounds/tom-4.mp3');
 tom4.play();
break;

case "j": 
var snare = new Audio('sounds/snare.mp3');
 snare.play();
break;

case "k": 
var crash = new Audio('sounds/crash.mp3');
 crash.play();
break;

case "l": 
var kick= new Audio('sounds/kick-bass.mp3');
 kick.play();
break;

default: console.log(buttonInnerHTML);
}
      }


