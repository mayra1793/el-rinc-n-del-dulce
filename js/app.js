window.onload = function() {
    var x = document.getElementById("myDIV");

function myFunction() {
    x.style.animation = "mymove 4s 2";       

function myStartFunction() {
    this.innerHTML = "animationstart event occured - The animation has started";
    this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
    this.innerHTML = "animationiteration event occured - The animation was played again";
    this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
    this.innerHTML = "animationend event occured - The animation has completed";
    this.style.backgroundColor = "lightgray";
}

}
