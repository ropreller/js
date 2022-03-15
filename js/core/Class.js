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

function createRoutineBlock(id,blockName,minutes){
    itemBloque = {
        id: id,
        nombre: blockName,
        ejercicios: [],
        duracion: minutes
    }
    let insertarBloque = new Bloque(itemBloque);
    Bloques.push(insertarBloque)
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

function createRoutine(name,block){
    itemRutina = {
        nombre: name,
        bloques: block,
    }
    let insertedRoutine = new Rutina(itemRutina);
    return insertedRoutine;
}


function finishRoutine(createdRoutine){
    Rutinas.push(createdRoutine);
    return Rutinas;
}


/*
function sumarTiempoTotal() {
    totalClase = Duracion.reduce(
       (acumulador, elemento) => acumulador + elemento,0);
}
*/




