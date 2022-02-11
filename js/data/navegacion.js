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
        url: "rutinas.html"
    },
    {
        id:0,
        nombre: "Sección 3",
        tag: "Sección 3",
        url: "index.html"
    },
    {
        id:1,
        nombre: "Sección 4",
        tag: "Sección 4",
        url: "rutinas.html"
    },
    {
        id:0,
        nombre: "Sección 5",
        tag: "Sección 5",
        url: "index.html"
    },
    {
        id:1,
        nombre: "Sección 6",
        tag: "Sección 6",
        url: "rutinas.html"
    },
];

const listado = document.getElementById("ulSidebar");
for (const item of itemsNav) {
    let liNav = document.createElement("li");
    liNav.className = "navItem";
    liNav.id = item.id;
    liNav.innerHTML = `<a href="${item.url}">${item.tag}</a>`;
    listado.appendChild(liNav);
}