// Esta constante me conectará con el ID del documento HTML
const app= new Vue({
    // El ID queda asociado a la propiedad "el", que identifica al objeto y lo relaciona con el ID en particular
    el: '#app', //el es por 'element'
    // Los datos quedan asociados a la propiedad data    
    data: {
        mensaje: "Hola Mundo con Vue!",
        nombre: "Juan Pablo"
    }
})
   