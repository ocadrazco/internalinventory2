<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');


$params = json_decode($json);

require("../conexion.php");

//$editar = "UPDATE empleados SET nombres='carlos prueba', apellidos='ordoñes prueba',cedula='1143254000',correo='prueba@gmail.com',celular='3013254370', fo_ciudad='1',fo_departamento='2'WHERE id_empleados=3";

$editar = "UPDATE empleados SET nombres='$params->nombres', apellidos='$params->apellidos',cedula='$params->cedula',correo='$params->correo',celular='$params->celular', fo_ciudad='$params->fo_ciudad',fo_departamento='$params->fo_departamento'WHERE id_empleados=$params->id_empleados";

mysqli_query($conexion, $editar) or die('no edito');

Class Result {}  

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='datos modificados ';

header('Content-Type: application/json');
echo json_encode($response);
?>