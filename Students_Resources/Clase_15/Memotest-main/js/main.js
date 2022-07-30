$(document).ready(function() {
    
    let cantidad=0;
    let windowwidth= $(window).width();


    if (windowwidth<600) {
        $(".container").css("grid-template-columns","auto auto auto auto")
    }

    loadcartas(20,flip);


    


    //Funciones :)

    function loadcartas(n,cb) {
        let nroImg;
        //Creo el Array. Va de 1 a n con longitud n (chequear https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/from)
        let numImg = Array.from({length: n}, (_, i) => i + 1)
        console.log(`Antes: ${numImg}`)

        //Lo desordeno! (chequear https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
        numImg.sort(function() { return 0.5 - Math.random() });
        console.log(`Después: ${numImg}`)

        //Cargo las cartas.
        for (let i = 1; i < n+1; i++) {

            //No hay 20 imagenes, entonces tengo que tener cuidado con el nro. que le asigno a cada una.
            nroImg = numImg[i-1]-10*Math.floor(numImg[i-1]/10.1);
            
            console.log(`Nro. original:${numImg[i - 1]} y nro recalculado: ${nroImg}`)
            //Cada carta tiene dos divs, uno para el frente y otro para el dorso. Además les agrego las imágenes con su nro.
            //Esto explica muy bien el css de las cartas: https://3dtransforms.desandro.com/card-flip.

            //Append de JQuery: https://api.jquery.com/append/.
            $("#container").append('<div class="carta" id="carta'+i+'"</div>')
            $(`#carta${i}`).append(`<div class="carta__cara carta__cara--front" id="cartaFront${i}"> <img src="/img/front.svg" alt="" class="imagen"> </div>`)
            $(`#carta${i}`).append(`<div class="carta__cara carta__cara--back" id="cartaBack${i}"><img src="/img/img${nroImg}.svg" alt="" class="imagen imgBack img${nroImg}"></div>`)
                
        }
        //Le agregué un callback para que el listener se cree después de cargar las cartas.
       cb()
    }

    function flip() {

        //Declaro variables de la función.
        let clases = [];
        let delayedFlip;
        let nroCarta = [];
        let carta;

        $('.carta').click(function () {

            /* Al clickear cualquier carta se llama a esta función anónima (JQuery le asigna el listener a todo elemento con la clase carta). 
            Primero sumo uno a la variable cantidad que está inicializada en 0 y entro al else/else-if según la cantidad de cartas clickeadas.*/

            cantidad+=1;
            if (cantidad<2) {

                /* Hago varias cosas:
                            1) Borro el timeout que me iba a dar vuelta las cartas. 
                            2) Oculto todas las cartas removiendo la clase is-flipped.
                            3) Guardo los datos de la carta que clickee.
                            4) Muestro esa carta.*/

                //Borro el timeout.
                clearTimeout(delayedFlip);

                //Oculto todas las cartas.
                $('.carta').removeClass("is-flipped")

                //Datos
                carta = $(this).attr('id');
                nroCarta[cantidad-1] = parseInt(carta.slice(5));
                clases[cantidad-1] = $(this).find(".imgBack").attr('class');

                //Muestro la carta que clickee.
                $(this).toggleClass("is-flipped");
                console.log(nroCarta)
                console.log(clases)
            }else if (cantidad==2){

                /* También guardo datos y muestro la carta que clickee.*/

                carta = $(this).attr('id');
                nroCarta[cantidad-1] = parseInt(carta.slice(5));
                clases[cantidad-1] = $(this).find(".imgBack").attr('class');
                $(this).toggleClass("is-flipped");
                console.log(nroCarta)
                console.log(clases)
                if (check(clases,nroCarta)){
                    /*Si check me da verdadero es porque las clases de las imagenes son las mismas (coinciden las imagenes) y el id de la carta es distinto (no se clickeo la misma carta dos veces) entonces encontre una coincidencia y entro al if:*/
                    /*Hago lo siguiente: 
                                    1) Borro el timeout que da vuelta las cartas.
                                    2) Apago el listener para que no cuenten como cartas clickeadas si clickeo alguna por error.
                                    3) Le bajo la opacidad a 0 (transparente) al frente y el dorso.
                                    4) Reseteo la variable cantidad para que quede nuevamente en 0.     */

                    //Borro el timeout.
                    clearTimeout(delayedFlip);

                    //Altero el css de frente y dorso de ambas cartas y apago el listener.
                    $(`#carta${nroCarta[0]}`).off()
                    $(`#carta${nroCarta[1]}`).off()
                    $(`#cartaBack${nroCarta[0]}`).css('opacity','0');
                    $(`#cartaBack${nroCarta[1]}`).css('opacity','0');
                    $(`#cartaFront${nroCarta[0]}`).css('opacity','0');
                    $(`#cartaFront${nroCarta[1]}`).css('opacity','0');

                    //Reseteo cantidad.
                    cantidad=0;
                } else {

                    /* Check me dio falso (entro al else): No encontré coincidencia:
                                1) Creo un setTimeout que da vuelta las cartas sacando la clase is-flipped.
                                2) Reseteo la variable cantidad para que quede nuevamente en 0. */
                                
                    delayedFlip = setTimeout(function(){
                        $('.carta').removeClass("is-flipped")
                    },1500)
                    
                    cantidad=0; 
                }
            }
        })
    }
    function check(val1,val2) {
        if ((val1[0]==val1[1]) && (val2[0] != val2[1])) {
            return true
        }else {
            return false
        }

    }
    

})

