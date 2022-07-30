function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(nombrecualquiera) {
  if (typeof pepe == 'function')
  {
    var nombre = prompt('Por favor ingresa tu nombre.');
    nombrecualquiera(nombre);
  }
  else
  {
    alert("Mandaste cualquiera");
  }
}

procesarEntradaUsuario(saludar);
procesarEntradaUsuario(5); //Esto va a fallar
//alert("Llegué al final")