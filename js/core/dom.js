/**
 * CONST GLOBALES:
 */

const body = document.body;
const containerDiv = document.getElementById('container');
/**
 * startApp: Generar las dos opciones:
 * 1 - Crear rutina
 * 2 - Mostrar tabla con rutinas creadas
 */

let columnLeft = document.createElement("div");
let columnRight = document.createElement("div");
columnLeft.className = "column";
columnRight.className = "column";
let optionCreateRoutine = '<button class="modalRutina">Crear Rutina</button>';
let optionWatchRoutines = '<button class="modalRutina">Ver Rutinas</button>';
columnLeft.innerHTML = optionCreateRoutine;
columnRight.innerHTML = optionWatchRoutines;
containerDiv.appendChild(columnLeft);
containerDiv.appendChild(columnRight);

/**
 * Color theme
 * TODO: Manejar esta constante desde session storage.
 */

const themeBtn = document.querySelector(".themeBtn");
(themeBtn.className === "themeBtn floatR") ? themeBtn.innerHTML = "Dark"
   : themeBtn.innerHTML = "White";

themeBtn.onclick = () => {
   if (themeBtn.className === "themeBtn floatR") {
      themeBtn.innerHTML = "White";
      themeBtn.classList.toggle('dark');
      body.classList.toggle('dark');
   } else {
      themeBtn.innerHTML = "Dark";
      themeBtn.classList.toggle('dark');
      body.classList.toggle('dark');
   }
}

/**
 * Sidebar: 
 * Interactividad del sidebar
 */

const sidebar = document.getElementById("sidebar");
const btnSidebar = document.querySelector(".sideBarBtn");
const cc = document.getElementById("navBottom");
btnSidebar.onclick = () => {
   (sidebar.className === "sidebar") ? btnSidebar.innerHTML = "&#x2039;"
      : btnSidebar.innerHTML = "&#x203A;";
   sidebar.classList.toggle('shown');
   containerDiv.classList.toggle('containerCompress');
   cc.classList.toggle('shown');
   btnSidebar.classList.toggle('shown');
}

/**
 * Botón crear rutina
 * Modal para inicar proceso de crear una rutina
 */

const btnRutina = document.querySelector(".modalRutina");
const modal = document.getElementById("modal");
const modalContent = document.getElementsByClassName("modal-content")[0];
const exercisesContainer = document.getElementsByClassName("exercisesContainer")[0];
const span = document.getElementsByClassName("close")[0];

btnRutina.onclick = () => {
   modal.style.display = "block";
   asignarNombrePrincipal();
}

span.onclick = () => {
   modal.style.display = "none";
}

function asignarNombrePrincipal() {
   let tituloRutina = document.getElementById("routineTitle");
   tituloRutina.innerHTML = "";
   tituloRutina.innerHTML += "Crear Rutina";

}

/**
 * Crear bloque de rutina
 * Permite instanciar objeto de bloque de rutina, partiendo por asignar su nombre (Ejemplo: Calentamiento)
 * Da paso a crear los ejercicios "n" que compondrán ese bloque.
 * createdBlock: Objeto del tipo bloque
 */

let btnAddRoutineBlock = document.getElementById("addBlock");
let txtAddRoutineBlock = document.getElementsByClassName("blockTitle")[0];
const blockContent = document.getElementById("blockSection");
let id = 0;
let createdBlock = {};
btnAddRoutineBlock.onclick = () => {
   if (!txtAddRoutineBlock.value || txtAddRoutineBlock.value == "") {
      Swal.fire('Nombre del bloque es necesario.')
   } else {
      exercisesContainer.classList.add("shown");
      btnAddRoutineBlock.setAttribute("disabled",true);
      btnAddRoutineBlock.classList.add("disabled");
      txtAddRoutineBlock.setAttribute("disabled",true);
      createdBlock = createRoutineBlock(id,txtAddRoutineBlock.value);
      id ++;
      // obtener elemento del bloque y asignar el creado:
      let blockTitle = document.createElement("H2");
      blockTitle.innerHTML += createdBlock.nombre;
      blockContent.appendChild(blockTitle);
     }
}

/**
 * Crear ejercicios
 * Permite crear N ejercicios que irán asociados a el bloque de rutina
 * Se podrán añadir los que se deseen. 
 * Para terminar, se debe marcar "terminar bloque"
 * Esto permitirá añadir un bloque nuevo
 */

let exerciseContainer  = document.getElementById("exercisesContainer");
let btnAddExercise = document.getElementById("addExercise");
let exerciseName = document.getElementById("exerciseName");
let exerciseReps = document.getElementById("exerciseReps");
let exerciseLaps = document.getElementById("exerciseLaps");
let exerciseCounter = 0;
btnAddExercise.onclick = () => {
   if(exerciseName.value=="" ||exerciseReps.value=="" || exerciseLaps.value=="") {
      Swal.fire('Debes completar todos los campos del ejercicio');
   } else {
      createdExercise = createExercise(exerciseName.value,exerciseReps.value,exerciseLaps.value);
      createdBlock.ejercicios = createdExercise;
      let exerciseTitle = document.createElement("H4");
      exerciseTitle.innerHTML += `#${exerciseCounter} ${createdExercise[exerciseCounter].nombre} | x ${createdExercise[exerciseCounter].repeticiones} reps | x ${createdExercise[exerciseCounter].vueltas} vueltas`;
      blockContent.appendChild(exerciseTitle);

      // clear inputs:
      exerciseName.value="";
      exerciseReps.value="";
      exerciseLaps.value="";
      exerciseCounter ++;
   }

}

