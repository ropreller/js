/**
 * Clases: Se crearán clases que permitan crear rutinas de ejercicios.
 * Se dividen del elemento más básico al más complejo que compone la rutina.
 */


class Ejericio {
    constructor(item) {
        this.nombre = item.nombre;
        this.repeticiones = item.repeticiones;
        this.vueltas = item.vueltas;
    }
}

class Bloque {
    constructor(item) {
        this.id = item.id;
        this.nombre = item.nombre;
        this.ejercicios = item.ejercicios;
        this.duracion = item.duracion;
    }
}

class Rutina {
    constructor(item) {
        this.nombre = item.nombre;
        this.bloques = item.bloques;
    }
}
// Globales: Permiten almacenar los ejercicios y bloques creados, además de añadirlos a la rutina.
let Ejercicios = [];
let Bloques = [];
let Rutinas = [];

let itemEjercicio = {
    nombre: "",
    repeticiones: 0,
    vueltas: 0,
}

let itemBloque = {
    nombre: "",
    ejercicios: [],
    duracion: 0
}

let itemRutina = {
    nombre: "",
    bloques: [],
}
let generarRutina = {

}

function addEjercicios() {

    Rutinas = [];
    nombreItem = prompt(`¿Nombre del ejercicio?`);
    while (nombreItem == '' || !nombreItem) {
        nombreItem = prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`);
    }

    repsItem = parseInt(prompt(`¿repeticiones del ejercicio?`));
    while ((repsItem == '' || !repsItem || isNaN(repsItem))) {
        repsItem = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
    }

    vueltasItem = parseInt(prompt(`¿Vueltas del ejercicio?`));
    while ((vueltasItem == '' || !vueltasItem || isNaN(vueltasItem))) {
        vueltasItem = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
    }

    itemEjercicio = {
        nombre: nombreItem,
        repeticiones: repsItem,
        vueltas: vueltasItem,
    }

    let insertarEjercicio = new Ejericio(itemEjercicio);

    Ejercicios.push(insertarEjercicio);

    continuar();
}

function continuar() {
    continua = parseInt(prompt(`¿Agregar otro ejercicio? \r\n \r\n 1 -SI \r\n \r\n 2 - NO \r\n \r\n 3 - TERMINAR RUTINA`));
    while ((continua == '' || !continua || isNaN(continua)) || continua > 3) {
        continua = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto: \r\n \r\n 1 -SI \r\n \r\n 2 - NO`));
    }
    if (continua === 1) {
        addEjercicios();
    } else if (continua === 2) {
        let nombreBloque = prompt("Nombre del bloque? Calentamiento, principal, etc.");
        while (nombreBloque == '' || !nombreBloque) {
            nombreBloque = prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`);
        }
        let tiempo = prompt("¿Duración del módulo? (minutos)");
        while ((tiempo == '' || !tiempo || isNaN(tiempo))) {
            tiempo = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`));
        }

        itemBloque = {
            nombre: nombreBloque,
            ejercicios: Ejercicios,
            duracion: tiempo
        }
        let insertarBloque = new Bloque(itemBloque);
        Bloques.push(insertarBloque);
        continua_bloque = parseInt(prompt(`¿Crear otro bloque? \r\n \r\n 1 -SI \r\n \r\n 2 - NO(Terminar rutina)`));
        while ((continua_bloque == '' || !continua_bloque || isNaN(continua_bloque)) || continua_bloque > 3) {
            continua = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto: \r\n \r\n 1 -SI \r\n \r\n 2 - NO`));
        }
        if (continua_bloque == 1) {
            Ejercicios = [];
            addEjercicios();
        } else {
            // Generar clase
            generarClase();
        }
    } else if (continua === 3) {
        generarClase();
    } else {
        // No debería caer en esta condición.
        console.log("Ocurre un error en la lógica. Revisar.")
    }
}


function generarClase() {
    let nombreRutina = prompt("Nombre de la rutina?");
    while (nombreRutina == '' || !nombreRutina) {
        nombreRutina = prompt(`PRECAUCIÓN, debes ingresar un valor correcto:`);
    }
    itemRutina = {
        nombre: nombreRutina,
        bloques: Bloques,
    }
    RutinaLista = new Rutina(itemRutina);
    console.log(RutinaLista);
    mostrarClase();
}

function createRoutineBlock(id,blockName){
    itemBloque = {
        id: id,
        nombre: blockName,
        ejercicios: [],
        duracion: 0
    }
    let insertarBloque = new Bloque(itemBloque);
    return insertarBloque;
}

function createExercise(exerciseName,exerciseReps,exerciseLaps){
    itemEjercicio = {
        nombre: exerciseName,
        repeticiones: exerciseReps,
        vueltas: exerciseLaps,
    }
    let insertarEjercicio = new Ejericio(itemEjercicio);
    Ejercicios.push(insertarEjercicio);
    return Ejercicios;
}

/*
function sumarTiempoTotal() {
    totalClase = Duracion.reduce(
       (acumulador, elemento) => acumulador + elemento,0);
}
*/


function mostrarClase() {

    const bloquesEjercicio = document.getElementById("elemRutina");
    let contenedor = document.createElement("div");
    let tituloRutina = document.createElement("H2");
    tituloRutina.innerHTML = RutinaLista.nombre;
    contenedor.appendChild(tituloRutina);

    for (let item of RutinaLista.bloques) {
        let nombreBloque = document.createElement("H3");
        nombreBloque.innerHTML = `${item.nombre}`;
        contenedor.appendChild(nombreBloque);
        for (let subitem of item.ejercicios) {
            let nombreEjercicio = document.createElement("H3");
            nombreEjercicio.innerHTML = `${subitem.nombre} : ${subitem.repeticiones} reps  | ${subitem.vueltas}`;
            contenedor.appendChild(nombreEjercicio);
        }
    }
    bloquesEjercicio.appendChild(contenedor);
}



