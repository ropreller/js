/**
 * Create html templates from Dom.js
 */

const modalDiv = `<div id="modal" class="modal">
<div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="routineTitle" class="centerText"></h2>
    <div class="contentContainer">
        <div id="createBlockContainer">
            <h4>Nombre Bloque</h4>
            <input type="text" class="blockTitle">
            <h4>Tiempo</h4>
            <input type="number" class="blockTitle">
            <button id="addBlock" class="btnAdd">Crear bloque</button>
        </div>

        <div class="exercisesContainer">
            <div>
                <h4 class="inputTitle">Nombre Ejercicio</h4>
                <input type="text" name="exerciseName" id="exerciseName"
                    placeholder="Buscar ejercicio..." class="search" value="" autocomplete="on">
            </div>
            <div>
                <h4 class="inputTitle">Número Repeticiones</h4>
                <input type="number" name="exerciseReps" id="exerciseReps"
                    placeholder="Ingresar repeticiones">
            </div>
            <div>
                <h4 class="inputTitle">Número Vueltas</h4>
                <input type="number" name="exerciseLaps" id="exerciseLaps"
                    placeholder="Ingresar vueltas">
            </div>
            <button id="addExercise" class="btnAdd exercise">Agregar</button>
            <button id="finishBlock" class="btnAdd block">Terminar bloque</button>
        </div>
    </div>

    <div class="contentContainer">
        <div>
            <div id="blockSection">
                <h4 class="inputTitle centerText">Resúmen</h4>
            </div>
            <button id="finishCreateRoutine" class="btnAdd finishCreateRoutine">Terminar rutina</button>
        </div>
    </div>
</div>
</div>
`;