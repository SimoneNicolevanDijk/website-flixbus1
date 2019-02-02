/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/*bron tutorial van dia microinteractie;
https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/*/

var button = document.querySelector("footer button");
//variabele button in footer
var element = document.querySelector("footer div");
//variable div in footer - image

button.addEventListener("click", function () {
    //event listener op click
    element.classList.toggle("yay");
    //zet class aan / uit als er op gelikt wordt
});




//code coor de zoekbalk - (hulp sven)//

var zoek = document.querySelector("form > input[type=button]");
//ophalen zoekbutton
var zoektext = document.querySelector("form > input[type=text]");
//ophalen inputveld
zoek.addEventListener('click', function uitschuiven() { //event toevoegen aan zoekbutton
    zoektext.classList.toggle('inschuiven-zoeken');
    //zet class aan / uit als er op gelikt wordt
});









/* (andere poging like hartje)
var buttonLike = document.getElementsByName("Like");
var buttonFavoriet = document.getElementsByName("Favoriet");
var buttonDownloaden = document.getElementsByName("Downloaden");

var elementLike = document.getElementsByName("Like");
var elementFavoriet = document.getElementsByName("Favoriet");
var elementDownloaden = document.getElementsByName("Downloaden");

buttonLike.addEventListener("click", function () {
    elementLike[0].classList.toggle("yay");
});

buttonFavoriet.addEventListener("click", function () {
    elementFavoriet[0].classList.toggle("yay");
});

buttonDownloaden.addEventListener("click", function () {
    elementDownloaden[0].classList.toggle("yay");
});
*/
