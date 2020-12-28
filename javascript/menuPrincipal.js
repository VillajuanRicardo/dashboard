// var btnMenu=document.getElementById("btn-menu");
// var nav=document.getElementById("header__navegacion");

// btnMenu.addEventListener("click", function(){
//     nav.classList.toggle("mostrar");
// });
var btnMenu=document.getElementById("btn-menu");
var nav=document.getElementById("header__menu-navegacion");
var main=document.getElementById("main");

btnMenu.addEventListener("click", function(){
    nav.classList.toggle("mostrar");
    main.classList.toggle("oscuro");
});
