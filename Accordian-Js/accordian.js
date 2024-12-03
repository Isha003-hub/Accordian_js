function accordian_toggle(target){

    // when we click, it will show open in console
    console.log("open");

    // when we click, it will show the name of the section we clicked by putting id as a parameter.
    console.log(target);


    // defining a variable that will say go to dicument HTML and get element of that id by putting 
    // a parameter target which catches the id and then change it's style display to block.

    // var content = document.getElementById(target);
    // content.style.display = "block";

    // var closed = document.getElementById(target);
    // closed.style.display = "none";


// Creating a variable that refer to all sections using class name
var divsToHide = document.getElementsByClassName("accordian-section");

//loop theorugh each sections
for(var i = 0; i < divsToHide.length; i++){

    //hide each section
    divsToHide.style.display = "none";
}


    var content = document.getElementById(target);

    // COMPAREEEEEEEEEEEEEEE , DON'T ASSIGN
    // if content is displayed(i.e. display == "block"), make it hidden(display = "none") and 
    // else display = "block".

    if(document.getElementById(target).style.display == "block"){
        content.style.display = "none";
    }
    else{
        content.style.display = "block";
    }
}