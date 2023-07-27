// // Busca elemento por su id
// document.getElementById('')

// // Busca el primer elemento que encuentra
// document.querySelector('h1')

// // Darnos array con los elementos que buscamos
// document.querySelectorAll

// // Busca elementos por su clase
// document.getElementsByClassName


// let $div = document.querySelector('#caja');

// $div.innerHTML = '<p>Vengo de JS</p>';


// fetch --> es una herramienta de js que nos permite hacer peticiones https 

let respuesta = fetch('https://rickandmortyapi.com/api/location');

//cuando este lista la respuesta, entonces hace lo siguiente
respuesta
.then(function (data) {
    return data.json();
})
.then((data)=> {
    let ubicaciones = data.results;
    // console.log(ubicaciones)
    let $div = document.getElementById('caja');

    for(let i=0; i<ubicaciones.length; i++){
        $div.innerHTML += `<div >
                <h2>Nombre: ${ubicaciones[i].name}</h2>
                <p class="hola">Tipo: ${ubicaciones[i].type}</p>
                <p>Dimension: ${ubicaciones[i].dimension}</p>
                </div>` 
    }
})
.catch((error) => {
    console.log(error)
})


