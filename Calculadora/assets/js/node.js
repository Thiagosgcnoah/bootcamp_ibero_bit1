function calcular(opciones){
    if (opciones  == '='){
        let calcularvalor = document.getElementById('calcular-pantalla')
        calcularvalor.value = eval(calcularvalor.value)
    }
}


function operacion(numero){
    let divcalculadora = document.getElementById('calcular-pantalla')
    if (numero ==='C'){
        divcalculadora.value = "0"
    }
    else if (divcalculadora.value === "0"){
        if (numero == "."){
            divcalculadora.value += numero
        }
        else {divcalculadora.value = numero}
    }
    else {divcalculadora.value += numero}
}