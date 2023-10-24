<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');


$params = json_decode($json);

require("../conexion.php");

//$editar = "UPDATE tipo SET nombre='AGUA' WHERE id_tipo=8";

$editar = "UPDATE tipo SET nombre='$params->nombre' WHERE id_tipo=$params->id_tipo";

mysqli_query($conexion, $editar) or die('no edito');

Class Result {}  

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje ='datos modificados ';

header('Content-Type: application/json');
echo json_encode($response);
?>