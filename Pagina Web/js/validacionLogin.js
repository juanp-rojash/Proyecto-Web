let frm, correo, pst;

window.onload = () => {
    validacion();
}

function validacion(){
    frm = document.getElementById("formulario");
    pst = new Pristine(frm);

    frm.addEventListener('submit', function(e){
        e.preventDefault();
        if(pst.validate()){
            procesarDatos();
        }
        else{
            frm.classList.add("was-validated");
        }
        
    });
}
function validarLogin(json){
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if(usuario.contrasena == json.contrasena){
        location.href = "contenido.html";
    }
    else{
        alert("Clave incorrecta");
    }
    //console.log(json);
}
function procesarDatos(){
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        fetch('js/contrasena.php', {
            method: 'post',
            body: new FormData(frm)
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            validarLogin(json);
        }).catch(function(err) {
    
        });
    }
}