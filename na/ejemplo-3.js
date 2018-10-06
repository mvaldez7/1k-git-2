var inputNuemro = Document.querySelector('#numero');
var pResultado = Document.querySelector('#resultado');
var btnEvalNuemro = Document.querySelector('#btnEvalNuemro');
var selectOpciones = Document.querySelector('change', evalOpcion);

btnEvalNuemro.addEventListener('click', evalNuemro);
function evalOpcion(){
    var numero = Number(inputNuemro.value);
    var opcion = selectOpciones.value;

    if(opcion === 'mitad') {
        pResultado.textContent = 'la mitad es' + (numero / 2);
    }
    else if(opcion === 'cuadrado') {
        pResultado.textContent = 'el cuadrado es ' + (numero*numero);
    }
    else if(opcion === 'par') {
        if(numero%2 === 0) {
            pResultado.textContent = 'es par';
        }
    else {
        pResultado.textContent = 'es impar';
    }    
    }

}

function evalNumero() {
    var numero = Number(inputNumero.value);
    if (numero > 0) {
        pResultado.textContent = 'El numero' + numero + 'es positivo';
    } else if (numero < 0) {
        pResultado.textContent = 'El numero' + numero + 'es negativo';
    } else {
        pResultado.textContent = 'el numero es cero';
    }

}