
//Cambio de Boton
window.onload = function () {
  const buttons = document.querySelectorAll(".buttonOrder");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (btn.innerHTML === "Ordenar") {
        btn.innerHTML = "Cancelar";
      }});
  });
};




//Carrito de compras
const addToShoppingCardButtons = document.querySelectorAll(".buttonOrder");
addToShoppingCardButtons.forEach(addToCardButton => {
  addToCardButton.addEventListener("click", addToCardClicked);
})

const shoppingCardItemsContainer =document.querySelector(".menuGlobal");

//Agregar productos al carrito
function addToCardClicked (event) {
  const button =event.target;
  const item = button.closest(".productoGlobal");
  
  
  const itemName = item.querySelector(".nombreProducto").textContent;
  const itemPrice = item.querySelector(".precioProducto").textContent;

  addItemToShoppingCard(itemName,itemPrice);
}

function addItemToShoppingCard (itemName,itemPrice) {
  alert(`Has ordenado un ${itemName} por ${itemPrice}`);

  searchFinalPrice ()
}

//Obtener Precio final -- No llegue con el tiempo :(
function searchFinalPrice () {
  let total = 0;
}
