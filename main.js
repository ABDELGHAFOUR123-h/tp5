let nbr = Math.floor(Math.random()*10)+1;
let T = parseInt(prompt("saisir un nombre entre 1 et 10"));
do {
    
if( T > nbr )
alert("petit");

else if (T < nbr) {
    alert("grand");
} else {
    alert("BRAVO");
    
}
} while (T != nbr);