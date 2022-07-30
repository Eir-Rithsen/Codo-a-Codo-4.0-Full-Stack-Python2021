var nombre = prompt("Hola!, ingresá tu nombre");
var apellido = prompt("Ahora ingresá tu apellido");
var num1 = parseInt(prompt("Ingresá un número entero"));
var num2 = parseInt(prompt("Ingresá otro número entero"));
var titulo = "<h1>Ejercicio integrador JavaScript</h1>";

document.write(titulo);
document.write("<h3>Hola ", nombre, " ", apellido, "!</h3>");
document.write("<p>Los números que escribiste son:</p>");
document.write("<span>", num1, " y ", num2, "</span><br>");
document.write("<h3>Resultados: </h3>");
document.write("<p>La suma es: <span>", num1 + num2,"</span></p>");

document.write("<p>La resta es: <span>", num1 - num2,"</span></p>");
document.write("<p>La multiplicación es: <span>", num1 * num2,"</span></p>");
document.write("<p>La división es: <span>", num1 / num2,"</span></p>");
alert("Gracias!");




