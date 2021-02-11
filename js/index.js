$( document ).ready(function () {
  $(".buttonOrder").click(function() {
    $(".buttonOrder").hide();
    alert("Has ordenado un Producto!");
    $(".buttonCancel").show();
  })
  $(".buttonCancel").click(function() {
    $(".buttonCancel").hide();
    alert("Has cancelado la orden");
    $(".buttonOrder").show();
  })
})