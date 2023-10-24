<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');


$params = json_decode($json);

require("../conexion.php");

$editar = "UPDATE usuarios SET nombre='osna', usuario='hola', clave=sha1 ('clave'), tipo='la verga' WHERE id_usuarios=4";

$editar = "UPDATE usuarios SET nombre='$params->nombre', usuario='$params->usuario', clave=sha1 ('$params->clave'), tipo='$params->tipo' WHERE id_usuario=$params->id_usuarios";

mysqli_query($conexion, $editar) or die('no edito');

Class Result {}  

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='datos modificados ';

header('Content-Type: application/json');
echo json_encode($response);
?>