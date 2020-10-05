"use strict";

var tiposDones = {
  Don1: 'don1',
  Don2: 'don2'
};
var preguntasHtml = document.getElementById("preguntas");

function cargarPreguntas() {
  var questionsHtml = '';
  var cont = 0;

  for (var i = 1; i <= preguntas.length; i++) {
    var optionsHtml = '';
    var pregunta = preguntas[cont];

    for (var j = 0; j < pregunta.options.length; j++) {
      var option = pregunta.options[j];
      optionsHtml += "<input type=\"radio\" name=\"pregunta".concat(i, "\" value=\"").concat(option.val, "\" id=\"pregunta").concat(i, "-").concat(j, "\" required data-tipo=\"").concat(pregunta.type, "\"><label for=\"pregunta").concat(i, "-").concat(j, "\">").concat(option.desc, "</label>");
    }

    var pregunta = preguntas[cont];
    var questionHtml = "<div class=\"pregunta\"><label for=\"pregunta".concat(i, "\">").concat(pregunta.desc, "</label><div class=\"opciones\">").concat(optionsHtml, "</div></div>");
    questionsHtml += questionHtml;
    cont++;
  }

  preguntasHtml.innerHTML = questionsHtml;
}