function calcular(num1, operador, num2){

    var numero1Convertido = parseFloat(num1)
    var numero2Convertido = parseFloat(num2)

    var resultado = 0

    if(operador == '+'){
        resultado = numero1Convertido + numero2Convertido    
    } else if ( operador == '-'){
        resultado = numero1Convertido - numero2Convertido    
    } else if (operador == '*'){
        resultado = numero1Convertido * numero2Convertido
    } else if (operador == '/'){
        resultado = numero1Convertido / numero2Convertido
    }

    
    const numero1 = document.getElementById('numero1')
    numero1.value = resultado

}

function digito(numero){
    const numero1 = document.getElementById('numero1')

    numero1.value += numero

}
function apagar(){
    const numero1 = document.getElementById('numero1')

    numero1.value =''

}

var primeiroDigito = 0
var segundoDigito = 0
var operadorDigitado = ''

function operadores(op){

    const numero1 = document.getElementById('numero1')
    primeiroDigito = numero1.value

    operadorDigitado = op

    apagar()

}

function botaoIgual(){
    const numero1 = document.getElementById('numero1')
    segundoDigito = numero1.value

    apagar()
    calcular(primeiroDigito, operadorDigitado, segundoDigito)
}
