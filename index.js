// **Actividad 1: Ecommerce**


const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "img/tarjeta-grafica.png",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "img/monitor.png",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "img/ssd-samsung.png",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "img/procesador-intel.png",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "img/mouse-logitech.png",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "img/memoria-ram.png",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "img/disco-duro-externo.png",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null ,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "img/auriculares-razer.png",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

const contenedor = document.querySelector("#productos-container")

const cards = productos =>{
    const data = productos.reduce(( acc, element ) => {
    return acc + `
    <div class ="tarjetas">
    <img src=${element.imagen || "img/imagen-no.png"} alt=${element.producto}>
    <h2>
        ${element.producto} ${element.marca} Precio:$ ${element.precio}
    </h2>
    <button class="mi-boton" id="button-${element.id}">Agregar al carrito</button>
    </div>`
},"")

contenedor.innerHTML = data
}
 
cards(productos)

const allCards = document.querySelectorAll(".mi-boton")

let productosDelCarrito = []

const eventoCards = ( nodos, array ) => {

     for ( let i = 0; i < nodos.length; i++ ) {

         nodos[i].onclick = (e) => {                               
            const id = e.currentTarget.id.slice(7)
            const buscarProducto = array.find( element => element.id === Number(id))
            productosDelCarrito.push(buscarProducto)
            localStorage.setItem("productos", JSON.stringify(productosDelCarrito))
            console.log(productosDelCarrito)
            
        }
    }
}
eventoCards(allCards, productos)