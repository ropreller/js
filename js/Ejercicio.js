class Ejericio {

    constructor(item) {
        this.nombre = item.nombre;
        this.tipo = item.tipo;
        this.repeticiones = item.repeticiones;
        this.vueltas = item.vueltas;
        this.variacion = item.variacion;
    }

}

// Globales:
const Calentamiento = [];
const Principal = [];
const Final = [];
const Clase = [];
let seccion = 0;
let paso = 0;
let continua = 0;
let itemEjercicio = {
    nombre: "",
    tipo: "",
    repeticiones: "",
    vueltas: "",
    variacion: ""
}


function anadirSeccion(seccion) {
   
    let nombreSeccion = (seccion===0) ? "Calentamiento"
    :(seccion===1) ? "Principal"
    :(seccion===2) ? "Final"
    : "No aplica"; 

    nombreItem = prompt(`${nombreSeccion}: ¿Nombre del ejercicio?`);
    while (nombreItem == '' || !nombreItem) {
        nombreItem = prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`);
    }
    tipoItem = prompt(`${nombreSeccion}: ¿Tipo del ejercicio?`);
    while (tipoItem == '' || !tipoItem) {
        tipoItem = prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`);
    }
    repsItem = parseInt(prompt(`${nombreSeccion}: ¿repeticiones del ejercicio?`));
    while ((repsItem == '' || !repsItem || isNaN(repsItem))) {
        repsItem = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
    }
    vueltasItem = parseInt(prompt(`${nombreSeccion}: ¿Vueltas del ejercicio?`));
    while ((vueltasItem == '' || !vueltasItem || isNaN(vueltasItem))) {
        vueltasItem = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
    }
    variacionItem = prompt(`${nombreSeccion}: Variación del ejercicio?`);
    while ((variacionItem == '' || !variacionItem)) {
        variacionItem = prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`);
    }

    itemEjercicio = {
        nombre: nombreItem,
        tipo: tipoItem,
        repeticiones: repsItem,
        vueltas: vueltasItem,
        variacion: variacionItem
    }

    let insertarEjercicio = new Ejericio(itemEjercicio);

    switch (seccion) {
        case 0:
            Calentamiento.push(insertarEjercicio);
            break;
        case 1:
            Principal.push(insertarEjercicio);
            break;
        case 2:
            Final.push(insertarEjercicio);
            break;
        default:
            console.log("Finaliza ingresos");
            break;
    }

    continuar();

}

function continuar() {
    continua = parseInt(prompt(`¿Agregar otro ejercicio? \r\n \r\n 1 -SI \r\n \r\n 2 - NO`));
    while ((continua == '' || !continua || isNaN(continua)) || continua > 2) {
        continua = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto: \r\n \r\n 1 -SI \r\n \r\n 2 - NO`));
    }
    if (continua === 1) {
        anadirSeccion(seccion);
    } else if (continua === 2) {  
        console.log("seccion ",seccion);
        seccion++;
        console.log("seccion ",seccion);
        if (seccion === 1 || seccion === 2) {
            anadirSeccion(seccion);
        } else {
            generarClase();
        }
    } else {
        // No debería caer en esta condición.
        console.log("Ocurre un error en la lógica. Revisar.")
    }
    continua = 0;
}

function generarClase(){
    Clase.push(Calentamiento);
    Clase.push(Principal);
    Clase.push(Final);
    mostrarClase();
}

function mostrarClase(){
    console.log("Clase, ", Clase);
}


anadirSeccion(seccion);