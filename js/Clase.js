/**
* 06.02.2022, Rodrigo Oportus.
* Entrega clase 6: Arrays.
* Se añade concepto de añadir tipos de ejercicios a la clase mediante arrays y objetos.
 */


/**
 * Clase "Clase"
 */

class Clase {

    constructor(item) {
        this.dia = item.dia;
        this.horario = item.horario;
        this.cantidadAlumnos = item.cantidadAlumnos;
        this.tipoClase = item.tipoClase;
    }

    mostrarClase() {
        console.log(`la clase tiene ${this.cantidadAlumnos} alumnos`);
    }

}


/**
 * Funciones para inicializar
 */

/*
Globales:
*/
let iniciar;
let diaSeleccionado;
    let dia1 = "Lunes";
    let dia2 = "Martes"; 
let horario;
    let horario1 = "10.00 Hrs.";
    let horario2 = "13.00 Hrs.";
let cantidadAlumnos;
let tipoClase;
    let tipo1 = "Funcional";
    let tipo2 = "Crossfit";


function iniciarSimulador() {
    iniciar = "";
    iniciar = prompt("¿Deseas crear una clase? \r\n \r\n Escribe 'SI' o 'NO'");
    while (iniciar == "" || !iniciar) {
        iniciar = prompt("Elige una alternativa correcta \r\n \r\n Escribe 'SI' o 'NO'");
    }
    if (iniciar.toUpperCase()=='NO'){
        alert("No crearás una clase.");
    } else if(iniciar.toUpperCase()=='SI'){
        // Crear clase:
        crearClase();
    } else {
        alert("Ingresa un valor correcto");
        iniciarSimulador();
    }
}

function crearClase() {

    diaSeleccionado = parseInt(prompt(`¿Qué día se realizará la clase? \r\n \r\n Marca el número asociado: \r\n \r\n 1 - ${dia1} \r\n \r\n 2 - ${dia2} `));
    while((diaSeleccionado=='' || !diaSeleccionado || isNaN(diaSeleccionado)) || diaSeleccionado>2) {
        diaSeleccionado = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:\r\n \r\n 1 - ${dia1} \r\n \r\n 2 - ${dia2}`));
    }
    horario = parseInt(prompt(`¿Qué horario? \r\n \r\n Marca el número asociado: \r\n \r\n 1 - ${horario1} \r\n \r\n 2 - ${horario2}`));
    while((horario=='' || !horario || isNaN(horario)) || horario>2) {
        horario = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto:\r\n \r\n 1 - ${horario1} \r\n \r\n 2 - ${horario2}`));
    }
    cantidadAlumnos = parseInt(prompt(`¿Cantidad de alumnos? \r\n \r\n Máximo 10:`));
    while((cantidadAlumnos=='' || !cantidadAlumnos || isNaN(cantidadAlumnos)) || cantidadAlumnos>10) {
        cantidadAlumnos = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto: \r\n \r\n Máximo 10:`));
    }
    tipoClase = parseInt(prompt(`Tipo de clase? \r\n \r\n 1 - ${tipo1} \r\n \r\n 2 - ${tipo2}`));
    while((tipoClase=='' || !tipoClase || isNaN(tipoClase)) || tipoClase>2) {
        tipoClase = parseInt(prompt(`PRECAUCIÓN, debes ingresar un valor correcto: \r\n \r\n 1 - ${tipo1} \r\n \r\n 2 - ${tipo2}`));
    }

    ingresarClase();

}


function ingresarClase(){

    const datosClase = {
        dia: diaSeleccionado,
        horario : horario,
        cantidadAlumnos: cantidadAlumnos,
        tipoClase: tipoClase
    }

    const claseIngresada = new Clase(datosClase);

    if (claseIngresada) {
        let generarInvitacion = parseInt(prompt(`Clase ingresada con éxito. ¿Deseas generar las invitaciones para los ${cantidadAlumnos} alumnos? \r\n \r\n 1 - SI \r\n \r\n 2 - NO  \r\n \r\n 2 - Resetear el generador`));
        while (generarInvitacion == "" || !generarInvitacion || isNaN(generarInvitacion) || generarInvitacion>3) {
            generarInvitacion = prompt("Elige una alternativa correcta \r\n \r\n 1 - SI \r\n \r\n 2 - NO  \r\n \r\n 3 - Resetear el generador.");
        }
        if (generarInvitacion==1){
            alert("enviar invitaciones");
            enviarInvitaciones();
        } else if(generarInvitacion==2){
            alert("No enviarás las invitaciones.");
        } else {
            alert("RESET");
            iniciarSimulador();
        } 
    }
    
}

function enviarInvitaciones (){

        let diaClase = (diaSeleccionado==1) ? dia1 : dia2;
        let horarioClase = (horario==1) ? horario1 : horario2;
        let tipo = (tipoClase==1) ? tipo1 : tipo2;

        for(let i = 1 ; i<=cantidadAlumnos; i++) {
            console.log(`Invitación ${i} \r\n \r\n Día clase: ${diaClase} \r\n \r\n Horario: ${horarioClase} \r\n \r\n Tipo clase: ${tipo}`)
        }
}
