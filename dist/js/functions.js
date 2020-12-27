// var tiposDones = {
//     Don1: 'don1',
//     Don2: 'don2'
// }
// me parece que no lo estas usando en ninguna parte.

/*
ya no se usa mucho var. En su lugar se usa const y let.
const es constante, asi que su valor no cambia. Si no le vas a reasignar valor mejor usar const
pero const tiene un comportamiento raro, si se le asigna un Object, se le puede cambiar el valor de las propiedades del Object
let es igual que var solo que con alcance local (local scope). 
var ya no se usa mucho porque su alcance es global y es dificil de seguir codigo y arreglar bugs si es que por error tenes dos variables con el mismo nombre.
ejs:
*/
/*
ej1:
const perro = 'Mark'
perro = 'Ramon' <- ERROR, no se le puede reasignar valor
*/
/*
ej2:
const perro = {name: 'Mark', race: 'chihuahua'}
perro.name = 'Ramon' -> va a cambiar el valor a perro = {name : 'Ramon', race: 'chihuahua'}
*/
const preguntasHtml = document.getElementById("preguntas");
function cargarPreguntas() {
    let questionsHtml = '';

    let cont = 0;
    for (let i = 1; i <= preguntas.length; i++) {

        let optionsHtml = '';
        var pregunta = preguntas[cont];
        for (let = 0; j < pregunta.options.length; j++) {
            const option = pregunta.options[j];
            optionsHtml += `<input type="radio" name="pregunta${i}" value="${option.val}" id="pregunta${i}-${j}" required data-tipo="${pregunta.type}"><label for="pregunta${i}-${j}">${option.desc}</label>`;
            // es mi gusto pero preferiria que o todo este en spanish, o todo en ingles
        }

        // var pregunta = preguntas[cont];
        // la linea de arriba es igual a la de la linea 31, creo que no es necesario.
        const questionHtml = `<div class="pregunta"><label for="pregunta${i}">${pregunta.desc}</label><div class="opciones">${optionsHtml}</div></div>`;

        questionsHtml += questionHtml;
        cont++;        
    }

    preguntasHtml.innerHTML = questionsHtml;          
}
