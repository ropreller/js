class Ejericio {

    constructor(item) {
        this.nombre = item.nombre;
        this.repeticiones = item.repeticiones;
        this.vueltas = item.vueltas;
    }

}

// Globales:
const Calentamiento = [];
const Principal = [];
const Final = [];
const Clase = [];
const Duracion = [];
let seccion = 0;
let totalClase = 0;
let paso = 0;
let continua = 0;
let itemEjercicio = {
    nombre: "",
    repeticiones: "",
    vueltas: "",
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
    repsItem = parseInt(prompt(`${nombreSeccion}: ¿repeticiones del ejercicio?`));
    while ((repsItem == '' || !repsItem || isNaN(repsItem))) {
        repsItem = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
    }
    vueltasItem = parseInt(prompt(`${nombreSeccion}: ¿Vueltas del ejercicio?`));
    while ((vueltasItem == '' || !vueltasItem || isNaN(vueltasItem))) {
        vueltasItem = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
    }

    itemEjercicio = {
        nombre: nombreItem,
        repeticiones: repsItem,
        vueltas: vueltasItem,
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
        let tiempo = prompt("¿Duración del módulo? (minutos)");
        while ((tiempo == '' || !tiempo || isNaN(tiempo))) {
            tiempo = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
        }
        anadirTiempo(seccion,tiempo);
        seccion++;
        
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

function anadirTiempo (seccion,tiempo){
    (seccion==0||seccion==1||seccion==2) ? Duracion.push(parseInt(tiempo))
      : '';
}

function generarClase(){
    Clase.push(Calentamiento);
    Clase.push(Principal);
    Clase.push(Final);
    sumarTiempoTotal();
    mostrarClase();
}

function sumarTiempoTotal() {
    totalClase = Duracion.reduce(
       (acumulador, elemento) => acumulador + elemento,0);
}



function mostrarClase(){
    console.log("Clase, ", Clase);
    console.log("Tiempo Cada ejercicio" , Duracion);
    console.log("Tiempo total" , totalClase);
}


anadirSeccion(seccion);