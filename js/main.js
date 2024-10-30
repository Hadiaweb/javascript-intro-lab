console.info("Hello JS")
document.getElementById("myHeading").innerHTML = "Hadia Ibrahim" ;


let colourbuttons = document.querySelectorAll("colpicker");
console.dir(colourbuttons);


for(let i = 0; i < colourbuttons.length; i++) {
colourbuttons[i].stylebackgroundColor = "grey";

}

document.getElementById("myTestBtn").addEventListener("click", function (){
console.info("hi I was clicked");
});



let redBtn = document.querySelector(".red");
redBtn.addEventListener("click" , function() {
    document.body.setAttribute("class", "redback");



});

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click" , function() {
    document.body.setAttribute("class", "greenback");



});



