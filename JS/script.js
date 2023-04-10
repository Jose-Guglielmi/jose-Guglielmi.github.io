//obtengo el boton de hamburguesa para el menu responsive
const btn = document.querySelector(".hamburguesa");

//obtengo el menu para poder agregarle la clase oculto
const menu = document.querySelector(".contenedor-ul");

//le agrego un evento focus para que cuando el boton pierda el focus se cierre el menu y tenga el scroll
btn.addEventListener("blur", function () {
  if (btn.classList.contains("open")) {
    //le remuevo la clase open
    btn.classList.remove("open");

    //le agrego la clase oculto al menu
    menu.classList.add("oculto");
    //le agrego el scroll al body
    document.body.style.overflow = "auto";
  }
});

//le agrego un evento click para que al hacer click me verifique si tiene la clase open, si la tiene se la remuevo y si no la tiene se la agrego
btn.addEventListener("click", function () {
  //si el boton tiene la clase open
  if (btn.classList.contains("open")) {
    //le remuevo la clase open
    btn.classList.remove("open");

    //le agrego la clase oculto al menu
    menu.classList.add("oculto");
    setTimeout(function () {
      menu.style.display = "none";
    }, 300);

    //le agrego el scroll al body
    document.body.style.overflow = "auto";
  } else {
    //si no la tiene le agrego la clase open
    btn.classList.add("open");

    //le remuevo la clase oculto al menu
    menu.style.display = "flex";
    setTimeout(function () {
      menu.classList.remove("oculto");
    }, 10);

    //le quito el scroll al body
    document.body.style.overflow = "hidden";
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
