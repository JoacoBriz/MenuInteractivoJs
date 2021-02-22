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
    Swal.fire({
      icon: "success",
      title: `Tu orden es:`,
      html: `${carritoNames.join("<br/>")} <br/> <br/> Precio total: $${precioFinal()}`,
      confirmButtonText: "Volver",



      customClass: {
        container: "alertCarrito",
        title: "alertCarritoTitulo",
        html: "alertCarritoHtml",
        confirmButton: "alertCarritoButton"
      }
    });


    while(carrito.length > 0) {
      carrito.pop();
    }
  })
})


//Carrito de compras
let carrito = [ ];
const buttonOrdenar = document.querySelectorAll(".buttonOrder");


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
    title:`Has quitado el`,
    html: `${productoNombre} de tu orden`,
    confirmButtonText: "Volver",
    customClass: {
      container: "alertQuitarCarrito",
      title:"alertQuitarCarritoTitle",
      html: "alertQuitarCarritoTexto",
      confirmButton: "alertQuitarCarritoButton"
    }
  })
  if (confirmation) {
    carrito = carrito.filter(el => el.nombre != nombreProducto);
  }
}


//Mostrar Precio final
function precioFinal () {
  let total = 0 
  carrito.forEach(el => total += el.precio);
  return total
}



//Session storage 

window.sessionStorage.setItem("items", JSON.stringify(carrito));
var storedArray = JSON.parse(sessionStorage.getItem("items"));//no brackets
var i;
for (i = 0; i < storedArray.length; i++) {
  alert(storedArray[i]);
}