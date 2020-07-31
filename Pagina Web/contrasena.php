<?php 
$salt = "JPRH2020";
echo md5($_POST['contrasena'].$salt);
?>