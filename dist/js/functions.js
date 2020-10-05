var tiposDones = {
    Don1: 'don1',
    Don2: 'don2'
}

var preguntasHtml = document.getElementById("preguntas");
function cargarPreguntas() {
    var questionsHtml = '';

    var cont = 0;
    for (var i = 1; i <= preguntas.length; i++) {

        var optionsHtml = '';
        var pregunta = preguntas[cont];
        for (var j = 0; j < pregunta.options.length; j++) {
            var option = pregunta.options[j];
            optionsHtml += `<input type="radio" name="pregunta${i}" value="${option.val}" id="pregunta${i}-${j}" required data-tipo="${pregunta.type}"><label for="pregunta${i}-${j}">${option.desc}</label>`;
        }

        var pregunta = preguntas[cont];
        var questionHtml = `<div class="pregunta"><label for="pregunta${i}">${pregunta.desc}</label><div class="opciones">${optionsHtml}</div></div>`;

        questionsHtml += questionHtml;
        cont++;        
    }

    preguntasHtml.innerHTML = questionsHtml;          
}
