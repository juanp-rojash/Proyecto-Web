function validar(formulario){

    var nombre = formulario.elements["nombre"].value;
    var apellido = formulario.elements["apellido"].value;
    var email = formulario.elements["correo"].value;
    var mensaje = "";
    var valido = true;
    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) || /^[A-Z]+$/i.test(nombre) == false){
        mensaje = mensaje + "-Ingrese de manera correcta su nombre\n"
        formulario.elements["nombre"].setAttribute("style","color:red;");
        valido = false;
    }

    if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) || /^[A-Z]+$/i.test(apellido) == false){
        mensaje = mensaje + "-Ingrese de manera correcta su apellido\n"
        valido = false;
    }

    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w/.test(email))){
        mensaje = mensaje + "-Ingrese una direccion de correo valida\n  Ejemplo: nombre.apellido@gmail.com";
        valido = false;
    }
    
    if(valido == true){
        alert("Se enviaron los datos exitosamente");
        return true;
    }
    else{
        alert(mensaje);
        return false;
    }

}