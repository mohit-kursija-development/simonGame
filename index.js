let arr = [];
let user = [];
var level = 1;
var gameon = true;

$(document).ready(function() {
    // Function to simulate a key press event
    function simulateKeyPress(key) {
        var event = $.Event('keypress', {
            key: key
        });

        // Dispatch the event to the document
        $(document).trigger(event);
    }

    // Click event handler for the button
    $('#start_button').click(function() {
        // Simulate pressing the 'Enter' key
        simulateKeyPress('Enter');
    });

});
function comp_inp(){
    var num = Math.floor((Math.random()*4 + 1));
    highlight(num);
    arr.push(num);
}


$(".one, .two, .thr, .fou").on("click", function() {
    const clickedNumber = parseInt($(this).text()); // Assuming the number is in the text content
    user.push(clickedNumber);
    highlight(clickedNumber);
    check_n_play();
});

function check_n_play(){
    console.log("CI "+ arr);
    if(user.length == arr.length){
        console.log("UI "+ user);
        
        if(JSON.stringify(arr) === JSON.stringify(user)){
            level++;
            setTimeout(function () {
                comp_inp();
                }, 1000); 
        }
        else{
            alert("GAME OVER");
            location.reload();
        }
        
        if(arr.length>=7){
            alert("YOU WIN!!!");
            location.reload();
        }
        user=[];  
        $("h1").text("LEVEL "+level);

    }
}
$(document).keypress(function(e){
    start();
    $("p").hide();
    $("#start_button").hide();
});
function start(){
    level =1;
    $("h1").text("LEVEL "+level);
    comp_inp();
}   

function highlight(temp){
    if(temp == 1){
        $(".one").removeClass("border-white").addClass("border-black");
        new Audio('./sounds/crash.mp3').play();
        setTimeout(()=>{$(".one").addClass("border-white");} , 150);
    }
    else if(temp == 2){
        $(".two").removeClass("border-white").addClass("border-black");
        new Audio('./sounds/kick-bass.mp3').play();
        setTimeout(()=>{$(".two").addClass("border-white");} , 150);
    }
    else if(temp == 3){
        $(".thr").removeClass("border-white").addClass("border-black");
        new Audio('./sounds/tom-1.mp3').play();
        setTimeout(()=>{$(".thr").addClass("border-white");} , 150);
    }
    else{
        $(".fou").removeClass("border-white").addClass("border-black");
        new Audio('./sounds/snare.mp3').play();
        setTimeout(()=>{$(".fou").addClass("border-white");} , 150);
    }
}

