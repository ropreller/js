/*
Rodrigo Oportus
Sistema tickets JS
*/

/**
 * constantes y variables para utilizar
 */

// Obtener año actual:
const d = new Date();
const YEAR = d.getFullYear();

// Shows y tickets disponibles:
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
let show = "";
let tickets = "";
const showGorillaz = `#1 | Gorillaz - Humanz tour reloaded: ${a} disponibles.`;
const showDavidBowie = `#2 | David Bowie - Came back from the other side: ${b} disponibles`;
const showSpinetta = `#3 |Spinetta: Post Crucifixión: ${c} disponibles`;

/**
 * Comienzo del programa:
 */

let user = prompt('Bienvenido al generador de tickets! Indique por favor su usuario de caja');
// Validador nombre:
while(user=='' || !user) {
    user = prompt('Precaución: Debe ingresar su usuario:');
}

let pass = prompt('Ingresa tu password');
// Validador password:
while(pass=='' || !pass) {
    pass = prompt('Precaución: Debe ingresar su password:');
}

let pass_check = prompt('Confirma tu password');
// Validador check password:
while((pass_check=='' || !pass_check) || (pass!=pass_check)) {
    pass_check = prompt('Precaución: Password debe coincidir con la primera ingresada:');
}

let showEscogido = parseInt(prompt(`Bienvenido, ${user}, Por favor escoge el número show para el cual necesites imprimir ticket(s): \r\n \r\n ${showGorillaz} \r\n \r\n ${showDavidBowie} \r\n \r\n ${showSpinetta} `));
// Validador show escogido:
while((showEscogido=='' || !showEscogido || isNaN(showEscogido)) || (showEscogido<1 || showEscogido>3)) {
    showEscogido = parseInt(prompt(`PRECAUCIÓN, Por favor escoge el número show para el cual necesites imprimir ticket(s): \r\n \r\n ${showGorillaz} \r\n \r\n ${showDavidBowie} \r\n \r\n ${showSpinetta} `));
}


if (showEscogido==1){
    alert(`Show escogido: ${showGorillaz}`);
    show = showGorillaz;
    tickets = a;
} else if (showEscogido==2){
    alert(`Show escogido: ${showDavidBowie}`);
    show = showDavidBowie;
    tickets = b;
} else if (showEscogido==3){
    alert(`Show escogido: ${showSpinetta}`);
    show = showSpinetta;
    tickets = c;
} else {
    // Caso que no debiese ser ejecutado:
    alert("No existe show indicado. Por favor avisar al encargado.");
}

let tickets_asignados = parseInt(prompt(`Existen ${tickets} tickets disponibles. ¿Cuántos deseas asignar?:`));


while((tickets_asignados=='' || !tickets_asignados || isNaN(tickets_asignados)) || tickets_asignados>tickets) {
    tickets_asignados = parseInt(prompt(`PRECAUCIÓN, para ${show} existen ${tickets} tickets.`));
}

alert(`Se generarán ${tickets_asignados} tickets para el show.`);

for (let i = 1 ; i < tickets_asignados ; i++) {
    alert(`Usuario creador: ${user} | año: ${YEAR} - Entrada #${i}`);
}