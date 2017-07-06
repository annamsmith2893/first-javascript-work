// copied script from matopher on github, friend in okcoders class; just using to try to learn js
var bottles = document.getElementById("beersong");

var drink = "beer";

var lyrics = "";

var bottles = "99";

for (var i = bottles; i > 0; i--){
    
    lyrics = i + " bottles of " + drink + " on the wall, " + drink + 
    ", take one down, pass it around, " + (i - 1) + " bottles of " + drink + " on the wall"

    beersong.innerHTML += lyrics + "<br/>";
}
