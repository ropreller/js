/**
 * Sidebar: 
 * Interactividad del sidebar
 */

const sidebar = document.getElementById("sidebar");

const btnSidebar = document.querySelector(".sideBarBtn");

btnSidebar.onclick = () => {
    (sidebar.className === "sidebar") ? btnSidebar.innerHTML = "&#x2039;"
    :  btnSidebar.innerHTML = "&#x203A;";
    sidebar.classList.toggle('shown');  
    btnSidebar.classList.toggle('shown');  
}


