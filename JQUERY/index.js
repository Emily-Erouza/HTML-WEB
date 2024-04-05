// $("h1").css("color","red");

// $(document).ready(function(){
//     $("h1").css("color","red");   
// });

// slecting Elements 
$("h1").css("font-size","5rem");
$("button");

// Style.css
// .bigtitle{
//     font-size: 5rem;
//     color: red;
// }

$("h1").addClass("bigtitle");

// Manipulating Text with jQuery

$("h1").text("Bye");
$("button").text("don't click me");
$("button").html("<em>hey</em>");

// Manipulating attribute with jQuery
$("a").attr("href","https://www.yahoo.com");

// Adding Event Listeners with jQuery
// $("h1").click(function(){

//     $("h1").css("color","purple")
// }
// );

for(var i=0; i<5; i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color="purple";
    });
}

// input 
$(document).keypress(function(event){
 
    $('h1').text(event.key)
})

$('h1').on("mouseover", function(){
 
    $('h1').css("color","purple")
})

// Website Animations with jQuery
$('button').on("click", function(){
 
    // $('h1').fadetoggle()
    $('h1').animate({margin:"20%"});
})