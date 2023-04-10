//obtengo el boton de hamburguesa para el menu responsive
const btn = document.querySelector(".hamburguesa");

//le agrego un evento click para que al hacer click me verifique si tiene la clase open, si la tiene se la remuevo y si no la tiene se la agrego
btn.addEventListener("click", function () {
  //si el boton tiene la clase open
  if (btn.classList.contains("open")) {
    //le remuevo la clase open
    btn.classList.remove("open");
  } else {
    //si no la tiene le agrego la clase open
    btn.classList.add("open");
  }
});

//obtener el boton flotante para el scroll
const btnFlotante = document.querySelector(".btn-flotante");

//agrego un evento scroll para que al hacer scroll me verifique si la posicion en Y es mayor a 70px, si es mayor a 70px le remuevo la clase ocultar y si no le agrego la clase ocultar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 70) {
    //si la posicion en Y es mayor a 70px le remuevo la clase ocultar
    btnFlotante.classList.remove("ocultar");
  } else {
    //si no, le agrego la clase ocultar
    btnFlotante.classList.add("ocultar");
  }

  if (
    window.innerHeight + window.pageYOffset + 60 >=
    document.body.scrollHeight
  ) {
    //btnFlotante.style.marginBottom = "60px";
    btnFlotante.style.position = "absolute";
    btnFlotante.style.marginBottom = "60px";
  } else {
    //btnFlotante.style.marginBottom = "0px";
    btnFlotante.style.position = "fixed";
    btnFlotante.style.marginBottom = "0";
  }
});
