// $(document).ready(function() {
//
//    $(".profile").click(function(event) {


function clickME(){

  function lillianDialogue() {
    alert("Gather round children, and test your NUMERICAL MIGHT against my ~mystical equations~!");
    alert("Each is designed to STUPIFY the mind, and ~perplex~ the SOOOOOUUUUULLLL");
    var num = parseInt(prompt("BEGIN!!!!!!!! [2 + 2] If you dare...."));
    if (num == 4) {
      alert("WHAT??? IMPOSSIBLE!! NNOOOOOOOO!!!!!!")
      // $(".stuff").hide();
      // $(".exp").toggle();

    } else {
      alert("You fool! You have been defeated! Come back again when you have learned more...")
    }
  }
     var number1 = parseInt(prompt("FEED ME YOUR NUMBERS"));
     var number2 = parseInt(prompt("I NEED MORE!!!!!!!!!"));
     var result = (number1 + number2);
     alert("MY TOTAL STOMACH CONTENTS ARE: " + result + " Numbers");
     alert("I SPEW VENOM AT YOUUUU");
     alert("BLEHHHHHH!!!!")
     prompt("I BITE!!")
     alert("HAHAHAHAHAHAHA!!!!")

 }



function extraSpeech() {
var number1 = parseInt(prompt("FEED ME A NUMBER!!!"));
var etc = (prompt("WHAT ARE YOU FEEDING ME WITH!!!"));
var result2 = (number1 +  etc);
alert("MY TOTAL STOMACH CONTENTS ARE: " + result2);
alert("THANK YOU");
alert("I WILL FOLLOW YOU HOME AND EAT ALL OF YOUR " + etc)
}

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};


var multiply = function(number1, number2) {
  return number1 * number2;
};


var divide = function(number1, number2) {
  return number1 / number2;
};


// });
// });

// // var clac = prompt("YOU WILL GIVE ME FOOD??!!!"") {
// //
// // };
// //
// // function speech2 = alert("FEED ME WITH NUMBERS SO I CAN SPEW VENOM IN YOUR DIRECTION!!!! HAHAHAHAHAHAHAHAAHHHHHHH")
// //
// // prompt()
//
// // if else function, jquery, hover .show(), .hide();
// });


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    console.log(add(number1, number2));
    var result = add(number1, number2);
    $("#output").text(result);

  });
});
