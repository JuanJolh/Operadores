function renderCarrito(){
    let productos = obtenerprocarrito();
    let total = 0;
    let contenido = `<p class="alert alert-danger text-center role="alert">El Carrito esta vacio</p>`;

    if (productos.length > 0){
        contenido = `<a href="#" class="btn btn-success" onclick="vaciarCarrito()">Vaciar Carrito <i class="fa-solid fa-trash"></i></a>
        <table class="table">
        <tbody>`;

        for (let producto of productos){
            const {precio} = producto;
            contenido += `<tr>
            <td><img src="./assets/img/${producto.imagen}" width="80" alt="${producto.nombre}"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle"><b>$${producto.precio}</b></td>
            </tr>`;
            total = parseInt(total)+parseInt(precio);
        }
    
        contenido += `</tbody></table>
        <h2 class="text-center">El Total a Pagar es $${total}</h2>`
    }

    document.getElementById("productos_carrito").innerHTML = contenido;
}

renderCarrito();