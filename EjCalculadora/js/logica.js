

function calcular(){
    var numero1 = Number(num1.value);
    var numero2 = Number(num2.value);
    
    var value = Number(operacion.value)

    if (value == 0) {
        resultado.value = numero1 + numero2;
    } else if (value == 1) {
        resultado.value = numero1 - numero2;
    } else if (value == 2) {
        resultado.value = numero1 * numero2;   
    } else if (value == 3) {
        resultado.value = numero1 / numero2;
    }
    return res;
}



