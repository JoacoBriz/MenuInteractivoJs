//Bienvenida 

var nombre = prompt("Bienvenido! Cómo te llamas?");
function saludo() {
  var mensajeSaludo = `Un gusto tenerte aqui ${nombre}, hora de elegir que comer!`;
  alert(mensajeSaludo);
}
saludo()

//Inicialización//
let buttonOrdenarList = document.getElementsByClassName("buttonOrden");
// let buttonCancelarList = document.getElementsByClassName("buttonCancel");

showProducts(productosGlobal);


//Ordenar Comida
for (let showProducts = 1; showProducts < buttonOrdenarList.length; index++) {
  const element = buttonOrdenarList[showProducts];
  element.addEventListener("click", ordenarPlato)
}

function ordenarPlato(agregarPlato) {
  var buttonOrdenar = agregarPlato.target;
  buttonOrdenar.style.visivility = "hidden";
  alert(`Agregaste un plato a tu orden`);
}


// //Cancelar comida
// for (let index = 0; index < buttonCancelarList.length; index++) {
//   const element = buttonCancelarList[index];
//   element.addEventListener("click", cancelarPlato)
// }

// function cancelarPlato(quitarPlato) {
//   var buttonCancelar = quitarPlato.target;
//   buttonCancelar.style.visivility = "hidden";
//   alert("Eliminaste un plato de tu orden");
// }














































// //Productos
// var carrito = []; 
// var cantidad = 0;

// function Productos(id, nombre, precio) {
//   this.id = id;
//   this.nombre = nombre;
//   this.precio = precio;
// }

// var product1 = new Productos (0, "American Coffe", "$3,5");
// var product2 = new Productos (1, "Ham and Cheese Toast", "$4");
// var product3 = new Productos (2, "Mocha Frappuccino", "$4,5");
// var product4 = new Productos (3, "Espresso Brownie", "$2,5");

// function agregarCarrito(id) {
//   if (cantidad < 10) {
//     carrito.push(Productos[id]);
//     cantidad = carrito.length;
//     alert(`Llevas ${cantidad} en tu orden`);
//   } else {
//     alert("Llegaste al limite de pedidos");
//   }
// }

