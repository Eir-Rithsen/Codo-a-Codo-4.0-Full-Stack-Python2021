function creaFunc() {
    let nombre = "Codo a Codo";
    function muestraNombre() {

      alert(nombre);
    }
    return muestraNombre;
  }
  
  let miFunc = creaFunc();
  miFunc();
  nombre = "HOLA";
  muestraNombre();

