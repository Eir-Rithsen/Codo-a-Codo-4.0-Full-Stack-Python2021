function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(funcionComoParametro) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  funcionComoParametro(nombre);
}

procesarEntradaUsuario(saludar);
alert("Llegué al final")