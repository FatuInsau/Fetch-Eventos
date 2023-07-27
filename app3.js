// voy a necesitar llamar al boton
// voy a necesitar el body

let $boton = document.getElementById('boton');
let $body = document.querySelector('body');

function cambio () {
    if( $body.style.backgroundColor === 'green'){
        $body.style.backgroundColor = 'red';
        $boton.style.backgroundColor = 'green'
    } else {
        $body.style.backgroundColor = 'green';
        $boton.style.backgroundColor = 'red'
    }
};

$boton.addEventListener('click',cambio)

// function filtro () {
//     if (personajes[i].genero == hombre){
//         hombres.push[personaje[i]]
//     }
// }