function registro (){
  let Email = document.getElementById("inputEmail4").value

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
  }




 
}



