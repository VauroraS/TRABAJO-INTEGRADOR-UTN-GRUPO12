var imgItems = $(".slider li").length;
var imgPos = 1;

$(".slider li").hide();
$(".slider li:first").show();

$(".right span").click(nextSlider);
$(".left span").click(prevSlider);

//-----------------------FUNCIONES

function nextSlider() {
  if (imgPos >= imgItems) {
    imgPos = 1;
  } else {
    imgPos++;
  }
  $(".slider li").hide();
  $(".slider li:nth-child(" + imgPos + ")").fadeIn();
}

function prevSlider() {
  if (imgPos <= 1) {
    imgPos = imgItems;
  } else {
    imgPos--;
  }

  $(".slider li").hide();
  $(".slider li:nth-child(" + imgPos + ")").fadeIn();
}

//form

$("#myform").submit(function (event) {
  event.preventDefault();

  // Serializa los datos del formulario
  const formData = $(this).serialize();

  // Envía una solicitud AJAX al servidor
  $.ajax({
    url: $(this).attr("action"),
    type: $(this).attr("method"),
    data: formData,
    dataType: "json",
    success: function () {
      // Restablece el formulario y muestra un mensaje de éxito
      $("#myform")[0].reset();
      alert("Gracias por escribirnos, te responderemos a la brevedad");
    },
    error: function (xhr, textStatus, errorThrown) {
      // Imprime un mensaje de error más informativo en la consola
      console.error(
        "Hubo un error al enviar los datos: " + textStatus + ", " + errorThrown
      );
    },
  });
});

//COTIZACION

function calcularPrecio() {
  // Obtener los valores seleccionados por el usuario
  var tipoMueble = document.getElementById("tipoMueble").value;
  var medidaMueble = document.getElementById("medidaMueble").value;
  var tipoMadera = document.getElementById("tipoMadera").value;
  // Calcular el precio según los valores seleccionados
  var precio;
  if (tipoMadera == "pino") {
    switch (tipoMueble) {
      case "cama":
        switch (medidaMueble) {
          case "individual":
            precio = "USD 100";
            break;
          case "doble":
            precio = "USD 200";
            break;
          case "queen":
            precio = "USD 300";
            break;
          case "king":
            precio = "USD 500";
            break;
        }
        break;
      case "sofa":
        switch (medidaMueble) {
          case "individual":
            precio = "USD 150";
            break;
          case "dosPlazas":
            precio = "USD 300";
            break;
          case "tresPlazas":
            precio = "USD 500";
            break;
        }
        break;
      case "mesa":
        switch (medidaMueble) {
          case "cuatroPersonas":
            precio = "USD 100";
            break;
          case "seisPersonas":
            precio = "USD 300";
            break;
          case "ochoPersonas":
            precio = "USD 500";
            break;
        }
        break;
      case "armario":
        switch (medidaMueble) {
          case "individual":
            precio = "USD 150";
            break;
          case "doble":
            precio = "USD 300";
            break;
          case "triple":
            precio = "USD 500";
            break;
        }
        break;
    }
  } else if (tipoMadera == "roble") {
    switch (tipoMueble) {
      case "cama":
        switch (medidaMueble) {
          case "individual":
            precio = "USD 300";
            break;
          case "doble":
            precio = "USD 600";
            break;
          case "queen":
            precio = "USD 800";
            break;
          case "king":
            precio = "USD 1,200";
            break;
        }
        break;
      case "sofa":
        switch (medidaMueble) {
          case "individual":
            precio = "USD 500";
            break;
          case "dosPlazas":
            precio = "USD 1,000";
            break;
          case "tresPlazas":
            precio = "USD 1,500";
            break;
        }
        break;
      case "mesa":
        switch (medidaMueble) {
          case "cuatroPersonas":
            precio = "USD 400";
            break;
          case "seisPersonas":
            precio = "USD 800";
            break;
          case "ochoPersonas":
            precio = "USD 1,200";
            break;
        }
        break;
      case "armario":
        switch (medidaMueble) {
          case "individual":
            precio = "USD 500";
            break;
          case "doble":
            precio = "USD 1,000";
            break;
          case "triple":
            precio = "USD 1,500";
            break;
        }
    }
  }

  // Mostrar el precio en la página
  document.getElementById("precio").innerHTML = "El precio es: " + precio;
}
