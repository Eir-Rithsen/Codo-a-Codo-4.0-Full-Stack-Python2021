document.getElementById("demo").innerHTML = "Buenas Gentee!";


var principal = document.getElementById("principal");
var profesor = principal.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 
'El profesor del curso es: ' + profesor[0].innerHTML;



// for (let index = 0; index < elementosP.length; index++) {
// 	elementosP[index].innerHTML = index;
// }