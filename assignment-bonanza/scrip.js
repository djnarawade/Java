$(document).ready (function(){

//btn1
$("#btn1").click(function(){
    $("#l1").fadeOut();
});

//btn2
$("#btn2").click(function(){
    $("#l2").append("when button clicked append some text")
})

//btn3
$("#btn3").click(function(){
    $("#l3").css("color", "red")
})
}); 

