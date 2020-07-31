window.onload = () => {
    validacion();
}

function validacion(){
    frm = document.getElementById("formulario");
    pst = new Pristine(frm);

    frm.addEventListener('submit', function(e){
        e.preventDefault();
        var valid = pst.validate();
        frm.classList.add("was-validated");
    });
}