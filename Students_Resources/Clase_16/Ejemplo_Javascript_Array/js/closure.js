function creaFunc() {
    var nombre = "Chrome";
    function muestraNombre() {
      alert(nombre);
    }
    return muestraNombre;
  }
  
  var miFunc = creaFunc();
  miFunc();