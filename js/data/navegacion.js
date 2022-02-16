const d = new Date();
const YEAR = d.getFullYear();

const itemsNav = [
    {
        id:0,
        nombre: "Index del sitio",
        tag: "Home",
        url: "index.html"
    },
    {
        id:1,
        nombre: "Sección rutinas",
        tag: "Rutinas",
        url: "index.html"
    },
    {
        id:2,
        nombre: "Sección 3",
        tag: "Sección 3",
        url: "index.html"
    },
    {
        id:3,
        nombre: "Sección 4",
        tag: "Otra sección",
        url: "index.html"
    },
    {
        id:4,
        tag: "ropreller",
    },
];

const listado = document.getElementById("ulSidebar");
for (const item of itemsNav) {
    let liNav = document.createElement("li");
    liNav.className = "navItem";
    liNav.id = item.id;
    liNav.innerHTML = (item.id ==4) ? `<span id="navBottom">${item.tag} - ${YEAR}</span>` : `<a href="${item.url}">${item.tag}</a>`;
    listado.appendChild(liNav);
}