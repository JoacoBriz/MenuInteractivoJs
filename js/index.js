//Cambio de Boton con jQuery
$(document).ready( function () {
  $(".buttonOrder").click(function () {
    if (this.innerHTML === "Ordenar") {
      this.innerHTML = "Cancelar";
    } else {
      this.innerHTML = "Ordenar";
    }
  })
})



//Carrito de compras
const agregarAlCarritoBotones = document.querySelectorAll(".buttonOrder");
agregarAlCarritoBotones.forEach(agregarAlCarritoBoton => {
  if (agregarAlCarritoBoton.innerHTML === "Ordenar") {
    agregarAlCarritoBoton.addEventListener("click", agregarAlCarritoClick);
    console.log("Entre a ordenar");
  } else if (agregarAlCarritoBoton.innerHTML === "Cancelar") {
    agregarAlCarritoBoton.addEventListener("click", quitarProductoDelCarritoClick);
    console.log("Entre a cancelar");
  }
})

//Agregar productos al carrito (funciona)

function agregarAlCarritoClick (event) {
  const button =event.target;
  const item = button.closest(".productoGlobal");
  
  const productoNombre = item.querySelector(".nombreProducto").textContent;
  const productoPrecio = item.querySelector(".precioProducto").textContent;

  agregarProductoAlCarrito(productoNombre,productoPrecio);
}

function agregarProductoAlCarrito (productoNombre,productoPrecio) {
  confirm(`Has ordenado un ${productoNombre} por ${productoPrecio}`);
  // mostrarPrecioEnConsola();
}






// Quitar productos al carrito (No me funciona aún)

function quitarProductoDelCarritoClick (event) {
  const button =event.target;
  const item = button.closest(".productoGlobal");
  
  const nombreProducto = item.querySelector(".nombreProducto").textContent;

  quitarDelCarrito(nombreProducto);
}

function quitarDelCarrito (nombreProducto) {
  confirm(`Vas a quitar el ${nombreProducto} de tu orden`);
}






//Obtener Precio final (no funciona aún)
// function mostrarPrecioEnConsola () {
//   let total = 0;
//   const productosDelCarrito = document.querySelectorAll(".productoGlobal");

//   productosDelCarrito.forEach(productoDelCarrito => {
//     const precioProductoDelCarrito = productoDelCarrito.querySelector(".precioProducto").textContent;
//     console.log(precioProductoDelCarrito);
//   })
// }
