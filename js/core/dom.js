/**
 * CONST GLOBALES:
 * body: obtener documento completo
 * containerDiv: para obtener el contenedor principal y manipularlo
 * idBloque, excerciseContainer: contadores para crear elementos de bloque y ejercicio
 * createdBlock, Routine: Objetos de bloque y rutina. 
 */

const body = document.body;
const containerDiv = document.getElementById('container');
//containerDiv.innerHTML = modalDiv;
let idBloque = 0;
let exerciseCounter = 0;
let createdBlock = {};
let Routine = {};

const URL_API = "js/data/exercisesApi.json";

/**
 * startApp:
 * 1 - Crear elemento HTML botón "crear rutina"
 */

let columnLeft = document.createElement("div");
columnLeft.className = "column";
let optionCreateRoutine = '<button class="modalRutina">Crear Rutina</button>';
columnLeft.innerHTML = optionCreateRoutine;
containerDiv.appendChild(columnLeft);

/**
 * Color theme: Cambiar el color de la interfaz: White/Dark
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

const btnAddRoutineBlock = document.getElementById("addBlock");
const blockContent = document.getElementById("blockSection");
const createBlockContainer = document.getElementById("createBlockContainer");
let txtAddRoutineBlock = document.getElementsByClassName("blockTitle")[0];
let timeAddRoutineBlock = document.getElementsByClassName("blockTitle")[1];

btnAddRoutineBlock.onclick = () => {
   if ((!txtAddRoutineBlock.value || txtAddRoutineBlock.value == "") || (!timeAddRoutineBlock.value || timeAddRoutineBlock.value == "")) {
      Swal.fire('Nombre del bloque es necesario.')
   } else {
      createBlockContainer.classList.add("exercisesContainer");
      exercisesContainer.classList.add("shown");
      btnAddRoutineBlock.setAttribute("disabled", true);
      btnAddRoutineBlock.classList.add("disabled");
      txtAddRoutineBlock.setAttribute("disabled", true);
      createdBlock = createRoutineBlock(idBloque, txtAddRoutineBlock.value, parseInt(timeAddRoutineBlock.value));
      idBloque++;
      // obtener elemento del bloque y asignar el creado:
      let blockTitle = document.createElement("H2");
      blockTitle.innerHTML += `${createdBlock.nombre} - ${createdBlock.duracion} minutos`;
      blockContent.appendChild(blockTitle);
   }
}

/**
 * Terminar bloque:
 * Resetea el objeto bloque, oculta campos de ejercicios y desbloquea campo bloque.
 * Como mínimo debe haber 1 ejercicio ingresado (por ende, un bloque ya creado).
 */
const btnCompleteBlock = document.getElementById("finishBlock");
const RoutineResume = document.getElementById("finishCreateRoutine");
btnCompleteBlock.onclick = () => {
   if (Ejercicios.length == 0) {
      Swal.fire('Debe haber ejercicios añadidos')
   } else {
      if (idBloque == 1) {
         RoutineResume.classList.add("shown");
         createBlockContainer.classList.remove("exercisesContainer");
         exercisesContainer.classList.remove("shown");
         btnAddRoutineBlock.removeAttribute("disabled")
         btnAddRoutineBlock.classList.remove("disabled");
         txtAddRoutineBlock.removeAttribute("disabled");
         txtAddRoutineBlock.value = "";
         timeAddRoutineBlock.value = "";
         let routineName = "Rutina ejemplo";
         Routine = createRoutine(routineName, Bloques);
         Ejercicios = [];
         createdBlock = {};
         exerciseCounter = 0;
      } else {
         createBlockContainer.classList.remove("exercisesContainer");
         exercisesContainer.classList.remove("shown");
         btnAddRoutineBlock.removeAttribute("disabled")
         btnAddRoutineBlock.classList.remove("disabled");
         txtAddRoutineBlock.removeAttribute("disabled");
         txtAddRoutineBlock.value = "";
         timeAddRoutineBlock.value = "";
         let routineName = "Rutina ejemplo";
         Routine = {
            nombre: routineName,
            bloques: Bloques
         };
         Ejercicios = [];
         createdBlock = {};
         exerciseCounter = 0;
      }
   }

}


/**
 * Crear ejercicios
 * Permite crear N ejercicios que irán asociados a el bloque de rutina
 * Se podrán añadir los que se deseen. 
 * Para terminar, se debe marcar "terminar bloque"
 * Esto permitirá añadir un bloque nuevo
 */

let exerciseContainer = document.getElementById("exercisesContainer");
let btnAddExercise = document.getElementById("addExercise");
let exerciseName = document.getElementById("exerciseName");
let exerciseReps = document.getElementById("exerciseReps");
let exerciseLaps = document.getElementById("exerciseLaps");


// Fetch ejercicios: Esperar clase de promises/Fetch
liExercises = document.getElementById("liExercises");
exerciseName.onkeyup = () => {
   let key = exerciseName.value;
   fetch(URL_API)
   .then(resultado => resultado.json())
   .then(respuesta => {
      search = respuesta.exercisesList;
      let results = [];
      liExercises.innerHTML = "";
      if(key!="") {
         results = search.filter(obj => obj.name.toLowerCase().includes(key.toLowerCase())).map(obj => ({"name":obj.name}));
         for (let item of results) {
            const element = document.createElement("li");
            element.id = "comboSelectExercises";
            element.value = item.name;
            element.className = "comboSelectExercises";
            element.innerHTML = `${item.name}`;
            liExercises.appendChild(element);
          }
          results = []; 
      } else {
         liExercises.innerHTML = "";
      }
  
   }).catch(error => console.log(error));
   
}

exerciseName.onchange = () => {
   liExercises.innerHTML = "";
}


 

btnAddExercise.onclick = () => {
   if (exerciseName.value == "" || exerciseReps.value == "" || exerciseLaps.value == "") {
      Swal.fire('Debes completar todos los campos del ejercicio');
   } else {
      createdExercise = createExercise(exerciseName.value, exerciseReps.value, exerciseLaps.value);
      createdBlock.ejercicios = createdExercise;
      let exerciseTitle = document.createElement("H4");
      exerciseTitle.innerHTML += `#${exerciseCounter} ${createdExercise[exerciseCounter].nombre} | x ${createdExercise[exerciseCounter].repeticiones} reps | x ${createdExercise[exerciseCounter].vueltas} vueltas`;
      blockContent.appendChild(exerciseTitle);

      // clear inputs:
      exerciseName.value = "";
      exerciseReps.value = "";
      exerciseLaps.value = "";
      exerciseCounter++;
   }

}

/**
 * Terminar de crear una rutina
 */

const routineTableContainer = document.getElementById("routineTableContainer");
const routineTable = document.getElementById("routineTable");

RoutineResume.onclick = () => {
   let createdRoutines = finishRoutine(Routine);
   // Local Storage de rutina:
   localStorage.setItem("Rutinas", JSON.stringify(createdRoutines));
   if (createdRoutines) {
      Swal.fire('Rutina creada con éxito');
      if (createdRoutines.length > 0) {
         // Mostrar rutinas en DOM:
         showRoutines(createdRoutines);
         // limpiar inputs de rutina y resetear creador
         RoutineResume.classList.remove("shown");
         createBlockContainer.classList.remove("exercisesContainer");
         exercisesContainer.classList.remove("shown");
         btnAddRoutineBlock.removeAttribute("disabled")
         btnAddRoutineBlock.classList.remove("disabled");
         txtAddRoutineBlock.removeAttribute("disabled");
         txtAddRoutineBlock.value = "";
         blockContent.innerHTML = "";
         idBloque = 0;
         Bloques = [];
         Ejercicios = [];
         exerciseName.value = "";
         exerciseReps.value = "";
         exerciseLaps.value = "";
         exerciseCounter = 0;
      } else {
         // no existen rutinas
         routineTableContainer.classList.add("hide");
      }
   }

}

// Obtener rutinas creadas desde local storage

function checkIfCreated() {
   const previousCreatedRoutines = JSON.parse(localStorage.getItem("Rutinas"));
   if (previousCreatedRoutines) {
      // Mostrar rutinas en DOM:
      showRoutines(previousCreatedRoutines);
   }
}

// Función que imprime las rutinas en dom.

function showRoutines(routines) {
   routineTableContainer.classList.remove("hide");
   let pElement = document.createElement("tbody");
   for (routine of routines) {
      let element = `<td>${routine.nombre} </td><td>${routine.bloques.length}</td><td>Tiempo</td><td><button id="showRoutine" class="showRoutine"><i class="bi bi-eye"></i></button></td><td><button id="deleteRoutine" class="deleteRoutine"><i class="bi bi-trash3"></i></button></td> </tr>`;
      pElement.innerHTML = element;
      routineTable.appendChild(pElement);
   }
}

// Preguntar si existe rutinas en la memoria de local storage.
checkIfCreated();

// Ver rutina: con sweet alert

const btnShowRoutine = document.getElementById("showRoutine");

btnShowRoutine.onclick = () => {
   Swal.fire({
      title: '<strong>HTML <u>Falta insertar tabla de rutina</u></strong>',
      icon: 'info',
      html:
         'You can use <b>bold text</b>, ' +
         '<a href="//sweetalert2.github.io">links</a> ' +
         'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
         '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
         '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
   });
}


const btnDeleteRoutine = document.getElementById("deleteRoutine");

btnDeleteRoutine.onclick = () => {
   Swal.fire({
      title: 'Borrar rutina',
      text: "Esto borrará la rutina de local storage",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrada',
          'La rutina ya no está en local storage.',
          'success'
        )
      }
    })
}

