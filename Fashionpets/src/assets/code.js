let imagenesReferencia = [
  "assets/img/producto 1 perros.png",
  "assets/img/Producto-1-perros-imagen-1.png",
  "assets/img/Producto-1-perros-imagen-2.png"
]

let divMosaico = document.getElementById("mosaicoImgsProducto")

imagenesReferencia.forEach((imgenProducto, indiceArray) => {
  divMosaico.innerHTML += `<img src="${imgenProducto}" id="imgProductoMosaico${indiceArray+1}" onclick="cambiarImagen(${indiceArray})" alt="" width="132px" class="m-4">`
});

function cambiarImagen(imagenACargar) {
  let imagenGrande = document.getElementById("imgProductoGaleria")
  imagenGrande.src = imagenesReferencia[imagenACargar]
}
//  code 1

document.getElementById("optNavContacto").addEventListener("click", (e) => {
  setTimeout(() => {
      let elementoHTML = e.target
      elementoHTML.classList.add("active", "text-dark", "text-decoration-underline")
      elementoHTML.classList.remove("text-white")
  }, 1000);
})

document.addEventListener("scroll", () => {
  let pepe = document.getElementById("optNavContacto")
  pepe.classList.remove("active", "text-dark", "text-decoration-underline")
  pepe.classList.add("text-white")
})

$('.carruselInicio').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover:false
});
$('.carruselInicio2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover:false
});

