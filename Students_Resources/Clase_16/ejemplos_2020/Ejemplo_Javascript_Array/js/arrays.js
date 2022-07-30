// 	//3-Arrays----Arreglos: Es un conjunto de elementos. Pueden ser objetos , strings , enteros , etc.
// 	//Los arreglos crecen dinamicamente.. no hace falta decirles 
// 	//cuantos objetos voy a meter.
//   var lenguajes = ["python", "javascript", "php"]; 
  
//   document.write("<br>"+" el tamaño del array es:  "+lenguajes.length);

// 	//Como accedo a los arreglos?
// 	document.write("<br>"+"Mi lenguaje prefe es "+ lenguajes[0]);

// 	//como agrego mas elementos::?
// 	lenguajes[3]="c++";

// 	//Como saber el tamanio de un array?
// 	document.write("<br>"+" el tamaño del array es:  "+lenguajes.length);

// 	//Como agrego mas elementos dinamicamente al final:??? (usando length)
// 	lenguajes[lenguajes.length] = "typescript";

// 	//Otra manera de agregar al final es con push(push agrega al final)
// 	lenguajes.push("java","c#");

// 	//como borrar el ultimo...pop elimina el ultimo
// 	var ultimoElemento = lenguajes.pop()

//   document.write("<br>"+" el elemento que se fue del array es:  "+ultimoElemento);

// 	//Como hago para unir(CONCATENAR) dos arreglos distintos
// 	//Primero creo el otro array
// 	var instrumentos = ["violin", "contrabajo", "cello"];
// 	//Ahora uno los dos arrays en uno nuevo
// 	var lenguajeseinstrumentos = lenguajes.concat(instrumentos);
// 	document.write("<br>"+lenguajeseinstrumentos);

// 	//Join..  se usa para unir los elementos del arreglo como yo quiero
// 	//aca voy a unir todo el arreglo con un numeral en el medio
// 	//Solo se usa visualmente , no cambia el arreglo en si..solo para mostrarlo
// 	document.write(lenguajeseinstrumentos.join(" # "));
	

// 	//Como ordeno el array?  Utilizo sort
// 	var todoOrdenado = lenguajeseinstrumentos.sort();
// 	document.write("------->" + lenguajeseinstrumentos);

// var texto = "un texto";
// var numero = 3;

// console.log(typeof texto)
// console.log(typeof numero)


// function escribirHtml (texto) {
// 	if (typeof texto == "string")
// 	{
// 		document.write(texto + "<br>");
// 	}
// }

  //Iterando arrays
  document.write("<br> Iterando empanadas   <br>")
  var empanadas = ["humita", "carne", 6, "pollo", "verdura", "molleja"];

  empanadas.sort()
  empanadas.forEach(empanada => typeof empanada == "string" ? document.write(empanada + "<br>") : "");

//   for (let i = 0; i <= empanadas.length - 1; i++) {
//     document.write(empanadas[i] + "<br>");
//   }



  







// 	//4--Object   Los objetos tienen atributo y valor , ej:
// 	var bicicleta = {
// 		marca: "Aurorita",
// 		rodado: 29,
// 		peso :8.150
// 	}
	
// var bicicletaNueva = {
// 	marquita: "MasChiquita"
// }


// 	bicicleta.marca = 29;
// 	//Como accedo a esos atributos dentro del objeto?
// 	alert(bicicleta.marca);//asi accedo al atributo
// 	alert(bicicletaNueva.marquita);//asi accedo al atributo

// 	//5--Booleanos true y false.
// 	var verdad = true; //lo vamos a usar muchisimo


// //Valores que podemos asignar ademas de los conocidos-No son typos de datos
// 	//6-Undefined
// 	var indefinida;  //en realidad castea a object.

// 	//7-Null....no es una variable...pero muestro como funciona...Es para establecer cualquier valor a nulo.
// 	var estudiosCursados = null;

// 	//NAN  , nos tira este error cuando queremos, por ej
// 	//multiplicar un string
//   var stringmultiplicado = "palabra" *3;
  


// //Funcion incializadora de objeto
// // function Person(first, last, age, eye) {
// // 	this.firstName = first;
// // 	this.lastName = last;
// // 	this.age = age;
// // 	this.eyeColor = eye;
// // }

// // //Funcion incializadora de objeto
// // function Alumno(legajo) {
// // 	this.legajo = legajo;
// // }


// // var persona = new Person("Juan", "Alberto", 20, "azul");
// // var alumno = new Alumno(123);

// // //todos son object
// // console.log(typeof persona);
// // console.log(typeof alumno);

// // console.log(typeof 20);
// // console.log(typeof "20");


