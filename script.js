// Función para mostrar/ocultar las imágenes secundarias
function mostrarImagenes(elemento) {
    const imagenesSecundarias = elemento.nextElementSibling;
    if (imagenesSecundarias.style.display === "flex") {
        imagenesSecundarias.style.display = "none";
    } else {
        imagenesSecundarias.style.display = "flex";
    }
}

// Carrito vacío inicialmente
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log("Producto añadido al carrito:", producto);
    actualizarVistaCarrito();
}

// Función para actualizar la vista del carrito
function actualizarVistaCarrito() {
    const carritoDiv = document.getElementById('contenidoCarrito');
    carritoDiv.innerHTML = ""; // Limpiar el contenido anterior

    carrito.forEach(function(producto) {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoDiv.appendChild(productoDiv);
    });
}

// Configuración de los botones para agregar productos al carrito
document.getElementById('agregarProducto1').addEventListener('click', function() {
    agregarAlCarrito({ id: 1, nombre: "Camiseta Dumb Dreams", precio: 20 });
});

document.getElementById('agregarProducto2').addEventListener('click', function() {
    agregarAlCarrito({ id: 2, nombre: "Camiseta Dumb Dreams", precio: 20 });
});

document.getElementById('agregarProducto3').addEventListener('click', function() {
    agregarAlCarrito({ id: 3, nombre: "Camiseta Dumb Dreams", precio: 20 });
});

// Función de checkout (aquí se asume que tienes Formspree configurado)
document.getElementById('checkout').addEventListener('click', function() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }

    const productosSeleccionados = carrito.map(producto => `${producto.nombre} - $${producto.precio}`).join('\n');

    // Llenar el campo del formulario con los productos seleccionados
    document.getElementById('productos').value = productosSeleccionados;
});
