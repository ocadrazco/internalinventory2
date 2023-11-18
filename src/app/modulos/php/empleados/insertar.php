<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$ins = "insert into empleados(nombres, apellidos, cedula, correo, celular, fo_ciudad, fo_departamento) values('osna prueba','wolverin prueba','1154365778','wolverin@gmail.com','3024569865','1','2')";

$ins = "insert into empleados (nombres, apellidos, cedula, correo, celular, fo_ciudad, fo_departamento) values('$params->nombres','$params->apellidos','$params->cedula','$params->correo','$params->celular','$params->fo_ciudad','$params->fo_departamento')";

mysqli_query($conexion, $ins) or die('no inserto');

Class Result {}  

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>