
let pst, frm

window.onload = function () {
    frm = document.getElementById("formulario");
    pst = new Pristine(frm);
    cargarDepartamentos();

    frm.addEventListener('submit', function(e){
        e.preventDefault();
        var valid = pst.validate();
        frm.classList.add("was-validated");
        cargarDepartamentos();
    });
};
