const hamburger = document.querySelector(`.hamburger`);
const menu = document.querySelector(`.nav-bar`);
// estoy seleccionando clases 

// console.log(hamburger);
// console.log(menu);

hamburger.addEventListener('click', () => {
    menu.classList.toggle("spread")
});
// al menu quiero que seleccione las clases y le agrege o le quite la clase spread, cada que toque el menu hamburguesa voy a quitar o poner la clase 

window.addEventListener("click", e => {
    // console.log(e.target);
    // e.target me dice a que le estoy dando click
    if(menu.classList.contains("spread") && e.target != menu && e.target != hamburger)
    // si menu tiene la clase spread y aparte el elemento al que le estoy dando click o sea e.target es diferente al menu and e.target no sea el icono hamburger     
        {
            menu.classList.toggle("spread");
        }
})