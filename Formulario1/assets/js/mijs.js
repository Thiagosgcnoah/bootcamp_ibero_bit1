function registro() {
    let formularioValido = true
    let mensaje_error = "El correo es obligatorio"
    let Correo = document.getElementById(`inputEmail4`)
    let spanErrorCorreo = document.getElementById(`mensajeErrorCorreo`)
    if (Correo.value == ``) {
        spanErrorCorreo.innerHTML = `${mensaje_error}`
        Correo.classList.add(`border`, `border-danger`)
        formularioValido = false
        return
    } else {
        spanErrorCorreo.innerHTML = ``
        Correo.classList.remove(`border`, `border-danger`)
        formularioValido = true
    }

    let mensaje_error2 = "La contraseña es obligatoria"
    let password = document.getElementById(`inputPassword4`)
    let spanErrorPassword = document.getElementById(`mensajeErrorPassword`)
    if (password.value == ``) {
        spanErrorPassword.innerHTML = `${mensaje_error2}`
        password.classList.add(`border`, `border-danger`)
        formularioValido = false
        return
    } else {
        spanErrorPassword.innerHTML = ``
        password.classList.remove(`border`, `border-danger`)
        formularioValido = true
    }


    let mensaje_error3 = "La direcion es obligatoria"
    let Address = document.getElementById(`inputAddress`)
    let spanErrorAddress = document.getElementById(`mensajeErrorAddress`)
    if (Address.value == ``) {
        spanErrorAddress.innerHTML = `${mensaje_error3}`
        Address.classList.add(`border`, `border-danger`)
         formularioValido = false
         return
    } else {
        spanErrorAddress.innerHTML = ``
        Address.classList.remove(`border`, `border-danger`)
        formularioValido = true 
    }
    
    let mensaje_error4 = "Es obligatorio poner una ciudad"
    let City = document.getElementById("inputCity")
    let spanErrorCity = document.getElementById("mensajeErrorCity")
    if(City.value ==``){
        spanErrorCity.innerHTML =`${mensaje_error4}`
        City.classList.add(`border`, `border-danger`)
        formularioValido =false
        return
    }else{
        spanErrorCity.innerHTML = ``
        City.classList.remove(`border`, `border-danger`)
        formularioValido = true
    }


    let State = document.getElementById("inputState")
    if (State.value == "") {
        let mensajeErrorState = document.getElementById(`mensajeErrorState`)
        mensajeErrorState.innerHTML = ` Seleccione una opción`
        State.classList.add(`border`, `border-danger`)
        formularioValido = false
        return
    }else{
        mensajeErrorState.innerHTML = ` `
        State.classList.remove(`border`, `border-danger`)
        formularioValido = true
    }

    let mensaje_error5 = "Pon tu codigo postal"
    let Zip = document.getElementById("inputZip")
    let spanErrorZip = document.getElementById("mensajeErrorZip")
    if(Zip.value ==``){
        spanErrorZip.innerHTML =`${mensaje_error5}`
        Zip.classList.add(`border`, `border-danger`)
        formularioValido = false
        return
    }else{
        spanErrorZip.innerHTML = ``
        Zip.classList.remove(`border`, `border-danger`)
        formularioValido = true
    }
     
    
    let mensajeError6 ="Seleciona el check"
    check = document.getElementById("gridCheck")
    let spanErrorcheck = document.getElementById("mensajeErrorCheck")
    console.log(check.checked)
    if (check.checked == false){
        spanErrorcheck.innerHTML = `${mensajeError6}`
        check.classList.add(`border` , `border-danger`) 
        formularioValido = false
        return
    }else{
        spanErrorcheck.innerHTML = ``
        check.classList.remove(`border` , `border-danger`) 
        formularioValido = true
    }


    if ( formularioPepe== true){
        Swal.fire({
            icon: 'error',
            title: 'Ingrese su correo'
          }).reset()
}

    










    /**  let Email = document.getElementById("inputEmail4").value
   
     if (Email ==""){
       Swal.fire({
           icon: 'error',
           title: 'Ingrese su correo'
         })
         return
     }
   
     let Password = document.getElementById("inputPassword4").value
   
     if (Password==""){
       Swal.fire({
           icon: 'error',
           title: 'Ingrese su Contraseña'
         })
         return
     }
   
     let Address = document.getElementById("inputAddress").value
   
     if (Address ==""){
       Swal.fire({
           icon: 'error',
           title: 'Ingrese su direccion 1'
         })
         return
     }
   
     let Address2 = document.getElementById("inputAddress2").value
   
     if (Address2 ==""){
       Swal.fire({
           icon: 'error',
           title: 'Ingrese su direccion 2'
         })
         return
     }
   
     let City = document.getElementById("inputCity").value
   
     if (City ==""){
       Swal.fire({
           icon: 'error',
           title: 'Ingrese su ciudad'
         })
         return
     }
   
     let State = document.getElementById("inputState").value
   
     if(State ==""){
       Swal.fire({
           icon: 'error',
           title: 'Escoja un departamentos'
         })
         return
     }*/





}



