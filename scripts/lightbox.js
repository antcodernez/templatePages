const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const botoncitoX = document.querySelector(".close");
const hamburger1 = document.querySelector(".hamburger");

const aparecerImagen = imagen =>
    {
        imagenesLight.src = imagen;
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("show-image");
        hamburger1.style.opacity = "0";
    }

// console.log(imagenes);
// console.log(imagenesLight);
// console.log(contenedorLight);

imagenes.forEach(imagen => 
    {
        imagen.addEventListener("click", () => 
            {
                // console.log(imagen.getAttribute("src"))
                // // nos va a mostrar la ruta de mi imagen
                aparecerImagen(imagen.getAttribute("src"));
            }) 
    });

window.addEventListener("click", e => 
    {
        if (contenedorLight.classList.contains("show") && imagenesLight.classList.contains("show-image") && ( e.target == botoncitoX || e.target == contenedorLight))
            {
                contenedorLight.classList.toggle("show");
                imagenesLight.classList.toggle("show-image");
                hamburger1.style.opacity = "1";
            }
    });