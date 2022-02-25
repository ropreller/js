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
columnLeft.className = "column";
let optionCreateRoutine = '<button class="modalRutina">Crear Rutina</button>';
columnLeft.innerHTML = optionCreateRoutine;
containerDiv.appendChild(columnLeft);

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

const btnAddRoutineBlock = document.getElementById("addBlock");
let txtAddRoutineBlock = document.getElementsByClassName("blockTitle")[0];
const blockContent = document.getElementById("blockSection");
const createBlockContainer = document.getElementById("createBlockContainer");
let idBloque = 0;
let createdBlock = {};
btnAddRoutineBlock.onclick = () => {
   if (!txtAddRoutineBlock.value || txtAddRoutineBlock.value == "") {
      Swal.fire('Nombre del bloque es necesario.')
   } else {
      createBlockContainer.classList.add("exercisesContainer");
      exercisesContainer.classList.add("shown");
      btnAddRoutineBlock.setAttribute("disabled",true);
      btnAddRoutineBlock.classList.add("disabled");
      txtAddRoutineBlock.setAttribute("disabled",true);
      createdBlock = createRoutineBlock(idBloque,txtAddRoutineBlock.value);
      idBloque ++;
      // obtener elemento del bloque y asignar el creado:
      let blockTitle = document.createElement("H2");
      blockTitle.innerHTML += createdBlock.nombre;
      blockContent.appendChild(blockTitle);
     }
}

/**
 * Terminar bloque:
 * Resetea el objeto bloque, oculta campos de ejercicios y desbloquea campo bloque.
 * Como mínimo debe haber 1 ejercicio ingresado (por ende, un bloque ya creado).
 */
const btnCompleteBlock = document.getElementById("finishBlock");
let Routine = {};
btnCompleteBlock.onclick = () => {
   if(Ejercicios.length==0){
      Swal.fire('Debe haber ejercicios añadidos')
   } else {
      if(idBloque==1) {
           createBlockContainer.classList.remove("exercisesContainer");
           exercisesContainer.classList.remove("shown");
           btnAddRoutineBlock.removeAttribute("disabled")
           btnAddRoutineBlock.classList.remove("disabled");
           txtAddRoutineBlock.removeAttribute("disabled");
           txtAddRoutineBlock.value = "";
           let routineName = "Rutina ejemplo";
           Routine = createRoutine(routineName,Bloques);
           Ejercicios = [];
           createdBlock = {};
           exerciseCounter = 0;
           console.log("RUTINA", Routine);
         } else {
            createBlockContainer.classList.remove("exercisesContainer");
            exercisesContainer.classList.remove("shown");
            btnAddRoutineBlock.removeAttribute("disabled")
            btnAddRoutineBlock.classList.remove("disabled");
            txtAddRoutineBlock.removeAttribute("disabled");
            txtAddRoutineBlock.value = "";
            let routineName = "Rutina ejemplo";
            Routine = {
               nombre: routineName,
               bloques: Bloques
            };
            Ejercicios = [];
            createdBlock = {};
            exerciseCounter = 0;
            console.log("RUTINA", Routine);
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
      console.log("Ejercicios" ,Ejercicios);
      console.log("Bloque" ,createdBlock);
   }

}

/**
 * Terminar de crear una rutina
 */

const btnTerminarRutina = document.getElementById("finishCreateRoutine");
const routineTableContainer = document.getElementById("routineTableContainer"); 
const routineTable = document.getElementById("routineTable"); 
 
btnTerminarRutina.onclick = () => {
   let createdRoutines = finishRoutine(Routine);
   // Local Storage de rutina:
   localStorage.setItem("Rutinas", JSON.stringify(createdRoutines));
   if(createdRoutines) {
      Swal.fire('Rutina creada con éxito');
      console.log("createdRoutines", createdRoutines);
      console.log("length createdRoutines", createdRoutines.length);
      if(createdRoutines.length>0){
         // Mostrar rutinas en DOM:
         routineTableContainer.classList.remove("hide");
         let pElement = document.createElement("p");
         for (routine of createdRoutines) {
            let element = `Nombre Rutina: ${routine.nombre} | bloques: ${routine.bloques.length}`;
            pElement.innerHTML += element;
            routineTable.appendChild(pElement);
         }
      } else {
         // no existen rutinas
         routineTableContainer.classList.add("hide");
      }
   }

}

function checkIfCreated() {
   const previousCreatedRoutines = JSON.parse(localStorage.getItem("Rutinas"));
   console.log("PREVIOUS",previousCreatedRoutines);
   if(previousCreatedRoutines) {
      // Mostrar rutinas en DOM:
      routineTableContainer.classList.remove("hide");
      let pElement = document.createElement("p");
      for (routine of previousCreatedRoutines) {
         let element = `Nombre Rutina: ${routine.nombre} | bloques: ${routine.bloques.length}`;
         pElement.innerHTML += element;
         routineTable.appendChild(pElement);
      }
   }
}
checkIfCreated();