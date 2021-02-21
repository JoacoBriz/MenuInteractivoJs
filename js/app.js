// Cambio de Boton con jQuery
$(document).ready( function () {
  $(".buttonOrder").click(function (event) {
    if (this.innerHTML === "Ordenar") {
      agregarAlCarritoClick(event);
      this.innerHTML = "Cancelar";
    } else {
      this.innerHTML = "Ordenar";
      quitarProductoDelCarritoClick(event) ;
    }
  })

  $(".buttonFinal").click( function () {
    let carritoNames = []
    carrito.forEach(el => carritoNames.push(el.nombre))
    alert(`Tu orden es:\r ${carritoNames.join(", ")}\r Precio total: $${precioFinal()}  `);
  })
})


//Carrito de compras
let carrito = [ ];


//Agregar productos al carrito (funciona)

function agregarAlCarritoClick (event) {
  const button =event.target;
  const item = button.closest(".productoGlobal");
  
  const productoNombre = item.querySelector(".nombreProducto").textContent;
  const productoPrecio = item.querySelector(".precioProducto").textContent; // Este esta devolviendo en texto
  
  agregarProductoAlCarrito(productoNombre,productoPrecio);
}

function agregarProductoAlCarrito (productoNombre, productoPrecio) {
  const confirmation = confirm(`Has ordenado un ${productoNombre} por ${productoPrecio}`);

  if (confirmation) {
    productoPrecio = parseInt(productoPrecio.slice(1))
    carrito.push({nombre: productoNombre, precio: productoPrecio});
    precioFinal();
  }
}





// Quitar productos al carrito (Funciona)

function quitarProductoDelCarritoClick (event) {
  const button =event.target;
  const item = button.closest(".productoGlobal");
  
  const nombreProducto = item.querySelector(".nombreProducto").textContent;

  quitarDelCarrito(nombreProducto);
}

function quitarDelCarrito (nombreProducto) {
  confirm(`¿Vas a quitar el ${nombreProducto} de tu orden?`);
}



//Mostrar Precio final
function precioFinal () {
  let total = 0 
  carrito.forEach(el => total += el.precio);
  return total
}
