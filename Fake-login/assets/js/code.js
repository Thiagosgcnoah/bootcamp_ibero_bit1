let inputCorreo = document.querySelector("#correoUsuario")
let inputPassword = document.querySelector("#passUsuario")
function validarFormulario() {

    if (inputCorreo.value != '' && inputPassword.value != '') {
        validarUsuarios(inputCorreo.value, inputPassword.value)
    } else{
        alert('Por favor rellene todos los campos')
    }
}

function guardar_localStorage(){
    
}


//guardando una variable en el localstorage
function validarUsuarios(usuario, pass) {
    let usuarioValido ="correo@gmail.com"
    let passValido = "contraseña123"
    if(usuario == usuarioValido){
        if(pass == passValido){
            localStorage.setItem("SesionIniado", "true")
        }else{
            alert("Credenciales invalidas, intente de nuevo")
        }
    }

}