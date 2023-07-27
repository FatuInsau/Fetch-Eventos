let $boton = document.getElementById('boton');

function clickBoton () {
    console.log('Me hicieron click');
};

// agrega un evento a un elemento
$boton.addEventListener('click',clickBoton)
//                    tipo de evento, funcion 

// quitar un evento al elemento
$boton.removeEventListener('click',clickBoton)

// agrega clases al elemento
$boton.classList.add('verde')

//quita clases al elemento
$boton.classList.remove('rojo','amarillo')

//preguntar si tiene esa clase
$boton.classList.contains('verde')  --> booleano

// se fija si ya tiene esa clase: 
//                             - si la tiene, se la saca
//                             - si no la tiene, le agrega
$boton.classList.toggle('rojo')

//reemplaza una clase por otra
$boton.classList.replace('rojo','verde')