const productos = [
    {id:1, nombre:"Xbox Series X", marca:"Microsoft", imagen:"seriesx.jpg", precio:"499"},
    {id:2, nombre:"Xbox Series S", marca:"Microsoft", imagen:"seriess.jpg", precio:"299"},
    {id:3, nombre:"Play Statios 5", marca:"Sony", imagen:"ps5.png", precio:"499"},
    {id:4, nombre:"Nintendo Switch", marca:"Nintendo", imagen:"nintendos.jpg", precio:"299"},
    {id:5, nombre:"Control Xbox", marca:"Microsoft", imagen:"controls.jpg", precio:"299"},
    {id:6, nombre:"Control PS5", marca:"Sony", imagen:"ps5control.jpg", precio:"299"},
    {id:7, nombre:"Joycon", marca:"Nintendo", imagen:"joycon.png", precio:"299"},
    {id:8, nombre:"Control Nintendo Switch Pro", marca:"Nintendo", imagen:"switchpro.jpg", precio:"299"}
];

function obtproductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}
function guardarproductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}
function obtenerprocarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
function guardarprocarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function render(){
    let productos = obtproductosLS();
    let contenido;

    for (let producto of productos){
        contenido += `<div class="col-md-4 py-2">
        <div class="card d-flex align-items-center text-center">
        <img src="./assets/img/${producto.imagen}" width="300" alt="${producto.nombre}">
        <div class="card-body">
        <h5 class="card-title header_color">${producto.nombre}</h5>
        <p class="card-text">Marca: ${producto.marca}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text"><a href="#" class="btn btn-success" onclick="agregarCarrito(${producto.id})">Agregar</a></p>
        </div>
        </div>
        </div>`;
    }
    document.getElementById("productos").innerHTML = contenido;
}

function actualizarcarrito(){
    let productos = obtenerprocarrito();
    let contenido = `<button type="button" class="btn btn-success position-relative">
    <img src="./assets/img/carrito.svg" width="30">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0</span></button>`;
    let total = 0;

    if (productos.length > 0){
        for (let producto of productos){
            total += producto.cantidad;
        }

        contenido = `<button type="button" class="btn btn-success position-relative">
    <img src="./assets/img/carrito.svg" width="30">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${total}</span></button>`;
    }

    document.getElementById("carrito_nav").innerHTML = contenido;
}

function buscarProducto (id){
    let productos = obtproductosLS();
    return productos.find(x => x.id == id);
}

function agregarCarrito(id){
    let producto = buscarProducto(id);
    let productos_carrito = obtenerprocarrito();
    producto.cantidad = 1;
    productos_carrito.push(producto);
    guardarprocarrito(productos_carrito);
    actualizarcarrito();
    
}
function vaciarCarrito(){
    localStorage.removeItem("carrito");
    actualizarcarrito();
    renderCarrito();
}

guardarproductosLS(productos);
actualizarcarrito();
render();