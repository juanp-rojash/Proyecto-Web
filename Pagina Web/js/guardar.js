var dato;
var nombre;
var contrasena;

window.onload = init;

function init(){
    nombre = document.getElementById("nombre");
    contrasena = document.getElementById("contrasena");
    validacion();
    cargarDepartamentos();
    asignarEventos();
    cargarDato();
}
function escribirDato(){
    for(var i in dato){
        console.log(dato[i]);
    }
}
function cargarDato(){
    dato = JSON.parse(localStorage.getItem("dato"));
    if(dato){
        escribirDato();
    }
    else{
        dato = [];
    }
}
function guardarDato(){
    var usuario = {};
    usuario.nombre = nombre.value;
    usuario.contrasena = contrasena.value;
    dato.push(usuario);
    localStorage.setItem("dato", JSON.stringify(dato));
    nombre.value = "";
}
function asignarEventos(){
    var btn = document.getElementById("boton");
    btn.addEventListener("click", guardarDato);
}