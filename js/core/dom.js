/**
 * CONST GLOBALES:
 */

const body =  document.body;

/**
 * Color theme
 * TODO: Manejar esta constante desde session storage.
 */

const themeBtn = document.querySelector(".themeBtn"); 
(themeBtn.className === "themeBtn floatR") ? themeBtn.innerHTML = "Dark"
:  themeBtn.innerHTML = "White";

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
    :  btnSidebar.innerHTML = "&#x203A;";
    sidebar.classList.toggle('shown');  
    cc.classList.toggle('shown');
    btnSidebar.classList.toggle('shown');  
}

/**
 * Botones rutinas
 */

const btnRutina = document.querySelector(".crearRutina");

btnRutina.onclick = () => {
   addEjercicios();
}

