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
      confirmButtonText: `<a href="../html/pasarelaPago.html"><span>Finalizar</span></a>`,
      showCancelButton: true,
      showCancelButton: "Volver ",

      customClass: {
        container: "alertCarrito",
        title: "alertCarritoTitulo",
        html: "alertCarritoHtml",
        confirmButton: "alertCarritoButton",
        showCancelButton: "alertCarritoButtonCancel"
      }
      })
    while(carrito.length > 0) {
      carrito.pop();
      $(this).innerHTML("Ordenar");
    }
  });
});


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

//Formulario de pago
$(document).ready(function () {
  $("input#nombrePago")
  .keypress(function () {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });


  $("input#tarjetaPago")
  .keypress(function (event) {
    if (event.which < 48 || event.which > 57 || this.value.length === 16) {
      return false;
    }
  });

  $("input#dniPago")
  .keypress(function (event) {
    if (event.which < 48 || event.which > 57 || this.value.length === 8) {
      return false;
    }
  });

  $("input#codigotarjetaPago")
  .keypress(function (event) {
    if (event.which < 48 || event.which > 57 || this.value.length === 3) {
      return false;
    }
  });

  $("#finalizarPagoCarrito").click( function () {
    if ($('#input#nombrePago').text() == "" || $('#input#tarjetaPago').text() == "" || $('#input#dniPago').text() == "" || $('#input#codigotarjetaPago').text() == "") {
      Swal.fire({
        icon: "error",
        title: "Completa los Datos",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
        });
    } else {
      Swal.fire({
        icon: "success",
        title: "Pago Exitoso",
        timer: 2000,
        timerProgressBar: true,
        confirmButton: false
        });
    }

  });
});