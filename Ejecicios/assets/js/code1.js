//*************************************Ejercicio 1********************************/

function sumatoria() {
    let numeroUsuario = document.getElementById('numeroUsuario').value
    let calculo = 0
    for (let i = 0; i <= numeroUsuario; i++) {
        calculo = calculo + i
    }
    let span = document.getElementById('resultado')
    span.innerHTML = calculo
}

//*************************************Ejercicio 2********************************/

function validar() {
    let numero = document.getElementById('validacion').value
    if (numero % 2 == 0) {
        let spanresult = document.getElementById('result')
        spanresult.innerHTML = " " + numero + " Es par"
    } else {
        let spanresult = document.getElementById('result')
        spanresult.innerHTML = " " + numero + " Es impar"
    }

}

//*************************************Ejercicio 3********************************/



function radio() {
    let edad = parseInt(document.getElementById('edad').value)
    let generoUsuario = document.querySelector("input[name='Grupo']:checked").value
    if (generoUsuario == "hombre") {
        if (edad <= 10) {
            alert(' reclamar un jugo')
        }else if (edad >= 18) {
            alert('Reclama un cerveza')
        }else {
            alert('Desafortunadamente, no recibe ningún premio')
        }
        alert('reclamar adicionalmente una porción de pizza tres carnes.')
    }
    else if (generoUsuario == "mujer") {
        alert('reclamar adicionalmente una porción de pizza Hawaiana.')
        if (edad <= 10) {
            alert(' reclamar un jugo')
        }
        else if (edad >= 18) {
            alert('Reclama un cerveza')
        }
        else {
            alert('Desafortunadamente, no recibe ningún premio')
        }
    }
}

//*************************************Ejercicio 4********************************/
 let menu_restaurante = [
    "spaguetir", "coca cola", "browies marihuanos", "mateada fresa"
 ]
 
 let precio_menu = [15000, 2500,3000,8500]




//*************************************Ejercicio 5********************************/
let NumeroUsuario = document.getElementById('numero')
let span = document.getElementById('tabla')
function Generar (){
    let Numero = parseInt( NumeroUsuario.value)
    let template= ''
    for(let i = 1; i <=10; i++){
        template += Numero + "x" + i + "=" + Numero * i + "<br>"
    }
   span.innerHTML = template


 }

 function cambiarFondo(ColorSeleccionado){
    document.querySelector("body").removeAttribute("class")
    document.querySelector("body").setAttribute("style", `background-color: ${ColorSeleccionado}`)
 }
 

 //*************************************Ejercicio 5********************************/
 
 function Validar(){
    let promedio = document.querySelector('#texto')
    let numero = parseInt(promedio.value)
    let valor= 1000000
    let descuento = 0


    if(numero < 3){
       alert('No tienes ningun descuento.')
    } else if(numero >= 3 && numero <= 4){
        descuento= (valor * 5) / 100
        valor = valor - descuento
        alert('Debes pagar $'+valor)
    } else if(numero > 4) {
        descuento= (valor * 50) / 100
        valor = valor - descuento
        alert('Debes pagar $'+valor)
    }
    
    console.log(valor)
 }