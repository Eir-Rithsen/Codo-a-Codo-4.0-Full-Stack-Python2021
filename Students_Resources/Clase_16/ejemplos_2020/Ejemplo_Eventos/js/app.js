/*function muestraMensaje() {
    console.log('Cliqueaste en el div');
}

function muestraMensajeParrafo() {
    console.log('Cliqueaste en el párrafo');
}


let parrafo2 = document.querySelector('#parrafo2');
console.log(parrafo2.outerHTML);


parrafo2.addEventListener('click', function(evento) {
    evento.preventDefault();
    console.log(`Click con el boton ${evento.type}`);
});

parrafo2.addEventListener('dblclick', function(evento) {
    console.log(`No tan rapido`);
});*/

/*Delegation*/

document.body.addEventListener('click', seleccionarElemento);

function seleccionarElemento(evento) {
    evento.preventDefault();
    console.log(evento.target.outerHTML);
    if (evento.target.classList.contains('parrafo')) {
        console.log("Cliqueaste sobre el párrafo");
    }
}


function clickear(carlos)
{
   var prueba = carlos.target;
}