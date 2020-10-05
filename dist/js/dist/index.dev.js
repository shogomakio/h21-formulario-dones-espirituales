"use strict";

cargarPreguntas();
var formPreguntas = document.getElementById("formPreguntas");
formPreguntas.addEventListener('submit', function (e) {
  e.preventDefault();
  var valor1 = 0,
      valor2 = 0,
      valor3 = 0;

  for (var i = 1; i <= preguntas.length; i++) {
    respuesta = formPreguntas.elements["pregunta" + i]; // SUMAR POR SEPARADO CADA VALOR

    switch (respuesta.value) {
      case tiposDones.Don1:
        valor1++;
        break;

      case tiposDones.Don2:
        valor2++;
        break;
    }
  }

  var puntajePreguntas = preguntas.length; // MOSTRAR SWEET ALERT CON BOTÓN

  console.log("don1: " + valor1 / puntajePreguntas * 100);
  console.log("don2: " + valor2 / puntajePreguntas * 100); // VER CÓMO PODER GUARDAR O COMPARTIR TU DON
});
var infoIcon = document.getElementById("infoIcon");
infoIcon.addEventListener('click', function () {
  // CAMBIAR MENSAJE
  Swal.fire({
    title: 'Información',
    text: 'Este formulario tiene la intención de ..., seleccionando una opción de cada pregunta y cuando finalice darle al botón ...',
    icon: 'info',
    confirmButtonText: 'Gracias',
    content: 'openSansText'
  });
});