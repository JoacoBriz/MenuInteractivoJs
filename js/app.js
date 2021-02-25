// Cambio de Boton con jQuery
$(document).ready( function () {


    //Cambio de boton
  $(".buttonOrder").click(function (event) {
    if (this.innerHTML === "Ordenar") {
      agregarAlCarritoClick(event);
      this.innerHTML = "Cancelar";
    } else {
      this.innerHTML = "Ordenar";
      quitarProductoDelCarritoClick(event) ;
    }
  })

  //Boton Carrito
  $(".carrito-button").click( function () {
    let carritoNames = []
    carrito.forEach(el => carritoNames.push(el.nombre))

    Swal.fire({
      icon: "success",
      title: `Tu orden es:`,
      html: `${carritoNames.join("<br/>")} <br/> Precio total: $${precioFinal()}`,
      confirmButtonText: "Finalizar",
      showCancelButton: true,
      showCancelButton: "Volver",

      customClass: {
        container: "alertCarrito",
        title: "alertCarritoTitulo",
        html: "alertCarritoHtml",
        confirmButton: "alertCarritoButton",
        showCancelButton: "alertCarritoButtonCancel"
      }
    });

    //Cantidad del boton carrito
    
  })
})


//Carrito de compras
let carrito = [ ];
console.log(carrito.length);

//Agregar productos al carrito (funciona)

function agregarAlCarritoClick (event) {
  const button =event.target;
  const item = button.closest(".productoGlobal");
  
  const productoNombre = item.querySelector(".nombreProducto").textContent;
  const productoPrecio = item.querySelector(".precioProducto").textContent; // Este esta devolviendo en texto
  
  agregarProductoAlCarrito(productoNombre,productoPrecio);
}

function agregarProductoAlCarrito (productoNombre, productoPrecio) {
  const confirmation = Swal.fire({
    icon: "success",
    title:`Has ordenado un`,
    html: `${productoNombre} por ${productoPrecio}`,
    confirmButtonText: "Genial",

    customClass: {
      container: "alertAgregarCarrito",
      title:"alertAgregarCarritoTitle",
      html: "alertAgregarCarritoTexto",
      confirmButton: "alertAgregarCarritoButton"
    }
  });

  if (confirmation) {
    productoPrecio = parseInt(productoPrecio.slice(1))
    carrito.push({nombre: productoNombre, precio: productoPrecio});
    precioFinal();
    console.log(carrito.length);
    var cantidadSumar = carrito.length;
    const mostrarCantidad = document.querySelector(".carrito-cantidad-numero").innerHTML = cantidadSumar;
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
  const confirmation = Swal.fire({
    icon: "success",
    title: "Has quitado el",
    html: `${nombreProducto} de tu orden`,
    confirmButtonText: "Que pena",

    customClass: {
      container: "alertQuitarCarrito",
      title:"alertQuitarCarritoTitle",
      html: "alertQuitarCarritoTexto",
      confirmButton: "alertQuitarCarritoButton"
    }
  });
  if (confirmation) {
    carrito = carrito.filter(el => el.nombre != nombreProducto);
    var cantidadRestar = carrito.length;
    const mostrarCantidad = document.querySelector(".carrito-cantidad-numero").innerHTML = cantidadRestar;

  }
}

//Mostrar Precio final
function precioFinal () {
  let total = 0; 
  carrito.forEach(el => total += el.precio);
  return total;
}

//Cambiar cantidad de productos