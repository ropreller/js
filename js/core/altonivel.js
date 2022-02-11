const sumarRango = (numI, numF) => {
    let total = 0
    for (let i = numI; i <= numF; i++) {
        total += i
    }
    return total;
    }
    
    console.log( sumarRango(1, 10) ) //  55
    
    const funcionOrdenSuperior = () => {
      // Serie de instrucciones
      sumarRango(2, 20);
    
    }
    
    
    // FUNCIONES ORDEN SUPERIOR
    
    function mayorQue(n) {
      return (m) => m > n; // true o false
    }
    
    let mayorQueDiez = mayorQue(10);
    let mayorQueVeinte = mayorQue(20);
    
    console.log( mayorQueDiez(12) );  //  true
    console.log( mayorQueDiez(8) );  //  false
    
    console.log(mayorQueVeinte(12)); // false
    console.log(mayorQueVeinte(10)); // false
    console.log(mayorQueVeinte(30)); // true
    
    
    function asignarOperacion(op) {
      if (op == "sumar") {
          return (a, b) => a + b
      } else if (op == "restar") {
          return (a, b) => a - b
      }
    
    }
    
    let suma = asignarOperacion("sumar")
    let resta = asignarOperacion("restar")
    
    console.log( suma(4, 6) )  //  10
    console.log( resta(5, 3) )  //  2
    
    
    // RECIBIR FUNCIÓN COMO PARAMETRO
    // const numeros= [1, 2, 3, 4];
    // let total = 0;
    
    // function porCadaUno(arr, fn) {
    //   for (const el of arr) {
    //       fn(el)
    //   }
    // }
    
    // function acumular(num) {
    //   total += num
    // }
    
    // porCadaUno(numeros, console.log);
    
    // porCadaUno(numeros, acumular);
    
    
    // porCadaUno(numeros, (el) => {
    //   console.log(el * 2);
    // })
    
    // console.log("El total es " + total);
    
    
    // numeros.forEach(num => {
    
    // })
    
    
    // MÉTODOS DE BÚSQUEDA y TRANSFORMACIÓN
    
    const generosMusicales = ["Jazz", "Rock", "Pop", "Blues"];
    const otrosGeneros = ["Reggaeton", "Merengue", "Salsa"];
    const canciones = [
      { nombre: "Welcome to the Jungle", genero: "Rock", artista: "Guns N' Roses" },
      { nombre: "Highway to Hell", genero: "Rock", artista: "AC/DC" },
      { nombre: "We will rock you", genero: "PopRock", artista: "Queen" },
      { nombre: "I'm still standing", genero: "Pop", artista: "Elton John" }
    ];
    
    let listaReproduccion = [];
    
    
    // FIND
    console.log(canciones.find(cancion => cancion.nombre === 'We will rock you').nombre);
    
    
    // FILTER
    console.log(canciones.filter(c => c.genero === 'Pop'));
    
    
    // SOME -- Devuelve true o false si existe el elemento
    console.log(canciones.some(cancion => cancion.genero === 'Reggae'));
    
    // MAP
    const cursos = [
      {nombre: 'Javascript', precio: 15000},
      {nombre: 'ReactJS', precio: 22000},
      {nombre: 'AngularJS', precio: 22000},
      {nombre: 'Desarrollo Web', precio: 16000},
    ]
    
    class Curso {
      constructor(curso) {
        this.nombre = curso.nombre;
        this.precio = curso.precio;
      }
    
      iniciarCurso() {
        // Aca pasa algo
      }
    }
    
    const nombres = cursos.map(curso => {
      return new Curso(curso);
    })
    console.log(nombres)
    
    //REDUCE
    
    const numeros = [1, 2, 3, 4, 5, 6]
    const total = numeros.reduce(
      // acumulador = el total
      // elemento = cada uno de los elementos del array
      (acumulador, elemento) => acumulador + elemento, // FUNCIÓN A EJECUTAR POR CADA ELEMENTO; 
      0 // VALOR INICIAL = acumulador
    )
    console.log(total) // 21
    
    
    const totalCursos = cursos.reduce(
      (acum, elemento) => acum + (elemento.precio * 1.19),
      1000
    )
    console.log(totalCursos);
    
    
    // SORT
    // const numeros = [ 40, 1, 5, 200 ];
    // numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
    // numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]
    
    const pokemon = [
      { name: 'Charmander', price: 37 },
      { name: 'Pikachu', price: 21 },
      { name: 'Squirtle', price: 60 },
      { name: 'Pidgey', price: 45 },
    ]
    
    // const copiaPokemon = pokemon; // shallow copy - Copia superficial
    let copiaPokemon = Object.assign([], pokemon); // deep copy - Copia profunda
    
    // let ordenarPor = prompt("Ordenar por");
    
    // copiaPokemon = copiaPokemon.sort((a, b) => {
    //   if (a[ordenarPor] > b[ordenarPor]) {
    //       return 1;
    //   }
    //   if (a[ordenarPor] < b[ordenarPor]) {
    //       return -1;
    //   }
    //   // a es igual a b
    //   return 0;
    // }).filter(objeto => objeto.price < 40);
    
    console.log(copiaPokemon);
    console.log(pokemon);
    
    
    const productos = [
      { id: 1, nombre: 'Apple Audífonos Airpods Pro', categoria: 'celulares', precio: 1000 },
      { id: 2, nombre: 'Iphone Smartphone 8 - 64Gb Plata', categoria: 'celulares', precio: 2000 },
      { id: 3, nombre: 'Samsung Barra de Sonido - T450', categoria: 'sonido', precio: 500 },
      { id: 4, nombre: 'HiSense Televisor Led 43 Pulgadas Uhd Smart', categoria: 'televisores', precio: 1500 },
      { id: 5, nombre: 'Televisor Samsung 65" 4K UHD Smart TV 2021 Crystal UN65AU7000KXZL', categoria: 'televisores', precio: 3000 },
      { id: 6, nombre: 'Motorola Celular 4G Moto One Fusion 128 GB Verde', categoria: 'celulares', precio: 700 },
      { id: 7, nombre: 'iPhone 12 Pro Pacific Blue 256GbLae', categoria: 'celulares', precio: 6000 },
      { id: 8, nombre: 'Apple Watch S6 44 SG AL Black SP Gps Bes', categoria: 'relojes', precio: 2300 }
    ];
    
    const productosAMostrar = productos
    .filter(item => item.categoria === 'celulares')
    .sort((a, b) => {
      if (a.precio > b.precio) {
        return 1;
      }
      if (a.precio < b.precio) {
          return -1;
      }
      // a must be equal to b
      return 0;
    });
    
    console.log(productosAMostrar);
    
    
    
    
    
    // OBJETOS NATIVOS DE JS
    
    // MATH
    console.log( Math.E ) // 2.718281828459045
    console.log( Math.PI ) // 3.141592653589793
    
    const precios = [200, 100, 300, 400];
    
    // MAX 
    console.log( Math.max(55, 13, 0, -25, 93, 4)) // 93
    
    // MIN
    console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25
    
    
    // const pi = Math.PI // 3.141592653589793
    
    // // CEIL: devuelve el entero mayor o igual más próximo
    // console.log( Math.ceil(pi) ) // 4
    
    // // FLOOR: devuelve el entero más cercano redondeado hacia abajo
    // console.log( Math.floor(pi) ) // 3
    
    // // ROUND: retorna el valor de un número redondeado al entero más cercano
    // console.log( Math.round(pi) ) // 3
    
    Math.sqrt(9) // 3
    
    // RANDOM
    Math.random(); // número al azar entre 0 y 1
    console.log(Math.round(Math.random() * 10));
    
    const opciones = ["Piedra", "Papel", "Tijera"];
    
    const index = Math.round(Math.random() * 2);
    
    console.log(opciones[index]);
    
    const currentYear = new Date().getFullYear();
    
    
    console.log( new Date() );
    
    //año, mes(de 0 a 11), día, hora(0 a 23), minutos, segundos 
    const casiNavidad = new Date(2021, 11, 25, 23, 59, 59);
    console.log(casiNavidad);
    
    const casiNavidad2 = new Date("December 25, 2021 23:59:59");
    console.log(casiNavidad2);
    
    // TODOS ESTOS CASOS FUNCIONAN
    const ejemploFecha1 = new Date("Jan 01 2021");
    const ejemploFecha2 = new Date("01 Jan 2021");
    const ejemploFecha3 = new Date("January 01 2021");
    const ejemploFecha4 = new Date("JAN 01, 2021");
    
    const ejemploFecha5 = new Date("2022-02-03"); //YYYY-MM-DD -- Transforma desde UTC
    console.log(ejemploFecha5);
    
    
    const ejemploFecha6 = new Date("02/24/2022"); // MM/DD/YYYY
    console.log(ejemploFecha6);
    
    // const hoy = new Date("December 17, 2021")
    
    // console.log(hoy.getFullYear()) // 2021
    // console.log(hoy.getMonth()) // 11  (diciembre)
    // console.log(hoy.getDay()) // 5  (viernes)
    
    // console.log( hoy.toDateString() ) // Fri Dec 17 2021
    // console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
    // console.log( hoy.toLocaleDateString() ) // 17/12/2021
    // console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)
    
    const milisegundosPorDia = 86400000;
    
    const navidad = new Date("December 25, 2021")
    const hoy = new Date("December 17, 2021")
    
    console.log( navidad - hoy ) // 691200000
    
    
    console.log( (navidad - hoy ) / milisegundosPorDia) // 8
    
    
    navidad.setDate(navidad.getDate() + 2); // Diciembre 27, 2021
    navidad.setMonth(navidad.getMonth() + 2); // Febrero 27, 2021
    
    console.log(navidad);