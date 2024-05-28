const productos = {
    "Camisa": 120000,
    "Gorra": 60000,
    "Chaqueta": 240000
};


let carrito = {};
let total = 0;


function mostrarProductos() {
    const contenedorProductos = document.getElementById("productos");
    contenedorProductos.innerHTML = ""; 

    for (const [producto, precio] of Object.entries(productos)) {
        const elementoProducto = document.createElement("div");
        elementoProducto.innerHTML = `
            <h3>${producto}</h3>
            <p>Precio: ${precio.toLocaleString('es-CO')} COP</p>
            <button onclick="agregarProducto('${producto}')">Agregar</button>
        `;
        contenedorProductos.appendChild(elementoProducto);
    }
}


function agregarProducto(producto) {
    const cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto} desea?`));
    if (!isNaN(cantidad) && cantidad > 0) {
        if (!carrito[producto]) {
            carrito[producto] = 0;
        }
        carrito[producto] += cantidad;

        const precio = productos[producto];
        const subtotal = precio * cantidad;
        total += subtotal;

        actualizarCarrito();
    } else {
        alert("Cantidad no válida. Ingrese un número mayor a 0.");
    }
}


function actualizarCarrito() {
    const totalProducto = document.getElementById("total-producto");
    const totalCantidad = document.getElementById("total-cantidad");
    const totalSubtotal = document.getElementById("total-subtotal");

    totalProducto.textContent = Object.keys(carrito).join(", ");
    totalCantidad.textContent = Object.values(carrito).join(", ");
    totalSubtotal.textContent = total.toLocaleString('es-CO') + " COP";
}


mostrarProductos();