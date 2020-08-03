<?php 
    $salt = "JPRH2020";
    $usuario = array();
    if(isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["correo"]) && isset($_POST["departamento"])
        && isset($_POST["ciudad"]) && isset($_POST["direccion"])){

        $usuario["nombre"] = $_POST["nombre"];
        $usuario["apellido"] = $_POST["apellido"];
        $usuario["correo"] = $_POST["correo"];
        $usuario["departamento"] = $_POST["departamento"];
        $usuario["ciudad"] = $_POST["ciudad"];
        $usuario["direccion"] = $_POST["direccion"];

    }
    
    $usuario["contrasena"] = md5($salt.$_POST["contrasena"]);
    
    echo json_encode($usuario);
?>